import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Clock } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'graphics' | 'web' | 'video' | 'social';
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year: string;
  isInteractive?: boolean;
  isInProgress?: boolean;
}

interface BentoProjectGridProps {
  projects: Project[];
}

const BentoCard = ({
  project, 
  index, 
  onClick
}: { 
  project: Project; 
  index: number;
  onClick: () => void;
}) => {
  const { ExternalLink: ExtLink, Clock: ClockIcon } = { ExternalLink, Clock };
  const categoryLabels: Record<string, string> = {
    graphics: 'Grafica',
    web: 'Web',
    video: 'Video',
    social: 'Social',
  };

  const categoryColors: Record<string, string> = {
    graphics: 'from-pink-500/80 to-purple-600/80',
    web: 'from-blue-500/80 to-cyan-500/80',
    video: 'from-orange-500/80 to-red-500/80',
    social: 'from-green-500/80 to-emerald-500/80',
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: 0.4, 
        delay: Math.min(index * 0.03, 0.15),
        ease: "easeOut"
      }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border/30 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className={`absolute inset-0 bg-gradient-to-t ${categoryColors[project.category]} opacity-0 group-hover:opacity-50 transition-opacity duration-400`} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20">
                {categoryLabels[project.category]}
              </span>
              {project.isInProgress && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/80 backdrop-blur-md text-white">
                  <Clock className="w-3 h-3" />
                  In corso
                </span>
              )}
            </div>
            <span className="text-white/60 text-xs font-mono">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
              {project.title}
            </h3>
            
            <p className="text-white/70 text-sm line-clamp-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              {!project.client && (
                <span className="text-xs text-primary px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
                  Progetto Personale
                </span>
              )}
              {project.tags.slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs text-white/50 px-2 py-1 rounded-md bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-100">
              <span>{project.isInteractive ? 'Esplora' : 'Visualizza'}</span>
              {project.isInteractive ? (
                <ExternalLink className="w-4 h-4" />
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const FilterButton = ({
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
        : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/30'
    }`}
  >
    {label}
  </button>
);

const ProjectLightbox = ({
  project, 
  onClose, 
  onNext, 
  onPrev,
  hasNext,
  hasPrev
}: { 
  project: Project; 
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  const categoryLabels: Record<string, string> = {
    graphics: 'Grafica',
    web: 'Web',
    video: 'Video',
    social: 'Social',
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 backdrop-blur-xl p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-card/80 border border-border/30 text-foreground hover:bg-card transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {hasPrev && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-card/80 border border-border/30 text-foreground hover:bg-card transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {hasNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-card/80 border border-border/30 text-foreground hover:bg-card transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <motion.div
        className="relative w-full h-full max-w-[95vw] max-h-[95vh] overflow-hidden rounded-2xl bg-card border border-border/30"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-black/50"
          />
        </div>
        
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary backdrop-blur-md">
              {categoryLabels[project.category]}
            </span>
            {project.isInProgress && (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-amber-500/80 text-white">
                <Clock className="w-4 h-4" />
                In corso
              </span>
            )}
            {!project.client && (
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-md">
                Progetto Personale
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {project.title}
          </h2>

          <p className="text-white/80 text-base md:text-lg max-w-3xl mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {project.client && (
              <div>
                <span className="text-white/60 text-sm">Cliente: </span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm text-white/60 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-white/50 text-sm font-mono ml-auto">
              {project.year}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BentoProjectGrid: React.FC<BentoProjectGridProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filters = [
    { key: 'all', label: 'Tutti' },
    { key: 'graphics', label: 'Grafica' },
    { key: 'web', label: 'Web' },
    { key: 'video', label: 'Video' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : -1;
  const hasNext = currentIndex < filteredProjects.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) setSelectedProject(filteredProjects[currentIndex + 1]);
  };
  const handlePrev = () => {
    if (hasPrev) setSelectedProject(filteredProjects[currentIndex - 1]);
  };

  return (
    <>
      <section ref={containerRef} id="projects-section" className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              I nostri lavori
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.span
                className="block text-foreground"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Progetti
              </motion.span>
              <motion.span
                className="block text-primary"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Selezionati
              </motion.span>
            </h2>
            <motion.p
              className="text-foreground/60 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              📌 Portfolio in allestimento – nuovi progetti in arrivo!
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <FilterButton
                key={filter.key}
                label={filter.label}
                active={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filteredProjects.map((project, index) => (
              <BentoCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectLightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={hasNext}
            hasPrev={hasPrev}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BentoProjectGrid;
