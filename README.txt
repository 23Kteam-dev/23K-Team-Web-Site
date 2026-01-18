23K Team — Template sito moderno (statico)

CONTENUTO
- index.html
- styles.css
- script.js
- /assets (logo + 3 foto)

COME MODIFICARE (rapido)
1) Testi: apri index.html e cerca:
   - [Sostituisci con...] oppure le sezioni: ABOUT / ROSTER / RISULTATI / PARTNER / CONTATTI.
2) Colori: in styles.css (all'inizio) modifica i CSS variables:
   --brand, --brand2, --bg0, ecc.
3) Foto: sostituisci i file in /assets mantenendo i nomi, oppure cambia i path in index.html.
4) Social: in fondo al file index.html trovi i link (Instagram/Twitter/Twitch/Discord).

METTERLO ONLINE (zero build)
Opzione A — GitHub Pages
- Crea un repository e carica TUTTI i file dentro.
- Settings → Pages → Deploy from branch (main / root).

Opzione B — Netlify
- Drag & drop della cartella '23k-team-site' su app.netlify.com
  (oppure collega il repository).

Opzione C — Vercel
- Import project da repo.
- Framework: Other (static). Output: ./

NOTE
- È un sito statico. Il form contatti non invia email: integra un servizio (Formspree, Netlify Forms, etc.)
  o collega un tuo backend.
