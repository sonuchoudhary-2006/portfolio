import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about', icon: '01' },
  { label: 'Skills', href: '#skills', icon: '02' },
  { label: 'Experience', href: '#experience', icon: '03' },
  { label: 'Projects', href: '#projects', icon: '04' },
  { label: 'Contact', href: '#contact', icon: '05' },
];

// Positions along a semicircular arc (right side)
// We compute x-offset and y-position to form a curve
const ARC_RADIUS = 140;
const ARC_CENTER_ANGLE = 0; // center of arc
const ARC_SPREAD = 120; // total degrees of the arc

function getArcPosition(index, total) {
  const startAngle = -ARC_SPREAD / 2;
  const step = ARC_SPREAD / (total - 1);
  const angleDeg = startAngle + step * index;
  const angleRad = (angleDeg * Math.PI) / 180;
  // x offset from the right edge (curves inward)
  const x = ARC_RADIUS - ARC_RADIUS * Math.cos(angleRad);
  // y offset from center
  const y = ARC_RADIUS * Math.sin(angleRad);
  return { x, y, angleDeg };
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Build the SVG arc path for the decorative curve
  const arcPoints = NAV_ITEMS.map((_, i) => getArcPosition(i, NAV_ITEMS.length));
  const svgW = ARC_RADIUS + 30;
  const svgH = ARC_RADIUS * 2 + 60;
  const svgCenterY = svgH / 2;

  // Build a quadratic curve through the points
  let pathD = '';
  arcPoints.forEach((pt, i) => {
    const px = svgW - pt.x - 10;
    const py = svgCenterY + pt.y;
    if (i === 0) pathD += `M ${px} ${py}`;
    else pathD += ` L ${px} ${py}`;
  });

  return (
    <>
      {/* Desktop: semicircular right-side nav */}
      <nav className="arc-nav" aria-label="Main navigation">
        {/* Decorative arc line */}
        <svg
          className="arc-nav-curve"
          viewBox={`0 0 ${svgW} ${svgH}`}
          width={svgW}
          height={svgH}
        >
          <path
            d={pathD}
            fill="none"
            stroke="var(--border-2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        <div className="arc-nav-items">
          {NAV_ITEMS.map((item, i) => {
            const pos = getArcPosition(i, NAV_ITEMS.length);
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`arc-nav-item ${isActive ? 'active' : ''}`}
                style={{
                  '--arc-x': `${pos.x}px`,
                  '--arc-y': `${pos.y}px`,
                }}
              >
                <span className="arc-nav-dot">
                  <span className="arc-nav-num">{item.icon}</span>
                </span>
                <span className="arc-nav-label">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Logo at top */}
        <a href="#hero" className="arc-nav-logo">
          S<span>.</span>C
        </a>
      </nav>

      {/* Mobile: hamburger + overlay */}
      <div className="mobile-topbar">
        <a href="#hero" className="nav-logo">S<span>.</span>C</a>
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
