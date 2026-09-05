import { useState } from 'react';
import { ArrowUpRight, Box, Layers3, Maximize2, Instagram } from 'lucide-react';
import Gallery from '@/components/Gallery';
import CtaBar from '@/components/CtaBar';

const services = [
  {
    icon: Box,
    title: 'Rapid prototypes',
    description: 'Fast, functional models for real decisions.',
  },
  {
    icon: Layers3,
    title: 'Small-run production',
    description: 'Consistent parts, made for launch and learning.',
  },
  {
    icon: Maximize2,
    title: 'Design support',
    description: 'Practical guidance from file prep to finish.',
  },
];

type Page = 'home' | 'gallery';

function Home({ goGallery }: { goGallery: () => void }) {
  return (
    <>
    <CtaBar />
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top">Tresdé</a>
        <div className="nav-links">
          <button className="nav-button" onClick={goGallery}>Services</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>✣</span> Designed + printed in Kelowna</div>
          <h1>Objects that<br />make ideas<br />tangible.</h1>
          <p className="intro">From first prototype to small-run production, we turn ambitious concepts into tactile, precise objects.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:tresde@gmail.com">Request a quote <ArrowUpRight size={16} /></a>
            <button className="button button-secondary" onClick={goGallery}>View our work</button>
          </div>
        </div>

        <div className="hero-boxes">
          <div className="feature-frame">
            <div className="feature-image">
              <img src="https://images.pexels.com/photos/10828765/pexels-photo-10828765.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hands with gold jewelry" />
            </div>
            <div className="feature-meta">
              <strong>Earrings 01 — Gold PLA</strong>
              <span>0.12mm layers</span>
            </div>
          </div>
          <div className="feature-frame">
            <div className="feature-image">
              <img src="https://images.pexels.com/photos/7828701/pexels-photo-7828701.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Geometric minimalist sculpture" />
            </div>
            <div className="feature-meta">
              <strong>Structure 02 — Matte resin</strong>
              <span>0.08mm layers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        {services.map(({ icon: Icon, title, description }) => (
          <article className="service-card" key={title}>
            <Icon className="service-icon" size={19} strokeWidth={1.8} />
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <h2>Let's make the next version real.</h2>
          <p>Send a sketch, file, or impossible question. We'll bring the process.</p>
        </div>
        <a className="email-pill" href="mailto:tresde@gmail.com">tresde@gmail.com <ArrowUpRight size={16} /></a>
      </section>

      <footer className="footer">
        <span>Precision manufacturing with a human finish.</span>
        <div className="footer-mark"><Instagram size={18} /></div>
      </footer>
    </main>
    </>
  );
}

function App() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'gallery') {
    return <Gallery onBack={() => setPage('home')} />;
  }

  return <Home goGallery={() => setPage('gallery')} />;
}

export default App;
