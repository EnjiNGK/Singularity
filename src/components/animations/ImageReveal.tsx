import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const getClipPath = () => {
    if (!isInView) {
      switch (direction) {
        case 'left': return 'inset(0 100% 0 0)';
        case 'right': return 'inset(0 0 0 100%)';
        case 'up': return 'inset(100% 0 0 0)';
        case 'down': return 'inset(0 0 100% 0)';
      }
    }
    return 'inset(0 0 0 0)';
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          clipPath: getClipPath(),
          transition: `clip-path 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            transform: isInView ? 'scale(1)' : 'scale(1.2)',
            transition: `transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageReveal;
