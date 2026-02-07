import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "Ho sempre avuto il sogno di creare una mia brand identity fatta bene, ma non ho mai saputo come fare. Lorenzo, proprietario di Singularity, mi ha guidato passo-passo alla creazione della mia brand identity spiegandomi ogni cosa che faceva. Consigliatissimo, grazie mille!",
    author: "Andrea Giordano",
    role: "Cliente",
    company: "Trustpilot",
    rating: 5
  },
  {
    content: "Lorenzo è un ragazzo giovane, volenteroso, capace, affidabile, rispettoso e responsabile. Ha spiccate capacità tecniche, organizzative ed informatiche. Mi sono affidato a lui per la mia azienda con ottimi risultati. Anche in futuro lo ricoinvolgerò sicuramente! Affidabilissimo! 5 Stelle e lode! 😊",
    author: "Olmo",
    role: "Imprenditore",
    company: "Trustpilot",
    rating: 5
  },
  {
    content: "Ho avuto il piacere di rivolgermi a Lorenzo e devo dire che è stato impeccabile: professionale, disponibile sempre gentile. Si vede che ci mette passione in quello che fa. Consiglio vivamente a chiunque cerchi serietà e qualità. Complimenti davvero!",
    author: "Sergio e Elena",
    role: "Clienti",
    company: "Trustpilot",
    rating: 5
  },
  {
    content: "Avevo bisogno di una grafica e di una brand identity per la mia attività e mi sono affidato a Singularity Dream. Fin dal primo contatto ho trovato professionalità, creatività e una grande attenzione ai dettagli. Hanno ascoltato le mie idee e le hanno trasformate in un progetto che mi ha rappresentato alla perfezione.",
    author: "Anna Elena Canalini",
    role: "Titolare Attività",
    company: "Trustpilot",
    rating: 5
  },
  {
    content: "Ho scelto Singularity per una consulenza informatica e mi sono trovata molto bene, servizio top!! Lorenzo è un ragazzo molto disponibile, capace, rispettoso e soprattutto affidabile; ha notevoli capacità tecniche e informatiche. 5 stelle meritate!!!",
    author: "Marika Gallone",
    role: "Cliente",
    company: "Trustpilot",
    rating: 5
  },
  {
    content: "Ho contattato Singularity Dream per l'editing di un video, servizio impeccabile!! Lorenzo è un ragazzo molto capace, che sa quello che fa e soprattutto che ama il suo lavoro. 5 stelle meritatissime!!😍😍",
    author: "Gaia Trenti",
    role: "Cliente",
    company: "Trustpilot",
    rating: 5
  },
  {
    content: "Ho fatto riparare un pc portatile. Servizio e consulenza impeccabile e puntuale.",
    author: "Giorgio Asiani",
    role: "Cliente",
    company: "Trustpilot",
    rating: 5
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsVisible(true);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsVisible(true);
    }, 250);
  };

  const prevTestimonial = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsVisible(true);
    }, 250);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-[#00b67a] px-4 py-2 rounded-lg shadow-lg shadow-[#00b67a]/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="white"/>
          </svg>
          <span className="text-white font-bold text-sm">Eccellente</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              className="text-[#00b67a] fill-[#00b67a]"
            />
          ))}
        </div>
        <span className="text-muted-foreground text-sm font-medium">5.0 su Trustpilot</span>
      </div>

      <div className={`transition-all duration-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <TestimonialCard
          content={testimonials[currentIndex].content}
          author={testimonials[currentIndex].author}
          role={testimonials[currentIndex].role}
          company={testimonials[currentIndex].company}
          rating={testimonials[currentIndex].rating}
        />
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsVisible(true);
              }, 250);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-primary shadow-lg shadow-primary/30' 
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Vai alla recensione ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-card/80 hover:bg-primary/20 border border-border/50 transition-all duration-300 text-foreground hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          aria-label="Recensione precedente"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-card/80 hover:bg-primary/20 border border-border/50 transition-all duration-300 text-foreground hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          aria-label="Recensione successiva"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;