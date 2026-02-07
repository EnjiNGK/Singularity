
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, BarChart2, TrendingUp, Activity, Star, Zap, Globe, ArrowRight, Database, FileText, MessageSquare, Bell, Layers, Clock, Shield, Users } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const FeaturesPage = () => {
  return (
    <div className="pt-28">
      <section className="py-20 relative">
        <div className="absolute top-20 right-40 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Funzionalità potenziate<br />dall'intelligenza artificiale
            </h1>
            <p className="subtitle-text mb-8">
              Scopri tutti gli strumenti che NexRank mette a tua disposizione per ottimizzare il tuo sito web e migliorare il tuo posizionamento sui motori di ricerca.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Search} 
              title="Ricerca Keyword Avanzata" 
              description="Identifica le parole chiave più rilevanti per il tuo business, con dati sul volume di ricerca, difficoltà e potenziale di conversione." 
            />
            <FeatureCard 
              icon={BarChart2} 
              title="Analytics SEO Completo" 
              description="Monitoraggio dettagliato di tutti gli aspetti SEO del tuo sito web, con grafici intuitivi e dati in tempo reale." 
            />
            <FeatureCard 
              icon={TrendingUp} 
              title="Suggerimenti Intelligenti" 
              description="L'AI analizza il tuo sito e fornisce suggerimenti personalizzati per migliorare contenuti, struttura e performance." 
            />
            <FeatureCard 
              icon={Activity} 
              title="Monitoraggio in Tempo Reale" 
              description="Tieni sotto controllo le performance del tuo sito con aggiornamenti in tempo reale e avvisi personalizzati." 
            />
            <FeatureCard 
              icon={Star} 
              title="Ottimizzazione Contenuti" 
              description="Strumenti avanzati per migliorare i tuoi contenuti e renderli più rilevanti per i motori di ricerca e per gli utenti." 
            />
            <FeatureCard 
              icon={Database} 
              title="Analisi Competitiva" 
              description="Confronta il tuo sito con quello dei concorrenti e scopri opportunità per superarli nei risultati di ricerca." 
            />
            <FeatureCard 
              icon={FileText} 
              title="Audit SEO Automatizzato" 
              description="Scansione completa del tuo sito per identificare problemi tecnici SEO e opportunità di miglioramento." 
            />
            <FeatureCard 
              icon={MessageSquare} 
              title="Assistente AI Personale" 
              description="Un assistente virtuale che risponde alle tue domande e ti guida nell'ottimizzazione del tuo sito." 
            />
            <FeatureCard 
              icon={Bell} 
              title="Notifiche Personalizzate" 
              description="Ricevi avvisi quando ci sono cambiamenti significativi nel posizionamento o nelle performance." 
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-nexrank-dark-blue/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Scopri Tutti i Dettagli</h2>
            <p className="subtitle-text">
              Approfondisci le caratteristiche che rendono NexRank uno strumento unico nel suo genere.
            </p>
          </div>
          
          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">Ricerca Keyword Basata sull'Intento</h3>
                <p className="text-gray-300 mb-6">
                  Il nostro algoritmo AI analizza l'intento di ricerca dietro alle keyword, permettendoti di creare contenuti che rispondono esattamente a ciò che i tuoi potenziali clienti stanno cercando.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Zap size={14} className="text-nexrank-purple" />
                    </div>
                    <span className="text-gray-300">Classificazione automatica per intento (informativo, transazionale, navigazionale)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Zap size={14} className="text-nexrank-purple" />
                    </div>
                    <span className="text-gray-300">Suggerimenti di contenuti basati sull'intento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Zap size={14} className="text-nexrank-purple" />
                    </div>
                    <span className="text-gray-300">Analisi dei contenuti dei concorrenti per keyword specifiche</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 order-1 lg:order-2 animate-slide-right">
                <div className="rounded-lg overflow-hidden bg-nexrank-dark-blue/70 p-6">
                  <h4 className="text-lg font-medium mb-4">Ricerca Keyword AI</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-nexrank-dark/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">pagamenti online sicuri</p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-green-600/20 text-green-500 px-2 py-0.5 rounded-full">Informativo</span>
                            <span className="text-xs text-gray-400 ml-2">12K/mese</span>
                          </div>
                        </div>
                        <div className="text-green-500">72/100</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-nexrank-dark/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">miglior gateway pagamenti</p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-yellow-600/20 text-yellow-500 px-2 py-0.5 rounded-full">Transazionale</span>
                            <span className="text-xs text-gray-400 ml-2">8.5K/mese</span>
                          </div>
                        </div>
                        <div className="text-green-500">68/100</div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-nexrank-dark/50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">paypal login</p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs bg-blue-600/20 text-blue-500 px-2 py-0.5 rounded-full">Navigazionale</span>
                            <span className="text-xs text-gray-400 ml-2">147K/mese</span>
                          </div>
                        </div>
                        <div className="text-red-500">24/100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-6 animate-slide-up">
                <div className="rounded-lg overflow-hidden bg-nexrank-dark-blue/70 p-6">
                  <h4 className="text-lg font-medium mb-4">Monitoraggio Posizionamento</h4>
                  <div className="h-64 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700"></div>
                    <div className="absolute bottom-1 left-0 h-60 w-full overflow-hidden">
                      <svg viewBox="0 0 100 100" className="w-full h-60" preserveAspectRatio="none">
                        <path
                          d="M0,80 L5,75 L10,78 L15,70 L20,65 L25,60 L30,55 L35,57 L40,45 L45,50 L50,40 L55,35 L60,30 L65,25 L70,28 L75,20 L80,15 L85,20 L90,10 L95,8 L100,5"
                          stroke="#9b87f5"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M0,80 L5,75 L10,78 L15,70 L20,65 L25,60 L30,55 L35,57 L40,45 L45,50 L50,40 L55,35 L60,30 L65,25 L70,28 L75,20 L80,15 L85,20 L90,10 L95,8 L100,5"
                          stroke="url(#gradient)"
                          strokeWidth="0"
                          fill="url(#gradient)"
                          opacity="0.2"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#9b87f5" />
                            <stop offset="100%" stopColor="#9b87f5" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    <div className="absolute top-2 right-2 bg-nexrank-dark-blue/50 rounded-full px-3 py-1 text-xs">
                      Ultimi 30 giorni
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">Monitoraggio delle Posizioni in Tempo Reale</h3>
                <p className="text-gray-300 mb-6">
                  Monitora il posizionamento del tuo sito per tutte le parole chiave importanti, con aggiornamenti quotidiani e analisi delle tendenze nel tempo.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Globe size={14} className="text-nexrank-purple" />
                    </div>
                    <span className="text-gray-300">Monitoraggio multimotore (Google, Bing, Yahoo)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Globe size={14} className="text-nexrank-purple" />
                    </div>
                    <span className="text-gray-300">Monitoraggio geolocalizzato per target locali</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nexrank-purple/20 flex items-center justify-center mr-3 mt-0.5">
                      <Globe size={14} className="text-nexrank-purple" />
                    </div>
                    <span className="text-gray-300">Alert automatici per variazioni significative</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Altre Funzionalità</h2>
            <p className="subtitle-text">
              Scopri gli strumenti aggiuntivi che completano la suite NexRank.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 hover-lift">
              <Layers className="text-nexrank-purple mb-4" size={24} />
              <h3 className="text-lg font-medium mb-2">Link Building</h3>
              <p className="text-gray-400 text-sm">Strumenti per monitorare e migliorare il profilo backlink del tuo sito.</p>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <Clock className="text-nexrank-purple mb-4" size={24} />
              <h3 className="text-lg font-medium mb-2">Report Programmati</h3>
              <p className="text-gray-400 text-sm">Ricevi report periodici sulle performance del tuo sito via email.</p>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <Shield className="text-nexrank-purple mb-4" size={24} />
              <h3 className="text-lg font-medium mb-2">Sicurezza SEO</h3>
              <p className="text-gray-400 text-sm">Protezione da penalizzazioni e monitoraggio di problemi di sicurezza.</p>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <Users className="text-nexrank-purple mb-4" size={24} />
              <h3 className="text-lg font-medium mb-2">Accesso Team</h3>
              <p className="text-gray-400 text-sm">Gestione di accessi multipli con permessi personalizzati.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Pronto a portare il tuo SEO al livello successivo?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sblocca tutto il potenziale del tuo sito web con NexRank.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="primary-button flex items-center gap-2">
                Inizia gratis <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-nexrank-light border-nexrank-light/30 hover:bg-nexrank-light/10">
                Richiedi una demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
