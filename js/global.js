// 23K Team — interactions + editable data (no dependencies)

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // =====================
  // 1) Mobile menu
  // =====================
  const menuBtn = document.querySelector('[data-menu]');
  const mobile = document.querySelector('[data-mobile-nav]');

  const setMobileOpen = (open) => {
    if (!menuBtn || !mobile) return;
    mobile.classList.toggle('open', open);
    mobile.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.documentElement.classList.toggle('no-scroll', open);
  };

  if (menuBtn && mobile) {
    menuBtn.addEventListener('click', () => setMobileOpen(!mobile.classList.contains('open')));
    $$('a', mobile).forEach(a => a.addEventListener('click', () => setMobileOpen(false)));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    });

    document.addEventListener('click', (e) => {
      if (!mobile.classList.contains('open')) return;
      if (mobile.contains(e.target) || menuBtn.contains(e.target)) return;
      setMobileOpen(false);
    });
  }

  // =====================
  // 2) Topbar shadow on scroll
  // =====================
  const topbar = document.querySelector('[data-topbar]');
  const onScroll = () => {
    if (!topbar) return;
    topbar.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // =====================
  // 3) Reveal on scroll
  // =====================
  const revealEls = $$('[data-reveal]');
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('reveal-in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  // =====================
  // 4) Editable content (NEWS / RESULTS)
  // =====================
  const DATA = {
    news: [
      {
        date: '2026-01-18',
        title: 'Seguici live su Twitch',
        tag: 'LIVE',
        text: 'Streaming, scrim e tornei: attiva le notifiche e non perderti le live.',
        link: 'https://www.twitch.tv/23kteam'
      },
      {
        date: '2026-01-18',
        title: 'Codice sconto Instant Gaming',
        tag: 'DEAL',
        text: 'Supporta 23K Team usando il nostro link dedicato: GO23K.',
        link: 'https://www.instant-gaming.com/?igr=GO23K'
      },
      {
        date: '2026-01-18',
        title: 'Noisyboys Merch -25%',
        tag: 'MERCH',
        text: 'Usa il codice GO23K per uno sconto del 25% su Noisyboys.',
        link: 'https://www.instagram.com/noisyboys.merch?igsh=dmllcng2cnE4cDBx'
      }
    ],
    results: [
      {
        event: 'Valorant Weekly Cup',
        game: 'VALORANT',
        date: '2026-01-12',
        placement: 'Top 4',
        note: '3–1 in playoff'
      },
      {
        event: 'Apex Community League',
        game: 'Apex Legends',
        date: '2025-12-03',
        placement: '2°',
        note: 'Match point in finale'
      },
      {
        event: 'ARC Raiders Showmatch',
        game: 'ARC Raiders',
        date: '2025-11-19',
        placement: 'WIN',
        note: 'Bo3 2–0'
      }
    ]
  };

  // News render
  const newsGrid = $('#newsGrid');
  if (newsGrid) {
    newsGrid.innerHTML = DATA.news
      .map((n) => {
        const cta = n.link
          ? `<a class="mini" href="${escapeHtml(n.link)}" target="_blank" rel="noreferrer">Apri</a>`
          : '';
        return `
          <article class="card news" data-reveal>
            <div class="card-top">
              <div class="badge">${escapeHtml(n.tag)}</div>
              <time class="muted" datetime="${escapeHtml(n.date)}">${formatDate(n.date)}</time>
            </div>
            <h3>${escapeHtml(n.title)}</h3>
            <p class="muted">${escapeHtml(n.text)}</p>
            ${cta ? `<div class="card-social">${cta}</div>` : ''}
          </article>
        `;
      })
      .join('');

    // Observe newly injected reveal elements (news)
    const fresh = $$('[data-reveal]:not(.reveal-in)', newsGrid);
    if (fresh.length) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('reveal-in');
            io2.unobserve(en.target);
          }
        });
      }, { threshold: 0.14 });
      fresh.forEach((el) => io2.observe(el));
    }
  }

  // Results render (tabella)
  const resultsRows = $('#resultsRows');
  if (resultsRows) {
    resultsRows.innerHTML = DATA.results
      .map((r) => `
        <div class="rt-row" data-reveal>
          <span class="rt-event">${escapeHtml(r.event)}</span>
          <span class="rt-game muted">${escapeHtml(r.game)}</span>
          <span class="rt-place">${escapeHtml(r.placement)}</span>
          <span class="rt-date muted">${formatDate(r.date)}</span>
        </div>
      `)
      .join('');

    // Observe newly injected reveal elements (results)
    const fresh = $$('[data-reveal]:not(.reveal-in)', resultsRows);
    if (fresh.length) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('reveal-in');
            io2.unobserve(en.target);
          }
        });
      }, { threshold: 0.14 });
      fresh.forEach((el) => io2.observe(el));
    }
  }

  // Option A: use Formspree / Getform / your own endpoint.
  // Put your URL here:
  const FORM_ENDPOINT = '';

  const contactForm = $('#contactForm');
  const formNote = $('#formNote');

  if (contactForm && formNote) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fd = new FormData(contactForm);
      formNote.textContent = 'Invio in corso…';

      try {
        if (!FORM_ENDPOINT) {
          // Demo mode (no backend)
          await new Promise((r) => setTimeout(r, 700));
          formNote.textContent = 'Messaggio inviato! (demo) — imposta FORM_ENDPOINT in js/global.js per invio reale.';
          contactForm.reset();
          return;
        }

        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: fd,
          headers: { Accept: 'application/json' }
        });

        if (!res.ok) throw new Error('HTTP ' + res.status);
        formNote.textContent = 'Messaggio inviato! Ti rispondiamo al più presto.';
        contactForm.reset();
      } catch (err) {
        console.error(err);
        formNote.textContent = "Errore durante l'invio. Riprova o scrivici via email.";
      }
    });
  }

  // =====================
  // 5) Footer year
  // =====================
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  // =====================
  // Helpers
  // =====================
  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString('it-IT', { year: 'numeric', month: 'short', day: '2-digit' });
    } catch {
      return iso;
    }
  }
})();
