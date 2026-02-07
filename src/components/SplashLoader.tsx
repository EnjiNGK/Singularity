import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashLoaderProps {
  onComplete: () => void;
  duration?: number;
}

const SplashLoader: React.FC<SplashLoaderProps> = ({ onComplete, duration = 2500 }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete, duration]);

  const logoText = "SINGULARITY";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                {logoText.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block text-primary"
                    initial={{ y: 100, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.05,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ transformOrigin: 'bottom' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.span
                className="text-xl md:text-2xl text-muted-foreground tracking-[0.5em] uppercase"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                DREAM
              </motion.span>
            </motion.div>

            <motion.div
              className="mt-12 w-48 h-px bg-border/30 overflow-hidden rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-xs text-muted-foreground/60 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Caricamento...
            </motion.p>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                initial={{ 
                  x: `${10 + i * 12}%`, 
                  y: '110%',
                  opacity: 0 
                }}
                animate={{ 
                  y: '-10%',
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashLoader;
