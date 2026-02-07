import React, { useRef, useState } from 'react';
import { motion, useMotionValue, AnimatePresence, PanInfo } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Clock, Grid3X3 } from 'lucide-react';

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

interface DraggableProjectsCarouselProps {
  projects: Project[];
}

const categoryLabels: Record<string, string> = {
  graphics: 'Grafica',
  web: 'Web',
  video: 'Video',
  social: 'Social',
};

const categoryColors: Record<string, string> = {
  graphics: 'from-primary/80 to-accent/80',
  web: 'from-blue-500/80 to-cyan-500/80',
  video: 'from-orange-500/80 to-red-500/80',
  social: 'from-green-500/80 to-emerald-500/80',
};

const ProjectCard = ({
  project, 
  onClick,
  isDragging
}: { 
  project: Project; 
  onClick: () => void;
  isDragging: boolean;
}) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] md:w-[380px] select-none"
      whileHover={!isDragging ? { y: -8, transition: { duration: 0.3 } } : {}}
      onClick={() => {
        if (!isDragging) onClick();
      }}
    >
      <div className="relative rounded-2xl overflow-hidden bg-card/90 backdrop-blur-sm border border-primary/20 shadow-xl shadow-primary/10 group cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${categoryColors[project.category]} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
              {categoryLabels[project.category]}
            </span>
            {project.isInProgress && (
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/90 text-white">
                <Clock className="w-3 h-3" />
                In corso
              </span>
            )}
          </div>

          <span className="absolute top-4 right-4 text-white/70 text-xs font-mono">
            {project.year}
          </span>
        </div>

        <div className="p-5 bg-card">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {!project.client && (
              <span className="text-xs text-primary px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
                Progetto Personale
              </span>
            )}
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-xs text-muted-foreground px-2 py-1 rounded-lg bg-muted/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MoodboardView = ({ 
  projects, 
  onClose, 
  onSelectProject 
}: { 
  projects: Project[]; 
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-background/98 backdrop-blur-xl overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tutti i <span className="text-primary">Lavori</span>
          </motion.h2>
          <motion.button
            className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/80 text-white mb-2">
                  {categoryLabels[project.category]}
                </span>
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

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

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
                <span key={i} className="text-sm text-white/60 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md">
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

const DraggableProjectsCarousel: React.FC<DraggableProjectsCarouselProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMoodboard, setShowMoodboard] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragThreshold = 15;
  
  const x = useMotionValue(0);

  const currentIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : -1;
  const hasNext = currentIndex < projects.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) setSelectedProject(projects[currentIndex + 1]);
  };
  const handlePrev = () => {
    if (hasPrev) setSelectedProject(projects[currentIndex - 1]);
  };

  const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    dragStartX.current = info.point.x;
    setIsDragging(false);
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = Math.abs(info.point.x - dragStartX.current);
    if (dragDistance > dragThreshold) {
      setIsDragging(true);
    }
  };

  const handleDragEnd = () => {
    setTimeout(() => setIsDragging(false), 150);
  };

  return (
    <>
      <section id="projects-section" className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Lavori
            </motion.h2>
            
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Scopri i nostri ultimi progetti dove creatività e maestria si incontrano.
            </motion.p>
          </motion.div>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-6 px-6 md:px-8 select-none"
            drag="x"
            dragConstraints={{ 
              left: -(projects.length * 400 - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 100),
              right: 0 
            }}
            style={{ x }}
            dragElastic={0.1}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                isDragging={isDragging}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 mt-12 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              className="text-2xl"
              animate={{ x: [-8, 8, -8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ←
            </motion.span>
            <span className="text-lg md:text-xl font-medium">Trascina per esplorare</span>
            <motion.span
              className="text-2xl"
              animate={{ x: [8, -8, 8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button 
            className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            onClick={() => setShowMoodboard(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Grid3X3 className="w-5 h-5" />
            <span className="text-base font-medium tracking-wide">ALTRI LAVORI</span>
          </motion.button>
        </motion.div>
      </section>

      <AnimatePresence>
        {showMoodboard && (
          <MoodboardView
            projects={projects}
            onClose={() => setShowMoodboard(false)}
            onSelectProject={(project) => {
              setShowMoodboard(false);
              setSelectedProject(project);
            }}
          />
        )}
      </AnimatePresence>

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

export default DraggableProjectsCarousel;
