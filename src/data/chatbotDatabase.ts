export interface FAQItem {
    question: string;
    answer: string;
    keywords: string[];
    category?: 'chi-siamo' | 'grafica' | 'web' | 'video' | 'sociale' | 'prezzi' | 'contatti' | 'tecnico' | 'legal' | 'fiducia' | 'chiacchiere';
}

export const chatbotDatabase: FAQItem[] = [
    // --- CHI SIAMO & TEAM ---
    {
        question: "Chi è Singularity Dream?",
        answer: "Singularity Dream è un progetto creativo d'avanguardia fondato da Lorenzo (18 anni) e Luca (19 anni). Siamo specializzati in grafica, web design e video editing, portando una visione giovane e tecnologica nel mondo digitale.",
        keywords: ["chi siete", "chi siamo", "cos'è singularity", "progetto", "fondatori", "storia", "singularity dream", "cosa fate", "che fate", "chi siete voi", "chi sono i fondatori", "società", "chi siete?", "presentazione", "staff", "lavorate", "servizi", "business", "progetto singularity", "creativi", "agenzia"],
        category: 'chi-siamo'
    },
    {
        question: "Chi è Lorenzo?",
        answer: "Lorenzo (18 anni) è il Founder & Creative Director di Singularity Dream. Si occupa della direzione artistica, del coordinamento dei progetti e della visione strategica. È l'anima creativa che trasforma le idee in concetti visivi potenti.",
        keywords: ["lorenzo", "lorenz", "lore", "chi è lorenzo", "chi e lorenzo", "coofondatore lorenzo", "fondatore lorenzo", "capo", "creativo"],
        category: 'chi-siamo'
    },
    {
        question: "Chi è Luca?",
        answer: "Luca (19 anni) è il Co-Founder & Visual Designer. È l'esperto tecnico dietro le grafiche e i montaggi video, con una precisione maniacale per il dettaglio e l'estetica moderna.",
        keywords: ["luca", "chi è luca", "chi e luca", "designer", "coofondatore luca", "fondatore luca", "montaggio", "video editor"],
        category: 'chi-siamo'
    },
    {
        question: "Perché avete fondato Singularity Dream?",
        answer: "Abbiamo fondato Singularity Dream per colmare il divario tra la creatività giovane e le necessità aziendali. Vogliamo dimostrare che l'età è solo un numero e che la passione tecnologica unita alla visione artistica può creare risultati d'eccellenza che le grandi agenzie tradizionali spesso trascurano.",
        keywords: ["perché", "perche", "motivo", "visione", "passione", "perché lo fate", "scopo", "obiettivo", "storia", "nascita"],
        category: 'chi-siamo'
    },
    {
        question: "Cosa rende speciali Lorenzo e Luca?",
        answer: "Lorenzo e Luca uniscono la velocità di esecuzione della Generazione Z alla competenza tecnica professionale. Lorenzo cura l'anima dei progetti, mentre Luca ne rifinisce la struttura tecnica. Non siamo solo 'ragazzi', siamo professionisti che amano ciò che fanno.",
        keywords: ["speciali", "perché voi", "vantaggi", "competenze", "differenza", "meglio di altri", "professionalità"],
        category: 'chi-siamo'
    },

    // --- LEGAL & FISCALE ---
    {
        question: "Avete la Partita IVA?",
        answer: "Attualmente operiamo tramite prestazione occasionale in piena regola con la normativa italiana. È un regime perfettamente legale che ci permette di emettere ricevute regolari. Stiamo ultimando le pratiche per l'apertura formale della Partita IVA per espandere ulteriormente i nostri servizi!",
        keywords: ["partita iva", "iva", "p.iva", "piva", "regola", "prestazione occasionale", "fiscale", "ricevuta", "legale"],
        category: 'legal'
    },
    {
        question: "Emettete ricevuta o fattura?",
        answer: "Sì, emettiamo una ricevuta fiscale per prestazione occasionale per ogni lavoro svolto. Ogni pagamento è tracciato e regolare secondo le leggi vigenti.",
        keywords: ["fattura", "ricevuta", "pagamento regolare", "fiscale", "documentazione", "fogli", "carte", "documenti"],
        category: 'legal'
    },

    // --- FIDUCIA & SICUREZZA ---
    {
        question: "Il sito è sicuro?",
        answer: "Assolutamente sì. Il nostro sito utilizza il protocollo HTTPS con certificato SSL crittografato. I tuoi dati sono protetti e i pagamenti (tramite PayPal o Bonifico) seguono i massimi standard di sicurezza bancaria.",
        keywords: ["sicuro", "sicurezza", "affidabile", "protezione", "hacker", "virus", "sito sicuro", "è sicuro?", "e sicuro?", "privacy", "dati", "comprare", "acquistare"],
        category: 'fiducia'
    },
    {
        question: "Mi posso fidare ad acquistare da voi?",
        answer: "Certamente! La trasparenza è il nostro valore principale. Puoi vedere i nostri lavori nel portfolio, leggere i nomi dei clienti con cui abbiamo collaborato (come il Comune di Capiago Intimiano) e contattarci direttamente per qualsiasi dubbio. Ogni progetto è tutelato da un accordo formale.",
        keywords: ["fidare", "fiducia", "truffa", "sicuro", "seri", "serietà", "affidabilità", "comprare", "acquistare", "soldi", "anticipo", "regolari", "onesti", "pagare", "sicurezza acquisto"],
        category: 'fiducia'
    },
    {
        question: "Avete delle recensioni?",
        answer: "Abbiamo ricevuto feedback eccellenti da realtà locali e privati che hanno apprezzato la nostra velocità e cura del dettaglio. Puoi trovare testimonianze dei nostri lavori nella sezione portfolio e sui nostri canali social!",
        keywords: ["recensioni", "feedback", "opinioni", "cosa dicono di voi", "testimonianze", "recensione", "pareri", "clienti dicono"],
        category: 'fiducia'
    },

    // --- PRIVACY & COOKIES ---
    {
        question: "Offrite privacy per i miei dati?",
        answer: "La tua privacy è fondamentale. Trattiamo i dati solo per fini lavorativi e non cediamo nulla a terzi. Seguiamo le linee guida del GDPR per la protezione delle informazioni personali.",
        keywords: ["privacy", "dati personali", "gdpr", "trattamento dati", "sicuro", "nascosto", "segreto"],
        category: 'legal'
    },
    {
        question: "Il sito usa i cookie?",
        answer: "Utilizziamo solo cookie tecnici necessari al funzionamento del sito e cookie analitici anonimizzati per capire come migliorare l'esperienza utente. Puoi gestire le tue preferenze tramite il banner dedicato.",
        keywords: ["cookie", "cookies", "coockie", "cokie", "miei dati", "preferenze", "tracciamento"],
        category: 'legal'
    },

    // --- SERVIZI WEB & MIGLIORAMENTI ---
    {
        question: "Potete migliorare il mio sito esistente?",
        answer: "Certamente! Possiamo fare un restyling completo, ottimizzare la velocità (SEO) o aggiungere nuove funzionalità. Che il tuo sito sia vecchio o solo da aggiornare, abbiamo la soluzione per renderlo moderno e performante.",
        keywords: ["migliorre", "migliorare", "ottimizzare", "rifare", "sito vecchio", "sito esistente", "aggiornare", "modificare", "veloce", "lento", "aggiustare", "sistemare", "rimodernare", "nuovo sito", "cambiare", "migliorare sito", "abbellire", "rifare sito"],
        category: 'web'
    },
    {
        question: "Potete migliorare il mio logo o la mia grafica?",
        answer: "Sì! Offriamo servizi di restyling del marchio. Se hai già un logo ma sembra datato, lo modernizziamo mantenendo la tua identità ma rendendolo accattivante per il mercato attuale.",
        keywords: ["migliorare logo", "rifare logo", "nuovo logo", "modernizzare grafica", "restyling logo", "migliorare grafica", "cambiare logo", "aggiornare logo"],
        category: 'grafica'
    },
    {
        question: "Potete migliorare i miei video o il mio editing?",
        answer: "Senza dubbio. Possiamo riprendere i tuoi vecchi video per migliorarne il montaggio, aggiungere effetti speciali, fare color grading o semplicemente renderli più adatti ai social media attuali.",
        keywords: ["migliorare video", "rifare montaggio", "editing video meglio", "migliorare editing", "video più belli", "video social", "rielaborare video"],
        category: 'video'
    },
    {
        question: "Vi occupate anche di Social Media Management?",
        answer: "Sì, aiutiamo aziende e privati a gestire i propri profili Facebook e Instagram, creando contenuti visuali (post, storie, reels) che catturano l'attenzione e aumentano i follower.",
        keywords: ["social", "gestione social", "facebook", "instagram", "tiktok", "reels", "post", "follower", "gestire profili", "social media", "marketing social"],
        category: 'sociale'
    },
    {
        question: "Il mio sito è lento, potete aiutarmi?",
        answer: "Sì! Analizziamo il codice e le immagini del tuo sito per renderlo fulmineo. Un sito veloce non solo piace agli utenti, ma viene premiato da Google nel posizionamento.",
        keywords: ["lento", "velocizzare", "veloce", "prestazioni", "caricamento", "ottimizzazione", "google", "seo"],
        category: 'web'
    },
    {
        question: "Che tipo di siti web realizzate?",
        answer: "Realizziamo siti vetrina moderni, e-commerce completi, landing page per campagne marketing e portfolio per artisti. Usiamo tecnologie d'avanguardia per garantire la massima velocità.",
        keywords: ["sito", "siti web", "ecommerce", "online", "negozio", "che siti fate", "quali siti", "creazione siti", "sviluppo web", "web design"],
        category: 'web'
    },
    {
        question: "Realizzate siti e-commerce?",
        answer: "Sì, realizziamo e-commerce completi a partire da €499. Includiamo configurazione dei pagamenti (Stripe, PayPal, Apple Pay), pannello di controllo per gestire i prodotti e formazione per imparare a usarlo in autonomia.",
        keywords: ["ecommerce", "e-commerce", "vendere online", "negozio online", "shop", "carrello", "pagamenti online", "prezzo ecommerce", "costo e-commerce"],
        category: 'web'
    },
    {
        question: "Cosa sono le Landing Page?",
        answer: "Le Landing Page sono siti a pagina singola studiati per massimizzare le conversioni (vendite o contatti). Sono perfette per campagne pubblicitarie o lancio di specifici prodotti/servizi.",
        keywords: ["landing", "landing page", "pagina singola", "sito pubblicità", "conversione", "leads", "contatti sito"],
        category: 'web'
    },
    {
        question: "Offrite anche l'hosting e il dominio?",
        answer: "Certamente. Ci occupiamo di tutta la parte tecnica: registrazione del dominio (.it, .com, ecc.), configurazione dell'hosting professionale e setup delle email aziendali personalizzate.",
        keywords: ["hosting", "dominio", "nome sito", "email aziendale", "server", "spazio web", "mantenimento", "costo annuale"],
        category: 'web'
    },
    {
        question: "Quanto costa un sito web?",
        answer: "I nostri siti vetrina partono da €209, mentre gli e-commerce da €499. Ogni progetto è personalizzato: contattaci per un preventivo gratuito su misura per le tue esigenze!",
        keywords: ["prezzo sito", "costo sito", "quanto costa un sito", "prezzi web", "preventivo sito", "costi", "prezzi", "quanto costano", "costano", "listino"],
        category: 'prezzi'
    },
    {
        question: "Che grafiche realizzate?",
        answer: "Ci occupiamo di grafica a 360°: loghi e brand identity, biglietti da visita, volantini, brochure, mockup per abbigliamento e grafiche per social media. Ogni design è realizzato su misura per il tuo stile.",
        keywords: ["grafica", "grafiche", "che grafiche fate", "quali grafiche", "loghi", "volantini", "biglietti da visita", "mockup", "brochure", "identità visiva", "design", "disegni"],
        category: 'grafica'
    },
    {
        question: "Cosa sono i Mockup e li realizzate?",
        answer: "Sì, realizziamo mockup professionali in alta definizione. I mockup sono anteprime realistiche di come apparirà il tuo logo o prodotto su magliette, cappellini, insegne o packaging. Sono fondamentali per visualizzare l'impatto reale del brand.",
        keywords: ["mockup", "anteprima", "mock up", "logo maglietta", "abbigliamento", "gadget", "packaging", "rendering", "loghi vestiti"],
        category: 'grafica'
    },
    {
        question: "Fate brochure e volantini?",
        answer: "Assolutamente sì. Progettiamo brochure informative, volantini pubblicitari (flyer) e cataloghi prodotti pronti per la stampa. Curiamo layout, spaziatura e gerarchia visiva per rendere il tuo messaggio leggibile e accattivante.",
        keywords: ["brochure", "volantini", "flyer", "cataloghi", "pieghevoli", "stampa", "materiale cartaceo", "prezzo volantini", "costo brochure"],
        category: 'grafica'
    },
    {
        question: "Progettate biglietti da visita?",
        answer: "Sì, i biglietti da visita sono il primo punto di contatto fisico. Creiamo design moderni che rispecchiano la tua identità e ti forniamo il file pronto per la tipografia con le corrette abbondanze di stampa.",
        keywords: ["biglietti da visita", "business card", "biglietto", "contatto fisico", "stampa biglietti", "prezzo biglietti da visita"],
        category: 'grafica'
    },
    {
        question: "Qual è la differenza tra Logo e Brand Identity?",
        answer: "Il logo è un singolo simbolo. La Brand Identity è l'intero sistema visivo: colori, font, icone e toni di voce. Noi consigliamo sempre il pacchetto di identità completa per una presenza professionale coerente.",
        keywords: ["differenza logo", "brand identity", "identità visiva", "immagine coordinata", "pacchetto grafico", "perché identità"],
        category: 'grafica'
    },
    {
        question: "Quanto costano le grafiche?",
        answer: "Le nostre grafiche partono da €109 per un logo professionale. Per progetti più ampi come volantini o brochure, offriamo preventivi personalizzati in base alla complessità e al numero di materiali richiesti.",
        keywords: ["prezzo grafica", "costo grafica", "costi grafica", "quanto costa un logo", "prezzo logo", "listino prezzi grafica", "quanto costano"],
        category: 'prezzi'
    },
    {
        question: "Che tipo di video editing offrite?",
        answer: "Offriamo montaggio video HD per YouTube, contenuti per social media (TikTok/Reels), video aziendali, montaggio eventi e post-produzione cinematografica con color grading e sound design.",
        keywords: ["video", "video editing", "montaggio video", "che video fate", "montaggio", "editing", "youtube", "tiktok", "reels", "aziendali", "eventi", "filmati"],
        category: 'video'
    },
    {
        question: "Fate video per Reels, TikTok e YouTube Shorts?",
        answer: "È la nostra specialità! Creiamo video verticali dinamici, sottotitolati e con musica di tendenza, ottimizzati per catturare l'attenzione nei primi 3 secondi e diventare virali sui social.",
        keywords: ["reels", "shorts", "tiktok", "video verticali", "social video", "video brevi", "sottotitoli video", "editing dinamico"],
        category: 'video'
    },
    {
        question: "Cos'è il Video Editing 4K?",
        answer: "Offriamo montaggio video in risoluzione 4K per la massima qualità cinematografica. Ideale per matrimoni, eventi aziendali e presentazioni che richiedono un dettaglio visivo superiore.",
        keywords: ["4k", "qualità massima", "video hd", "montaggio professionale", "cinematic", "risoluzione", "video eventi"],
        category: 'video'
    },
    {
        question: "Gestite canali YouTube?",
        answer: "Non ci limitiamo a montare i video: possiamo aiutarti nella strategia del canale, creazione di miniature (thumbnail) e ottimizzazione dei titoli per la ricerca (YouTube SEO).",
        keywords: ["youtube", "gestione canale", "miniature", "thumbnail", "copertine video", "seo youtube", "crescere su youtube"],
        category: 'video'
    },
    {
        question: "Quanto costa il video editing?",
        answer: "Abbiamo tre pacchetti principali: Social (€54.90 per 6 video), Aziendale (€64.90 per 5 video) e Avanzato (€69.00 per 5 video 4K). I singoli video partono da soli €9.99!",
        keywords: ["prezzo video", "costo video", "quanto costa montare un video", "prezzi video editing", "quanto costano i video", "costi", "pacchetti video"],
        category: 'prezzi'
    },
    {
        question: "Cos'è il portfolio?",
        answer: "Il nostro portfolio è la raccolta dei nostri migliori lavori di grafica, web e video. È la prova concreta della nostra qualità e del nostro stile creativo. Puoi vederlo navigando nella sezione dedicata del sito!",
        keywords: ["portfolio", "lavori", "esempi", "portfol", "portofolio"],
        category: 'web'
    },

    // --- GRAFICA & LOGHI ---
    {
        question: "Quanto costa un logo?",
        answer: "I nostri pacchetti logo partono da €109. Offriamo diverse opzioni: dal logo base al branding completo con palette colori e font coordinati.",
        keywords: ["prezzo logo", "costo logo", "quanto costa un logo", "prezzi grafica", "economico", "logo economico", "loghi", "disegno logo"],
        category: 'prezzi'
    },
    {
        question: "In che formati mi date i file?",
        answer: "Ti forniamo sempre i file vettoriali originali (AI, SVG) che puoi ingrandire quanto vuoi senza perdere qualità, oltre ai classici PNG e JPG per uso web e social.",
        keywords: ["formati", "file", "vettoriale", "vettoriali", "ai", "svg", "png", "jpg", "stampa", "alta risoluzione"],
        category: 'tecnico'
    },

    // --- PROBLEMI & ASSISTENZA ---
    {
        question: "Ho un problema con il sito/servizio, cosa faccio?",
        answer: "Siamo qui per aiutarti! Descrivi il problema in chat o inviaci un messaggio tramite il form di contatto. Rispondiamo sempre in tempi brevissimi per risolvere ogni intoppo tecnico.",
        keywords: ["problema", "errore", "non funziona", "rotto", "aiuto", "assistenza", "bug", "sbagliato", "malfunzionamento", "difficoltà"],
        category: 'tecnico'
    },
    {
        question: "Cosa fate per l'impegno sociale?",
        answer: "Singularity Dream sostiene attivamente il sociale: doniamo il 30% dei nostri profitti a cause benefiche e offriamo assistenza informatica gratuita ad anziani per combattere il divario digitale.",
        keywords: ["sociale", "impegno sociale", "beneficenza", "anziani", "gratis", "donazioni", "aiuto", "cosa fate per il sociale", "missione", "benefico", "aiutare", "30%", "regalare", "offrire"],
        category: 'sociale'
    },
    {
        question: "Chi sono i vostri clienti?",
        answer: "Abbiamo collaborato con diverse realtà, tra cui il Comune di Capiago Intimiano, piccole imprese locali e creator digitali. La nostra affidabilità è testimoniata dai progetti che puoi vedere nel portfolio.",
        keywords: ["clienti", "chi ha lavorato con voi", "referenze", "fiducia", "comune", "aziende", "chi vi conosce"],
        category: 'fiducia'
    },
    {
        question: "Offrite assistenza gratuita?",
        answer: "Sì, offriamo assistenza informatica gratuita limitata ad anziani e persone in difficoltà economica come parte della nostra missione sociale.",
        keywords: ["gratis", "gratuito", "assistenza gratuita", "aiuto gratis", "anziani", "sociale", "beneficenza"],
        category: 'sociale'
    },

    // --- CHIACCHIERE (SMALL TALK) ---
    {
        question: "Ciao!",
        answer: "Ciao! Sono l'assistente di Singularity Dream. Come posso aiutarti oggi a creare qualcosa di straordinario?",
        keywords: ["ciao", "buongiorno", "buonasera", "hey", "salve", "we", "uè", "hola"],
        category: 'chiacchiere'
    },
    {
        question: "Grazie mille!",
        answer: "È stato un piacere! Se hai altre domande su servizi, prezzi o curiosità, chiedi pure. Altrimenti, ci trovi ai contatti ufficiali!",
        keywords: ["grazie", "gentilissimo", "gentile", "ok", "apposto", "perfetto", "va bene", "grazie mille", "thx", "grazie ancora", "graz", "gentil", "ottimo"],
        category: 'chiacchiere'
    },
    {
        question: "Sei un robot?",
        answer: "Sono un assistente virtuale istruito per conoscere ogni dettaglio di Singularity Dream. Non sono consapevole, ma sono molto efficiente nel darti le risposte che cerchi!",
        keywords: ["robot", "ai", "intelligenza artificiale", "sei un umano", "chi sei", "bot"],
        category: 'chiacchiere'
    },
    {
        question: "Fate posizionamento sui motori di ricerca (SEO)?",
        answer: "Sì, la SEO è integrata in ogni nostro sito. Ottimizziamo la velocità di caricamento, la struttura dei dati, i meta-tag e forniamo suggerimenti per i contenuti.",
        keywords: ["seo", "google", "primi su google", "indicizzazione", "trovare su google", "visibilità", "posizionamento web", "marketing", "ads", "advertising", "scalare"],
        category: 'tecnico'
    },
    {
        question: "Quali strumenti usate per la grafica?",
        answer: "Utilizziamo la suite Adobe (Photoshop, Illustrator, Premiere Pro) e Figma per garantire standard professionali in ogni progetto.",
        keywords: ["photoshop", "illustrator", "adobe", "figma", "strumenti grafica", "programmi", "software design", "design tool", "disegno", "vettoriale"],
        category: 'tecnico'
    },
    {
        question: "Potete fare consulenza strategica?",
        answer: "Certamente. Oltre alla realizzazione tecnica, offriamo consulenza per definire la brand identity e la strategia di comunicazione digitale più efficace per il tuo business.",
        keywords: ["consulenza", "strategia", "consiglio", "idee", "aiuto progetto", "branding strategy", "marketing aiuto"],
        category: 'chi-siamo'
    },
    {
        question: "Quali sono i vostri tempi di risposta?",
        answer: "Rispondiamo a ogni richiesta entro 24 ore lavorative. La velocità di comunicazione è uno dei nostri punti di forza per garantire un workflow fluido.",
        keywords: ["tempo risposta", "quando rispondete", "veloci", "lenti", "quando mi richiamate", "email risposta", "contatto tempo"],
        category: 'contatti'
    }
];
