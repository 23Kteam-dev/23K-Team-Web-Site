# 23K Esport Team Website

**Elite Esport Community Platform**

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-CC%20BY--NC--SA-green)

---

## 🎮 Overview

Sito web professionale per **23K Esport Team** - "L'Elite della Competizione, il Cuore della Community".

**Live Demo**: [23k-team.github.io](https://23k-team.github.io)

### Features

✅ **9 Pagine HTML5** Semantiche  
✅ **Dark Theme** Negro #000000 + Rosa Shocking #FF69B4  
✅ **Fully Responsive** Mobile-first design  
✅ **SEO Optimized** Meta tags, sitemap, robots.txt  
✅ **No Framework** Vanilla HTML/CSS/JS  
✅ **Formspree Integration** Contact form powered  
✅ **Smooth Animations** Scroll triggers, hover effects  
✅ **Accessibility** WCAG AA compliant  

---

## 📁 Project Structure

```
.
├── index.html              # Home page
├── contatti.html           # Contact form
├── partners.html           # Sponsor tiers
├── creators.html           # Creator network
├── esports/
│   ├── apex-legends.html   # Apex Legends roster
│   └── valorant.html       # Valorant pro team
├── community/
│   ├── destiny-2.html      # Sherpa raids
│   ├── sim-racing.html     # Racing league
│   └── arcriders.html      # Adventure hub
└── assets/
    ├── css/style.css       # 2300+ lines
    └── js/script.js        # 500+ lines
```

---

## 🎨 Design System

| Component | Details |
|-----------|---------|
| **Colors** | #000000 (Black), #FF69B4 (Pink), #FFFFFF (White) |
| **Typography** | Segoe UI, Tahoma, system fonts |
| **Spacing** | 8px base unit (8, 16, 24, 32, ...) |
| **Border Radius** | 8px - 12px cards, 20px pills |
| **Shadows** | Soft pink glow on hover |
| **Animations** | Cubic-bezier(0.25, 0.46, 0.45, 0.94) |

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/23K-Team.git
cd 23K-Team
```

### 2. Configure Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create account & form
3. Copy form ID
4. Edit `contatti.html` line ~120:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

### 3. Update Social Links
Replace placeholders:
- `https://discord.gg/23k` → Your Discord invite
- `https://twitch.tv` → Your Twitch channel
- `https://twitter.com` → Your Twitter handle
- etc.

### 4. Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Then enable GitHub Pages in Settings → Pages → Deploy from `main` branch.

---

## 📋 Pages Documentation

### Main Pages
- **index.html** - Home with hero, 3 games, stats, CTA
- **contatti.html** - Contact form + 6 social links
- **partners.html** - 3 Gold + 3 Silver partners with discount codes
- **creators.html** - 3 Featured + 6 Affiliate creators

### Esports (Competitive)
- **apex-legends.html** - 3 pro players + stats + tournaments
- **valorant.html** - 5 pro players + community programs

### Community (Inclusive)
- **destiny-2.html** - 3 Sherpa guides + weekly activities
- **sim-racing.html** - 3 championships + telemetry
- **arcriders.html** - Events + vision + 6 reasons why

---

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Gradients, Animations
- **Vanilla JavaScript** - No dependencies
- **Formspree** - Form backend
- **GitHub Pages** - Free hosting

---

## ♿ Accessibility

- ✅ Semantic HTML structure
- ✅ WCAG AA color contrast
- ✅ Keyboard navigation
- ✅ Alt text on images
- ✅ Landmark regions
- ✅ Readable font sizes

---

## 📱 Responsive Breakpoints

| Screen | Width | Layout |
|--------|-------|--------|
| Mobile | < 480px | 1 column, hamburger menu |
| Tablet | 480-768px | 2 columns, adjusted grid |
| Desktop | > 768px | Full layout, 3 columns |

---

## 🔍 SEO Metrics

- **Sitemap**: `/sitemap.xml` - 9 pages indexed
- **Robots**: `/robots.txt` - Crawl directives
- **Meta Tags**: Title, description, OG, Twitter cards
- **Structured Data**: Not implemented (future)
- **Performance**: Optimized for Lighthouse 90+

---

## 📊 File Sizes

| File | Size |
|------|------|
| style.css | ~90 KB |
| script.js | ~18 KB |
| index.html | ~8 KB |
| Community pages | ~6 KB each |
| Esports pages | ~7 KB each |
| **Total** | **~200 KB** |

---

## 🎯 Features Implemented

### Navigation
- [x] Sticky navbar with dropdown menus
- [x] Mobile hamburger toggle
- [x] Smooth scroll to sections

### Hero Section
- [x] Full-height section
- [x] Gradient text H1
- [x] Floating background elements
- [x] CTA buttons with hover effects

### Content Components
- [x] Player stat cards with grid stats
- [x] Tier cards with discount codes (click-to-copy)
- [x] Creator cards with social links
- [x] Game cards with descriptions
- [x] Stat boxes with counter animation

### Interactive Elements
- [x] Copy-to-clipboard for discount codes
- [x] Form submission with Formspree
- [x] Smooth scroll animations (Intersection Observer)
- [x] Hover transitions on all buttons
- [x] Mobile menu toggle

### SEO & Meta
- [x] Dynamic title tags per page
- [x] Meta descriptions (< 160 chars)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Robots.txt directives
- [x] XML Sitemap

### Footer
- [x] 4-column footer layout
- [x] Social media links
- [x] Legal disclaimer
- [x] Copyright notice
- [x] Responsive grid

---

## 🐛 Known Issues

- Placeholder images use `via.placeholder.com` (replace for production)
- Formspree requires ID configuration
- Discord/social links are template values (personalize them)

---

## 🚀 Future Enhancements

- [ ] Blog/News section
- [ ] Tournament bracket display
- [ ] Live leaderboards
- [ ] Streamer integration
- [ ] Discord OAuth login
- [ ] Newsletter signup
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

---

## 📄 License

© 2026 23K Esport Team. All rights reserved.

Non-commercial use with attribution only.

---

## 👥 Contributing

This is a proprietary project for 23K Esport Team. 

For modifications or issues:
1. Contact team via Discord
2. Submit suggestions
3. Report bugs to info@23kteam.com

---

## 📞 Support

- **Discord**: [Join Server](https://discord.gg/23k)
- **Twitter**: [@23kteam](https://twitter.com/23kteam)
- **Email**: info@23kteam.com

---

**Last Updated**: February 2, 2026  
**Status**: ✅ Production Ready  
**Version**: 1.0.0
