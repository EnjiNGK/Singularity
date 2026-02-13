
import React from 'react';
import { Palette, Pen, Image, FileText, Users, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import SEOHead from '@/components/SEOHead';
import PricingSection from '@/components/PricingSection';
import ClientLogos from '@/components/ClientLogos';
import graphicsHero from '@/assets/servizi-grafica-professionali.jpg';
import { Search } from "lucide-react";
import { ScrollReveal } from '@/components/animations';

const GraphicsPage = () => {

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Creazione Loghi e Grafica Professionale | Singularity Dream"
        description="Servizi di grafica professionale: logo design, brand identity, materiali promozionali e social media graphics. Soluzioni creative su misura per il tuo brand in tutta Italia."
        keywords="grafica professionale, logo design, brand identity, branding aziendale, designer freelance, visual identity, graphic design per social, materiali promozionali, creazione loghi"
        canonical="https://singularitydream.it/graphics"
      />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-pink-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-fuchsia-500/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-fuchsia-500/10 animated-gradient"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-pink-500 bg-clip-text text-transparent">
                Servizi di Grafica Professionale e Logo Design
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                <strong>Grafica personalizzata di alta qualità</strong> per il tuo brand: dal logo design alla brand identity completa,
                realizziamo progetti grafici professionali che valorizzano la tua immagine e comunicano efficacemente i tuoi valori.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row px-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                    <Sparkles size={18} />
                    Richiedi Preventivo Gratuito
                  </Button>
                </Link>

                <a href="#pricing" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="glass-button text-foreground border-border hover:bg-accent/10 hover:border-accent hover:text-foreground text-lg w-full sm:w-auto magnetic-button flex items-center justify-center gap-2"
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
              Servizi di Grafica Professionale
            </h2>
            <div className="glass-card-enhanced p-2 md:p-3 animate-fade-in group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg aspect-square md:aspect-video">
                <img
                  src={graphicsHero}
                  alt="Designer freelance Italia - workspace grafica professionale logo design brand identity materiali promozionali visual identity aziendale"
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
              Un approccio su misura
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Ci occupiamo di <strong>logo design, brand identity e materiali grafici</strong>, lavorando con privati,
                professionisti e aziende. I nostri servizi di <strong>grafica professionale</strong> sono pensati per
                integrarsi perfettamente con la tua <Link to="/web-design" className="text-primary hover:underline">presenza web</Link> e
                i tuoi <Link to="/video-editing" className="text-primary hover:underline">contenuti video</Link>.
              </p>
              <p className="text-lg leading-relaxed">
                Ogni progetto nasce su misura, con un approccio moderno e professionale pensato per costruire
                un'<strong>identità visiva efficace e duratura</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-14 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 animate-fade-in scroll-animate">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 glow-text-subtle">I Nostri Servizi Grafici Specializzati</h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
              Loghi unici e riconoscibili.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/70 max-w-2xl mx-auto px-4 mt-2">
              Dal logo all'identità visiva completa, realizziamo progetti grafici professionali che valorizzano la tua immagine e comunicano in modo chiaro ciò che ti rende unico.
            </p>
          </div>

          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-12 animate-fade-in scroll-animate">
            <div className="relative w-full overflow-hidden rounded-lg glass-card-enhanced p-2 group">
              <div className="relative aspect-square md:aspect-video overflow-hidden rounded-lg">
                <img
                  src="/images/logo-design-showcase-1.jpg"
                  alt="Portfolio logo design professionale Italia - esempi brand identity creativa branding aziendale personalizzato designer freelance"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                  style={{ animation: 'fade-in 1s ease-in-out infinite', animationDelay: '0s' }}
                  loading="lazy"
                />
                <img
                  src="/images/logo-design-showcase-2.jpg"
                  alt="Progetti visual identity aziendale - grafica professionale coordinata materiali promozionali social media graphics Italia"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                  style={{ animation: 'fade-in 1s ease-in-out infinite', animationDelay: '3s' }}
                  loading="lazy"
                />
                <img
                  src="/images/logo-design-showcase-3.jpg"
                  alt="Design grafico creativo professionale - branding aziendale completo biglietti visita carta intestata packaging Italia"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                  style={{ animation: 'fade-in 1s ease-in-out infinite', animationDelay: '6s' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.1s' }}>
              <FeatureCard
                icon={Palette}
                title="Logo Design"
                description="Progettiamo loghi pensati per durare nel tempo, versatili e coerenti con l'identità del tuo brand, indipendentemente dal settore."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.2s' }}>
              <FeatureCard
                icon={Image}
                title="Brand Identity"
                description="Un'identità visiva chiara e coordinata. Costruiamo sistemi visivi completi: colori, tipografia e linee guida per garantire coerenza e professionalità su ogni supporto."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.3s' }}>
              <FeatureCard
                icon={FileText}
                title="Materiali Promozionali"
                description="Grafica pensata per comunicare. Brochure, flyer, banner e materiali promozionali progettati per raccontare il tuo business in modo chiaro ed efficace, online e offline."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.4s' }}>
              <FeatureCard
                icon={Users}
                title="Social Media Graphics"
                description="Contenuti visivi coerenti e riconoscibili. Grafiche per social media progettate per rafforzare la tua identità e mantenere uno stile uniforme su tutti i canali."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.5s' }}>
              <FeatureCard
                icon={Pen}
                title="Curriculum Vitae Design"
                description="Curriculum che raccontano chi sei. CV moderni e personalizzati, pensati per valorizzare il tuo profilo e distinguerti nel tuo settore professionale."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.6s' }}>
              <FeatureCard
                icon={Star}
                title="Progetti Grafici Su Misura"
                description="Soluzioni create intorno alle tue esigenze. Dalle presentazioni aziendali alle infografiche, fino a progetti grafici speciali: ogni lavoro nasce su misura, senza soluzioni preconfezionate."
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Hai bisogno di video editing?</h3>
                <p className="text-muted-foreground mb-4">
                  Completiamo i tuoi progetti con servizi di video editing professionale e post-produzione.
                </p>
                <Link to="/video-editing" className="text-primary hover:text-primary/80">
                  Scopri i servizi video →
                </Link>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Serve anche un sito web?</h3>
                <p className="text-muted-foreground mb-4">
                  Sviluppiamo siti web moderni e performanti per dare la giusta visibilità al tuo brand.
                </p>
                <Link to="/web-design" className="text-primary hover:text-primary/80">
                  Scopri i servizi web →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>


      <div id="pricing">
        <PricingSection
          title="Prezzi Trasparenti"
          subtitle="Qualità professionale a prezzi accessibili per tutti"
          tiers={[
            {
              name: "Logo Base",
              price: "109",
              features: [
                "Logo unico e professionale",
                "2 proposte di design",
                "2 revisioni incluse",
                "File PNG e JPG alta risoluzione",
                "Consegna in 3-5 giorni"
              ]
            },
            {
              name: "Branding Completo",
              price: "189",
              popular: true,
              features: [
                "Logo + varianti (colore/B&N)",
                "Palette colori brand",
                "Font e tipografia",
                "Biglietto da visita digitale",
                "3 revisioni incluse",
                "File vettoriali (AI, EPS, SVG)",
                "Consegna in 5-7 giorni"
              ]
            },
            {
              name: "Pacchetto Premium",
              price: "269",
              features: [
                "Brand identity completa (pacchetto Branding Completo ",
                "Logo + 5 varianti",
                "Brand guidelines (manuale)",
                "Social media templates",
                "Materiali marketing (brochure/flyer)",
                "Revisioni illimitate",
                "Tutti i formati professionali",
                "Supporto prioritario",
                "Consegna in 7-9 giorni"
              ]
            }
          ]}
        />
      </div>

      <section className="py-10 sm:py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 glow-text-subtle">
              Richiedi la Tua Grafica Personalizzata
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              <strong>Preventivo gratuito e personalizzato</strong> per il tuo progetto grafico.
              Contattaci per discutere delle tue esigenze e ricevere una proposta su misura dal nostro designer freelance.
            </p>
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Hanno scelto Singularity Dream:</p>
              <ClientLogos />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6">
                  Contattaci per il tuo progetto grafico
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

export default GraphicsPage;
