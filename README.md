# Singularity Dream

## Descrizione del progetto

Sito web professionale per Singularity Dream - servizi digitali di grafica, assistenza informatica e video editing accessibili in tutta Italia.

## Tecnologie utilizzate

Questo progetto è costruito con:

- **Vite** - Build tool moderno e veloce
- **TypeScript** - JavaScript con tipizzazione statica
- **React** - Libreria per interfacce utente
- **shadcn-ui** - Componenti UI accessibili e personalizzabili
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navigazione client-side

## Come avviare il progetto in locale

Requisiti: Node.js e npm installati - [installa con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
git clone <YOUR_GIT_URL>

cd <YOUR_PROJECT_NAME>

npm install

npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## Build di produzione

```sh
npm run build

npm run preview
```

## Struttura del progetto

```
src/
├── components/     # Componenti React riutilizzabili
├── pages/         # Pagine dell'applicazione
├── contexts/      # Context API per lo stato globale
├── hooks/         # Custom React hooks
├── lib/           # Utility e helper functions
└── assets/        # Immagini e risorse statiche
```

## Deploy

Il progetto può essere deployato su qualsiasi piattaforma che supporta applicazioni Vite/React statiche:
- Vercel
- Netlify
- GitHub Pages
- Altri servizi di hosting statici

## Contatti

Per informazioni: info@singularitydream.it

---

© 2024 Singularity Dream - Tutti i diritti riservati
