import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SmoothRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SmoothReveal: React.FC<SmoothRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default SmoothReveal;
