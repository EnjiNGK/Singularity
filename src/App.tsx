import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExitIntentPopup from "./components/ExitIntentPopup";
import FAQChatbot from "./components/FAQChatbot";
import CookieConsent from "./components/CookieConsent";
import IntroAnimation from "./components/IntroAnimation";
import SEO from "./components/SEO";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const GraphicsPage = lazy(() => import("./pages/GraphicsPage"));
const WebDesignPage = lazy(() => import("./pages/WebDesignPage"));
const VideoEditingPage = lazy(() => import("./pages/VideoEditingPage"));
const SocialCommitmentPage = lazy(() => import("./pages/SocialCommitmentPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const updateStructuredData = () => {
      let structuredData = {};

      switch (pathname) {
        case '/':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Singularity Dream",
            "url": "https://singularitydream.it",
            "description": "Servizi professionali di grafica, informatica e video editing a prezzi accessibili",
            "founder": {
              "@type": "Person",
              "name": "Lorenzo",
              "age": "17"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Italia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servizi Digitali",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Servizi di Grafica",
                    "description": "Logo design, brand identity, materiali promozionali"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Creazione Siti Web",
                    "description": "Sviluppo siti web professionali, landing page, e-commerce e consulenza informatica"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Editing",
                    "description": "Montaggio video, post-produzione, contenuti per social media"
                  }
                }
              ]
            }
          };
          break;
        case '/graphics':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servizi di Grafica Professionale",
            "description": "Logo design, brand identity, materiali promozionali e grafica per social media",
            "provider": {
              "@type": "Organization",
              "name": "Singularity Dream"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Italia"
            },
            "serviceType": "Graphic Design"
          };
          break;
        case '/web-design':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Creazione Siti Web Professionali",
            "description": "Sviluppo siti web moderni, responsive design, landing page, e-commerce e portfolio digitali",
            "provider": {
              "@type": "Organization",
              "name": "Singularity Dream"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Italia"
            },
            "serviceType": "Web Design and Development"
          };
          break;
        case '/video-editing':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Video Editing Professionale",
            "description": "Montaggio video, post-produzione, editing per YouTube e social media",
            "provider": {
              "@type": "Organization",
              "name": "Singularity Dream"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Italia"
            },
            "serviceType": "Video Production"
          };
          break;
      }

      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.id !== 'main-structured-data') {
        existingScript.remove();
      }

      if (Object.keys(structuredData).length > 0) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-structured-data';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    };

    updateStructuredData();
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  const hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';
  const [showIntro, setShowIntro] = useState(!hasSeenIntro && window.location.pathname === '/');
  const [introComplete, setIntroComplete] = useState(hasSeenIntro);

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowIntro(false);
      setIntroComplete(true);
    } else if (hasSeenIntro) {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, [location.pathname, hasSeenIntro]);

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setIntroComplete(true);
    setTimeout(() => setShowIntro(false), 500);
  };

  return (
    <>
      <ScrollToTop />
      {showIntro && location.pathname === '/' && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
      <div className={`transition-opacity duration-500 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <ExitIntentPopup />
        <FAQChatbot />
        <CookieConsent />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <>
                <SEO
                  title="Servizi Digitali in Italia"
                  description="Grafica, assistenza informatica e video editing personalizzati e a domicilio. Professionisti al tuo servizio in tutta Italia."
                  path="/"
                />
                <HomePage />
              </>
            } />
            <Route path="/graphics" element={
              <>
                <SEO
                  title="Grafica & Design"
                  description="Logo design, brand identity, materiali promozionali e grafica per social media. Soluzioni creative per il tuo business."
                  path="/graphics"
                />
                <GraphicsPage />
              </>
            } />
            <Route path="/web-design" element={
              <>
                <SEO
                  title="Sviluppo Siti Web"
                  description="Sviluppo siti web moderni, responsive design, landing page, e-commerce e portfolio digitali."
                  path="/web-design"
                />
                <WebDesignPage />
              </>
            } />
            <Route path="/video-editing" element={
              <>
                <SEO
                  title="Video Editing"
                  description="Montaggio video professionale, post-produzione, editing per YouTube e social media."
                  path="/video-editing"
                />
                <VideoEditingPage />
              </>
            } />
            <Route path="/social-commitment" element={
              <>
                <SEO
                  title="Impegno Sociale"
                  description="Il nostro impegno per un futuro digitale accessibile e inclusivo."
                  path="/social-commitment"
                />
                <SocialCommitmentPage />
              </>
            } />
            <Route path="/contact" element={
              <>
                <SEO
                  title="Contatti"
                  description="Contattaci per informazioni sui nostri servizi digitali. Siamo qui per aiutarti."
                  path="/contact"
                />
                <ContactPage />
              </>
            } />

            <Route path="/portfolio" element={
              <>
                <SEO
                  title="Portfolio"
                  description="I nostri lavori migliori. Scopri cosa possiamo realizzare per te."
                  path="/portfolio"
                />
                <PortfolioPage />
              </>
            } />
            <Route path="/terms" element={
              <>
                <SEO
                  title="Termini e Condizioni"
                  description="Termini e condizioni di utilizzo dei nostri servizi."
                  path="/terms"
                />
                <TermsPage />
              </>
            } />
            <Route path="/privacy-policy" element={
              <>
                <SEO
                  title="Privacy Policy"
                  description="Informativa sulla privacy e trattamento dei dati personali."
                  path="/privacy-policy"
                />
                <PrivacyPolicyPage />
              </>
            } />
            <Route path="/cookie-policy" element={
              <>
                <SEO
                  title="Cookie Policy"
                  description="Informativa sull'utilizzo dei cookie nel nostro sito."
                  path="/cookie-policy"
                />
                <CookiePolicyPage />
              </>
            } />
            <Route path="*" element={
              <>
                <SEO
                  title="Pagina Non Trovata"
                  description="La pagina che cerchi non esiste."
                  path="/404"
                />
                <NotFound />
              </>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
