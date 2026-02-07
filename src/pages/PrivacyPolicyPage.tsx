import SEOHead from "@/components/SEOHead";
import ImmersiveBackground from "@/components/ImmersiveBackground";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Singularity Dream"
        description="Informativa sulla privacy di Singularity Dream. Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
        keywords="privacy policy, protezione dati, GDPR, privacy, dati personali"
      />
      
      <div className="min-h-screen relative overflow-hidden">
        <ImmersiveBackground />
        
        <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-background/80 dark:bg-background/60 rounded-2xl shadow-2xl border border-border/50 p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Data di ultimo aggiornamento: 28 novembre 2025
              </p>

              <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                <section>
                  <p className="text-foreground/90 leading-relaxed">
                    Singularity Dream (di seguito "noi", "nostro" o "Singularity") rispetta la tua privacy e si impegna a proteggere i dati personali che raccogliamo attraverso il nostro sito web singularitydream.it. Questa informativa sulla privacy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e la normativa italiana vigente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Titolare del Trattamento</h2>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Il titolare del trattamento dei dati è:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
                    <p className="text-foreground/90 leading-relaxed">
                      <strong>Singularity Dream</strong><br />
                      Via Augusto righi 9, 22100, Como, Italia<br />
                      Email: <a href="mailto:info.singularityy@gmail.com" className="text-primary hover:underline">info.singularityy@gmail.com</a><br />
                      Telefono: <a href="tel:+393488664662" className="text-primary hover:underline">+39 348 866 4662</a>
                    </p>
                  </div>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Singularity Dream non ha nominato un Responsabile della Protezione dei Dati (DPO) in quanto non rientra nelle categorie obbligatorie previste dall'art. 37 del GDPR.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dati Raccolti</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Raccogliamo i seguenti tipi di dati personali:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Dati di contatto</h3>
                      <p className="text-foreground/90 leading-relaxed">
                        Nome, cognome, indirizzo email, numero di telefono, servizio di interesse quando ci contatti tramite form di contatto, chatbot o email.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Base giuridica:</strong> esecuzione di misure precontrattuali su tua richiesta o consenso esplicito.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Dati di navigazione</h3>
                      <p className="text-foreground/90 leading-relaxed">
                        Indirizzo IP (anonimizzato), tipo di browser, sistema operativo, pagine visitate, data e ora di accesso, tempo di permanenza sulle pagine (tramite Google Analytics).
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Base giuridica:</strong> consenso per cookie analytics o legittimo interesse per cookie tecnici necessari.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cookie</h3>
                      <p className="text-foreground/90 leading-relaxed">
                        Utilizziamo cookie tecnici necessari per il funzionamento del sito (base giuridica: necessità tecnica) e cookie analytics per migliorare l'esperienza utente (base giuridica: consenso). Per maggiori dettagli consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalità del Trattamento</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    I tuoi dati personali vengono utilizzati per:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li>Rispondere alle tue richieste di informazioni e preventivi</li>
                    <li>Fornire i servizi digitali richiesti (grafica, web design, video editing)</li>
                    <li>Gestire la relazione commerciale con i clienti</li>
                    <li>Migliorare il nostro sito web e i servizi offerti attraverso analisi statistiche anonime</li>
                    <li>Adempiere agli obblighi di legge (contabilità, fiscali)</li>
                    <li>Inviare comunicazioni di marketing solo previo tuo consenso esplicito</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base Giuridica del Trattamento</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Il trattamento dei tuoi dati personali si basa sulle seguenti basi giuridiche conformi al GDPR:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-foreground/90">
                    <li>
                      <strong>Esecuzione di un contratto (Art. 6.1.b GDPR):</strong> quando il trattamento è necessario per eseguire un contratto di cui sei parte o per adottare misure precontrattuali da te richieste (preventivi, richieste di informazioni sui servizi).
                    </li>
                    <li>
                      <strong>Consenso esplicito (Art. 6.1.a GDPR):</strong> per attività di marketing diretto, cookie analytics e marketing, comunicazioni promozionali. Il consenso è sempre revocabile.
                    </li>
                    <li>
                      <strong>Legittimo interesse (Art. 6.1.f GDPR):</strong> per migliorare i nostri servizi, garantire la sicurezza del sito, prevenire frodi e condurre analisi statistiche anonime.
                    </li>
                    <li>
                      <strong>Obbligo legale (Art. 6.1.c GDPR):</strong> per adempiere obblighi fiscali, contabili e di legge (conservazione fatture, comunicazioni agli enti competenti).
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Condivisione dei Dati e Trasferimenti Internazionali</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Non vendiamo né affittiamo i tuoi dati personali a terzi. I tuoi dati possono essere condivisi solo con:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li><strong>Fornitori di servizi:</strong> Google Analytics (con IP anonimizzato) per analisi statistiche</li>
                    <li><strong>Provider hosting:</strong> per la gestione tecnica del sito web</li>
                    <li><strong>Professionisti:</strong> commercialisti o consulenti legali quando necessario per obblighi fiscali o legali</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Tutti i fornitori terzi sono selezionati con cura e rispettano rigorosi standard di sicurezza e privacy conformi al GDPR.
                  </p>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Trasferimenti Extra-UE</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      Alcuni fornitori, come Google LLC, possono trattare i dati al di fuori dell'Unione Europea (Stati Uniti). In tal caso, il trasferimento avviene sulla base delle <strong>Clausole Contrattuali Standard (SCC)</strong> approvate dalla Commissione Europea e di adeguate garanzie di protezione conformi agli articoli 44-49 del GDPR. Puoi richiedere copia delle clausole contrattuali scrivendo a <a href="mailto:info.singularityy@gmail.com" className="text-primary hover:underline">info.singularityy@gmail.com</a>.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Conservazione dei Dati</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Conserviamo i tuoi dati personali solo per il tempo necessario alle finalità per cui sono stati raccolti: dati di contatto per richieste di informazioni vengono conservati per 12 mesi; dati relativi a contratti e preventivi accettati vengono conservati per 10 anni per obblighi fiscali e contabili; dati analytics sono conservati in forma anonima per 26 mesi.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. I Tuoi Diritti</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    In conformità con il GDPR, hai i seguenti diritti:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li><strong>Diritto di accesso:</strong> puoi richiedere una copia dei dati personali che deteniamo su di te</li>
                    <li><strong>Diritto di rettifica:</strong> puoi richiedere la correzione di dati inesatti o incompleti</li>
                    <li><strong>Diritto alla cancellazione:</strong> puoi richiedere la cancellazione dei tuoi dati personali</li>
                    <li><strong>Diritto di limitazione:</strong> puoi richiedere di limitare il trattamento dei tuoi dati</li>
                    <li><strong>Diritto alla portabilità:</strong> puoi richiedere di ricevere i tuoi dati in formato strutturato</li>
                    <li><strong>Diritto di opposizione:</strong> puoi opporti al trattamento dei tuoi dati per finalità di marketing</li>
                    <li><strong>Diritto di revoca del consenso:</strong> puoi revocare il consenso in qualsiasi momento</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Per esercitare questi diritti, contattaci all'indirizzo email: <a href="mailto:info.singularityy@gmail.com" className="text-primary hover:underline">info.singularityy@gmail.com</a>
                  </p>
                  
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Come revocare il consenso</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      Puoi revocare il tuo consenso in qualsiasi momento tramite:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/90">
                      <li>Il pulsante <strong>"Preferenze Privacy"</strong> presente in basso a sinistra su ogni pagina del sito</li>
                      <li>Inviando una richiesta via email a <a href="mailto:info.singularityy@gmail.com" className="text-primary hover:underline">info.singularityy@gmail.com</a></li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      La revoca del consenso non pregiudica la liceità del trattamento basato sul consenso prima della revoca.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Sicurezza dei Dati</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali da accesso non autorizzato, perdita, distruzione o alterazione. Tutte le comunicazioni via email contenenti dati sensibili vengono gestite con protocolli sicuri.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookie</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Per informazioni dettagliate sui cookie utilizzati dal nostro sito, consulta la nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Trattamento Dati tramite Form di Contatto e Chatbot</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Quando utilizzi il form di contatto o il chatbot presente sul nostro sito, raccogliamo i seguenti dati:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li><strong>Dati forniti volontariamente:</strong> nome, email, servizio di interesse, messaggio/richiesta</li>
                    <li><strong>Finalità:</strong> rispondere alle tue richieste, fornire preventivi, gestire la relazione commerciale</li>
                    <li><strong>Base giuridica:</strong> esecuzione di misure precontrattuali su tua richiesta</li>
                    <li><strong>Conservazione:</strong> 12 mesi per richieste di informazioni, 10 anni per contratti conclusi (obbligo fiscale)</li>
                    <li><strong>Sicurezza:</strong> i dati vengono trasmessi tramite connessione HTTPS crittografata e gestiti con EmailJS</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Non utilizziamo i tuoi dati per finalità diverse da quelle dichiarate senza il tuo consenso esplicito.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifiche alla Privacy Policy</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Ci riserviamo il diritto di modificare questa privacy policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per rimanere informato su come proteggiamo i tuoi dati.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Reclami</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Se ritieni che il trattamento dei tuoi dati personali violi il GDPR, hai il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali italiana.
                  </p>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                    <p className="text-foreground/90 leading-relaxed">
                      <strong>Garante per la Protezione dei Dati Personali</strong><br />
                      Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a><br />
                      Email: <a href="mailto:protocollo@gpdp.it" className="text-primary hover:underline">protocollo@gpdp.it</a><br />
                      PEC: <a href="mailto:protocollo@pec.gpdp.it" className="text-primary hover:underline">protocollo@pec.gpdp.it</a><br />
                      Indirizzo: Piazza Venezia, 11 - 00187 Roma
                    </p>
                  </div>
                </section>

                <section className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contatti</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Per qualsiasi domanda o richiesta riguardo questa privacy policy o il trattamento dei tuoi dati personali, contattaci:
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

export default PrivacyPolicyPage;
