import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import CinematicIntro from '@/components/portfolio/CinematicIntro';
import DreamyBackground from '@/components/portfolio/DreamyBackground';
import DreamyHero from '@/components/portfolio/DreamyHero';
import DraggableProjectsCarousel from '@/components/portfolio/DraggableProjectsCarousel';
import AboutSection from '@/components/portfolio/AboutSection';

interface Project {
  id: number;
  title: string;
  category: 'graphics' | 'web' | 'video' | 'social';
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year: string;
  isInteractive?: boolean;
  isInProgress?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vignaioli e Vini",
    category: 'graphics',
    description: "Gestione evento e supporto grafico per la manifestazione enogastronomica al Castello di Ariberto, Capiago Intimiano.",
    image: "/images/portfolio/vignaioli-e-vini-evento-grafica.webp",
    tags: ["Event Management", "Grafica"],
    client: "Comune di Capiago Intimiano",
    year: "2025"
  },
  {
    id: 2,
    title: "Luxottica Brand Identity",
    category: 'graphics',
    description: "Progetto scolastico: progettazione logo e brand guidelines per azienda nel settore eyewear.",
    image: "/images/portfolio/luxottica-brand-identity-design.jpg",
    tags: ["Logo Design", "Brand Guidelines", "Progetto Scolastico"],
    year: "2024"
  },
  {
    id: 3,
    title: "Grafica Point",
    category: 'graphics',
    description: "Collaborazione continuativa con agenzia grafica per progetti di branding e comunicazione visiva.",
    image: "/images/cliente-grafica-point-logo.png",
    tags: ["Collaborazione", "Branding"],
    client: "Grafica Point",
    year: "2024-25"
  },
  {
    id: 4,
    title: "UTOPIA - Travis Scott",
    category: 'graphics',
    description: "Concept art ispirato all'album UTOPIA di Travis Scott. Illustrazione digitale con astronauta futuristico.",
    image: "/images/portfolio/utopia-travis-scott-fanart.png",
    tags: ["Illustration", "Fan Art", "Travis Scott"],
    year: "2024"
  },
  {
    id: 5,
    title: "GITEX Global",
    category: 'graphics',
    description: "Progetto personale: design promozionale per evento tech internazionale con focus su innovazione.",
    image: "/images/portfolio/gitex-global-tech-event-promo.jpg",
    tags: ["Event Design", "Promotional"],
    year: "2025"
  },
  {
    id: 6,
    title: "Singularity Dream",
    category: 'web',
    description: "Il nostro sito web. Design moderno con animazioni fluide, portfolio interattivo e ottimizzazione SEO completa.",
    image: "/images/portfolio/singularity-dream-website-preview.jpg",
    tags: ["Web Design", "React", "Animation"],
    client: "Singularity Dream",
    year: "2025",
    isInProgress: true
  },
  {
    id: 7,
    title: "Motta Apartments",
    category: 'web',
    description: "Sito web elegante per appartamenti sul Lago di Como. Design raffinato con navigazione multilingue.",
    image: "/images/portfolio/motta-apartments-lake-como-website.png",
    tags: ["Web Design", "Hospitality"],
    client: "Motta Apartments",
    year: "2025-26",
    isInProgress: true
  },
];

const SmoothCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElement = target.closest('[data-cursor]');
      if (hoverElement) {
        setIsHovering(true);
        setCursorText(hoverElement.getAttribute('data-cursor') || '');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor]')) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full bg-white mix-blend-difference flex items-center justify-center"
        animate={{
          width: isHovering ? 80 : 12,
          height: isHovering ? 80 : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isHovering && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs font-bold text-black uppercase tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Inizia il tuo progetto</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <span className="block text-foreground">Hai un'idea?</span>
          <span className="block text-primary">Realizziamola insieme.</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Preventivo gratuito e senza impegno. Contattaci e trasformiamo la tua visione in realtà.
        </p>

        <Link to="/contact">
          <motion.button
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-primary/30 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contattaci Ora
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

const PortfolioPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenPortfolioIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenPortfolioIntro', 'true');
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen relative">
      <SEOHead
        title="Portfolio | Progetti Creativi di Grafica, Web e Video | Singularity Dream"
        description="Esplora il nostro portfolio interattivo: progetti di grafica professionale, siti web moderni, video editing e iniziative sociali."
        keywords="portfolio grafica, portfolio web design, portfolio video editing, progetti creativi"
        canonical="https://singularitydream.it/portfolio"
      />

      <SmoothCursor />

      <DreamyBackground />

      <AnimatePresence>
        {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="relative z-10">
          <DreamyHero />
          <AboutSection />
          <DraggableProjectsCarousel projects={projects} />
          <CTASection />
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
