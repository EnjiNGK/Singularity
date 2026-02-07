import { useState, useEffect } from "react";
import { X, Settings, Shield, BarChart3, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      applyPreferences(savedPreferences);
    }
  }, []);

  const applyPreferences = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    } else {
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    applyPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    savePreferences(necessaryOnly);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  return (
    <>
      <Button
        onClick={() => setShowSettings(true)}
        className="fixed bottom-6 left-6 z-40 h-12 w-12 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 shadow-lg"
        variant="outline"
      >
        <Shield className="h-5 w-5" />
      </Button>

      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
          <Card className="max-w-2xl mx-auto bg-background/95 backdrop-blur-lg border-border/50 shadow-2xl">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    Rispettiamo la tua privacy
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizziamo cookie tecnici necessari per il funzionamento del sito e cookie analytics per migliorare la tua esperienza. 
                    Puoi gestire le tue preferenze in qualsiasi momento.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Button
                  onClick={acceptAll}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Accetta tutto
                </Button>
                <Button
                  onClick={acceptNecessary}
                  variant="outline"
                  className="flex-1"
                >
                  Solo necessari
                </Button>
                <Button
                  onClick={() => {
                    setShowBanner(false);
                    setShowSettings(true);
                  }}
                  variant="ghost"
                  className="flex-1"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Personalizza
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="max-w-lg w-full bg-background border-border/50 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Preferenze Privacy
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Gestisci come utilizziamo i cookie e proteggiamo i tuoi dati
                  </p>
                </div>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Cookie Necessari</h3>
                      <div className="inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent bg-primary opacity-50">
                        <div className="block h-5 w-5 rounded-full bg-background shadow-lg translate-x-5" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <BarChart3 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Cookie Analytics</h3>
                      <button
                        onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                        className={`inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors ${
                          preferences.analytics ? 'bg-primary' : 'bg-input'
                        }`}
                      >
                        <div className={`block h-5 w-5 rounded-full bg-background shadow-lg transition-transform ${
                          preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ci aiutano a capire come utilizzi il sito per migliorarlo. Utilizziamo Google Analytics con IP anonimizzato.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Cookie Marketing</h3>
                      <button
                        onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                        className={`inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors ${
                          preferences.marketing ? 'bg-primary' : 'bg-input'
                        }`}
                      >
                        <div className={`block h-5 w-5 rounded-full bg-background shadow-lg transition-transform ${
                          preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Utilizzati per mostrarti contenuti personalizzati e misurare l'efficacia delle campagne.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={saveCustom}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Salva preferenze
                </Button>
                <Button
                  onClick={acceptAll}
                  variant="outline"
                  className="flex-1"
                >
                  Accetta tutto
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                I tuoi dati sono al sicuro. Leggi la nostra informativa sulla privacy per maggiori dettagli.
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
