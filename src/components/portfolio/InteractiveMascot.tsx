import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface InteractiveMascotProps {
  onHover?: (isHovering: boolean) => void;
}

const InteractiveMascot: React.FC<InteractiveMascotProps> = ({ onHover }) => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height * 0.28;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const maxMove = 10;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const clampedDistance = Math.min(distance / 80, 1);
        
        const normalizedX = distance > 0 ? (deltaX / distance) * clampedDistance * maxMove : 0;
        const normalizedY = distance > 0 ? (deltaY / distance) * clampedDistance * maxMove : 0;
        
        setEyePosition({ x: normalizedX, y: normalizedY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 100);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    onHover?.(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-xs mx-auto cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute -top-32 sm:-top-28 left-0 right-0 mx-auto z-20 w-[90%] max-w-[220px] sm:max-w-[260px]"
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ 
          opacity: isHovering ? 1 : 0, 
          y: isHovering ? 0 : 10,
          scale: isHovering ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white dark:bg-card/95 backdrop-blur-sm text-foreground px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-xl border border-primary/20">
          <p className="font-bold text-[11px] sm:text-sm text-primary mb-0.5">Ciao! Sono Nova ✨</p>
          <p className="text-[10px] sm:text-xs text-slate-600 dark:text-muted-foreground leading-snug">
            Hai domande? Clicca sotto!
          </p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-card rotate-45 border-r border-b border-primary/20" />
        </div>
      </motion.div>

      <motion.svg
        viewBox="0 0 200 280"
        className="w-full h-auto"
        animate={{ y: isHovering ? -5 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ filter: 'drop-shadow(0 20px 40px rgba(139, 92, 246, 0.25))' }}
      >
        <defs>
          <linearGradient id="robotBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="robotDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5b21b6" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
          <linearGradient id="robotLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="faceplate" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="visor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>
          <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset dx="0" dy="2"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
            <feFlood floodColor="black" floodOpacity="0.15" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
        </defs>

        <motion.g
          animate={{ rotate: isHovering ? [0, -5, 5, 0] : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: '100px 35px' }}
        >
          <rect x="97" y="12" width="6" height="20" rx="3" fill="url(#robotDark)" />
          <motion.circle
            cx="100" cy="8" r="6"
            fill="url(#robotLight)"
            animate={{ 
              boxShadow: isHovering ? '0 0 15px rgba(167, 139, 250, 0.8)' : 'none'
            }}
          />
          <motion.circle
            cx="100" cy="8" r="3"
            fill="#c4b5fd"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.g>

        <rect
          x="45"
          y="35"
          width="110"
          height="95"
          rx="28"
          fill="url(#robotBody)"
        />
        
        <rect
          x="50"
          y="40"
          width="45"
          height="20"
          rx="10"
          fill="rgba(255,255,255,0.15)"
        />

        <rect
          x="55"
          y="50"
          width="90"
          height="65"
          rx="18"
          fill="url(#faceplate)"
          filter="url(#innerShadow)"
        />

        <rect
          x="62"
          y="58"
          width="76"
          height="35"
          rx="12"
          fill="url(#visor)"
        />

        <g>
          <rect
            x="70"
            y="70"
            width="22"
            height={isBlinking ? 2 : 10}
            rx={isBlinking ? 1 : 5}
            fill="#c4b5fd"
            style={{ transition: 'height 0.08s ease' }}
          />
          
          <rect
            x="108"
            y="70"
            width="22"
            height={isBlinking ? 2 : 10}
            rx={isBlinking ? 1 : 5}
            fill="#c4b5fd"
            style={{ transition: 'height 0.08s ease' }}
          />

          {!isBlinking && (
            <motion.rect
              x="76"
              y="72"
              width="10"
              height="6"
              rx="3"
              fill="#ffffff"
              animate={{ 
                x: 76 + eyePosition.x,
                y: 72 + eyePosition.y * 0.3
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {!isBlinking && (
            <motion.rect
              x="114"
              y="72"
              width="10"
              height="6"
              rx="3"
              fill="#ffffff"
              animate={{ 
                x: 114 + eyePosition.x,
                y: 72 + eyePosition.y * 0.3
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </g>

        <motion.rect
          x="80"
          y="100"
          width="40"
          height="8"
          rx="4"
          fill="#cbd5e1"
          animate={{
            width: isHovering ? 50 : 40,
            x: isHovering ? 75 : 80,
          }}
          transition={{ duration: 0.2 }}
        />
        
        <motion.g
          animate={{ opacity: isHovering ? 1 : 0.5 }}
        >
          <rect x="85" y="102" width="6" height="4" rx="2" fill="#8b5cf6" />
          <rect x="94" y="102" width="6" height="4" rx="2" fill="#a78bfa" />
          <rect x="103" y="102" width="6" height="4" rx="2" fill="#8b5cf6" />
        </motion.g>

        <rect x="85" y="130" width="30" height="20" rx="4" fill="url(#robotDark)" />
        <rect x="90" y="135" width="20" height="3" rx="1.5" fill="#4c1d95" />
        <rect x="90" y="142" width="20" height="3" rx="1.5" fill="#4c1d95" />

        <path
          d="M 50 155 L 85 150 L 85 165 L 50 170 Z"
          fill="url(#robotBody)"
        />
        <path
          d="M 150 155 L 115 150 L 115 165 L 150 170 Z"
          fill="url(#robotBody)"
        />

        <rect
          x="60"
          y="150"
          width="80"
          height="90"
          rx="15"
          fill="url(#robotBody)"
        />
        
        <rect
          x="75"
          y="165"
          width="50"
          height="55"
          rx="8"
          fill="url(#robotDark)"
        />

        <motion.circle
          cx="100"
          cy="192"
          r="15"
          fill="url(#robotLight)"
          animate={{ 
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="100"
          cy="192"
          r="8"
          fill="#c4b5fd"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="100" y="197" textAnchor="middle" fontSize="12" fill="#4c1d95" fontWeight="bold">✦</text>

        <motion.g
          animate={{ rotate: isHovering ? -8 : 0 }}
          style={{ transformOrigin: '50px 160px' }}
        >
          <rect x="35" y="160" width="22" height="60" rx="11" fill="url(#robotBody)" />
          <rect x="38" y="220" width="16" height="22" rx="8" fill="url(#robotLight)" />
        </motion.g>
        
        <motion.g
          animate={{ rotate: isHovering ? 8 : 0 }}
          style={{ transformOrigin: '150px 160px' }}
        >
          <rect x="143" y="160" width="22" height="60" rx="11" fill="url(#robotBody)" />
          <rect x="146" y="220" width="16" height="22" rx="8" fill="url(#robotLight)" />
        </motion.g>

        <rect x="62" y="175" width="4" height="30" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="134" y="175" width="4" height="30" rx="2" fill="rgba(255,255,255,0.2)" />
      </motion.svg>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-primary"
          style={{
            left: `${10 + i * 20}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          {i % 2 === 0 ? '✦' : '◇'}
        </motion.div>
      ))}

      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-72 bg-primary/20 rounded-3xl blur-[50px] -z-10"
        animate={{
          scale: isHovering ? 1.1 : 1,
          opacity: isHovering ? 0.35 : 0.2
        }}
      />
    </div>
  );
};

export default InteractiveMascot;