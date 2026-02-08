import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import Fuse from 'fuse.js';
import { chatbotDatabase, FAQItem } from '@/data/chatbotDatabase';

const fuse = new Fuse(chatbotDatabase, {
  keys: [
    { name: 'keywords', weight: 1.0 },
    { name: 'question', weight: 0.7 }
  ],
  threshold: 0.5,
  distance: 100,
  ignoreLocation: true,
  minMatchCharLength: 2,
  includeScore: true
});


const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Ciao! 👋 Sono l'assistente virtuale di Singularity Dream. Ho risposte immediate su servizi, prezzi, tempi, chi siamo e molto altro. Seleziona una domanda o scrivimi!", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleQuestionClick = (faq: FAQItem) => {
    setMessages(prev => [...prev,
    { text: faq.question, isUser: true },
    { text: faq.answer, isUser: false }
    ]);
    setShowSuggestions(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setShowSuggestions(false);
    const userMessage = inputValue.toLowerCase().trim();
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);

    const contactKeywords = [
      'contattare', 'contattarvi', 'contatto', 'contatti',
      'parlare', 'scrivere', 'chiamare', 'telefonare',
      'contattare l\'azienda', 'contattare singularitydream',
      'contattare singularity', 'parlare con voi', 'inviare',
      'messaggio', 'richiesta', 'informazioni', 'form', 'preventivo', 'modul'
    ];
    const isContactQuery = contactKeywords.some(keyword => {
      if (keyword === 'form') return /\bform\b/i.test(userMessage);
      return userMessage.toLowerCase().includes(keyword.toLowerCase());
    });

    if (isContactQuery) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Perfetto! Ti invio subito la richiesta di contatto. Compila i campi qui sotto e riceverai risposta entro 24 ore! ⬇️",
          isUser: false
        }]);
        setShowContactForm(true);
      }, 500);
      setInputValue('');
      return;
    }

    const results = fuse.search(userMessage);

    const normalize = (word: string) => {
      if (word.length <= 3) return word;
      return word.replace(/(ano|ate|ere|ire|o|a|i|e|anno|ato|ito|uto|anti|enti|menti|zione|zioni|ico|ica|ici|ice|amente)$/i, '');
    };

    const userWords = userMessage.split(/\s+/).map(w => w.replace(/[^\w]/g, '').toLowerCase());
    const userRoots = userWords.map(normalize);

    // 1. Identify Subject Dominance
    const subjects: Record<string, string[]> = {
      web: ['sito', 'siti', 'web', 'ecommerce', 'landing', 'online', 'hosting', 'dominio'],
      grafica: ['grafica', 'logo', 'loghi', 'disegno', 'mockup', 'volantino', 'brochure', 'biglietti', 'brand', 'identità'],
      video: ['video', 'montaggio', 'editing', 'filmato', 'clip', 'reels', 'tiktok', 'youtube', 'shorts'],
      social: ['social', 'facebook', 'instagram', 'follower', 'post', 'gestione'],
      beneficenza: ['sociale', 'beneficenza', 'donazione', 'anziani', '30%']
    };

    let activeSubject: string | null = null;
    for (const [subj, keywords] of Object.entries(subjects)) {
      if (keywords.some(k => userRoots.includes(normalize(k)) || userMessage.toLowerCase().includes(k))) {
        activeSubject = subj;
        break;
      }
    }

    let bestGreedyMatch: { item: typeof chatbotDatabase[0]; score: number } | null = null;

    chatbotDatabase.forEach(item => {
      const isCorrectCategory = activeSubject && item.category === activeSubject;

      let hits = 0;
      item.keywords.forEach(k => {
        const kWords = k.toLowerCase().split(/\s+/);
        const kRoots = kWords.map(normalize);
        const matchCount = kRoots.filter(kr => userRoots.includes(kr)).length;

        if (matchCount === kRoots.length) hits += 3; // Boost exact keyword match
        else if (matchCount > 0) hits += 1;
      });

      if (hits > 0) {
        let score = hits / (item.keywords.length * 0.4);
        if (isCorrectCategory) score *= 2.0;

        // Subject cross-validation: if subject is detected, boost relevant prices
        if (activeSubject && item.category === 'prezzi') {
          const matchesSubject = item.keywords.some(k => subjects[activeSubject!].some(sk => k.includes(sk)));
          if (matchesSubject) score *= 2.5;
          else score *= 0.1; // Penalize wrong subject prices
        }

        if (!bestGreedyMatch || score > bestGreedyMatch.score) {
          bestGreedyMatch = { item, score };
        }
      }
    });

    let response = "Capisco! Non ho una risposta preimpostata per questo, ma ti posso mettere subito in contatto con Lorenzo o Luca. Vuoi che ti invii il form di contatto? Oppure puoi chiamarci al 📞 +39 3488664662.";

    // Decision Logic: Subject-Aware
    if (bestGreedyMatch && (bestGreedyMatch.score > 1.5)) {
      response = (bestGreedyMatch as any).item.answer;
    } else if (results.length > 0 && results[0].score !== undefined) {
      const best = results[0];
      const bestItemSubj = Object.keys(subjects).find(s => subjects[s].some(sk => best.item.keywords.some(ik => ik.includes(sk))));

      if (activeSubject && bestItemSubj && activeSubject !== bestItemSubj && best.score > 0.1) {
        // Conflicting subject - ignore Fuse and keep default
      } else if (best.score < 0.4 || (best.score < 0.65 && activeSubject)) {
        response = best.item.answer;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 600);

    setInputValue('');
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactData.name || !contactData.email || !contactData.service || !contactData.message) {
      toast({
        title: "Campi obbligatori",
        description: "Per favore compila tutti i campi.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gq3q0im',
        'template_054g8xt',
        {
          from_name: contactData.name,
          from_email: contactData.email,
          service_type: contactData.service,
          message: contactData.message,
          to_email: 'info.singularityy@gmail.com'
        },
        'yIkPy6kgvBrQUOeJy'
      );

      setMessages(prev => [...prev, {
        text: "✅ Richiesta inviata con successo! Ti contatteremo entro 24 ore. Grazie per averci scelto! 🚀",
        isUser: false
      }]);

      toast({
        title: "Messaggio inviato!",
        description: "Ti contatteremo al più presto.",
      });

      setContactData({ name: '', email: '', service: '', message: '' });
      setShowContactForm(false);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "❌ Si è verificato un errore. Puoi contattarci direttamente: 📞 +39 3488664662 | ✉️ info.singularityy@gmail.com",
        isUser: false
      }]);

      toast({
        title: "Errore nell'invio",
        description: "Riprova o contattaci direttamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setMessages([{ text: "Ciao! 👋 Sono l'assistente virtuale di Singularity Dream. Ho risposte immediate su servizi, prezzi, tempi, chi siamo e molto altro. Seleziona una domanda o scrivimi!", isUser: false }]);
    setShowSuggestions(true);
    setShowContactForm(false);
    setContactData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Apri assistente FAQ"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
          <div className="relative w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
            {isOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <MessageCircle className="w-7 h-7 text-primary-foreground" strokeWidth={2} />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] md:w-[480px] lg:w-[520px] max-w-[calc(100vw-3rem)] h-[550px] md:h-[620px] lg:h-[680px] glass-card flex flex-col shadow-2xl">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground">Assistente FAQ</h3>
              <p className="text-xs text-muted-foreground">Risposte immediate</p>
            </div>
            <button
              onClick={resetChat}
              className="text-xs text-primary hover:underline"
            >
              Ricomincia
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-muted-foreground mb-2">Domande frequenti:</p>
                <button
                  onClick={() => {
                    setMessages(prev => [...prev, {
                      text: "Come posso contattarvi?",
                      isUser: true
                    }]);
                    setTimeout(() => {
                      setMessages(prev => [...prev, {
                        text: "Perfetto! Ti invio subito la richiesta di contatto. Compila i campi qui sotto e riceverai risposta entro 24 ore! ⬇️",
                        isUser: false
                      }]);
                      setShowContactForm(true);
                      setShowSuggestions(false);
                    }, 500);
                  }}
                  className="w-full text-left p-2 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 text-foreground transition-colors font-medium"
                >
                  💬 Come posso contattarvi?
                </button>
                <div className="border-t border-border/30 my-2"></div>
                {chatbotDatabase.slice(0, 10).map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(faq)}
                    className="w-full text-left p-2 text-xs rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
                <p className="text-xs text-muted-foreground pt-2 italic">O scrivi la tua domanda nel box qui sotto! 👇</p>
              </div>
            )}
          </div>

          {showContactForm && (
            <div className="p-4 border-t border-border/50 bg-background/30">
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <div>
                  <Input
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="Nome *"
                    className="bg-background/50 border-border/50 text-foreground text-sm"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="Email *"
                    className="bg-background/50 border-border/50 text-foreground text-sm"
                    required
                  />
                </div>
                <div>
                  <select
                    value={contactData.service}
                    onChange={(e) => setContactData({ ...contactData, service: e.target.value })}
                    className="w-full bg-background/50 border border-border/50 text-foreground text-sm rounded-md px-3 py-2"
                    required
                  >
                    <option value="">Seleziona un servizio *</option>
                    <option value="grafica">Servizi di Grafica</option>
                    <option value="web">Creazione Siti Web</option>
                    <option value="video">Video Editing</option>
                    <option value="informatica">Servizi Informatici</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                <div>
                  <textarea
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Messaggio / Descrizione del progetto *"
                    rows={3}
                    className="w-full bg-background/50 border border-border/50 text-foreground text-sm rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Invio..." : "Invia richiesta"}
                </Button>
              </form>
            </div>
          )}

          {!showContactForm && (
            <div className="p-3 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Scrivi la tua domanda..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FAQChatbot;