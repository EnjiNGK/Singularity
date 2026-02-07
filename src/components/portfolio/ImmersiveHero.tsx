import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ImmersiveHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const smoothY = useSpring(contentY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(contentOpacity, { stiffness: 100, damping: 30 });

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  const titleText = "PORTFOLIO";
  const subtitleText = "Grafica • Web • Video";

  return (
    <motion.section
      ref={containerRef}
      className="relative h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/singularity-digital-services-intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="absolute inset-0 bg-background/50" />

        <div className="absolute inset-0 noise-texture opacity-30" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm"
            initial={{
              x: `${20 + i * 15}%`,
              y: '100%',
              opacity: 0
            }}
            animate={{
              y: '-20%',
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: smoothY, opacity: smoothOpacity }}
      >
        <motion.div
          className="mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            className="inline-block text-primary text-sm md:text-base font-medium tracking-[0.4em] uppercase"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Singularity Dream
          </motion.span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none">
            {titleText.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                style={{ transformOrigin: 'bottom' }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground tracking-widest">
            {subtitleText}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 mx-auto w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 80, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        <motion.div
          className="mt-8 w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.button
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => {
              const projectsSection = document.getElementById('projects-section');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
            <span className="text-xs text-muted-foreground/60 group-hover:text-primary/80 tracking-widest uppercase transition-colors">
              Scroll
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute top-8 left-8 z-10">
        <motion.div
          className="w-16 h-px bg-primary/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="w-px h-16 bg-primary/50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <motion.div
          className="w-16 h-px bg-primary/50 ml-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ transformOrigin: 'right' }}
        />
        <motion.div
          className="w-px h-16 bg-primary/50 ml-auto"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{ transformOrigin: 'bottom' }}
        />
      </div>
    </motion.section>
  );
};

export default ImmersiveHero;
