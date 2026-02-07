import React, { Children } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  initialDelay = 0,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const childArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${initialDelay + index * staggerDelay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${initialDelay + index * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerChildren;
