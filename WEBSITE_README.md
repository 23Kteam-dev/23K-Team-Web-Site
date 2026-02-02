# 23K Esport Team - Sito Web Ufficiale

## 🎮 Benvenuto al Progetto

Questo è il sito web ufficiale di **23K Esport Team** - "L'Elite della Competizione, il Cuore della Community".

---

## 📁 Struttura del Progetto

```
23K-Team/
├── index.html                 # Home - Hero e sezione principale
├── contatti.html              # Pagina contatti con form Formspree
├── partners.html              # Partner ufficiali (Gold, Silver)
├── creators.html              # Creator partner e affiliati
│
├── esports/
│   ├── apex-legends.html      # Roster Apex Legends
│   └── valorant.html          # Roster Valorant
│
├── community/
│   ├── destiny-2.html         # Comunità Destiny 2 (Sherpa)
│   ├── sim-racing.html        # Comunità Sim Racing
│   └── arcriders.html         # Comunità ArcRiders
│
└── assets/
    ├── css/
    │   └── style.css          # CSS centralizzato (Dark/Pink Theme)
    └── js/
        └── script.js          # JavaScript globale
```

---

## 🎨 Design System

### Palette Colori
- **Nero Assoluto**: `#000000` (sfondo principale)
- **Rosa Shocking**: `#FF69B4` (accenti e CTA)
- **Bianco**: `#FFFFFF` (testo principale)
- **Grigio Scuro**: `#1a1a1a` (carte e sezioni)
- **Grigio Chiaro**: `#2a2a2a` (variazioni)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **H1**: 3.5rem, gradiente Pink → White
- **H2**: 2.5rem, con underline gradiente
- **H3**: 1.8rem
- **Body**: 1rem, colore grigio (#d0d0d0)

### Componenti Chiave
- **Navbar**: Sticky, dropdown menu, mobile responsive
- **Hero Section**: Full-height con animazioni smooth
- **Card**: Bordi arrotondati, hover effects con gradient
- **Buttons**: Primary (gradient Pink) e Secondary (border Pink)
- **Tier Cards**: Gold, Silver con evidenziazione differente
- **Creator Cards**: Immagine + info + social links
- **Player Card**: Statistiche inline, rating badges

---

## 🚀 Configurazione

### 1. Configurare Formspree
Il form contatti usa **Formspree** per ricevere messaggi via email.

**Passi**:
1. Vai su [formspree.io](https://formspree.io)
2. Crea un account gratuito
3. Crea un nuovo form e riceverai un `FORMSPREE_ID`
4. Sostituisci in `contatti.html` il placeholder:
   ```html
   <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```

### 2. Distribuire su GitHub Pages
```bash
# 1. Inizializza git (se non già fatto)
git init

# 2. Aggiungi i file
git add .

# 3. Commit
git commit -m "feat: Initial 23K Esport Team website"

# 4. Crea il branch gh-pages
git branch gh-pages

# 5. Pusha il contenuto
git push origin gh-pages

# 6. Abilita GitHub Pages nelle impostazioni del repo
# Settings → Pages → Source: gh-pages
```

**URL finale**: `https://23k-team.github.io/` (sostituisci con il tuo repo)

### 3. Personalizzazioni
- **Logo/Branding**: Sostituisci i placeholder nelle navbar
- **Social Links**: Aggiorna i link nei footer verso i canali reali
- **Discord Link**: Sostituisci `https://discord.gg/23k` con il link vero
- **Email**: Aggiorna `mailto:info@23kteam.com` con email reale

---

## 🎯 Pagine Principali

### Home (index.html)
- Hero section con motto "L'Elite della Competizione"
- Sezione giochi (Apex, Valorant, Community)
- Stats section
- Sezione "Perché 23K"
- CTA per Discord

### Esports
- **Apex Legends**: Roster pro + statistiche + tornei
- **Valorant**: Roster 5v5 + community section

### Community
- **Destiny 2**: Sherpa guide + attività community
- **Sim Racing**: Campionati + telemetria
- **ArcRiders**: Esplorazione + avventure

### Business Pages
- **Partners**: Tier Gold/Silver con discount codes (GO23K-*)
- **Creators**: Partner ufficiali e affiliati con badge
- **Contatti**: Form + social hub

---

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 480px (1 colonna)
- **Tablet**: 480px - 768px (adattamenti grid)
- **Desktop**: > 768px (layout completo)

Tutte le pagine sono ottimizzate per mobile con menu hamburger e grid responsive.

---

## ♿ Accessibilità

- Semantic HTML5 (`<nav>`, `<section>`, `<footer>`)
- Meta tags completi per SEO
- Contrasto colori WCAG AA
- Link keyboard-navigable
- Alt text su tutte le immagini

---

## 🔍 SEO & Meta Tags

Ogni pagina include:
- `<meta charset="UTF-8">`
- `<meta name="viewport">`
- `<meta name="description">` (max 160 char)
- **Open Graph**: og:title, og:description, og:image, og:type
- **Twitter Cards**: twitter:card, twitter:title, twitter:description
- `<meta name="robots" content="index, follow">`
- Favicon SVG inline

Titoli pagine follow il pattern: `[Pagina] | 23K Esport Team - Elite Esport Club`

---

## 🎬 Animazioni

- **Scroll animations**: Card fade-in on viewport
- **Hover effects**: Border color change, shadow glow, scale transform
- **Button hovers**: translateY(-3px) con shadow enhanced
- **Stat counter**: Number animation on scroll (animateStats)
- **Float animation**: Background elements floating effect

Tutte le animazioni usano `cubic-bezier(0.25, 0.46, 0.45, 0.94)` per smoothness.

---

## 📋 Features Implementate

✅ Navbar sticky con dropdown menu  
✅ Hero section con CTA Discord  
✅ Roster player cards con statistiche  
✅ Tier cards con discount codes (copy-to-clipboard)  
✅ Creator cards con badge LIVE  
✅ Form contatti con Formspree  
✅ Footer completo con social links  
✅ Dark theme Black/Pink perfezionato  
✅ Mobile responsive completo  
✅ SEO tags su tutte le pagine  
✅ Smooth scroll animations  

---

## 🛠️ Script JavaScript

**`script.js`** include:
- Toggle menu mobile
- Copy discount codes to clipboard
- Form submission handler (Formspree)
- Notification system
- Stats counter animation
- Scroll animations (Intersection Observer)
- Event tracking
- Keyboard accessibility (ESC to close dropdowns)
- Lazy loading immagini (data-src)

---

## 🌐 Deployment Checklist

- [ ] Update all Discord links
- [ ] Set up Formspree ID in contatti.html
- [ ] Replace placeholder images con vere immagini
- [ ] Verifica tutti i link interni
- [ ] Test form submission
- [ ] Mobile test su device reali
- [ ] Lighthouse audit (>90 performance)
- [ ] Push to gh-pages branch
- [ ] Verifica sito live su GitHub Pages

---

## 📞 Support

Per domande sulla struttura del progetto:
- Controlla il Discord: https://discord.gg/23k
- Issue su GitHub se hosted lì
- Email: info@23kteam.com

---

## 📄 License

Copyright © 2026 23K Esport Team. Tutti i diritti riservati.

---

**Last Updated**: Febbraio 2026  
**Versione**: 1.0 - Launch Ready
