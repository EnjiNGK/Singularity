import React from 'react';
import { Monitor, Smartphone, Zap, Shield, Search, TrendingUp, Code, Palette, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeatureCard from '@/components/FeatureCard';
import SEOHead from '@/components/SEOHead';
import PricingSection from '@/components/PricingSection';
import ClientLogos from '@/components/ClientLogos';
import ImageCarousel from '@/components/ImageCarousel';
import webDesignHero from '@/assets/creazione-siti-web-hero.jpg';
import webServicesShowcase from '@/assets/servizi-web-showcase.jpg';
import { ScrollReveal } from '@/components/animations';

const WebDesignPage = () => {

  const showcaseImages = [
    '/images/realizzazione-siti-web-showcase-1.jpg',
    '/images/realizzazione-siti-web-showcase-2.jpg',
    '/images/realizzazione-siti-web-showcase-3.jpg',
  ];

  const faqs = [
    {
      question: "Quanto tempo ci vuole per creare un sito web?",
      answer: "I tempi di realizzazione variano in base alla complessità del progetto. Un sito vetrina semplice può essere pronto in 1-2 settimane, mentre progetti più complessi come e-commerce o portali richiedono 3-6 settimane. Forniamo sempre una stima dettagliata durante la consulenza iniziale."
    },
    {
      question: "Il sito sarà ottimizzato per dispositivi mobile?",
      answer: "Assolutamente sì! Tutti i nostri siti web sono sviluppati con approccio responsive design, garantendo un'esperienza perfetta su smartphone, tablet e desktop. La compatibilità mobile è fondamentale per il posizionamento sui motori di ricerca."
    },
    {
      question: "Posso aggiornare il sito da solo dopo la consegna?",
      answer: "Sì, sviluppiamo siti web con sistemi di gestione contenuti (CMS) intuitivi che ti permettono di aggiornare testi, immagini e contenuti in autonomia. Forniamo anche formazione personalizzata per renderti completamente autonomo."
    },
    {
      question: "Cosa include il servizio di creazione sito web?",
      answer: "Il servizio completo include: progettazione grafica personalizzata, sviluppo responsive, ottimizzazione SEO di base, integrazione form contatti, configurazione hosting e dominio, formazione all'uso e supporto post-lancio per 30 giorni."
    },
    {
      question: "Offrite anche assistenza informatica oltre ai siti web?",
      answer: "Sì, oltre alla creazione di siti web offriamo anche consulenza informatica, supporto tecnico, risoluzione problemi, installazione software e assistenza per le tue esigenze tecnologiche."
    }
  ];

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Creazione Siti Web Professionali | Sviluppo Web Moderno Italia - Singularity Dream"
        description="Sviluppiamo siti web professionali, responsive e ottimizzati SEO. Landing page, e-commerce, portfolio digitali e consulenza informatica. Prezzi accessibili in tutta Italia."
        keywords="creazione siti web, sviluppo sito web, web design Italia, sito web responsive, landing page, e-commerce, portfolio digitale, consulenza informatica"
        canonical="https://singularitydream.it/web-design"
      />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-blue-500/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 animated-gradient"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-cyan-500 bg-clip-text text-transparent">
                Creazione Siti Web Professionali e Moderni
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Trasformiamo la tua <strong>presenza digitale</strong> con <strong>siti web professionali</strong>,
                responsive e ottimizzati per i motori di ricerca, unendo design moderno e performance elevate.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row px-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                    <Sparkles size={18} />
                    Richiedi un Preventivo Gratuito
                  </Button>
                </Link>

                <a href="#pricing" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="glass-button text-foreground border-border hover:bg-accent/10 hover:border-accent hover:text-foreground text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2"
                  >
                    <Search size={18} />
                    Visualizza i nostri prezzi
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
              Creazione Siti Web Professionali
            </h2>
            <div className="glass-card-enhanced p-2 md:p-3 animate-fade-in group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg aspect-square md:aspect-video">
                <img
                  src={webDesignHero}
                  alt="Designer web Italia - workspace creazione siti web professionale sviluppo web design responsive landing page e-commerce portfolio"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Sviluppo web su misura per ogni esigenza
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                In <strong>Singularity Dream</strong> progettiamo e sviluppiamo <strong>siti web professionali</strong> che uniscono
                design moderno, funzionalità avanzate e attenzione all'esperienza utente.
              </p>
              <p className="text-lg leading-relaxed">
                Ogni progetto nasce da un'analisi concreta delle esigenze del cliente ed è realizzato con tecnologie
                affidabili e performanti, per garantire velocità, sicurezza e una perfetta fruizione su ogni dispositivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
              Servizi di Sviluppo Web e Consulenza Informatica
            </h2>
            <div className="glass-card-enhanced p-2 md:p-3 animate-fade-in group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg aspect-square md:aspect-video">
                <img
                  src={webServicesShowcase}
                  alt="Servizi sviluppo web professionali - siti web responsive design e-commerce landing page SEO ottimizzazione performance consulenza informatica"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-14 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Monitor}
              title="Siti Web Vetrina"
              description="Siti professionali per presentare la tua attività, servizi e portfolio con design moderno e contenuti chiari."
            />
            <FeatureCard
              icon={Smartphone}
              title="Design Responsive"
              description="Siti ottimizzati per smartphone, tablet e desktop, per un'esperienza uniforme su ogni dispositivo."
            />
            <FeatureCard
              icon={Zap}
              title="Performance Elevate"
              description="Siti veloci e performanti con caricamenti ottimizzati per migliorare conversioni e posizionamento."
            />
            <FeatureCard
              icon={Shield}
              title="Sicurezza Garantita"
              description="Certificati SSL, backup automatici e protocolli di sicurezza avanzati per proteggere il tuo sito."
            />
            <FeatureCard
              icon={Search}
              title="Ottimizzazione SEO"
              description="Struttura tecnica, meta tag e contenuti ottimizzati per aumentare visibilità e indicizzazione."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Landing Page Efficaci"
              description="Landing page pensate per campagne marketing, promozioni e acquisizione lead qualificati."
            />
            <FeatureCard
              icon={Code}
              title="E-commerce Completi"
              description="Negozi online professionali con gestione prodotti, pagamenti sicuri e spedizioni integrate."
            />

          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-14 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-foreground">
            Esempi di Web Design Moderno
          </h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Ogni progetto è unico e personalizzato. Creiamo siti web che rispecchiano perfettamente
            l'identità del tuo brand con design contemporanei e funzionalità innovative.
          </p>
          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <ImageCarousel images={showcaseImages} interval={4000} />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-14 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            Il Nostro Processo di Sviluppo Web
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card-enhanced p-6 hover-lift-glow text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Consulenza Iniziale</h3>
              <p className="text-muted-foreground">
                Analizziamo insieme i tuoi obiettivi, il target di riferimento e le funzionalità necessarie
                per creare un sito web perfetto per le tue esigenze.
              </p>
            </div>

            <div className="glass-card-enhanced p-6 hover-lift-glow text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Design e Prototipo</h3>
              <p className="text-muted-foreground">
                Progettiamo l'interfaccia grafica e la struttura del sito, creando un prototipo interattivo
                per visualizzare il risultato finale prima dello sviluppo.
              </p>
            </div>

            <div className="glass-card-enhanced p-6 hover-lift-glow text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Sviluppo e Test</h3>
              <p className="text-muted-foreground">
                Sviluppiamo il sito web con codice pulito e ottimizzato, testandolo accuratamente su tutti
                i dispositivi e browser per garantire funzionamento perfetto.
              </p>
            </div>

            <div className="glass-card-enhanced p-6 hover-lift-glow text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Lancio e Supporto</h3>
              <p className="text-muted-foreground">
                Pubblichiamo il sito online, configuriamo hosting e dominio, e forniamo formazione completa
                oltre a supporto continuativo post-lancio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Hai bisogno di grafica?</h3>
                <p className="text-muted-foreground mb-4">
                  Realizziamo loghi e grafiche coordinate per rendere unico il tuo nuovo sito web.
                </p>
                <Link to="/graphics" className="text-primary hover:text-primary/80">
                  Scopri i servizi grafica →
                </Link>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Serve video editing?</h3>
                <p className="text-muted-foreground mb-4">
                  Creiamo video professionali da inserire nel tuo sito per coinvolgere i visitatori.
                </p>
                <Link to="/video-editing" className="text-primary hover:text-primary/80">
                  Scopri i servizi video →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="pricing">
        <PricingSection
          title="Prezzi Creazione Siti Web"
          subtitle="Soluzioni web professionali per ogni budget"
          tiers={[
            {
              name: "Sito Vetrina",
              price: "209",
              features: [
                "3-5 pagine professionali",
                "Design responsive (mobile/tablet)",
                "SEO base ottimizzato",
                "Form contatto",
                "Google Maps integrato",
                "1 anno hosting incluso",
                "Consegna in 1-2 settimane"
              ]
            },
            {
              name: "Sito Business",
              price: "309",
              popular: true,
              features: [
                "6-10 pagine personalizzate",
                "Design premium responsive",
                "SEO avanzato",
                "Blog integrato",
                "Newsletter system",
                "Analytics e reportistica",
                "1 anno hosting + dominio",
                "Formazione CMS",
                "Consegna in 2-3 settimane"
              ]
            },
            {
              name: "E-commerce / Custom",
              price: "449",
              features: [
                "Pagine illimitate",
                "Shop online completo",
                "Sistema pagamenti integrato",
                "Gestione prodotti avanzata",
                "Dashboard amministrazione",
                "SEO e-commerce ottimizzato",
                "Supporto prioritario 6 mesi",
                "Formazione completa",
                "Consegna in 3-4 settimane"
              ]
            }
          ]}
        />
      </div>

      <section className="py-10 sm:py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
              Pronto a Creare il Tuo Sito Web Professionale?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto">
              Contattaci oggi per una <strong>consulenza gratuita</strong> e un <strong>preventivo personalizzato</strong>.
              Trasformiamo la tua visione in un sito web di successo.
            </p>
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Hanno scelto Singularity Dream:</p>
              <ClientLogos />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6">
                  Richiedi Preventivo Gratuito
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+393488664662" className="hover:text-primary transition-colors">
                📞 +39 348 866 4662
              </a>
              <a href="mailto:info@singularitydream.it" className="hover:text-primary transition-colors">
                ✉️ info@singularitydream.it
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;
