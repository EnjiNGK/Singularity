import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building, ShoppingCart, Globe, Briefcase, Award, ArrowRight, CheckCircle } from 'lucide-react';

const SolutionsPage = () => {
  return (
    <div className="pt-28">
      <section className="py-20 relative">
        <div className="absolute top-20 left-40 w-72 h-72 bg-nexrank-violet/20 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="section-container">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Soluzioni su misura<br />per il tuo business
            </h1>
            <p className="subtitle-text mb-8">
              Qualunque sia la dimensione della tua azienda o il tuo settore, abbiamo la soluzione SEO perfetta per te.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-nexrank-purple/20 flex items-center justify-center mb-6">
                <ShoppingCart size={32} className="text-nexrank-purple" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
              <p className="text-gray-300 mb-6">
                Soluzione ottimizzata per negozi online, con focus su keyword di prodotto e ottimizzazione delle pagine di categoria.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Ottimizzazione schede prodotto</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Rich snippet per prodotti</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Analisi concorrenza di prezzo</span>
                </li>
              </ul>
              <Button className="w-full primary-button group">
                Scopri di più <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="glass-card p-8 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-nexrank-purple/20 flex items-center justify-center mb-6">
                <Building size={32} className="text-nexrank-purple" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Piccole Imprese</h3>
              <p className="text-gray-300 mb-6">
                Soluzione completa per piccole imprese locali che vogliono aumentare la visibilità nella loro area geografica.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">SEO locale avanzato</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Integrazione Google My Business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Ottimizzazione per ricerche locali</span>
                </li>
              </ul>
              <Button className="w-full primary-button group">
                Scopri di più <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="glass-card p-8 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-nexrank-purple/20 flex items-center justify-center mb-6">
                <Globe size={32} className="text-nexrank-purple" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-300 mb-6">
                Soluzione scalabile per grandi aziende con siti web complessi e necessità di SEO internazionale.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">SEO multilingua e internazionale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Analisi approfondita della concorrenza</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nexrank-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">API avanzate e integrazioni personalizzate</span>
                </li>
              </ul>
              <Button className="w-full primary-button group">
                Scopri di più <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-nexrank-dark-blue/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluzioni per Settore</h2>
            <p className="subtitle-text">
              Soluzioni specifiche per diversi settori industriali con strategie SEO mirate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-3">Finanza</h3>
              <p className="text-gray-400 mb-4">
                Ottimizzazioni specifiche per banche, assicurazioni e consulenti finanziari.
              </p>
              <div className="mt-auto">
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Dettagli <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-3">Sanità</h3>
              <p className="text-gray-400 mb-4">
                Soluzioni conformi GDPR per cliniche, ospedali e professionisti sanitari.
              </p>
              <div className="mt-auto">
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Dettagli <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-3">Immobiliare</h3>
              <p className="text-gray-400 mb-4">
                Ottimizzazione per agenzie immobiliari e portali di annunci.
              </p>
              <div className="mt-auto">
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Dettagli <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-3">Turismo</h3>
              <p className="text-gray-400 mb-4">
                Strategie per hotel, agenzie di viaggio e attrazioni turistiche.
              </p>
              <div className="mt-auto">
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Dettagli <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-3">Educazione</h3>
              <p className="text-gray-400 mb-4">
                Soluzioni per università, scuole e piattaforme e-learning.
              </p>
              <div className="mt-auto">
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Dettagli <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-3">Tecnologia</h3>
              <p className="text-gray-400 mb-4">
                Strategie per aziende tech, SaaS e sviluppatori software.
              </p>
              <div className="mt-auto">
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Dettagli <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study</h2>
            <p className="subtitle-text">
              Storie di successo dei nostri clienti in diversi settori.
            </p>
          </div>
          
          <div className="glass-card p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <ShoppingCart size={24} className="text-nexrank-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ModaStore</h3>
                    <p className="text-gray-400">E-commerce di abbigliamento</p>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold mb-4">+218% di traffico organico in 6 mesi</h4>
                
                <p className="text-gray-300 mb-4">
                  ModaStore ha implementato la nostra soluzione E-commerce ottenendo un incredibile aumento del traffico organico, con un incremento delle vendite del 87%.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Keyword in top 10:</div>
                    <div className="flex-1 ml-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-nexrank-purple h-2.5 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="ml-2 text-sm">+647</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Conversioni:</div>
                    <div className="flex-1 ml-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-nexrank-purple h-2.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="ml-2 text-sm">+87%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-32 text-sm text-gray-400">Bounce rate:</div>
                    <div className="flex-1 ml-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div className="bg-nexrank-purple h-2.5 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                        <span className="ml-2 text-sm">-32%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                  Leggi il case study completo <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden h-full bg-nexrank-dark-blue/50 p-4">
                  <div className="h-full relative">
                    <div className="absolute top-0 left-0 right-0 p-2 bg-nexrank-dark-blue/70 rounded-t-lg text-sm font-medium">
                      Crescita del traffico organico
                    </div>
                    
                    <div className="pt-10 pb-4 px-2 h-full flex flex-col">
                      <div className="flex-grow relative">
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700"></div>
                        <div className="absolute bottom-1 left-0 h-full w-full overflow-hidden">
                          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                            <path
                              d="M0,90 L5,85 L10,88 L15,80 L20,75 L25,70 L30,65 L35,67 L40,55 L45,60 L50,50 L55,45 L60,40 L65,35 L70,38 L75,30 L80,25 L85,30 L90,20 L95,15 L100,10"
                              stroke="#9b87f5"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path
                              d="M0,90 L5,85 L10,88 L15,80 L20,75 L25,70 L30,65 L35,67 L40,55 L45,60 L50,50 L55,45 L60,40 L65,35 L70,38 L75,30 L80,25 L85,30 L90,20 L95,15 L100,10"
                              stroke="url(#casegradient)"
                              strokeWidth="0"
                              fill="url(#casegradient)"
                              opacity="0.2"
                            />
                            <defs>
                              <linearGradient id="casegradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#9b87f5" />
                                <stop offset="100%" stopColor="#9b87f5" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        
                        <div className="absolute bottom-[10%] left-0 flex flex-col items-center">
                          <div className="w-1 h-full bg-gray-600 opacity-50"></div>
                          <div className="mt-2 text-xs text-gray-400">Gen</div>
                        </div>
                        
                        <div className="absolute bottom-[90%] right-0 flex flex-col items-center">
                          <div className="w-1 h-full bg-gray-600 opacity-50"></div>
                          <div className="mt-2 text-xs text-gray-400">Giu</div>
                        </div>
                        
                        <div className="absolute bottom-[50%] left-[50%] flex flex-col items-center">
                          <div className="w-1 h-full bg-nexrank-purple opacity-50"></div>
                          <div className="w-4 h-4 rounded-full bg-nexrank-purple -mt-2 mb-1"></div>
                          <div className="text-xs text-gray-400">Implementazione</div>
                        </div>
                      </div>
                      
                      <div className="mt-12 flex justify-between text-xs text-gray-400">
                        <div>6 mesi fa</div>
                        <div>Oggi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <Briefcase size={20} className="text-nexrank-dark" />
                </div>
                <div>
                  <h3 className="font-semibold">ConsulenzaLegal</h3>
                  <p className="text-sm text-gray-400">Studio legale</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">+342%</span>
                <span className="text-gray-400 ml-2">lead qualificati</span>
              </div>
              <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                Vedi caso <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <Award size={20} className="text-nexrank-dark" />
                </div>
                <div>
                  <h3 className="font-semibold">HotelLuxury</h3>
                  <p className="text-sm text-gray-400">Catena alberghiera</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">+185%</span>
                <span className="text-gray-400 ml-2">prenotazioni dirette</span>
              </div>
              <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                Vedi caso <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <Building size={20} className="text-nexrank-dark" />
                </div>
                <div>
                  <h3 className="font-semibold">TechCloud</h3>
                  <p className="text-sm text-gray-400">Servizi SaaS</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">+128%</span>
                <span className="text-gray-400 ml-2">conversioni</span>
              </div>
              <Button variant="link" className="text-nexrank-purple p-0 flex items-center group">
                Vedi caso <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
        <div className="section-container relative z-10">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Trova la soluzione perfetta per il tuo business
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contatta i nostri esperti per una consulenza personalizzata.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="primary-button">
                Parla con un esperto
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="text-nexrank-light border-nexrank-light/30 hover:bg-nexrank-light/10">
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
