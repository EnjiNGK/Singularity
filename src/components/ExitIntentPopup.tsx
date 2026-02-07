import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md animate-scale-in">
        <div className="glass-card-enhanced p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-foreground">
              Aspetta! 🎉
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              Ottieni <strong className="text-primary">10% di sconto</strong> sul tuo primo progetto!
            </p>
            
            <p className="text-sm text-muted-foreground mb-6">
              Contattaci ora e menziona questa offerta per ricevere lo sconto dedicato ai nuovi clienti.
            </p>

            <div className="flex flex-col gap-3">
              <Link to="/contact" onClick={handleClose}>
                <Button className="primary-button-glow w-full text-lg">
                  Richiedi Preventivo con Sconto
                </Button>
              </Link>
              
              <button
                onClick={handleClose}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                No grazie, continua senza sconto
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitIntentPopup;
