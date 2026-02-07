import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Pause, Play } from 'lucide-react';

interface Slide {
  id: number;
  type: 'text' | 'image' | 'stats' | 'mission';
  title?: string;
  subtitle?: string;
  description?: string;
  highlight?: string;
  image?: string;
  stats?: { value: string; label: string }[];
}

const slides: Slide[] = [
  {
    id: 0,
    type: 'text',
    title: 'Ciao, siamo',
    highlight: 'Singularity Dream',
    description: 'Agenzia creativa digitale',
  },
  {
    id: 1,
    type: 'image',
    title: 'Lorenzo, 18 anni',
    subtitle: 'Fondatore & Creative Director',
    description: 'Appassionato di tecnologia e design dal giorno zero.',
    image: '/lovable-uploads/7ac3667c-b807-4d13-9ded-e5038158daa9.png',
  },
  {
    id: 2,
    type: 'image',
    title: 'Luca, 19 anni',
    subtitle: 'Co-Founder & Visual Designer',
    description: 'Creatività visiva e impegno sociale. Il guadagno è secondario.',
    image: '/lovable-uploads/355f7e8e-eadc-4c20-b8d3-a150790a2885.png',
  },
  {
    id: 3,
    type: 'mission',
    title: 'La nostra missione',
    description: 'Servizi digitali di qualità accessibili a tutti.',
    highlight: 'Il 30% dei profitti va in beneficenza',
  },
  {
    id: 4,
    type: 'stats',
    title: 'I nostri numeri',
    stats: [
      { value: '50+', label: 'Progetti' },
      { value: '30%', label: 'Donato' },
      { value: '∞', label: 'Passione' },
    ],
  },
];

const SLIDE_DURATION = 4000;

interface CinematicIntroProps {
  onComplete: () => void;
}

const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const startTime = Date.now();
    const initialProgress = progress;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = initialProgress + (elapsed / SLIDE_DURATION) * 100;
      
      if (newProgress >= 100) {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1);
          setProgress(0);
        } else {
          onComplete();
        }
      } else {
        setProgress(newProgress);
        progressRef.current = setTimeout(updateProgress, 16);
      }
    };

    progressRef.current = setTimeout(updateProgress, 16);

    return () => {
      if (progressRef.current) clearTimeout(progressRef.current);
    };
  }, [currentSlide, isPaused, onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onComplete();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(p => !p);
      }
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
        setProgress(0);
      }
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
        setProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, onComplete]);

  const currentSlideData = slides[currentSlide];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-muted/30 z-20">
        <div className="flex h-full">
          {slides.map((_, index) => (
            <div key={index} className="flex-1 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: index < currentSlide ? 1 : index === currentSlide ? progress / 100 : 0 
                }}
                style={{ originX: 0 }}
                transition={{ duration: 0.1 }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-6 right-6 z-20 flex items-center gap-4">
        <motion.button
          onClick={() => setIsPaused(p => !p)}
          className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:bg-card transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPaused ? <Play size={18} /> : <Pause size={18} />}
        </motion.button>
        <motion.button
          onClick={onComplete}
          className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          Salta <ArrowRight size={14} />
        </motion.button>
      </div>

      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-primary'
                : index < currentSlide
                ? 'w-2 bg-primary/50'
                : 'w-2 bg-muted-foreground/30'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentSlideData.type === 'text' && (
              <div className="space-y-8 relative">
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <img 
                      src="/images/logo.png" 
                      alt="Singularity Dream" 
                      className="w-20 h-20 md:w-24 md:h-24 relative z-10 object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center gap-4"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/50" />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/50" />
                </motion.div>

                <div className="space-y-4">
                  <motion.p
                    className="text-lg md:text-xl tracking-[0.3em] uppercase text-muted-foreground/70 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentSlideData.title}
                  </motion.p>
                  
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-primary via-pink-400 to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_linear_infinite] relative"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                    >
                      {currentSlideData.highlight}
                    </motion.span>
                    
                    <motion.span
                      className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-2xl md:text-3xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: 'spring' }}
                    >
                      ✦
                    </motion.span>
                    <motion.span
                      className="absolute -bottom-2 -left-4 md:-left-6 text-xl md:text-2xl text-primary/60"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, type: 'spring' }}
                    >
                      ✧
                    </motion.span>
                  </motion.h1>
                </div>

                <motion.div
                  className="flex items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-transparent to-muted-foreground/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                  <p className="text-lg md:text-xl text-muted-foreground tracking-wide">
                    {currentSlideData.description}
                  </p>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-l from-transparent to-muted-foreground/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                </motion.div>

                <motion.p
                  className="text-sm md:text-base text-muted-foreground/50 tracking-widest uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  Dove i sogni digitali prendono forma
                </motion.p>

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-primary/40"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {currentSlideData.type === 'image' && (
              <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                <motion.div
                  className="relative mx-auto md:mx-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl rotate-6 blur-sm" />
                    <div className="absolute inset-0 bg-card rounded-3xl overflow-hidden">
                      <img
                        src={currentSlideData.image}
                        alt={currentSlideData.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full"
                      animate={{ scale: [1.2, 1, 1.2] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentSlideData.title}
                  </motion.h2>
                  <motion.p
                    className="text-xl md:text-2xl text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.p>
                  <motion.p
                    className="text-lg text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentSlideData.description}
                  </motion.p>
                </div>
              </div>
            )}

            {currentSlideData.type === 'mission' && (
              <div className="space-y-8">
                <motion.h2
                  className="text-5xl md:text-7xl font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentSlideData.title}
                </motion.h2>
                <motion.p
                  className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentSlideData.description}
                </motion.p>
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/20 border border-primary/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-2xl">❤️</span>
                  <span className="text-lg md:text-xl font-medium text-primary">
                    {currentSlideData.highlight}
                  </span>
                </motion.div>
              </div>
            )}

            {currentSlideData.type === 'stats' && (
              <div className="space-y-12">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentSlideData.title}
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  {currentSlideData.stats?.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                    >
                      <motion.div
                        className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.15, type: 'spring' }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-muted-foreground mt-2">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-6 right-6 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSlide === slides.length - 1 ? 1 : 0.5 }}
      >
        <motion.button
          onClick={onComplete}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Esplora Portfolio
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CinematicIntro;
