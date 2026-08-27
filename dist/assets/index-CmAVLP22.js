(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{icon:`📖`,title:`Hello World`,description:`lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`},{icon:`📖`,title:`Hello World`,description:`lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`},{icon:`📖`,title:`Hello World`,description:`lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}],t=document.querySelector(`#app`);if(!t)throw Error(`Application root element not found`);t.innerHTML=`
  <header class="topbar">
    <div class="site-shell topbar-inner">
      <a href="#" class="brand" aria-label="BookNakama home">
        <span class="brand-mark">B</span>
        <span>BookNakama</span>
      </a>

      <nav class="nav" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact" class="nav-cta">Contact</a>
      </nav>
    </div>
  </header>

  <main class="site-shell">
    <section class="inner-html">
      <div class="inner-html-grid">
        <div>
          <h1>Hello, World!</h1>
          <p>
           lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div class="inner-html-actions">
            <a href="#features" class="button-1">View Features</a>
            <a href="#about" class="button-2">about our site</a>
          </div>
        </div>

        <div class="inner-html-card" aria-label="Quick summary">
          <div class="stat-box">
            <strong>10k+</strong>
            <span>people served</span>
          </div>

          <div class="metric-grid">
            <div class="metric">
              <span>Stat</span>
              <strong>info :)</strong>
            </div>
            <div class="metric">
              <span>Stat</span>
              <strong>info :)</strong>
            </div>
            <div class="metric">
              <span>Stat</span>
              <strong>info :)</strong>
            </div>
            <div class="metric">
              <span>Stat</span>
              <strong>info :)</strong>
            </div>
            </div>
        </div>
    </div>
    </section>

    <section class="section" id="features">
      <div class="section-header">
        <h2>Features</h2>
        <p>Why we are the best.</p>
      </div>

      <div class="feature-grid">
        ${e.map(e=>`
              <article class="feature-card">
                <div class="feature-icon">${e.icon}</div>
                <h3>${e.title}</h3>
                <p>${e.description}</p>
              </article>
            `).join(``)}
      </div>
    </section>

  <footer class="site-footer">
    <div class="site-shell footer-inner">
      <span>© 2026 BookNakama</span>
      <span>Don’t judge a book by its owner—just borrow it.</span>
    </div>
  </footer>
`;