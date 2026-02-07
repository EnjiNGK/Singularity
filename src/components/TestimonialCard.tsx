import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  content, 
  author, 
  role, 
  company,
  rating = 5 
}) => {
  return (
    <div className="glass-card-enhanced p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={`transition-all duration-500 ${
              i < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-muted-foreground/30'
            }`}
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animation: 'fade-in 0.5s ease-out forwards',
              opacity: 0
            }}
          />
        ))}
        <span className="ml-2 text-sm font-semibold text-foreground">{rating}.0</span>
      </div>

      <div className="mb-4 text-primary/60">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" fill="currentColor" viewBox="0 0 45 36" className="opacity-60">
          <path d="M13.415.43c-2.523-.21-4.694.84-6.314 2.842-1.62 2.003-2.33 4.796-2.11 7.319l.13 2.156 2.126-.303c3.894-.486 6.674-2.21 7.741-5.226.486-1.312.638-2.187.425-3.529L15.15 2.21l-1.736-1.736h.001zM33.862.43c-2.523-.21-4.694.84-6.314 2.842-1.62 2.003-2.33 4.796-2.11 7.319l.13 2.156 2.126-.303c3.894-.486 6.674-2.21 7.741-5.226.486-1.312.638-2.187.425-3.529L35.597 2.21 33.861.43h.001z" />
        </svg>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg italic">"{content}"</p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="text-primary-foreground font-bold text-lg">{author.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{author}</h4>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
        <div className="ml-auto flex items-center gap-2 bg-[#00b67a]/10 px-3 py-1.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="#00b67a"/>
          </svg>
          <span className="text-xs font-medium text-[#00b67a]">Trustpilot</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;