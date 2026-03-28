import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>Szia, én vagyok <span className="highlight">Neved</span></h1>
        <p className="tagline">Frontend fejlesztő & UI tervező</p>
        <a href="#contact" className="btn">Kapcsolat</a>
      </header>

      <section className="about" id="about">
        <h2>Rólam</h2>
        <p>
          Szenvedélyes fejlesztő vagyok, aki szeret szép és funkcionális webes alkalmazásokat készíteni.
          React, TypeScript és modern CSS technológiákat használok.
        </p>
      </section>

      <section className="projects" id="projects">
        <h2>Projektek</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Projekt 1</h3>
            <p>Rövid leírás a projektről és a felhasznált technológiákról.</p>
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
          </div>
          <div className="card">
            <h3>Projekt 2</h3>
            <p>Rövid leírás a projektről és a felhasznált technológiákról.</p>
            <span className="tag">Node.js</span>
            <span className="tag">REST API</span>
          </div>
          <div className="card">
            <h3>Projekt 3</h3>
            <p>Rövid leírás a projektről és a felhasznált technológiákról.</p>
            <span className="tag">CSS</span>
            <span className="tag">Animation</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Kapcsolat</h2>
        <p>Írj nekem bármikor!</p>
        <a href="mailto:email@example.com" className="btn">email@example.com</a>
      </section>

      <footer>
        <p>© 2026 Neved. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
};

export default App;
