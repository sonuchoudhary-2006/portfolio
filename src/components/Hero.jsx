import React, { useMemo } from 'react';

const FORMULAS = [
  { text: 'Q = mcΔT', x: '62%', y: '15%' },
  { text: 'Re = ρvD/μ', x: '70%', y: '75%' },
  { text: 'PV = nRT', x: '58%', y: '88%' },
  { text: 'ΔG = ΔH − TΔS', x: '50%', y: '42%' },
  { text: 'CH₄', x: '78%', y: '55%' },
];

export default function Hero() {
  const bubbles = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: 2 + Math.random() * 5,
      duration: 12 + Math.random() * 16,
      delay: Math.random() * 10,
      color: Math.random() > 0.5 ? 'var(--teal)' : 'var(--amber)',
    }));
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Bubbles */}
      <div className="hero-bubbles">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              left: b.left,
              width: b.width,
              height: b.width,
              background: b.color,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating formulas */}
      <div className="hero-formulas">
        {FORMULAS.map((f, i) => (
          <span key={i} className="formula-float" style={{ left: f.x, top: f.y }}>
            {f.text}
          </span>
        ))}
      </div>

      {/* Main hero layout */}
      <div className="hero-inner">
        {/* Left decorative strip */}
        <div className="hero-left-strip">
          <div className="hero-strip-line" />
          <span className="hero-strip-text">CHEMICAL ENGINEERING</span>
          <div className="hero-strip-line" />
        </div>

        {/* Center content area — photo left, text right */}
        <div className="hero-body">
          {/* Photo column — left */}
          <div className="hero-photo-col">
            <div className="hero-photo-frame">
              <img src="/profile.jpg" alt="Sonu Choudhary" className="hero-photo" />
              <div className="hero-photo-border" />
            </div>
          </div>

          {/* Text column — right */}
          <div className="hero-text">


            <div className="hero-name-block">

              <h1 className="hero-name">
                <span className="first-name">Sonu</span>
                <span className="last-name">Choudhary</span>
              </h1>
            </div>

            <div className="hero-tagline">
              <span className="tagline-chip">Chemical Engineer</span>
              <span className="tagline-chip">Process Simulator</span>
              <span className="tagline-chip">Energy Enthusiast</span>
            </div>

            <p className="hero-desc">
              Second-year B.Tech Chemical Engineering student at NIT Hamirpur
              with hands-on experience in process simulation, numerical
              modeling, and renewable energy systems.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="https://drive.google.com/file/d/1ZaGI7fnjPlxH1krQqZsNZvK8dNaRapwu/view?usp=sharing" target="_blank" className="btn btn-outline">Download CV ↓</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
