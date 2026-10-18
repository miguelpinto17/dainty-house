/* Dainty House — shared behaviour (no dependencies).
   Carousel, lightbox, PT/EN toggle, amenities/reviews renderers, reveal-on-scroll. */
(function () {
  'use strict';
  var DH = window.DH;
  var doc = document;
  var root = doc.documentElement;
  var LS_KEY = 'dh-lang';
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function el(tag, cls, html) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function svg(name) {
    return '<svg class="dh-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (DH.icons[name] || '') + '</svg>';
  }
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }

  /* ---------- i18n ---------- */
  var extra = window.DH_EXTRA || {};
  var lang = safeGet(LS_KEY) === 'pt' ? 'pt' : 'en';

  function t(key) {
    var d = (extra[lang] && extra[lang][key]) || DH.i18n[lang][key] || (extra.en && extra.en[key]) || DH.i18n.en[key] || key;
    return d
      .replace('{score}', DH.rating.score)
      .replace('{count}', DH.rating.count)
      .replace('{bscore}', DH.booking.score)
      .replace('{bcount}', DH.booking.count)
      .replace('{year}', new Date().getFullYear())
      .replace('{reg}', DH.registration);
  }
  DH.t = t;
  DH.lang = function () { return lang; };

  /* ---------- base CSS (structure only; variants add the look) ---------- */
  var base = el('style');
  base.id = 'dh-base';
  base.textContent = [
    '.dh-ic{width:1.25em;height:1.25em;flex:none;display:inline-block;vertical-align:-.2em}',
    'i[data-icon]{display:inline-flex;font-style:normal}',
    '[data-carousel]{position:relative}',
    '.dh-track{display:flex;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch;position:relative;margin:0;padding:0;list-style:none;outline-offset:4px}',
    '.dh-track::-webkit-scrollbar{display:none}',
    '.dh-track.is-dragging{scroll-snap-type:none;cursor:grabbing;scroll-behavior:auto}',
    '.dh-slide{flex:none;scroll-snap-align:var(--dh-snap,start);position:relative;margin:0}',
    '.dh-slide button{display:block;width:100%;height:100%;padding:0;margin:0;border:0;background:none;cursor:zoom-in;color:inherit;font:inherit}',
    '.dh-slide img{display:block;width:100%;height:100%;object-fit:cover;user-select:none;-webkit-user-drag:none}',
    '.dh-prev,.dh-next,.dh-lb button{cursor:pointer;font:inherit}',
    '.dh-prev:disabled,.dh-next:disabled{opacity:.35;cursor:default}',
    '.dh-dots{display:flex;gap:.5rem;align-items:center;justify-content:center;flex-wrap:wrap}',
    '.dh-dot{width:.55rem;height:.55rem;padding:0;border:0;border-radius:50%;background:currentColor;opacity:.3;cursor:pointer;transition:opacity .2s,transform .2s}',
    '.dh-dot[aria-current="true"]{opacity:1;transform:scale(1.35)}',
    /* lightbox */
    '.dh-lb{position:fixed;inset:0;z-index:1000;display:none;align-items:center;justify-content:center;background:var(--dh-lb-bg,rgba(10,10,12,.94));color:var(--dh-lb-fg,#fff);touch-action:pan-y}',
    '.dh-lb.is-open{display:flex}',
    '.dh-lb-stage{position:absolute;inset:3.5rem 0 3.75rem;display:flex;align-items:center;justify-content:center;padding:0 3.5rem}',
    '.dh-lb-stage img{max-width:100%;max-height:100%;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.5);animation:dhFade .35s ease both}',
    '@keyframes dhFade{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}',
    '.dh-lb-close,.dh-lb-prev,.dh-lb-next{position:absolute;width:2.75rem;height:2.75rem;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:inherit;backdrop-filter:blur(6px);transition:background .2s}',
    '.dh-lb-close:hover,.dh-lb-prev:hover,.dh-lb-next:hover{background:rgba(255,255,255,.2)}',
    '.dh-lb-close{top:.75rem;right:.75rem}',
    '.dh-lb-prev{left:.75rem;top:50%;translate:0 -50%}',
    '.dh-lb-next{right:.75rem;top:50%;translate:0 -50%}',
    '.dh-lb-bar{position:absolute;left:0;right:0;bottom:0;padding:.9rem 1.25rem;display:flex;gap:1rem;justify-content:space-between;align-items:center;font-size:.875rem;opacity:.9}',
    '@media(max-width:640px){.dh-lb-stage{padding:0 .5rem;inset:3.5rem 0 4.5rem}.dh-lb-prev,.dh-lb-next{top:auto;bottom:.75rem;translate:none}.dh-lb-prev{left:.75rem}.dh-lb-next{right:.75rem}.dh-lb-bar{justify-content:center;bottom:.9rem;padding:0 4.5rem;text-align:center}}',
    'html.dh-lock{overflow:hidden}',
    '.dh-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '@media(prefers-reduced-motion:reduce){.dh-lb-stage img{animation:none}.dh-dot{transition:none}}'
  ].join('\n');
  doc.head.insertBefore(base, doc.head.firstChild);

  /* ---------- icons ---------- */
  function renderIcons(ctx) {
    $$('[data-icon]', ctx).forEach(function (n) {
      if (!n.firstChild) n.innerHTML = svg(n.getAttribute('data-icon'));
    });
  }

  /* ---------- text translation ---------- */
  function applyI18n() {
    root.lang = lang;
    $$('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    $$('[data-i18n-html]').forEach(function (n) { n.innerHTML = t(n.getAttribute('data-i18n-html')); });
    $$('[data-i18n-attr]').forEach(function (n) {
      n.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2) n.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
    $$('[data-score]').forEach(function (n) { n.textContent = DH.rating.score; });
    $$('[data-count]').forEach(function (n) { n.textContent = DH.rating.count; });
    $$('[data-bscore]').forEach(function (n) { n.textContent = DH.booking.score; });
    $$('img[data-photo]').forEach(function (img) {
      var p = DH.photos[img.getAttribute('data-photo')];
      if (p) img.alt = p.alt[lang];
    });
    $$('[data-lang-set]').forEach(function (b) {
      var on = b.getAttribute('data-lang-set') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var titles = { en: 'Dainty House · Ovar, Portugal', pt: 'Dainty House · Ovar, Portugal' };
    if (!doc.title) doc.title = titles[lang];
  }

  /* ---------- content renderers (re-run on language change) ---------- */
  function renderAmenities() {
    $$('[data-amenities]').forEach(function (box) {
      box.innerHTML = '';
      DH.amenityGroups.forEach(function (g) {
        var sec = el('section', 'am-group');
        sec.appendChild(el('h3', 'am-group-title', esc(t('am.g.' + g.key))));
        var ul = el('ul', 'am-list');
        g.items.forEach(function (it) {
          var li = el('li', 'am-item' + (it.extra ? ' is-extra' : ''));
          li.innerHTML = svg(it.icon) + '<span class="am-name">' + esc(it[lang]) + '</span>' +
            (it.extra ? '<em class="am-tag">' + esc(t('am.extra')) + '</em>' : '');
          ul.appendChild(li);
        });
        sec.appendChild(ul);
        box.appendChild(sec);
      });
    });
  }

  function renderReviews() {
    $$('[data-reviews]').forEach(function (box) {
      box.innerHTML = '';
      DH.reviews.forEach(function (r) {
        var a = el('article', 'dh-review');
        a.setAttribute('data-platform', r.platform);
        if (r.placeholder) a.setAttribute('data-placeholder', '');
        function loc(v) { return v && typeof v === 'object' ? v[lang] : v; }
        var translated = r.original && r.original !== lang;
        var meta = [r.origin, loc(r.date), loc(r.trip)].filter(Boolean).map(esc).join(' · ');
        a.innerHTML =
          '<header class="dh-rv-head"><span class="dh-rv-platform">' + esc(t('rev.platform.' + r.platform)) + '</span>' +
          (r.placeholder ? '<span class="dh-rv-flag">' + esc(t('rev.placeholder')) + '</span>' : '') + '</header>' +
          (r.title ? '<h4 class="dh-rv-title">' + esc(loc(r.title)) + '</h4>' : '') +
          '<blockquote class="dh-rv-text"><p>' + esc(r[lang]) + '</p></blockquote>' +
          '<footer class="dh-rv-foot"><b>' + esc(r.name) + '</b><span>' + meta + '</span>' +
          (translated ? '<em class="dh-rv-tr">' + esc(t('rev.translated')) + '</em>' : '') + '</footer>';
        box.appendChild(a);
      });
    });
    $$('[data-mentions]').forEach(function (ul) {
      ul.innerHTML = '';
      DH.rating.mentions.forEach(function (m) {
        ul.appendChild(el('li', 'dh-mention', '<span>' + esc(t('rev.m.' + m.key)) + '</span><b>' + m.count + '</b>'));
      });
    });
    $$('[data-categories]').forEach(function (ul) {
      ul.innerHTML = '';
      DH.rating.categories.forEach(function (c) {
        var li = el('li', 'dh-cat');
        li.innerHTML = '<span class="dh-cat-name">' + esc(t('rev.cat.' + c.key)) + '</span>' +
          '<span class="dh-cat-bar"><i style="--v:' + (c.value / 5 * 100).toFixed(0) + '%"></i></span>' +
          '<b class="dh-cat-val">' + c.value.toFixed(1) + '</b>';
        ul.appendChild(li);
      });
    });
  }

  function setLang(next) {
    lang = next === 'pt' ? 'pt' : 'en';
    safeSet(LS_KEY, lang);
    applyI18n();
    renderAmenities();
    renderReviews();
    renderIcons(doc);
    updateCarouselLabels();
    if (lb && lb.classList.contains('is-open')) showLightbox(lbIndex);
  }

  /* ---------- carousel ---------- */
  var carousels = [];
  var order = DH.order;
  var scriptEl = doc.currentScript;
  var assetBase = DH.assetBase || (scriptEl && scriptEl.src ? scriptEl.src.replace(/[^\/]*$/, '') : '../assets/');
  function src(id, size) { return assetBase + 'photos/' + (size === 'sm' ? 'sm/' : '') + id + '.jpg'; }

  function initCarousel(box) {
    var track = el('ul', 'dh-track');
    track.tabIndex = 0;
    track.setAttribute('role', 'region');
    track.setAttribute('aria-roledescription', 'carousel');
    var slides = order.map(function (id, i) {
      var p = DH.photos[id];
      var li = el('li', 'dh-slide');
      li.setAttribute('data-ratio', p.w >= p.h ? 'landscape' : 'portrait');
      var btn = el('button');
      btn.type = 'button';
      var img = el('img');
      img.src = src(id, 'sm');
      img.setAttribute('data-photo', id);
      img.alt = p.alt[lang];
      img.width = p.w; img.height = p.h;
      img.draggable = false;
      img.loading = i < 3 ? 'eager' : 'lazy';
      img.decoding = 'async';
      img.style.objectPosition = p.focus;
      btn.appendChild(img);
      btn.addEventListener('click', function () {
        if (track._moved) return;
        openLightbox(i, btn);
      });
      li.appendChild(btn);
      track.appendChild(li);
      return li;
    });

    var prev = el('button', 'dh-prev', svg('arrowL')); prev.type = 'button';
    var next = el('button', 'dh-next', svg('arrowR')); next.type = 'button';
    var count = el('div', 'dh-count');
    count.setAttribute('aria-live', 'polite');
    var dots = el('div', 'dh-dots');
    var dotEls = order.map(function (id, i) {
      var d = el('button', 'dh-dot'); d.type = 'button';
      d.addEventListener('click', function () { go(i); });
      dots.appendChild(d);
      return d;
    });

    var viewport = el('div', 'dh-viewport');
    viewport.appendChild(track);
    box.innerHTML = '';
    box.appendChild(viewport);
    var controls = el('div', 'dh-controls');
    controls.appendChild(prev); controls.appendChild(count); controls.appendChild(next);
    box.appendChild(controls);
    box.appendChild(dots);

    var state = { box: box, track: track, slides: slides, prev: prev, next: next, count: count, dots: dotEls, index: 0 };
    carousels.push(state);

    function targetLeft(i) {
      var s = slides[i];
      var cs = getComputedStyle(s);
      var align = (cs.scrollSnapAlign || 'start').split(' ').pop();
      var tcs = getComputedStyle(track);
      if (align === 'center') return s.offsetLeft - (track.clientWidth - s.offsetWidth) / 2;
      return s.offsetLeft - (parseFloat(tcs.scrollPaddingLeft) || 0);
    }
    function go(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      var max = track.scrollWidth - track.clientWidth;
      var left = Math.max(0, Math.min(max, targetLeft(i)));
      track.scrollTo({ left: left, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    function nearest() {
      var best = 0, bd = Infinity;
      for (var i = 0; i < slides.length; i++) {
        var d = Math.abs(targetLeft(i) - track.scrollLeft);
        if (d < bd) { bd = d; best = i; }
      }
      /* at the very end, the last slide may not reach its snap point */
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) best = slides.length - 1;
      return best;
    }
    function update() {
      var i = nearest();
      state.index = i;
      count.innerHTML = '<b>' + (i + 1) + '</b> / ' + slides.length;
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
      dotEls.forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      slides.forEach(function (s, k) { s.classList.toggle('is-current', k === i); });
    }
    state.update = update;
    state.go = go;

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    window.addEventListener('resize', update);
    prev.addEventListener('click', function () { go(state.index - 1); });
    next.addEventListener('click', function () { go(state.index + 1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(state.index + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(state.index - 1); }
    });

    /* mouse drag (touch uses native scrolling) */
    var down = false, startX = 0, startLeft = 0;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; track._moved = false; startX = e.clientX; startLeft = track.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (!track._moved && Math.abs(dx) > 6) { track._moved = true; track.classList.add('is-dragging'); }
      if (track._moved) track.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', function () {
      if (!down) return;
      down = false;
      if (track._moved) {
        track.classList.remove('is-dragging');
        go(nearest());
        setTimeout(function () { track._moved = false; }, 0);
      }
    });

    update();
  }

  function updateCarouselLabels() {
    carousels.forEach(function (c) {
      c.track.setAttribute('aria-label', t('gal.label'));
      c.prev.setAttribute('aria-label', t('gal.prev'));
      c.next.setAttribute('aria-label', t('gal.next'));
      c.dots.forEach(function (d, i) { d.setAttribute('aria-label', (i + 1) + ' / ' + order.length); });
      c.slides.forEach(function (s) {
        var b = s.firstChild; b.setAttribute('aria-label', t('gal.open'));
      });
    });
    if (lb) {
      lb.setAttribute('aria-label', t('gal.label'));
      lb._close.setAttribute('aria-label', t('gal.close'));
      lb._prev.setAttribute('aria-label', t('gal.prev'));
      lb._next.setAttribute('aria-label', t('gal.next'));
    }
  }

  /* ---------- lightbox ---------- */
  var lb = null, lbIndex = 0, lastFocus = null;
  function buildLightbox() {
    lb = el('div', 'dh-lb');
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML =
      '<div class="dh-lb-stage"><img alt=""></div>' +
      '<button type="button" class="dh-lb-close">' + svg('close') + '</button>' +
      '<button type="button" class="dh-lb-prev">' + svg('arrowL') + '</button>' +
      '<button type="button" class="dh-lb-next">' + svg('arrowR') + '</button>' +
      '<div class="dh-lb-bar"><span class="dh-lb-cap"></span><span class="dh-lb-count"></span></div>';
    lb._img = $('img', lb);
    lb._close = $('.dh-lb-close', lb);
    lb._prev = $('.dh-lb-prev', lb);
    lb._next = $('.dh-lb-next', lb);
    lb._cap = $('.dh-lb-cap', lb);
    lb._count = $('.dh-lb-count', lb);
    doc.body.appendChild(lb);

    lb._close.addEventListener('click', closeLightbox);
    lb._prev.addEventListener('click', function () { showLightbox(lbIndex - 1); });
    lb._next.addEventListener('click', function () { showLightbox(lbIndex + 1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('dh-lb-stage')) closeLightbox();
    });
    doc.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
      else if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
      else if (e.key === 'Tab') {
        var f = [lb._close, lb._prev, lb._next];
        var i = f.indexOf(doc.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
      }
    });
    var sx = null;
    lb.addEventListener('pointerdown', function (e) { sx = e.clientX; });
    lb.addEventListener('pointerup', function (e) {
      if (sx == null) return;
      var dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 60) showLightbox(lbIndex + (dx < 0 ? 1 : -1));
    });
  }
  function showLightbox(i) {
    lbIndex = (i + order.length) % order.length;
    var id = order[lbIndex], p = DH.photos[id];
    lb._img.style.animation = 'none';
    void lb._img.offsetWidth;
    lb._img.style.animation = '';
    lb._img.src = src(id, 'lg');
    lb._img.alt = p.alt[lang];
    lb._cap.textContent = p.alt[lang];
    lb._count.textContent = (lbIndex + 1) + ' / ' + order.length;
    [1, -1].forEach(function (d) {
      var n = new Image(); n.src = src(order[(lbIndex + d + order.length) % order.length], 'lg');
    });
  }
  function openLightbox(i, from) {
    if (!lb) buildLightbox();
    updateCarouselLabels();
    lastFocus = from || doc.activeElement;
    lb.classList.add('is-open');
    root.classList.add('dh-lock');
    showLightbox(i);
    lb._close.focus();
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    root.classList.remove('dh-lock');
    carousels.forEach(function (c) { c.go(lbIndex); });
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  DH.openLightbox = openLightbox;

  /* ---------- page behaviours ---------- */
  function initPage() {
    /* language switch buttons */
    $$('[data-lang-set]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang-set')); });
    });
    /* single toggle button: <button data-lang-toggle> */
    $$('[data-lang-toggle]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(lang === 'en' ? 'pt' : 'en'); });
    });
    /* mobile nav */
    $$('[data-nav-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        var open = doc.body.classList.toggle('nav-open');
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    $$('[data-nav] a').forEach(function (a) {
      a.addEventListener('click', function () {
        doc.body.classList.remove('nav-open');
        $$('[data-nav-toggle]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
      });
    });
    /* header state */
    var onScroll = function () { doc.body.classList.toggle('is-scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    /* photo anywhere → lightbox: <button data-lightbox="06"> */
    $$('[data-lightbox]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = order.indexOf(b.getAttribute('data-lightbox'));
        openLightbox(i < 0 ? 0 : i, b);
      });
    });
    /* reveal on scroll */
    var items = $$('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (n) { n.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      items.forEach(function (n) { io.observe(n); });
    }
  }

  /* ---------- boot ---------- */
  function boot() {
    $$('[data-carousel]').forEach(initCarousel);
    applyI18n();
    renderAmenities();
    renderReviews();
    renderIcons(doc);
    updateCarouselLabels();
    initPage();
    root.classList.add('dh-ready');
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
})();
