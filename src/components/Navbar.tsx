
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Palette, Monitor, Video, Heart, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToTop: true } });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Grafica', path: '/graphics', icon: Palette },
    { name: 'Siti Web', path: '/web-design', icon: Monitor },
    { name: 'Video Editing', path: '/video-editing', icon: Video },
    { name: 'Impegno Sociale', path: '/social-commitment', icon: Heart },
    { name: 'Contatti', path: '/contact', icon: Mail },
  ];

  const portfolioLink = { name: 'Portfolio', path: '/portfolio', icon: Briefcase };

  const isActiveLink = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  const renderNavLink = (link: any) => {
    const IconComponent = link.icon;
    return (
      <Link 
        key={link.name} 
        to={link.path} 
        className={`${isActiveLink(link.path)} flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group hover:bg-accent/20`}
      >
        <IconComponent 
          size={16} 
          className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" 
        />
        <span className="hidden lg:inline">{link.name}</span>
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 md:py-3 shadow-2xl bg-background/95 border-b border-border' 
          : 'py-3 md:py-5 bg-background/70'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick} 
              className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300 group"
              aria-label="Go to Home"
            >
              <img 
                src="/images/logo.png" 
                alt="Singularity Dream Logo - Servizi digitali professionali" 
                className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
              />
              <span className="text-foreground font-bold text-lg md:text-xl transition-all duration-300 group-hover:text-primary">
                Singularity
              </span>
            </button>
          </div>

          <nav 
            className="hidden md:flex items-center space-x-2 lg:space-x-4 rounded-full px-4 py-2 bg-card/80 backdrop-blur-md border border-border"
          >
            {navLinks.map(renderNavLink)}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link to="/portfolio">
              <Button className="primary-button-glow animate-pulse-glow flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Briefcase size={16} className="transition-transform duration-300 hover:rotate-12" />
                Portfolio
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2 rounded-lg transition-all duration-300 hover:scale-110 bg-card/80 backdrop-blur-md border border-border"
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav 
          className="md:hidden animate-fade-in bg-background/98 backdrop-blur-xl border-t border-border"
        >
          <div className="p-4 space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${isActiveLink(link.path)} py-3 px-4 block rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
                    location.pathname === link.path ? 'bg-primary/20 border border-primary/30' : 'bg-card/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IconComponent size={20} className="text-nexrank-purple" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <Link
              to="/portfolio"
              className="primary-button-glow w-full text-center mt-4 flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Briefcase size={16} />
              Portfolio
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
