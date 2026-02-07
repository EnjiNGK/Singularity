import React, { useEffect, useState } from 'react';

const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: position.x - 300,
          top: position.y - 300,
          background: 'radial-gradient(circle, rgba(155, 135, 245, 0.08) 0%, transparent 70%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />
    </div>
  );
};

export default CursorSpotlight;
