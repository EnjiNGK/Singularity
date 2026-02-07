import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
}

const faqs: FAQItem[] = [
  {
    question: "Chi è Singularity Dream?",
    answer: "Singularity Dream è un progetto professionale fondato da Lorenzo (18 anni) e Luca (19 anni), specializzati in servizi digitali accessibili: grafica, siti web e video editing. Operiamo in tutta Italia con prestazione occasionale regolare. Parte di ogni progetto sostiene iniziative benefiche!",
    keywords: ["chi", "siete", "siamo", "lorenzo", "luca", "anni", "giovane", "fondatore", "storia", "singularity", "dream"]
  },
  {
    question: "Chi sono Lorenzo e Luca?",
    answer: "Lorenzo (18 anni) è il Fondatore & Creative Director, mentre Luca (19 anni) è Co-Founder & Visual Designer. Insieme hanno fondato Singularity Dream per trasformare sogni e idee in progetti digitali concreti, curati e accessibili. Ogni progetto nasce dall'ascolto e dalla collaborazione!",
    keywords: ["lorenzo", "luca", "fondatore", "fondatori", "team", "chi sono"]
  },
  {
    question: "Dove siete?",
    answer: "Operiamo in tutta Italia da remoto! Lavoriamo online permettendoci di servire clienti in ogni regione mantenendo prezzi accessibili. Disponibili Lun-Ven 9:00-18:00.",
    keywords: ["dove", "sede", "ubicazione", "zona", "remoto", "distanza", "italia"]
  },
  {
    question: "Siete una ditta regolare?",
    answer: "Sì, operiamo con prestazione occasionale in piena regola con la normativa italiana. Ogni incarico è tracciato e documentato secondo legge.",
    keywords: ["regolare", "legale", "fattura", "ricevuta", "ditta", "azienda", "partita"]
  },
  {
    question: "Qual è la vostra missione?",
    answer: "La nostra missione è trasformare sogni e idee in progetti digitali concreti, curati e accessibili. Crediamo che la tecnologia debba creare valore anche oltre il business, per questo parte dei nostri profitti sostiene iniziative benefiche. Creare esperienze digitali che brillano di creatività e irradiano un fascino vivace è la nostra passione!",
    keywords: ["missione", "obiettivo", "visione", "valori", "filosofia"]
  },

  {
    question: "Cosa fate per il sociale?",
    answer: "Doniamo il 20% dei nostri profitti a persone bisognose e all'ambiente. Acquistiamo direttamente beni di prima necessità che doniamo personalmente a persone in difficoltà. Offriamo assistenza informatica gratuita ad anziani e persone con difficoltà economiche. Stiamo pianificando un progetto di riforestazione!",
    keywords: ["sociale", "beneficenza", "donazioni", "ambiente", "aiuto", "solidarietà", "impegno"]
  },
  {
    question: "Offrite assistenza gratuita?",
    answer: "Sì! Offriamo assistenza informatica e formazione tecnologica completamente gratuita per anziani e persone in difficoltà economiche. Basta contattarci per ricevere supporto tecnico senza costi.",
    keywords: ["gratuita", "gratis", "anziani", "difficoltà", "assistenza", "free"]
  },
  {
    question: "Posso donare?",
    answer: "Sì! Il link PayPal per donazioni sarà presto disponibile. Il 100% delle donazioni va direttamente a persone bisognose e progetti ambientali. Massima trasparenza garantita!",
    keywords: ["donare", "donazione", "paypal", "supportare", "aiutare"]
  },
  {
    question: "Fate progetti di riforestazione?",
    answer: "Stiamo pianificando un progetto di riforestazione in collaborazione con associazioni ambientaliste. Non appena avremo le risorse necessarie, inizieremo a piantare alberi per contribuire alla rigenerazione di aree degradate. Progetto in fase di sviluppo!",
    keywords: ["riforestazione", "alberi", "ambiente", "verde", "natura", "piantare"]
  },

  {
    question: "Quali servizi offrite?",
    answer: "Offriamo 3 servizi principali: Grafica (logo, branding, materiali promozionali, social media graphics), Siti Web (vetrina, business, e-commerce, portfolio) e Video Editing (social, aziendali, premium, YouTube). Tutto personalizzabile sulle tue esigenze!",
    keywords: ["servizi", "offrite", "fate", "lavoro", "disponibili"]
  },
  {
    question: "Parliamo del servizio grafica",
    answer: "Il nostro servizio grafica include: Logo Base (€109), Branding Completo (€189 - più richiesto!), Pacchetto Premium (€269). Creiamo loghi unici, brand identity complete, materiali marketing, grafiche social. Consegna in 3-10 giorni. File in tutti i formati (AI, SVG, PNG, JPG)!",
    keywords: ["grafica", "grafici", "logo", "design", "loghi"]
  },
  {
    question: "Parliamo del servizio siti web",
    answer: "Creiamo siti web professionali responsive e ottimizzati SEO: Sito Vetrina (€209, 3-5 pagine), Sito Business (€309, 6-10 pagine + blog), E-commerce (€449). Tutti i siti sono responsive, SEO ottimizzati, con hosting incluso il primo anno. Consegna 1-4 settimane!",
    keywords: ["siti", "website", "web", "sito"]
  },
  {
    question: "Parliamo del servizio video editing",
    answer: "Montaggio video professionale di qualità cinematografica: Video Social (€54,90, 30-60 sec ottimizzati per TikTok/Instagram), Video Aziendale (€64,90, 3-5 min), Video Premium (€69,00, 10 min, 4K). Color grading, effetti, musica inclusi. Ottimizzati per YouTube e social!",
    keywords: ["video", "montaggio", "editing", "youtube"]
  },
  {
    question: "In che senso personalizzabile?",
    answer: "Ogni servizio si adatta alle TUE esigenze: scegli colori, stile, funzionalità, tempi. Vuoi un logo minimal? Fatto. Sito con booking system? Fatto. Video 4K con effetti speciali? Fatto. Nessun vincolo di template: creiamo su misura per te!",
    keywords: ["personalizzabile", "personalizzato", "misura", "adattare", "modificare", "su misura"]
  },
  {
    question: "Lavorate con privati o aziende?",
    answer: "Entrambi! Serviamo sia privati che aziende di ogni dimensione, startup e PMI. Ogni progetto è personalizzato per le esigenze specifiche del cliente.",
    keywords: ["privati", "aziende", "imprese", "business", "startup", "pmi"]
  },

  {
    question: "Quanto costa un logo?",
    answer: "I nostri loghi partono da €109,00 con qualità professionale garantita. Offriamo diverse opzioni: Logo Base (€109), Branding Completo con logo + palette colori + font (€189, più richiesto!), Pacchetto Premium completo (€269).",
    keywords: ["logo", "loghi", "prezzo", "costa", "quanto", "costo"]
  },
  {
    question: "Fate loghi minimal?",
    answer: "Certo! Puoi scegliere tra stile minimal, moderno o creativo. Personalizziamo il logo secondo le tue preferenze e il tuo brand! Ogni logo nasce da un'analisi del tuo business.",
    keywords: ["minimal", "minimalista", "stile", "moderno", "creativo", "logo"]
  },
  {
    question: "Posso avere più proposte di logo?",
    answer: "Sì, ogni pacchetto include diverse proposte iniziali tra cui scegliere. Più opzioni per trovare il logo perfetto per il tuo brand!",
    keywords: ["proposte", "opzioni", "scelte", "versioni", "logo"]
  },
  {
    question: "In quanto tempo fate un logo?",
    answer: "Dai 3 ai 7 giorni, in base al pacchetto scelto. Tempi di consegna garantiti! Per urgenze, offriamo anche consegna rapida con supplemento.",
    keywords: ["tempo", "giorni", "veloce", "consegna", "logo", "quando"]
  },
  {
    question: "Posso fare revisioni al logo?",
    answer: "Sì, i pacchetti includono 2-3 revisioni senza costi extra. Nei pacchetti premium, revisioni illimitate. Vogliamo che tu sia completamente soddisfatto!",
    keywords: ["revisioni", "modifiche", "cambiamenti", "correggere", "logo"]
  },
  {
    question: "Mi date i file vettoriali?",
    answer: "Certo! Forniamo tutti i formati professionali: AI, SVG, PNG, JPG. Tutto ciò che ti serve per usare il logo ovunque: stampa, web, social, gadget!",
    keywords: ["vettoriali", "file", "formati", "ai", "svg", "png", "jpg"]
  },
  {
    question: "Fate anche restyling logo?",
    answer: "Sì, possiamo modernizzare o migliorare il tuo logo attuale mantenendo l'identità del brand! Perfetto per chi vuole rinfrescare la propria immagine.",
    keywords: ["restyling", "ridisegnare", "modernizzare", "aggiornare", "logo"]
  },
  {
    question: "Quanto costa un branding completo?",
    answer: "Il nostro branding completo parte da €189,00. Include logo + varianti, palette colori personalizzata, font coordinati e materiali pronti per l'uso (social, stampa)!",
    keywords: ["branding", "brand", "completo", "costo", "prezzo", "identità"]
  },
  {
    question: "Cosa include il pacchetto brand?",
    answer: "Logo + varianti, palette colori personalizzata, font coordinati, materiali pronti per l'uso (social, stampa). Nel pacchetto premium ricevi anche un mini brand manual con tutte le linee guida!",
    keywords: ["include", "pacchetto", "brand", "branding", "cosa"]
  },
  {
    question: "Fate linee guida del brand?",
    answer: "Sì, nel pacchetto premium ricevi un mini brand manual con tutte le linee guida per usare correttamente il tuo brand: logo, colori, font, applicazioni!",
    keywords: ["linee", "guida", "guidelines", "manual", "brand"]
  },
  {
    question: "Create materiali per social media?",
    answer: "Assolutamente! Creiamo grafiche ottimizzate per tutti i social: Instagram, Facebook, LinkedIn, TikTok. Template coordinati con il tuo brand per una comunicazione coerente!",
    keywords: ["social", "instagram", "facebook", "linkedin", "grafiche", "post"]
  },

  {
    question: "Quanto costa un sito base?",
    answer: "Il Sito Vetrina parte da €208,90 con 3-5 pagine professionali e responsive. Include: Home, Chi Siamo, Servizi, Contatti. SEO di base, hosting e dominio inclusi il primo anno!",
    keywords: ["sito", "base", "vetrina", "costa", "prezzo", "quanto"]
  },
  {
    question: "Quante pagine include il sito vetrina?",
    answer: "Generalmente da 3 a 5 pagine: Home, Chi Siamo, Servizi, Contatti, etc. Personalizzabile in base alle tue esigenze! Ogni pagina è ottimizzata per mobile e SEO.",
    keywords: ["pagine", "quante", "include", "sito"]
  },
  {
    question: "Il sito è responsive?",
    answer: "Sì! Tutti i nostri siti funzionano perfettamente su smartphone, tablet e PC. Design responsive garantito al 100%! Testiamo su tutti i dispositivi prima della consegna.",
    keywords: ["responsive", "mobile", "smartphone", "tablet", "cellulare"]
  },
  {
    question: "Fate anche il SEO?",
    answer: "Sì! È incluso un SEO base per farti trovare su Google: meta tags ottimizzati, sitemap, velocità ottimizzata, struttura semantica. Per SEO avanzato, c'è il pacchetto Business!",
    keywords: ["seo", "google", "posizionamento", "ricerca"]
  },
  {
    question: "Include hosting?",
    answer: "Sì! Il primo anno di hosting è incluso nel prezzo. Dominio (.it o .com) e certificato SSL compresi! Dopo il primo anno, offriamo piani di manutenzione convenienti.",
    keywords: ["hosting", "dominio", "server", "include", "ssl"]
  },
  {
    question: "Che differenza c'è tra sito base e business?",
    answer: "Il Business ha più pagine (6-10), SEO avanzato, funzioni aggiuntive come blog, form avanzati, integrazione social. Perfetto per aziende che vogliono crescere online!",
    keywords: ["differenza", "business", "base", "vetrina"]
  },
  {
    question: "Quanto costa un sito business?",
    answer: "Il Sito Business parte da €308,90. Include 6-10 pagine, SEO avanzato, blog integrato, form contatti avanzati. Ideale per aziende e professionisti!",
    keywords: ["business", "costa", "prezzo", "sito"]
  },
  {
    question: "Posso avere un blog nel sito?",
    answer: "Sì! Lo integriamo noi nel tuo sito con un sistema CMS intuitivo. Perfetto per SEO e per tenere aggiornati i tuoi clienti con news e articoli!",
    keywords: ["blog", "articoli", "news", "sito"]
  },
  {
    question: "Fate e-commerce completi?",
    answer: "Certo! E-commerce con gestione prodotti, carrello, pagamenti sicuri (carte, PayPal), dashboard admin per gestire ordini e inventario. Tutto pronto per vendere online!",
    keywords: ["ecommerce", "e-commerce", "shop", "negozio", "vendere"]
  },
  {
    question: "Quanto costa un e-commerce?",
    answer: "Gli e-commerce partono da €449,00. Shop completo con catalogo prodotti, carrello, pagamenti sicuri, gestione ordini. Dashboard facile da usare!",
    keywords: ["ecommerce", "costa", "prezzo", "shop"]
  },
  {
    question: "È facile da gestire l'e-commerce?",
    answer: "Sì! Dashboard intuitiva per aggiungere prodotti, gestire ordini, vedere statistiche. Offriamo anche formazione personalizzata per renderti autonomo!",
    keywords: ["gestire", "facile", "amministrare", "ecommerce"]
  },
  {
    question: "Posso modificare il sito da solo?",
    answer: "Sì! Ti forniamo formazione completa su come gestire contenuti e aggiornare il sito. Sistema CMS intuitivo + supporto tecnico incluso per 30 giorni!",
    keywords: ["modificare", "aggiornare", "cms", "gestire", "autonomia"]
  },
  {
    question: "Create landing page?",
    answer: "Sì! Creiamo landing page ottimizzate per conversioni: campagne marketing, lancio prodotti, lead generation. Design accattivante con call-to-action efficaci!",
    keywords: ["landing", "page", "campagna", "conversioni", "marketing"]
  },
  {
    question: "Fate portfolio digitali?",
    answer: "Certo! Portfolio eleganti per artisti, designer, fotografi, creativi. Gallerie immagini, animazioni fluide, presentazione professionale dei tuoi lavori!",
    keywords: ["portfolio", "digitale", "artista", "fotografo", "creativo"]
  },

  {
    question: "Quanto mi costa editare un video?",
    answer: "Dipende dal tipo di video: Video Social (30-60 sec) da €54,90, Video Aziendale (3-5 min) da €64,90, Video Premium (10 min, 4K) da €69,00. Contattaci per un preventivo personalizzato!",
    keywords: ["video", "costa", "editare", "montaggio", "prezzo", "costo"]
  },
  {
    question: "Montate video per TikTok e Instagram?",
    answer: "Certo! Facciamo montaggi ottimizzati per tutti i social: TikTok, Instagram Reels, YouTube Shorts. Formato verticale (9:16) perfetto per ogni piattaforma con transizioni trendy!",
    keywords: ["tiktok", "instagram", "reels", "social", "shorts", "montare"]
  },
  {
    question: "Fate transizioni ed effetti?",
    answer: "Sì! Includiamo transizioni fluide, effetti moderni, motion graphics. Rendiamo i tuoi video dinamici e professionali con tecniche all'avanguardia!",
    keywords: ["transizioni", "effetti", "animazioni", "dinamico"]
  },
  {
    question: "Posso modificare un video già esistente?",
    answer: "Certo! Basta inviarcelo e ti diciamo cosa possiamo fare. Possiamo editare, tagliare, aggiungere effetti o rifare completamente il montaggio.",
    keywords: ["modificare", "esistente", "già", "fatto", "video"]
  },
  {
    question: "Posso avere un pacchetto di più video?",
    answer: "Sì! Abbiamo pacchetti social molto convenienti per chi ha bisogno di più video al mese. Prezzi vantaggiosi per contenuti ricorrenti!",
    keywords: ["pacchetto", "più", "video", "mensile", "multipli"]
  },
  {
    question: "Fate video aziendali?",
    answer: "Sì! Realizziamo montaggi aziendali professionali: presentazioni, pubblicità, eventi, formazione, testimonial. Qualità cinematografica per comunicare il tuo brand!",
    keywords: ["aziendali", "azienda", "corporate", "business", "video"]
  },
  {
    question: "Quanto durano i video aziendali?",
    answer: "Puoi scegliere da 1 a 10 minuti in base alle tue esigenze. Personalizziamo tutto! Per video più lunghi, contattaci per un preventivo dedicato.",
    keywords: ["durata", "minuti", "lungo", "durano", "video"]
  },
  {
    question: "Fate color grading avanzato?",
    answer: "Sì! Applichiamo color grading professionale o cinematografico per dare al tuo video un look unico. Possiamo replicare stili specifici o creare mood personalizzati!",
    keywords: ["color", "grading", "colori", "cinematografico", "look"]
  },
  {
    question: "Potete aggiungere voiceover?",
    answer: "Certo! Possiamo includere voiceover: puoi fornirci il tuo audio o possiamo suggerire soluzioni professionali. Sincronizzazione perfetta garantita!",
    keywords: ["voiceover", "voce", "doppiaggio", "audio", "narrante"]
  },
  {
    question: "Come vi invio i file video?",
    answer: "Inviaci i file tramite WeTransfer, Google Drive o Dropbox. Supportiamo tutti i formati video comuni (MP4, MOV, AVI, etc.). Ti guidiamo nel processo se hai dubbi!",
    keywords: ["inviare", "file", "materiale", "wetransfer", "drive", "upload"]
  },
  {
    question: "Fate video per YouTube?",
    answer: "Sì! Specializzati in video per YouTube: montaggio professionale, color grading, titoli animati, ottimizzazione audio. Possiamo anche creare miniature accattivanti!",
    keywords: ["youtube", "yt", "video", "canale"]
  },

  {
    question: "Quanto tempo ci vuole?",
    answer: "Logo 3-7 giorni, Sito Vetrina 1-2 settimane, Sito Business 2-3 settimane, E-commerce 3-4 settimane, Video 2-10 giorni. Ti diamo sempre una timeline precisa all'inizio del progetto!",
    keywords: ["tempo", "quanto", "giorni", "settimane", "consegna", "veloce"]
  },
  {
    question: "Come funziona il processo di lavoro?",
    answer: "1) Contatto iniziale e brief gratuito 2) Preventivo e accordo 3) Sviluppo/creazione con aggiornamenti costanti 4) Revisioni e modifiche 5) Consegna finale. Comunicazione continua durante tutto il progetto!",
    keywords: ["processo", "come", "funziona", "lavoro", "fasi", "step"]
  },
  {
    question: "Fate revisioni?",
    answer: "Sì! Ogni pacchetto include 2-3 revisioni specificate nel servizio. Per progetti complessi o pacchetti premium, revisioni illimitate. La tua soddisfazione è la nostra priorità!",
    keywords: ["revisioni", "modifiche", "cambiare", "correzioni"]
  },
  {
    question: "Posso vedere il lavoro in progress?",
    answer: "Assolutamente! Ti aggiorniamo costantemente e ti mostriamo bozze/anteprime durante lo sviluppo. Il tuo feedback è fondamentale per creare esattamente ciò che desideri.",
    keywords: ["progress", "anteprima", "bozza", "vedere", "controllo"]
  },

  {
    question: "Come si paga?",
    answer: "Accettiamo bonifico bancario e PayPal. Generalmente 50% anticipo per iniziare, 50% alla consegna. Pagamenti sicuri e tracciati. Ricevuta regolare inclusa per tutti i lavori!",
    keywords: ["pagare", "pagamento", "bonifico", "paypal", "anticipo"]
  },
  {
    question: "Posso pagare a rate?",
    answer: "Per progetti sopra €300 valutiamo piani di pagamento personalizzati. Contattaci per discutere le opzioni disponibili in base al tuo budget!",
    keywords: ["rate", "rateizzare", "dilazionato", "mensile"]
  },
  {
    question: "I prezzi sono fissi?",
    answer: "I prezzi indicati sono per pacchetti standard. Offriamo preventivi personalizzati per esigenze specifiche. Prezzi trasparenti, nessun costo nascosto! Contattaci per un preventivo su misura.",
    keywords: ["prezzi", "fissi", "variabili", "preventivo", "budget"]
  },
  {
    question: "Fate sconti?",
    answer: "Offriamo pacchetti combinati (es: logo + sito web) a prezzi vantaggiosi. Per clienti ricorrenti o progetti multipli, valutiamo sconti personalizzati. Contattaci!",
    keywords: ["sconti", "sconto", "offerte", "promozioni", "risparmio"]
  },

  {
    question: "Come vi contatto?",
    answer: "📞 Telefono: +39 348 866 4662 | ✉️ Email: info.singularityy@gmail.com | Form contatti sul sito. Rispondiamo entro 24h! Disponibili Lun-Ven 9:00-18:00.",
    keywords: ["contattare", "contattarvi", "parlare", "scrivere", "chiamare", "raggiungere", "contatto"]
  },
  {
    question: "Qual è la vostra email?",
    answer: "La nostra email è info.singularityy@gmail.com - Rispondiamo a tutte le richieste entro 24 ore! Per urgenze, chiamaci al telefono.",
    keywords: ["email", "mail", "indirizzo", "posta"]
  },
  {
    question: "Qual è il vostro numero di telefono?",
    answer: "Puoi chiamarci al +39 348 866 4662. Disponibili Lun-Ven 9:00-18:00. Oppure scrivici via email o form e ti richiamiamo noi!",
    keywords: ["telefono", "numero", "cellulare", "tel", "chiamare"]
  },
  {
    question: "Che orari avete?",
    answer: "Disponibili Lun-Ven 9:00-18:00. Per urgenze fuori orario, contattaci via email o form: ti risponderemo appena possibile. Supporto dedicato per tutti i clienti!",
    keywords: ["orari", "orario", "disponibilità", "quando"]
  },
  {
    question: "Offrite supporto post-consegna?",
    answer: "Sì! 30 giorni di supporto tecnico incluso dopo la consegna. Per assistenza continuativa, offriamo piani di manutenzione mensili. Ti seguiamo anche dopo il progetto!",
    keywords: ["supporto", "assistenza", "manutenzione", "post", "dopo"]
  },

  {
    question: "Perché scegliere voi?",
    answer: "✓ Qualità professionale a prezzi accessibili ✓ Supporto dedicato e comunicazione costante ✓ 20% profitti a beneficenza ✓ Revisioni incluse ✓ Consegna puntuale ✓ Formazione inclusa. Tecnologia che fa la differenza!",
    keywords: ["perché", "scegliere", "vantaggi", "meglio", "perchè"]
  },
  {
    question: "Avete un portfolio?",
    answer: "Sì! Nel nostro portfolio trovi progetti come Vignaioli e Vini (evento), Luxottica Brand Identity, collaborazioni con Grafica Point, UTOPIA (concept art), GITEX Global, Motta Apartments (sito web), e altri. Visita la sezione Portfolio del sito!",
    keywords: ["portfolio", "lavori", "progetti", "esempi", "realizzazioni"]
  },
  {
    question: "Siete affidabili?",
    answer: "Assolutamente! Operiamo in modo regolare e trasparente. Progetti consegnati nei tempi, comunicazione costante, revisioni incluse. La fiducia dei nostri clienti è la nostra priorità!",
    keywords: ["affidabili", "affidabilità", "recensioni", "testimonianze", "fiducia"]
  },
  {
    question: "Quali clienti avete avuto?",
    answer: "Abbiamo collaborato con: Comune di Capiago Intimiano (Vignaioli e Vini), Grafica Point, Motta Apartments, Arte dei Motori, e molti altri. Progetti personali creativi come UTOPIA (Travis Scott) e GITEX Global.",
    keywords: ["clienti", "aziende", "collaborazioni", "lavori", "referenze"]
  },

  {
    question: "Fate anche assistenza informatica?",
    answer: "Sì! Offriamo consulenza informatica, supporto tecnico, risoluzione problemi, installazione software. Per anziani e persone in difficoltà, l'assistenza è completamente gratuita!",
    keywords: ["informatica", "assistenza", "computer", "tecnico", "supporto", "pc"]
  },
  {
    question: "Riparate computer?",
    answer: "Offriamo supporto tecnico per problemi software, installazioni, configurazioni, ottimizzazione prestazioni. Per problemi hardware consigliamo tecnici specializzati, ma possiamo aiutarti nella diagnosi!",
    keywords: ["riparazione", "computer", "pc", "problemi", "rotto"]
  },

  {
    question: "Mi serve un lavoro veloce",
    answer: "Nessun problema! Offriamo consegna rapida con supplemento per urgenze. Contattaci subito per valutare i tempi e le possibilità!",
    keywords: ["veloce", "urgente", "rapido", "subito", "presto", "fretta"]
  },
  {
    question: "Ho un budget limitato, potete aiutarmi?",
    answer: "Certo! Troviamo sempre una soluzione adatta al tuo budget. Pacchetti personalizzabili e prezzi flessibili. Contattaci per un preventivo su misura!",
    keywords: ["budget", "limitato", "poco", "soldi", "economico"]
  },
  {
    question: "Non so cosa scegliere",
    answer: "Ti aiutiamo noi! Raccontaci cosa ti serve e ti consigliamo il pacchetto ideale. Consulenza gratuita senza impegno!",
    keywords: ["scegliere", "decidere", "consiglio", "aiuto", "non so"]
  },
  {
    question: "Potete seguire il mio progetto ogni mese?",
    answer: "Sì! Attiviamo formule continuative mensili per aggiornamenti, manutenzione, nuovi contenuti, gestione social. Prezzi vantaggiosi per collaborazioni a lungo termine!",
    keywords: ["mensile", "mese", "continuativo", "abbonamento", "seguire"]
  },
  {
    question: "Potete fare un preventivo?",
    answer: "Certo! Il preventivo è gratuito e veloce. Contattaci con le tue esigenze via email, telefono o form e ti prepariamo un preventivo su misura in 24h!",
    keywords: ["preventivo", "preventivi", "quotazione", "stima"]
  },

  {
    question: "Cos'è il progetto Vignaioli e Vini?",
    answer: "Vignaioli e Vini è stato un evento enogastronomico al Castello di Ariberto, Capiago Intimiano (2025). Abbiamo curato la gestione evento e tutto il supporto grafico per la manifestazione, in collaborazione con il Comune!",
    keywords: ["vignaioli", "vini", "evento", "castello", "capiago"]
  },
  {
    question: "Avete lavorato con Luxottica?",
    answer: "Abbiamo realizzato un progetto scolastico di brand identity per Luxottica nel 2024: progettazione logo e brand guidelines per il settore eyewear. Un esercizio professionale che dimostra le nostre competenze!",
    keywords: ["luxottica", "occhiali", "brand", "progetto"]
  },
  {
    question: "Cos'è il progetto UTOPIA?",
    answer: "UTOPIA è un concept art personale ispirato all'album di Travis Scott (2024). Illustrazione digitale con astronauta futuristico, creata per esplorare stili artistici e creatività!",
    keywords: ["utopia", "travis", "scott", "illustrazione", "concept"]
  },
  {
    question: "State lavorando a Motta Apartments?",
    answer: "Sì! Motta Apartments è un progetto in corso (2025-26): sito web elegante per appartamenti sul Lago di Como con design raffinato e navigazione multilingue. Scopri di più nel portfolio!",
    keywords: ["motta", "apartments", "lago", "como", "hotel"]
  }
];

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Ciao! 👋 Sono l'assistente virtuale di Singularity Dream. Ho risposte immediate su servizi, prezzi, tempi, chi siamo e molto altro. Seleziona una domanda o scrivimi!", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleQuestionClick = (faq: FAQItem) => {
    setMessages(prev => [...prev, 
      { text: faq.question, isUser: true },
      { text: faq.answer, isUser: false }
    ]);
    setShowSuggestions(false);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setShowSuggestions(false);
    const userMessage = inputValue.toLowerCase().trim();
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    
    const contactKeywords = [
      'contattare', 'contattarvi', 'contatto', 'contatti', 
      'parlare', 'scrivere', 'chiamare', 'telefonare',
      'contattare l\'azienda', 'contattare singularitydream',
      'contattare singularity', 'parlare con voi', 'inviare',
      'messaggio', 'richiesta', 'informazioni'
    ];
    const isContactQuery = contactKeywords.some(keyword => userMessage.includes(keyword));
    
    if (isContactQuery) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Perfetto! Ti invio subito la richiesta di contatto. Compila i campi qui sotto e riceverai risposta entro 24 ore! ⬇️", 
          isUser: false 
        }]);
        setShowContactForm(true);
      }, 500);
      setInputValue('');
      return;
    }
    
    let bestMatch: FAQItem | null = null;
    let bestScore = 0;
    
    const messageWords = userMessage.split(/\s+/);
    
    faqs.forEach(faq => {
      let score = 0;
      const keywords = faq.keywords || [];
      const faqQuestion = faq.question.toLowerCase();
      const faqAnswer = faq.answer.toLowerCase();
      
      if (faqQuestion.includes(userMessage) || userMessage.includes(faqQuestion)) {
        score += 30;
      }
      
      let keywordMatches = 0;
      keywords.forEach(keyword => {
        const keywordLower = keyword.toLowerCase();
        
        const exactRegex = new RegExp(`\\b${keywordLower}\\b`, 'i');
        if (exactRegex.test(userMessage)) {
          keywordMatches++;
          score += 10;
        }
        else if (userMessage.includes(keywordLower) || keywordLower.includes(userMessage.replace(/[^\w\s]/g, ''))) {
          keywordMatches++;
          score += 6;
        }
        else {
          messageWords.forEach(word => {
            const cleanWord = word.replace(/[^\w]/g, '');
            if (cleanWord.length > 3 && (keywordLower.includes(cleanWord) || cleanWord.includes(keywordLower))) {
              score += 3;
            }
          });
        }
      });
      
      if (/che\s+\w+\s+(fate|fai|offrite)/i.test(userMessage)) {
        if (userMessage.includes('grafic') && keywords.includes('grafica')) score += 20;
        if (userMessage.includes('video') && keywords.includes('video')) score += 20;
        if (userMessage.includes('siti') && keywords.includes('sito')) score += 20;
        if (userMessage.includes('logo') && keywords.includes('logo')) score += 20;
      }
      
      if (/(quanto|prezzo|costo|costa)/.test(userMessage)) {
        if (keywords.includes('prezzo') || keywords.includes('costa') || keywords.includes('costo')) {
          score += 8;
        }
      }
      
      if (keywordMatches > 1) {
        score += keywordMatches * 4;
      }
      
      if (score < 10) {
        messageWords.forEach(word => {
          if (word.length > 4 && faqAnswer.includes(word)) {
            score += 2;
          }
        });
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    });
    
    const response = (bestMatch && bestScore >= 8)
      ? bestMatch.answer 
      : "Non ho trovato una risposta esatta, ma posso aiutarti! Prova a riformulare la domanda o seleziona una delle domande suggerite. Oppure contattaci direttamente: 📞 +39 3488664662 | ✉️ info.singularityy@gmail.com - Risposta entro 24h!";
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);
    
    setInputValue('');
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactData.name || !contactData.email || !contactData.service || !contactData.message) {
      toast({
        title: "Campi obbligatori",
        description: "Per favore compila tutti i campi.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_gq3q0im',
        'template_054g8xt',
        {
          from_name: contactData.name,
          from_email: contactData.email,
          service_type: contactData.service,
          message: contactData.message,
          to_email: 'info.singularityy@gmail.com'
        },
        'yIkPy6kgvBrQUOeJy'
      );

      setMessages(prev => [...prev, { 
        text: "✅ Richiesta inviata con successo! Ti contatteremo entro 24 ore. Grazie per averci scelto! 🚀", 
        isUser: false 
      }]);
      
      toast({
        title: "Messaggio inviato!",
        description: "Ti contatteremo al più presto.",
      });
      
      setContactData({ name: '', email: '', service: '', message: '' });
      setShowContactForm(false);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "❌ Si è verificato un errore. Puoi contattarci direttamente: 📞 +39 3488664662 | ✉️ info.singularityy@gmail.com", 
        isUser: false 
      }]);
      
      toast({
        title: "Errore nell'invio",
        description: "Riprova o contattaci direttamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setMessages([{ text: "Ciao! 👋 Sono l'assistente virtuale di Singularity Dream. Ho risposte immediate su servizi, prezzi, tempi, chi siamo e molto altro. Seleziona una domanda o scrivimi!", isUser: false }]);
    setShowSuggestions(true);
    setShowContactForm(false);
    setContactData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Apri assistente FAQ"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
          <div className="relative w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
            {isOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <MessageCircle className="w-7 h-7 text-primary-foreground" strokeWidth={2} />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] md:w-[480px] lg:w-[520px] max-w-[calc(100vw-3rem)] h-[550px] md:h-[620px] lg:h-[680px] glass-card flex flex-col shadow-2xl">
          <div className="p-4 border-b border-border/50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground">Assistente FAQ</h3>
              <p className="text-xs text-muted-foreground">Risposte immediate</p>
            </div>
            <button 
              onClick={resetChat}
              className="text-xs text-primary hover:underline"
            >
              Ricomincia
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-muted-foreground mb-2">Domande frequenti:</p>
                <button
                  onClick={() => {
                    setMessages(prev => [...prev, { 
                      text: "Come posso contattarvi?", 
                      isUser: true 
                    }]);
                    setTimeout(() => {
                      setMessages(prev => [...prev, { 
                        text: "Perfetto! Ti invio subito la richiesta di contatto. Compila i campi qui sotto e riceverai risposta entro 24 ore! ⬇️", 
                        isUser: false 
                      }]);
                      setShowContactForm(true);
                      setShowSuggestions(false);
                    }, 500);
                  }}
                  className="w-full text-left p-2 text-xs rounded-lg bg-primary/20 hover:bg-primary/30 text-foreground transition-colors font-medium"
                >
                  💬 Come posso contattarvi?
                </button>
                <div className="border-t border-border/30 my-2"></div>
                {faqs.slice(0, 7).map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(faq)}
                    className="w-full text-left p-2 text-xs rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
                <p className="text-xs text-muted-foreground pt-2 italic">O scrivi la tua domanda nel box qui sotto! 👇</p>
              </div>
            )}
          </div>

          {showContactForm && (
            <div className="p-4 border-t border-border/50 bg-background/30">
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <div>
                  <Input
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    placeholder="Nome *"
                    className="bg-background/50 border-border/50 text-foreground text-sm"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="Email *"
                    className="bg-background/50 border-border/50 text-foreground text-sm"
                    required
                  />
                </div>
                <div>
                  <select
                    value={contactData.service}
                    onChange={(e) => setContactData({ ...contactData, service: e.target.value })}
                    className="w-full bg-background/50 border border-border/50 text-foreground text-sm rounded-md px-3 py-2"
                    required
                  >
                    <option value="">Seleziona un servizio *</option>
                    <option value="grafica">Servizi di Grafica</option>
                    <option value="web">Creazione Siti Web</option>
                    <option value="video">Video Editing</option>
                    <option value="informatica">Servizi Informatici</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                <div>
                  <textarea
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Messaggio / Descrizione del progetto *"
                    rows={3}
                    className="w-full bg-background/50 border border-border/50 text-foreground text-sm rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Invio..." : "Invia richiesta"}
                </Button>
              </form>
            </div>
          )}

          {!showContactForm && (
            <div className="p-3 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Scrivi la tua domanda..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FAQChatbot;