import React, { useState } from 'react';
import './App.css';
import { content, Lang } from './i18n';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('hu');
  const t = content[lang];

  return (
    <div className="portfolio">
      <div className="dev-banner">UNDER DEVELOPMENT</div>

      <button
        className="lang-toggle"
        onClick={() => setLang(lang === 'hu' ? 'en' : 'hu')}
      >
        {lang === 'hu' ? 'EN' : 'HU'}
      </button>

      <header className="hero">
        <h1>{t.greeting} <span className="highlight">Choristor</span></h1>
        <p className="tagline">{t.tagline}</p>
        <a href="#contact" className="btn">{t.contactBtn}</a>
      </header>

      <section className="about" id="about">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
      </section>

      <section className="projects" id="projects">
        <h2>{t.projectsTitle}</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Projekt 1</h3>
            <p>...</p>
            <span className="tag">Selenium</span>
            <span className="tag">Java</span>
          </div>
          <div className="card">
            <h3>Projekt 2</h3>
            <p>...</p>
            <span className="tag">Playwright</span>
            <span className="tag">TypeScript</span>
          </div>
          <div className="card">
            <h3>Projekt 3</h3>
            <p>...</p>
            <span className="tag">Selenium</span>
            <span className="tag">Playwright</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <button className="btn">{t.contactBtn}</button>
      </section>

      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;
