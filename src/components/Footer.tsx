import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  const handleFacebookClick = () => {
    toast({
      title: "Siamo spiacenti!",
      description: "Il profilo Facebook è ancora in fase di creazione. Potete seguirci su qualunque altro social!",
    });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 dark:bg-singularity-dark-blue/80 light:bg-slate-100/95 backdrop-blur-sm"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-primary/20 light:bg-primary/10 rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 dark:bg-purple-600/15 light:bg-purple-600/8 rounded-full blur-3xl animate-pulse opacity-25"></div>

        <div className="absolute inset-0 animated-grid opacity-20"></div>

        <div className="floating-particles">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="particle opacity-40"></div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px dark:bg-white/10 light:bg-slate-300/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          <div className="md:col-span-1">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-all duration-300 group"
              aria-label="Go to Home"
            >
              <img
                src="/images/logo.png"
                alt="Singularity Dream Logo - Servizi digitali professionali"
                className="h-5 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <span className="dark:text-white light:text-slate-800 font-bold text-xl transition-all duration-300 group-hover:text-primary">
                Singularity
              </span>
            </button>
            <p className="mt-4 dark:text-gray-400 light:text-slate-600 text-sm leading-relaxed">
              Coloriamo l'universo partendo dal suo punto più oscuro
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/singularity__project/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 light:text-slate-500 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@singularity__project"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 light:text-slate-500 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@singularity_change"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 light:text-slate-500 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <button
                onClick={handleFacebookClick}
                className="dark:text-gray-400 light:text-slate-500 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </button>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="dark:text-white light:text-slate-800 font-semibold mb-4">Servizi</h3>
            <ul className="space-y-3">
              <li><Link to="/graphics" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Grafica</Link></li>
              <li><Link to="/web-design" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Siti Web</Link></li>
              <li><Link to="/video-editing" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Video Editing</Link></li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="dark:text-white light:text-slate-800 font-semibold mb-4">Azienda</h3>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/social-commitment" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Impegno Sociale</Link></li>
              <li><Link to="/contact" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="dark:text-white light:text-slate-800 font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="dark:text-gray-400 light:text-slate-600">
                <a href="tel:+393488664662" className="hover:text-primary transition-colors">+39 348 866 4662</a>
              </li>
              <li>
                <a href="mailto:info.singularityy@gmail.com" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors break-all text-sm">
                  info.singularityy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h3 className="dark:text-white light:text-slate-800 font-semibold mb-4">Privacy & Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Dichiarazione di Accessibilità</Link></li>
              <li><Link to="/terms" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors">Termini e Condizioni</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-white/10 light:border-slate-300/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="dark:text-gray-400 light:text-slate-600 text-sm space-y-3">
            <p>© {new Date().getFullYear()} Singularity. Tutti i diritti riservati.</p>
            <p className="text-xs leading-relaxed max-w-xl">
              Attività professionale in fase di regolarizzazione con Partita IVA in corso di registrazione. Per informazioni su collaborazioni e consulenze, contattami.
            </p>
          </div>
          <div className="mt-2 md:mt-0 flex-shrink-0">
            <a href="mailto:info.singularityy@gmail.com" className="dark:text-gray-400 light:text-slate-600 hover:text-primary transition-colors flex items-center hover:scale-105 duration-300 text-sm">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              <span className="break-all">info.singularityy@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
