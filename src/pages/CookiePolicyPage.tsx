import SEOHead from "@/components/SEOHead";
import ImmersiveBackground from "@/components/ImmersiveBackground";

const CookiePolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Cookie Policy | Singularity Dream"
        description="Informativa sui cookie utilizzati da Singularity Dream. Scopri quali cookie utilizziamo e come gestire le tue preferenze."
        keywords="cookie policy, cookie, privacy, gestione cookie, preferenze privacy"
      />
      
      <div className="min-h-screen relative overflow-hidden">
        <ImmersiveBackground />
        
        <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-background/80 dark:bg-background/60 rounded-2xl shadow-2xl border border-border/50 p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Data di ultimo aggiornamento: 28 novembre 2025
              </p>

              <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <section>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Questa Cookie Policy spiega cosa sono i cookie, come li utilizziamo sul sito singularitydream.it e come puoi gestire le tue preferenze sui cookie.
                  </p>
                  
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Titolare del Trattamento</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      <strong>Singularity Dream</strong><br />
                      Via Augusto Righi 9, 22100, Como, Italia<br />
                      Email: <a href="mailto:info.singularityy@gmail.com" className="text-primary hover:underline">info.singularityy@gmail.com</a><br />
                      Telefono: <a href="tel:+393488664662" className="text-primary hover:underline">+39 348 866 4662</a>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Cosa sono i Cookie</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e ricordare informazioni sulla tua visita, come le tue preferenze e la lingua selezionata, rendendo la tua esperienza di navigazione più efficiente e personalizzata.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipi di Cookie che Utilizziamo</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Tecnici Necessari</h3>
                      <p className="text-foreground/90 leading-relaxed mb-3">
                        Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati nei nostri sistemi. Vengono generalmente impostati solo in risposta ad azioni da te effettuate che costituiscono una richiesta di servizi.
                      </p>
                      
                      <div className="mt-3 space-y-2">
                        <div className="text-sm">
                          <p className="text-foreground/90"><strong>Nome cookie:</strong> cookieConsent</p>
                          <p className="text-foreground/90"><strong>Finalità:</strong> Memorizzare le tue preferenze sui cookie</p>
                          <p className="text-foreground/90"><strong>Durata:</strong> 365 giorni</p>
                          <p className="text-foreground/90"><strong>Impostato da:</strong> singularitydream.it (first-party)</p>
                          <p className="text-foreground/90"><strong>Base giuridica:</strong> Necessità tecnica (Art. 6.1.f GDPR)</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Analytics</h3>
                      <p className="text-foreground/90 leading-relaxed mb-3">
                        Utilizziamo Google Analytics per raccogliere informazioni anonime su come i visitatori utilizzano il nostro sito. Questi cookie ci aiutano a migliorare il funzionamento del sito web analizzando quali pagine vengono visitate più frequentemente e come gli utenti navigano nel sito.
                      </p>
                      
                      <div className="mt-3 space-y-3 text-sm">
                        <div>
                          <p className="text-foreground/90"><strong>Nome cookie:</strong> _ga</p>
                          <p className="text-foreground/90"><strong>Finalità:</strong> Distinguere gli utenti e raccogliere statistiche anonime sul comportamento di navigazione</p>
                          <p className="text-foreground/90"><strong>Durata:</strong> 2 anni (730 giorni)</p>
                          <p className="text-foreground/90"><strong>Impostato da:</strong> Google Analytics (third-party)</p>
                          <p className="text-foreground/90"><strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR)</p>
                        </div>
                        
                        <div>
                          <p className="text-foreground/90"><strong>Nome cookie:</strong> _gid</p>
                          <p className="text-foreground/90"><strong>Finalità:</strong> Distinguere gli utenti e raccogliere statistiche sulla sessione di navigazione</p>
                          <p className="text-foreground/90"><strong>Durata:</strong> 24 ore</p>
                          <p className="text-foreground/90"><strong>Impostato da:</strong> Google Analytics (third-party)</p>
                          <p className="text-foreground/90"><strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR)</p>
                        </div>
                        
                        <div>
                          <p className="text-foreground/90"><strong>Nome cookie:</strong> _gat</p>
                          <p className="text-foreground/90"><strong>Finalità:</strong> Limitare la frequenza delle richieste al server di Google Analytics</p>
                          <p className="text-foreground/90"><strong>Durata:</strong> 1 minuto</p>
                          <p className="text-foreground/90"><strong>Impostato da:</strong> Google Analytics (third-party)</p>
                          <p className="text-foreground/90"><strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR)</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                        <p className="text-sm text-foreground/90">
                          <strong>Nota importante:</strong> utilizziamo Google Analytics con <strong>IP anonimizzato</strong> per garantire la massima privacy. Tuttavia, Google LLC (USA) può trattare dati al di fuori dell'UE. Il trasferimento avviene tramite Clausole Contrattuali Standard approvate dalla Commissione Europea.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Cookie Marketing</h3>
                      <p className="text-foreground/90 leading-relaxed mb-3">
                        Attualmente <strong>non utilizziamo</strong> cookie di marketing o remarketing sul nostro sito. Qualora decidessimo di implementarli in futuro, richiederemo sempre il tuo consenso esplicito prima dell'attivazione.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Eventuali cookie di marketing utilizzati in futuro saranno documentati in questa sezione con: nome, finalità, durata, chi li imposta, e base giuridica (sempre consenso esplicito).
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookie di Terze Parti</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Il nostro sito utilizza servizi di terze parti che potrebbero impostare i propri cookie sul tuo dispositivo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li><strong>Google Analytics:</strong> per l'analisi del traffico e del comportamento degli utenti (con IP anonimizzato)</li>
                    <li><strong>Social Media:</strong> quando condividi contenuti sui social network, questi servizi potrebbero impostare i propri cookie</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Questi servizi di terze parti hanno le proprie politiche sulla privacy e sui cookie. Ti consigliamo di consultare le loro politiche per comprendere come utilizzano i tuoi dati.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Come Gestire i Cookie</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Hai il pieno controllo sui cookie e puoi gestire le tue preferenze in diversi modi:
                  </p>
                  
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Preferenze Cookie sul Nostro Sito</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      Puoi modificare le tue preferenze sui cookie in qualsiasi momento cliccando sul pulsante "Preferenze Privacy" presente in basso a sinistra su ogni pagina del sito. Da lì potrai attivare o disattivare singolarmente i cookie analytics e marketing.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Impostazioni del Browser</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      Puoi anche gestire i cookie attraverso le impostazioni del tuo browser. Ecco i link alle guide per i browser più comuni:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                      <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                    </ul>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 p-3 bg-muted/20 rounded">
                    <strong>Nota importante:</strong> disabilitare tutti i cookie, inclusi quelli tecnici necessari, potrebbe influire negativamente sulla funzionalità del sito e sulla tua esperienza di navigazione.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Consenso ai Cookie</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Quando visiti il nostro sito per la prima volta, ti viene mostrato un banner informativo sui cookie. Il consenso ai cookie deve essere:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90 mb-4">
                    <li><strong>Libero:</strong> puoi rifiutare i cookie non necessari senza conseguenze sulla navigazione base</li>
                    <li><strong>Specifico:</strong> puoi scegliere separatamente per cookie tecnici, analytics e marketing</li>
                    <li><strong>Informato:</strong> ti forniamo informazioni chiare su cosa fanno i cookie</li>
                    <li><strong>Revocabile:</strong> puoi modificare le tue preferenze in qualsiasi momento</li>
                  </ul>
                  
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Le tue opzioni</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      <li><strong>Accetta tutti:</strong> attiva tutti i cookie (necessari, analytics, marketing se disponibili)</li>
                      <li><strong>Solo necessari:</strong> attiva solo i cookie tecnici indispensabili (analytics e marketing disattivati)</li>
                      <li><strong>Personalizza:</strong> scegli quali categorie di cookie attivare tramite toggle specifici</li>
                    </ul>
                    <p className="text-foreground/90 mt-3">
                      Il tuo consenso viene memorizzato per 12 mesi. Puoi modificarlo in qualsiasi momento tramite il pulsante <strong>"Preferenze Privacy"</strong> in basso a sinistra su ogni pagina.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Aggiornamenti alla Cookie Policy</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento per riflettere cambiamenti nelle tecnologie, nelle leggi applicabili o nelle nostre pratiche operative. Eventuali modifiche saranno pubblicate su questa pagina con la data di aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per rimanere informato su come utilizziamo i cookie.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Collegamenti ad Altre Policy</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Per informazioni più dettagliate sul trattamento dei tuoi dati personali, consulta la nostra <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. Per i termini generali di utilizzo del sito, consulta i nostri <a href="/terms" className="text-primary hover:underline">Termini e Condizioni</a>.
                  </p>
                </section>

                <section className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contatti</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Per qualsiasi domanda o richiesta riguardo questa cookie policy o la gestione dei cookie, contattaci:
                  </p>
                  <a 
                    href="mailto:info.singularityy@gmail.com" 
                    className="text-primary hover:underline font-semibold text-lg inline-block mt-2"
                  >
                    info.singularityy@gmail.com
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;
