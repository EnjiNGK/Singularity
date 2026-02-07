import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DreamyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  
  const cloudsY1 = useTransform(scrollY, [0, 1500], [0, 200]);
  const cloudsY2 = useTransform(scrollY, [0, 1500], [0, 150]);
  const cloudsY3 = useTransform(scrollY, [0, 1500], [0, 100]);
  const cloudsOpacity = useTransform(scrollY, [0, 600, 1000], [1, 0.5, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      type: 'dot' | 'cross' | 'diamond';
    }

    const stars: Star[] = [];
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        type: Math.random() > 0.8 ? (Math.random() > 0.5 ? 'cross' : 'diamond') : 'dot',
      });
    }

    let animationId: number;
    let time = 0;

    const drawStar = (star: Star, currentOpacity: number) => {
      ctx.fillStyle = `rgba(200, 190, 255, ${currentOpacity})`;
      
      if (star.type === 'dot') {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = 'rgba(155, 135, 245, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (star.type === 'cross') {
        const s = star.size * 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y - s);
        ctx.lineTo(star.x + s * 0.2, star.y);
        ctx.lineTo(star.x, star.y + s);
        ctx.lineTo(star.x - s * 0.2, star.y);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(star.x - s, star.y);
        ctx.lineTo(star.x, star.y + s * 0.2);
        ctx.lineTo(star.x + s, star.y);
        ctx.lineTo(star.x, star.y - s * 0.2);
        ctx.closePath();
        ctx.fill();
      } else if (star.type === 'diamond') {
        const s = star.size * 1.2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y - s);
        ctx.lineTo(star.x + s * 0.7, star.y);
        ctx.lineTo(star.x, star.y + s);
        ctx.lineTo(star.x - s * 0.7, star.y);
        ctx.closePath();
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.6 + twinkle * 0.4);
        drawStar(star, currentOpacity);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 dark:block hidden"
        style={{
          background: `linear-gradient(180deg, 
            hsl(260, 40%, 12%) 0%, 
            hsl(262, 50%, 18%) 25%,
            hsl(262, 55%, 25%) 50%, 
            hsl(262, 45%, 35%) 75%,
            hsl(260, 35%, 45%) 100%
          )`,
        }}
      />
      <div 
        className="absolute inset-0 light:block dark:hidden"
        style={{
          background: `linear-gradient(180deg, 
            hsl(262, 60%, 95%) 0%, 
            hsl(262, 55%, 90%) 25%,
            hsl(262, 50%, 85%) 50%, 
            hsl(262, 45%, 80%) 75%,
            hsl(260, 40%, 75%) 100%
          )`,
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(155, 135, 245, 0.4) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.35, 0.25]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <motion.div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{ y: cloudsY1, opacity: cloudsOpacity, zIndex: 2 }}
      >
        <div className="absolute top-[55vh] left-0 right-0 overflow-hidden">
          <svg 
            viewBox="0 0 1440 400" 
            className="w-full md:w-full h-[200px] md:h-auto scale-[2] md:scale-100 origin-center" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(262, 50%, 75%)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="hsl(262, 45%, 80%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(262, 40%, 85%)" stopOpacity="0.9" />
              </linearGradient>
              <filter id="cloudBlur1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              </filter>
            </defs>
            <g filter="url(#cloudBlur1)">
              <ellipse cx="200" cy="180" rx="180" ry="100" fill="url(#cloudGrad1)" />
              <ellipse cx="350" cy="200" rx="150" ry="80" fill="url(#cloudGrad1)" />
              <ellipse cx="500" cy="170" rx="120" ry="70" fill="url(#cloudGrad1)" />
              <ellipse cx="750" cy="190" rx="200" ry="110" fill="url(#cloudGrad1)" />
              <ellipse cx="950" cy="175" rx="140" ry="85" fill="url(#cloudGrad1)" />
              <ellipse cx="1150" cy="195" rx="170" ry="95" fill="url(#cloudGrad1)" />
              <ellipse cx="1350" cy="180" rx="130" ry="75" fill="url(#cloudGrad1)" />
            </g>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{ y: cloudsY2, opacity: cloudsOpacity, zIndex: 3 }}
      >
        <div className="absolute top-[62vh] md:top-[65vh] left-0 right-0 overflow-hidden">
          <svg 
            viewBox="0 0 1440 350" 
            className="w-full md:w-full h-[180px] md:h-auto scale-[2] md:scale-100 origin-center" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(262, 45%, 80%)" stopOpacity="0.7" />
                <stop offset="60%" stopColor="hsl(262, 40%, 85%)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="hsl(262, 35%, 90%)" stopOpacity="0.95" />
              </linearGradient>
              <filter id="cloudBlur2" x="-15%" y="-15%" width="130%" height="130%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              </filter>
            </defs>
            <g filter="url(#cloudBlur2)">
              <ellipse cx="100" cy="150" rx="160" ry="90" fill="url(#cloudGrad2)" />
              <ellipse cx="280" cy="170" rx="130" ry="75" fill="url(#cloudGrad2)" />
              <ellipse cx="480" cy="145" rx="180" ry="100" fill="url(#cloudGrad2)" />
              <ellipse cx="700" cy="160" rx="140" ry="80" fill="url(#cloudGrad2)" />
              <ellipse cx="920" cy="155" rx="190" ry="105" fill="url(#cloudGrad2)" />
              <ellipse cx="1100" cy="165" rx="120" ry="70" fill="url(#cloudGrad2)" />
              <ellipse cx="1300" cy="150" rx="175" ry="95" fill="url(#cloudGrad2)" />
            </g>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 right-0 w-full pointer-events-none"
        style={{ y: cloudsY3, opacity: cloudsOpacity, zIndex: 4 }}
      >
        <div className="absolute top-[68vh] md:top-[75vh] left-0 right-0 overflow-hidden">
          <svg 
            viewBox="0 0 1440 300" 
            className="w-full md:w-full h-[160px] md:h-auto scale-[2] md:scale-100 origin-center" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="cloudGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(262, 40%, 85%)" stopOpacity="0.85" />
                <stop offset="70%" stopColor="hsl(262, 35%, 90%)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="hsl(260, 30%, 93%)" stopOpacity="1" />
              </linearGradient>
              <filter id="cloudBlur3" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
            </defs>
            <g filter="url(#cloudBlur3)">
              <ellipse cx="150" cy="120" rx="200" ry="110" fill="url(#cloudGrad3)" />
              <ellipse cx="400" cy="140" rx="160" ry="90" fill="url(#cloudGrad3)" />
              <ellipse cx="600" cy="115" rx="140" ry="80" fill="url(#cloudGrad3)" />
              <ellipse cx="850" cy="130" rx="220" ry="120" fill="url(#cloudGrad3)" />
              <ellipse cx="1050" cy="125" rx="150" ry="85" fill="url(#cloudGrad3)" />
              <ellipse cx="1250" cy="135" rx="180" ry="100" fill="url(#cloudGrad3)" />
              <ellipse cx="1400" cy="120" rx="120" ry="70" fill="url(#cloudGrad3)" />
            </g>
          </svg>
        </div>
      </motion.div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-[30vh] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))',
          zIndex: 5,
        }}
      />
    </div>
  );
};

export default DreamyBackground;