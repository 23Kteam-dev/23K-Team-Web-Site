// 23K Team — Home hero slider

(() => {
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // =====================
  // Hero image switcher
  // =====================
  const heroDots = $$('[data-hero]');
  const heroImgs = $$('[data-hero-img]');
  let heroIdx = 0;

  const setHero = (idx) => {
    heroIdx = idx;
    heroDots.forEach((d) => d.classList.toggle('is-active', Number(d.dataset.hero) === idx));
    heroImgs.forEach((img) => img.classList.toggle('is-active', Number(img.dataset.heroImg) === idx));
  };

  if (heroDots.length && heroImgs.length) {
    heroDots.forEach((dot) => dot.addEventListener('click', () => setHero(Number(dot.dataset.hero))));
    setHero(0);

    // Auto-rotate (stop if user clicks)
    let interacted = false;
    heroDots.forEach((d) => d.addEventListener('click', () => (interacted = true)));

    setInterval(() => {
      if (interacted) return;
      setHero((heroIdx + 1) % heroImgs.length);
    }, 6500);
  }
})();
