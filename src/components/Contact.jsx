import React from 'react';

// Simple inline SVG icons to avoid any external dependency issues
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// A molecule decoration SVG for the right column
function ContactMolecule() {
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
      <g stroke="var(--teal)" strokeWidth="1.2" fill="none">
        {/* Hexagonal ring */}
        <line x1="160" y1="60" x2="230" y2="100" />
        <line x1="230" y1="100" x2="230" y2="180" />
        <line x1="230" y1="180" x2="160" y2="220" />
        <line x1="160" y1="220" x2="90" y2="180" />
        <line x1="90" y1="180" x2="90" y2="100" />
        <line x1="90" y1="100" x2="160" y2="60" />
        {/* Branches */}
        <line x1="160" y1="60" x2="160" y2="20" />
        <line x1="230" y1="100" x2="280" y2="80" />
        <line x1="230" y1="180" x2="280" y2="210" />
        <line x1="160" y1="220" x2="160" y2="270" />
        <line x1="90" y1="180" x2="50" y2="210" />
        <line x1="90" y1="100" x2="50" y2="70" />
      </g>
      <g fill="var(--teal)" opacity="0.3">
        <circle cx="160" cy="60" r="6" />
        <circle cx="230" cy="100" r="6" />
        <circle cx="230" cy="180" r="6" />
        <circle cx="160" cy="220" r="6" />
        <circle cx="90" cy="180" r="6" />
        <circle cx="90" cy="100" r="6" />
        <circle cx="160" cy="20" r="4" />
        <circle cx="280" cy="80" r="4" />
        <circle cx="280" cy="210" r="4" />
        <circle cx="160" cy="270" r="4" />
        <circle cx="50" cy="210" r="4" />
        <circle cx="50" cy="70" r="4" />
      </g>
      <g stroke="var(--teal)" strokeWidth="1" fill="none" opacity="0.15">
        <circle cx="160" cy="140" r="100">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 160 140"
            to="360 160 140"
            dur="60s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      {/* labels */}
      <g fontFamily="var(--font-mono)" fontSize="8" fill="var(--teal)" opacity="0.35">
        <text x="155" y="17">H</text>
        <text x="275" y="77">H</text>
        <text x="275" y="217">H</text>
        <text x="155" y="280">H</text>
        <text x="40" y="217">H</text>
        <text x="40" y="67">H</text>
      </g>
    </svg>
  );
}

const LINKS = [
  {
    icon: <MailIcon />,
    label: 'Email',
    value: '24bch054@nith.ac.in',
    href: 'mailto:24bch054@nith.ac.in',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91 91660 48282',
    href: 'tel:+919166048282',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'sonu-choudhary',
    href: 'https://www.linkedin.com/in/sonu-choudhary-003296324/',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com',
    href: 'https://github.com/sonuchoudhary-2006',
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-wrapper">
        <span className="section-label reveal">05 — Contact</span>

        <div className="contact-grid reveal">
          <div>
            <h2 className="contact-heading">
              Let's build something <span className="teal">together.</span>
            </h2>
            <p className="contact-subtext">
              Whether you're looking for a motivated intern, a research
              collaborator, or just want to talk thermodynamics — my inbox
              is always open.
            </p>

            <div className="contact-links">
              {LINKS.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="contact-link-item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-link-icon">{item.icon}</div>
                  <div>
                    <div className="contact-link-label">{item.label}</div>
                    <div className="contact-link-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-molecule-area">
            <ContactMolecule />
          </div>
        </div>
      </div>
    </section>
  );
}
