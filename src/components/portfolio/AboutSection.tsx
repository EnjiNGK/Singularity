import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveMascot from './InteractiveMascot';

const AboutSection: React.FC = () => {
  const [isMascotHovering, setIsMascotHovering] = useState(false);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/*  */}
        <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-background/60 dark:bg-background/40 backdrop-blur-sm light:bg-white/80 light:shadow-xl" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-8 md:py-12">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Chi Siamo
            </motion.h2>

            <motion.div
              className="text-lg md:text-xl leading-relaxed space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-foreground font-medium">
                Creare esperienze digitali che brillano di{' '}
                <span className="text-primary font-bold">creatività</span>{' '}
                e irradiano un fascino vivace è la nostra passione.
              </p>
              <p className="text-foreground font-medium">
                Diamo vita alle tue idee, creando interfacce di{' '}
                <span className="text-primary font-bold">qualità</span>{' '}
                eleganti fino a siti web visivamente straordinari e{' '}
                <span className="text-primary font-bold">dinamici</span>.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <img 
                    src="/lovable-uploads/7ac3667c-b807-4d13-9ded-e5038158daa9.png" 
                    alt="Lorenzo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-base sm:text-sm md:text-base">Lorenzo</p>
                  <p className="text-sm sm:text-xs md:text-sm text-muted-foreground font-medium">Fondatore & Creative Director</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                  <img 
                    src="/lovable-uploads/355f7e8e-eadc-4c20-b8d3-a150790a2885.png" 
                    alt="Luca"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-base sm:text-sm md:text-base">Luca</p>
                  <p className="text-sm sm:text-xs md:text-sm text-muted-foreground font-medium">Co-Founder & Visual Designer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveMascot onHover={setIsMascotHovering} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;