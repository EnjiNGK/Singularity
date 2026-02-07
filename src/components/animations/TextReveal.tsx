import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });
  
  const words = children.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className="inline-block"
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(100%)',
              opacity: isInView ? 1 : 0,
              transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay + wordIndex * staggerDelay}s, opacity 0.6s ease ${delay + wordIndex * staggerDelay}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
