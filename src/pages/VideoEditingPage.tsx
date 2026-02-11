
import React from 'react';
import { Video, Film, Music, Scissors, Play, Upload, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import SEOHead from '@/components/SEOHead';
import PricingSection from '@/components/PricingSection';
import ClientLogos from '@/components/ClientLogos';
import { Search } from "lucide-react";
import { ScrollReveal } from '@/components/animations';

const VideoEditingPage = () => {

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Video Editing Professionale | Singularity Dream"
        description="Video editing professionale: montaggio video HD, editing per YouTube, post-produzione contenuti digitali. Qualità cinematografica per social media e aziende."
        keywords="video editing professionale, montaggio video HD, editing professionale YouTube, post-produzione contenuti digitali, montaggio video social media"
        canonical="https://singularitydream.it/video-editing"
      />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-orange-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>

          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-600/10 animated-gradient"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
                Video Editing Professionale e Montaggio Video HD
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                <strong>Montaggio video di qualità cinematografica</strong> per YouTube, social media, eventi e progetti aziendali.
                Trasformiamo le tue idee in contenuti coinvolgenti con <strong>editing professionale YouTube</strong> e
                <strong>post-produzione contenuti digitali</strong> di alta qualità.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row px-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                    <Sparkles size={18} />
                    Inizia il tuo progetto video
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
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 glow-text-subtle">
              La Magia del Video Editing Professionale
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guarda come trasformiamo materiale grezzo in contenuti straordinari
            </p>
          </div>

          <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <div className="glass-card-enhanced p-2 md:p-4 animate-fade-in group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg aspect-square md:aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src="/videos/video-editing-portfolio-showcase.mp4" type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Montaggio Video Professionale
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Montaggio video di qualità cinematografica</strong> per YouTube, social media, eventi e progetti aziendali.
                Trasformiamo le tue idee in contenuti coinvolgenti con editing professionale e post-produzione di alta qualità.
              </p>
              <p className="text-lg leading-relaxed">
                Copriamo ogni fase della post-produzione: dal montaggio HD per YouTube alla creazione di materiali
                promozionali aziendali. Utilizziamo tecniche avanzate di color grading, sincronizzazione audio ed
                effetti speciali per video che catturano l'attenzione.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Ogni progetto per social media è curato nei minimi dettagli, garantendo massima qualità e
                ottimizzazione per ogni piattaforma. Trasformiamo qualsiasi materiale grezzo in contenuti
                professionali e coinvolgenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-14 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 animate-fade-in scroll-animate">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 glow-text-subtle">I Nostri Servizi Video Specializzati</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
              Soluzioni complete per ogni tipo di progetto video con editing professionale YouTube e montaggio HD.
            </p>
          </div>

          <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto mb-12 animate-fade-in scroll-animate">
            <div className="relative w-full overflow-hidden rounded-lg glass-card-enhanced p-2 group">
              <div className="relative aspect-square md:aspect-video overflow-hidden rounded-lg">
                <img
                  src="/images/video-editing-showcase-1.jpg"
                  alt="Video editing professionale Italia - workspace montaggio video HD editing YouTube post-produzione contenuti digitali cinema"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                  style={{ animation: 'fade-in 1s ease-in-out infinite', animationDelay: '0s' }}
                  loading="lazy"
                />
                <img
                  src="/images/video-editing-showcase-2.jpg"
                  alt="Montaggio video social media - timeline editing professionale effetti speciali transizioni color grading sincronizzazione audio"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
                  style={{ animation: 'fade-in 1s ease-in-out infinite', animationDelay: '3s' }}
                  loading="lazy"
                />
                <img
                  src="/images/video-editing-showcase-3.jpg"
                  alt="Post-produzione video aziendale Italia - editing YouTube professionale montaggio eventi matrimoni contenuti digitali HD 4K"
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
                icon={Video}
                title="Editing Professionale YouTube"
                description="Montaggio ottimizzato per YouTube con intro, outro, transizioni fluide e grafica accattivante. Post-produzione studiata per aumentare engagement e visualizzazioni."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.2s' }}>
              <FeatureCard
                icon={Film}
                title="Video Aziendali HD"
                description="Presentazioni, video promozionali e contenuti corporate di alta qualità con montaggio HD e post-produzione cinematografica."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.3s' }}>
              <FeatureCard
                icon={Scissors}
                title="Montaggio Eventi Speciali"
                description="Matrimoni, feste e conferenze: trasformiamo i tuoi momenti in ricordi indimenticabili con video ottimizzati per social media."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.4s' }}>
              <FeatureCard
                icon={Music}
                title="Audio & Sincronizzazione"
                description="Colonne sonore personalizzate, effetti audio professionali e sincronizzazione perfetta per un editing di qualità superiore."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.5s' }}>
              <FeatureCard
                icon={Play}
                title="Montaggio Video Social Media"
                description="Contenuti pensati per Instagram, TikTok e Facebook con formati, durate e post-produzione ottimizzati per ogni piattaforma."
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{ animationDelay: '0.6s' }}>
              <FeatureCard
                icon={Upload}
                title="Post-Produzione Avanzata"
                description="Color correction, stabilizzazione, effetti speciali e ottimizzazione finale per video di qualità cinematografica su tutte le piattaforme."
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Serve anche grafica per i tuoi video?</h3>
                <p className="text-muted-foreground mb-4">
                  Completiamo i tuoi progetti video con servizi di grafica professionale e brand identity.
                </p>
                <Link to="/graphics" className="text-primary hover:text-primary/80">
                  Servizi di grafica →
                </Link>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Hai bisogno di un sito web?</h3>
                <p className="text-muted-foreground mb-4">
                  Creiamo siti web su misura per mostrare i tuoi video e contenuti al mondo intero.
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
          title="Prezzi Video Editing"
          subtitle="Trasforma i tuoi contenuti in video professionali"
          tiers={[
            {
              name: "Pacchetto Video Social",
              price: "54,90",
              features: [
                "Video: 6",
                "Durata: 30-60 secondi",
                "Montaggio professionale",
                "Transizioni e effetti base",
                "Musica royalty-free",
                "1 revisione inclusa",
                "Ottimizzato per Instagram/TikTok",
                "Consegna in 2-3 giorni",


              ],
              extraNote: "*Singolo video  acquistabile a 9,99€"
            },
            {
              name: "Pacchetto Video Aziendale",
              price: "64,90",
              popular: true,
              features: [
                "Video: 5",
                "Durata: 3-5 minuti",
                "Color grading professionale",
                "Titoli e grafiche animate",
                "Audio mix e sottofondo musicale",
                "2 revisioni incluse",
                "Formato Full HD 1080p",
                "Ottimizzato per YouTube/Web",
                "Consegna in 5-7 giorni"
              ],
              extraNote: "*Singolo video  acquistabile a 14,99€"
            },
            {
              name: "Pacchetto Video Aziendali",
              price: "69,00",
              features: [
                "Video: 5",
                "Durata: fino a 5 minuti",
                "Effetti speciali avanzati",
                "Motion graphics personalizzate",
                "Color grading avanzato",
                "Audio professionale + voiceover",
                "3 revisioni incluse",
                "Formato 4K disponibile se possibile*",
                "Consegna in 7-10 giorni",
              ],
              extraNote: "*Singolo video acquistabile a 16,99€"
            }


          ]}
        />
      </div>
      <section className="py-10 sm:py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 glow-text-subtle">
              Pronto a creare contenuti video straordinari?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              <strong>Inviaci il tuo materiale grezzo</strong> e lo trasformeremo in un video professionale che cattura l'attenzione
              con il nostro editing professionale YouTube e montaggio video HD.
            </p>
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Hanno scelto Singularity Dream:</p>
              <ClientLogos />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 flex items-center gap-2">
                  <Video size={18} />
                  Inizia il montaggio video oggi
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

export default VideoEditingPage;
