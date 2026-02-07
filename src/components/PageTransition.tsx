import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.div
          className="fixed inset-0 z-[60] pointer-events-none"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ 
            originY: 1,
            background: 'linear-gradient(to top, hsl(var(--primary)), hsl(var(--background)))'
          }}
        />
        <motion.div
          className="fixed inset-0 z-[60] pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ 
            originY: 0,
            background: 'linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--background)))'
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
