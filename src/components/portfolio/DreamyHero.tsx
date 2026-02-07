import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const DreamyHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const smoothY = useSpring(contentY, { stiffness: 80, damping: 20 });
  const smoothOpacity = useSpring(contentOpacity, { stiffness: 80, damping: 20 });

  const titleText = "PORTFOLIO";
  
  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary will-change-transform"
            style={{
              left: `${5 + i * 5}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 1, 0.5, 0.9, 0.3],
              scale: [0.6, 1.3, 0.9, 1.2, 0.6],
              rotate: [0, 15, -10, 5, 0],
              y: [0, -5, 3, -2, 0],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 ? (
              <span className="text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(155,135,245,0.8)]">✦</span>
            ) : i % 4 === 1 ? (
              <span className="text-lg md:text-xl opacity-80 drop-shadow-[0_0_8px_rgba(155,135,245,0.6)]">✧</span>
            ) : i % 4 === 2 ? (
              <span className="text-sm md:text-base opacity-60 drop-shadow-[0_0_6px_rgba(155,135,245,0.5)]">✦</span>
            ) : (
              <span className="text-xs opacity-50">✧</span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] aspect-[2.5/1] pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="orbitalGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.ellipse 
            cx="400" 
            cy="160" 
            rx="380" 
            ry="140" 
            fill="none" 
            stroke="url(#orbitalGradient)" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: smoothY, opacity: smoothOpacity, scale: titleScale }}
      >
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <img 
              src="/images/logo.png" 
              alt="Singularity Dream" 
              className="w-16 h-16 md:w-20 md:h-20 relative z-10 object-contain"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-sm md:text-base font-semibold tracking-[0.4em] uppercase text-foreground dark:text-foreground light:text-slate-800 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Singularity Dream
        </motion.p>

        <div className="overflow-hidden mb-6 relative">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none flex justify-center flex-wrap"
            initial="hidden"
            animate="visible"
          >
            {titleText.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block text-primary drop-shadow-[0_0_30px_rgba(155,135,245,0.5)]"
                initial={{ y: 60, opacity: 0, rotateX: -40 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: 0.6 + i * 0.05,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.span
            className="absolute -top-2 left-[10%] text-2xl md:text-3xl text-primary"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
          >
            ✦
          </motion.span>
          <motion.span
            className="absolute top-0 right-[12%] text-xl md:text-2xl text-primary/70"
            initial={{ opacity: 0, scale: 0, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
          >
            ✧
          </motion.span>
          <motion.span
            className="absolute -bottom-1 left-[20%] text-lg text-primary/60"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          >
            ✦
          </motion.span>
          <motion.span
            className="absolute bottom-2 right-[18%] text-2xl text-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
          >
            ✦
          </motion.span>
        </div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-foreground font-semibold tracking-[0.2em] uppercase">
            Grafica <span className="text-primary mx-2">•</span> Web <span className="text-primary mx-2">•</span> Video
          </p>
        </motion.div>

        <motion.p
          className="text-foreground dark:text-foreground/80 light:text-slate-700 text-sm md:text-base tracking-wide mb-16 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Dove i sogni digitali prendono forma
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={() => {
              const projectsSection = document.getElementById('projects-section');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 shadow-lg shadow-primary/20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
            </motion.div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary tracking-widest uppercase transition-colors">
              Scorri
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default DreamyHero;
