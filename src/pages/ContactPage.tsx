
import React, { useState } from 'react';
import { Mail, Phone, Send, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { ScrollReveal } from '@/components/animations';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Il nome deve contenere almeno 2 caratteri").max(100, "Il nome è troppo lungo"),
  email: z.string().trim().email("Inserisci un'email valida").max(255, "Email troppo lunga"),
  service: z.string().min(1, "Seleziona un servizio"),
  message: z.string().trim().min(10, "Il messaggio deve contenere almeno 10 caratteri").max(2000, "Il messaggio è troppo lungo"),
  privacyAccepted: z.boolean().refine(val => val === true, "Devi accettare la Privacy Policy per continuare"),
});

const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const checkRateLimit = (): boolean => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return true;

    const submissions: number[] = JSON.parse(stored);
    const now = Date.now();
    const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW_MS);

    return recentSubmissions.length < MAX_SUBMISSIONS;
  } catch {
    return true;
  }
};

const recordSubmission = () => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions: number[] = stored ? JSON.parse(stored) : [];
    const now = Date.now();
    const recentSubmissions = submissions.filter(time => now - time < RATE_LIMIT_WINDOW_MS);
    recentSubmissions.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch {
  }
};

const EMAILJS_SERVICE_ID = 'service_gq3q0im';
const EMAILJS_TEMPLATE_ID = 'template_054g8xt';
const EMAILJS_PUBLIC_KEY = 'yIkPy6kgvBrQUOeJy';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: val
    });
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkRateLimit()) {
      toast({
        title: "Troppi tentativi",
        description: "Hai inviato troppi messaggi. Riprova più tardi.",
        variant: "destructive",
      });
      return;
    }

    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach(err => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setValidationErrors(errors);
      toast({
        title: "Errore di validazione",
        description: "Controlla i campi del form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: validationResult.data.name,
          from_email: validationResult.data.email,
          service_type: validationResult.data.service,
          message: validationResult.data.message,
          to_email: 'info.singularityy@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      recordSubmission();

      toast({
        title: "Messaggio inviato!",
        description: "Ti contatteremo al più presto per discutere del tuo progetto.",
      });

      setFormData({ name: '', email: '', service: '', message: '', privacyAccepted: false });
      setValidationErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore tecnico. Riprova o contattaci direttamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="pt-32 pb-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-singularity-violet/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-singularity-purple/20 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>

          <div className="absolute inset-0 bg-gradient-to-br from-singularity-violet/10 via-transparent to-blue-600/10 animated-gradient"></div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-singularity-violet/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>

        <div className="section-container relative z-10">
          <div className="text-center">
            <ScrollReveal delay={0.1}>
              <h1 className="hero-text mb-6">
                Contattaci
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="subtitle-text mb-8">
                Hai un progetto in mente? Parliamone insieme.
                Siamo qui per trasformare le tue idee in realtà.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <button
                onClick={() => {
                  const formSection = document.getElementById('contact-form-section');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="primary-button-glow inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <MessageSquare size={20} />
                Scrivici!
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>


      <section id="contact-form-section" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-singularity-violet/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.1s' }}>
                <Card className="glass-card-enhanced hover-lift-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:info.singularityy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">info.singularityy@gmail.com</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.2s' }}>
                <Card className="glass-card-enhanced hover-lift-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">Telefono</h3>
                        <a href="tel:+393488664662" className="text-muted-foreground hover:text-primary transition-colors">+39 348 866 4662</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.3s' }}>
                <Card className="glass-card-enhanced hover-lift-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">Disponibilità</h3>
                        <p className="text-muted-foreground">Lun-Ven: 9:00-18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="glass-card-enhanced animate-slide-up scroll-animate" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Inizia il tuo progetto</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Compila il form e ti contatteremo entro 24 ore
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`bg-background border-border text-foreground ${validationErrors.name ? 'border-destructive' : ''}`}
                          placeholder="Il tuo nome"
                        />
                        {validationErrors.name && (
                          <p className="text-destructive text-sm mt-1">{validationErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          maxLength={255}
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`bg-background border-border text-foreground ${validationErrors.email ? 'border-destructive' : ''}`}
                          placeholder="la.tua@email.com"
                        />
                        {validationErrors.email && (
                          <p className="text-destructive text-sm mt-1">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Servizio richiesto *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full bg-background border border-border text-foreground rounded-md px-3 py-2 ${validationErrors.service ? 'border-destructive' : ''}`}
                      >
                        <option value="">Seleziona un servizio</option>
                        <option value="grafica">Servizi di Grafica</option>
                        <option value="web">Creazione Siti Web</option>
                        <option value="informatica">Servizi Informatici</option>
                        <option value="video">Video Editing</option>
                        <option value="altro">Altro</option>
                      </select>
                      {validationErrors.service && (
                        <p className="text-destructive text-sm mt-1">{validationErrors.service}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Descrizione del progetto *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        maxLength={2000}
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`bg-background border-border text-foreground ${validationErrors.message ? 'border-destructive' : ''}`}
                        placeholder="Raccontaci del tuo progetto, obiettivi e tempistiche..."
                      />
                      {validationErrors.message && (
                        <p className="text-destructive text-sm mt-1">{validationErrors.message}</p>
                      )}
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
                        required
                      />
                      <label htmlFor="privacyAccepted" className="text-sm text-muted-foreground leading-tight">
                        Accetto la <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali per essere ricontattato. *
                      </label>
                    </div>
                    {validationErrors.privacyAccepted && (
                      <p className="text-destructive text-sm mt-1">{validationErrors.privacyAccepted}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="primary-button-glow w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Invio in corso..."
                      ) : (
                        <>
                          <Send size={18} />
                          Invia richiesta
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
