import './style.css';

type feature = {
  icon: string;
  title: string;
  description: string;
};

const features: feature[] = [
  {
    icon: '📖',
    title: 'Hello World',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  
  {
    icon: '📖',
    title: 'Hello World',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    icon: '📖',
    title: 'Hello World',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('Application root element not found');
}

app.innerHTML = `
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
        ${features.map(
            (feature) => `
              <article class="feature-card">
                <div class="feature-icon">${feature.icon}</div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
              </article>
            `
          ).join('')}
      </div>
    </section>

  <footer class="site-footer">
    <div class="site-shell footer-inner">
      <span>© 2026 BookNakama</span>
      <span>Don’t judge a book by its owner—just borrow it.</span>
    </div>
  </footer>
`;

