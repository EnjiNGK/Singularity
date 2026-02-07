import React from 'react';
import { ArrowRight, Pen, Monitor, Video, ExternalLink, Search, Wrench, Sparkles, Star, Zap, Award, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ImmersiveBackground from '@/components/ImmersiveBackground';
import SEOHead from '@/components/SEOHead';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { ScrollReveal, CursorSpotlight } from '@/components/animations';
import graphicsService from '@/assets/servizi-grafica-professionali.jpg';
import webDesignService from '@/assets/sviluppo-web-design-service.jpg';
import videoService from '@/assets/video-editing-produzione-service.jpg';

const HomePage = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      <CursorSpotlight />
      <SEOHead
        title="Singularity Dream | Servizi digitali professionali: Grafica, Siti Web, Video Editing"
        description="Grafica personalizzata, creazione siti web professionali e video editing di qualità. Servizi digitali professionali a prezzi accessibili in tutta Italia."
        keywords="grafica personalizzata, creazione siti web, sviluppo web, video editing professionale, servizi digitali, branding aziendale, designer freelance, web design Italia"
        canonical="https://singularitydream.it/"
      />

      <section className="pt-32 pb-12 relative min-h-screen flex items-center">
        <ImmersiveBackground variant="default" showParticles={true} showNoise={true} />

        <div className="section-container relative z-10">
          <div className="text-center">
            <ScrollReveal delay={0.1}>
              <h1 className="hero-text mb-6">
                Trasformiamo i tuoi sogni in realtà
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Grafica, siti web e video che raccontano <span className="whitespace-nowrap">chi sei </span>
                <br className="hidden md:block" />
                e aiutano il tuo progetto a crescere davvero.
              </p>


            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="primary-button-glow flex items-center justify-center gap-2 text-lg w-full sm:w-auto group">
                    <Sparkles size={18} className="group-hover:animate-pulse" />
                    Parlaci del tuo progetto
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  onClick={scrollToServices}
                  variant="outline"
                  className="glass-button text-foreground border-border hover:bg-accent/10 hover:border-accent hover:text-foreground text-lg w-full sm:w-auto flex items-center justify-center gap-2 group"
                >
                  <Search size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  Scopri tutti i nostri servizi
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="max-w-xl mx-auto mt-4">
                <p className="text-muted-foreground/80 text-sm mb-4">
                  Cosa vuoi migliorare oggi?
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <Link to="/graphics" className="group">
                    <div className="glass-card p-3 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 cursor-pointer border-border/30">
                      <span className="text-lg mb-1 block">🌱</span>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">Il mio brand</span>
                    </div>
                  </Link>

                  <Link to="/web-design" className="group">
                    <div className="glass-card p-3 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 cursor-pointer border-border/30">
                      <span className="text-lg mb-1 block">🌐</span>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">Il mio sito</span>
                    </div>
                  </Link>

                  <Link to="/video-editing" className="group">
                    <div className="glass-card p-3 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 cursor-pointer border-border/30">
                      <span className="text-lg mb-1 block">🎥</span>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">I miei contenuti</span>
                    </div>
                  </Link>
                  <Link to="/contact" className="group">
                    <div className="glass-card p-3 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 cursor-pointer border-border/30">
                      <span className="text-lg mb-1 block">✨</span>
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">Non lo so ancora</span>
                    </div>
                  </Link>
                </div>

                <p className="text-muted-foreground/60 text-xs mt-4 flex items-center justify-center gap-1.5">
                  <span>💜</span>
                  <span>Parte di ogni progetto sostiene iniziative solidali.</span>
                </p>
                <p className="text-muted-foreground/40 text-xs italic">
                  Perché realizzare sogni ha valore solo se ne crea anche per altri.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-4 pb-0 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-foreground title-spacing">
                Il progetto dietro Singularity Dream
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="compressed-video">
                <div className="glass-card-enhanced p-4 mb-16 md:mb-20 hover-lift-glow">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg"
                  >
                    <source src="/videos/singularity-dream-showreel.mp4" type="video/mp4" />
                    Il tuo browser non supporta il tag video.
                  </video>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pt-12 md:pt-14 pb-4 relative compressed-section">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Singularity Dream</strong> nasce per trasformare sogni e idee in progetti digitali concreti, curati e accessibili.
                  Ogni progetto nasce dall'ascolto e dalla collaborazione. È un progetto creativo fondato da <strong>Lorenzo</strong> e <strong>Luca</strong>,
                  specializzati in <strong>grafica</strong>, <strong>sviluppo web</strong> e <strong>contenuti digitali</strong>,
                  con un approccio attento, umano e su misura.
                </p>
                <p className="text-lg leading-relaxed">
                  Parte di ogni progetto sostiene iniziative benefiche, perché crediamo che la <strong>tecnologia</strong> debba
                  creare valore anche oltre il business.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="services-section" className="py-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30"></div>
        </div>

        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                I Nostri Servizi Digitali Professionali
              </h2>
              <p className="subtitle-text">
                Design, sviluppo web e contenuti video per progetti digitali curati e accessibili.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Link to="/graphics" className="block h-full group">
                <div className="glass-card-enhanced overflow-hidden h-full hover-lift-glow flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={graphicsService}
                      alt="Servizi grafica professionale Italia"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <Pen className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Servizi di Grafica</h3>
                    <p className="text-foreground text-sm mb-2">Design che dà identità.</p>
                    <p className="text-muted-foreground/50 text-xs tracking-wide mb-4 transition-all duration-300 group-hover:text-muted-foreground/90">Branding · Visual · Contenuti</p>
                    <div className="flex justify-center mt-auto">
                      <Button className="primary-button-glow text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
                        Scopri la grafica
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link to="/web-design" className="block h-full group">
                <div className="glass-card-enhanced overflow-hidden h-full hover-lift-glow flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={webDesignService}
                      alt="Creazione siti web professionali Italia"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <Monitor className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Siti Web</h3>
                    <p className="text-foreground text-sm mb-2">Siti moderni e funzionali.</p>
                    <p className="text-muted-foreground/50 text-xs tracking-wide mb-4 transition-all duration-300 group-hover:text-muted-foreground/90">Landing · Portfolio · E-commerce</p>
                    <div className="flex justify-center mt-auto">
                      <Button className="primary-button-glow text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
                        Scopri i siti web
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link to="/video-editing" className="block h-full group">
                <div className="glass-card-enhanced overflow-hidden h-full hover-lift-glow flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={videoService}
                      alt="Video editing professionale Italia"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-3 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                        <Video className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Video Editing</h3>
                    <p className="text-foreground text-sm mb-2">Video che comunicano davvero.</p>
                    <p className="text-muted-foreground/50 text-xs tracking-wide mb-4 transition-all duration-300 group-hover:text-muted-foreground/90">Social · Eventi · Brand</p>
                    <div className="flex justify-center mt-auto">
                      <Button className="primary-button-glow text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
                        Scopri i video
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          <p className="text-center text-muted-foreground/60 text-sm mt-6 italic">
            Ogni servizio è personalizzato in base al progetto.
          </p>
        </div>
      </section>

      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Award size={16} className="text-primary" />
                <span className="text-primary text-sm font-medium">I Nostri Punti di Forza</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Perché Scegliere Singularity Dream
              </h2>
              <p className="subtitle-text max-w-2xl mx-auto">
                Qualità professionale, prezzi accessibili e un approccio personale che fa la differenza.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ScrollReveal delay={0.1}>
              <div className="glass-card-enhanced p-6 h-full group relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground text-center">Qualità Garantita</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">Cura maniacale per ogni dettaglio con software e tecniche all'avanguardia.</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="glass-card-enhanced p-6 h-full group relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00b67a]/20 to-[#00b67a]/5 flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00b67a]/20">
                  <Star size={24} className="text-[#00b67a]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground text-center">Prezzi Trasparenti</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">Tariffe competitive e chiare, senza costi nascosti. Accessibili a tutti.</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#00b67a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card-enhanced p-6 h-full group relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <Users size={24} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground text-center">100% Personalizzato</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">Ogni progetto è unico, creato su misura per la tua visione e obiettivi.</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="glass-card-enhanced p-6 h-full group relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20">
                  <Zap size={24} className="text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground text-center">Supporto Continuo</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">Assistenza costante prima, durante e dopo il progetto. Sempre disponibili.</p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00b67a]/10 rounded-full blur-3xl animate-pulse opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float opacity-30"></div>
        </div>

        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#00b67a]/10 px-4 py-2 rounded-full mb-4">
                <Star size={16} className="text-[#00b67a] fill-[#00b67a]" />
                <span className="text-[#00b67a] text-sm font-medium">100% Clienti Soddisfatti</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Cosa Dicono i Nostri Clienti
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                La nostra professionalità è riconosciuta e certificata. Leggi le recensioni reali dei nostri clienti soddisfatti.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto mb-6">
              <TestimonialCarousel />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <a
                href="https://it.trustpilot.com/review/singularitydream.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-[#00b67a] hover:bg-[#00b67a]/90 transition-all duration-300 px-6 py-3 rounded-lg hover:scale-105 shadow-lg shadow-[#00b67a]/20 font-medium"
              >
                <Star size={16} className="fill-white" />
                Leggi tutte le recensioni su Trustpilot
                <ExternalLink size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-primary text-sm font-medium">Consulenza Gratuita</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Inizia Oggi il Tuo Progetto Digitale
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contattaci per una consulenza gratuita e scopri come possiamo trasformare
                le tue idee in successi digitali concreti.
              </p>

              <Link to="/contact" className="inline-block mb-8">
                <Button className="primary-button-glow text-lg px-8 py-6 flex items-center gap-3 group">
                  <Sparkles size={20} className="group-hover:animate-pulse" />
                  Richiedi un Preventivo Gratuito
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary" />
                  <span>Preventivo in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary" />
                  <span>Nessun Impegno</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary" />
                  <span>Prezzi Trasparenti</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
