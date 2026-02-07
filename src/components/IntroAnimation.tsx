import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'loading' | 'welcome' | 'reveal' | 'done'>('loading');
  const [showLogo, setShowLogo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showPayoff, setShowPayoff] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    const titleTimer = setTimeout(() => setShowTitle(true), 800);
    const payoffTimer = setTimeout(() => setShowPayoff(true), 1300);
    const welcomeTimer = setTimeout(() => setPhase('welcome'), 400);

    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 3500);

    const completeTimer = setTimeout(() => {
      setPhase('done');
      setTimeout(onComplete, 500);
    }, 4200);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(titleTimer);
      clearTimeout(payoffTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        phase === 'reveal' || phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ animation: 'float-orb 8s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        style={{ animation: 'float-orb 10s ease-in-out infinite reverse' }}
      />

      <div className="relative z-10 text-center px-6">
        <div
          className={`mb-8 transition-all duration-1000 ${
            showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <img 
            src="/images/logo.png" 
            alt="Singularity Dream Logo" 
            className="w-24 h-24 mx-auto object-contain"
          />
        </div>

        <h1
          className={`text-4xl md:text-6xl font-bold text-foreground mb-4 transition-all duration-1000 ${
            showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Welcome to{' '}
          <span
            className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            style={{
              backgroundSize: '200% auto',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            Singularity Dream
          </span>
        </h1>

        <p
          className={`text-muted-foreground text-lg md:text-xl tracking-wide transition-all duration-1000 ${
            showPayoff ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Dove i sogni digitali prendono forma
        </p>

        <div
          className={`mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000 ${
            showPayoff ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />
      </div>

      <button
        onClick={() => {
          setPhase('done');
          setTimeout(onComplete, 100);
        }}
        className="absolute bottom-6 right-6 text-muted-foreground/40 hover:text-muted-foreground text-[10px] tracking-widest uppercase transition-colors z-50"
      >
        Skip
      </button>

      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;
