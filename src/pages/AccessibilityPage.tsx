import SEOHead from "@/components/SEOHead";
import ImmersiveBackground from "@/components/ImmersiveBackground";

const AccessibilityPage = () => {
    return (
        <>
            <SEOHead
                title="Dichiarazione di Accessibilità | Singularity Dream"
                description="Dichiarazione di accessibilità di Singularity Dream in conformità con l'European Accessibility Act 2025/2026."
                keywords="accessibilità, dichiarazione accessibilità, European Accessibility Act, inclusività digitale"
            />

            <div className="min-h-screen relative overflow-hidden">
                <ImmersiveBackground />

                <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="backdrop-blur-md bg-background/80 dark:bg-background/60 rounded-2xl shadow-2xl border border-border/50 p-8 md:p-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Dichiarazione di Accessibilità
                            </h1>

                            <p className="text-muted-foreground mb-8">
                                Ultimo aggiornamento: 8 febbraio 2026
                            </p>

                            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">Il nostro impegno</h2>
                                    <p className="text-foreground/90 leading-relaxed">
                                        Singularity Dream si impegna a rendere il proprio sito web accessibile, conformemente al Regolamento (UE) 2016/2102 ed in linea con i requisiti dell'European Accessibility Act (EAA), recepito dalla normativa italiana (D.Lgs. 76/2020 e s.m.i.).
                                    </p>
                                    <p className="text-foreground/90 leading-relaxed">
                                        Crediamo fermamente che il web debba essere disponibile e accessibile a chiunque, indipendentemente dalle circostanze e dalle abilità, fornendo un sito che sia percepibile, utilizzabile, comprensibile e robusto.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">Stato di conformità</h2>
                                    <p className="text-foreground/90 leading-relaxed">
                                        Questo sito web è parzialmente conforme ai requisiti previsti dalle <strong>WCAG 2.1 (Web Content Accessibility Guidelines)</strong> livello AA. Stiamo lavorando costantemente per migliorare l'esperienza utente e applicare gli standard di accessibilità più elevati.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">Caratteristiche di accessibilità</h2>
                                    <p className="text-foreground/90 leading-relaxed mb-4">
                                        Abbiamo implementato diverse funzionalità per facilitare la navigazione:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                        <li>Contrasto cromatico ottimizzato per una chiara leggibilità</li>
                                        <li>Supporto per la navigazione tramite tastiera</li>
                                        <li>Utilizzo di tag semantic HTML per facilitare i lettori di schermo (screen readers)</li>
                                        <li>Ridotto utilizzo di animazioni invasive o possibilità di sospenderle</li>
                                        <li>Design responsivo che si adatta a diverse risoluzioni e dispositivi</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">Meccanismo di feedback</h2>
                                    <p className="text-foreground/90 leading-relaxed">
                                        Nonostante i nostri sforzi, potrebbero esserci ancora dei limiti in alcune parti del sito. Se riscontri difficoltà nell'accedere a qualsiasi parte di questo sito web, ti preghiamo di contattarci.
                                    </p>
                                    <p className="text-foreground/90 leading-relaxed mt-4">
                                        <strong>Email:</strong> <a href="mailto:info.singularityy@gmail.com" className="text-primary hover:underline">info.singularityy@gmail.com</a>
                                    </p>
                                </section>

                                <section className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
                                    <h2 className="text-2xl font-semibold text-foreground mb-4">Procedura di conformità</h2>
                                    <p className="text-foreground/90 leading-relaxed">
                                        La presente dichiarazione è stata redatta in data 8 febbraio 2026. Monitoriamo periodicamente il sito per garantire il mantenimento dei requisiti di accessibilità e l'adeguamento alle nuove tecnologie assistive.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccessibilityPage;
