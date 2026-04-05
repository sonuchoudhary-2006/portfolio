import React from 'react';

const EXPERIENCES = [
  {
    company: 'APA Group',
    role: 'Graduate Power Engineer Program',
    year: '2024',
    type: 'Virtual — Forage',
    iconType: 'energy',
    iconEmoji: '☀',
    bullets: [
      'Assisted with renewable energy project planning, focusing on solar PV system design and energy yield analysis.',
      'Applied engineering calculations to evaluate energy output, site feasibility, and system sizing for solar installations.',
      'Developed understanding of grid integration, energy storage, and sustainability frameworks in the power sector.',
    ],
    certLink: 'https://drive.google.com/file/d/1WViliKzAwvMYuDbEnVgeQwybBj-v4IkJ/view',
    certLabel: 'View Certificate',
  },
  {
    company: 'LifeArc',
    role: 'Drug Discovery & Data Science — Forage',
    year: '2024',
    type: 'Virtual Simulation',
    iconType: 'bio',
    iconEmoji: '⚗',
    bullets: [
      'Engaged in simulated drug discovery workflows, applying data-driven decision making to evaluate compound candidates.',
      'Analyzed experimental data to support target identification and lead optimization stages of drug development.',
      'Gained exposure to industry-relevant tools and frameworks in pharmaceutical R&D and translational science.',
    ],
    certLink: 'https://drive.google.com/file/d/1PkbOooBzekwqDlfm6_yuYsfWPl_mlqK3/view',
    certLabel: 'View Certificate',
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-wrapper">
        <span className="section-label reveal">03 — Experience</span>
        <h2 className="section-title reveal">
          Where I've <span className="accent">contributed</span>
        </h2>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className={`timeline-icon ${exp.iconType}`}>
                  {exp.iconEmoji}
                </div>
                <span className="timeline-year">{exp.year} · {exp.type}</span>
                <h3 className="timeline-company">{exp.company}</h3>
                <p className="timeline-role">{exp.role}</p>

                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <a
                  href={exp.certLink}
                  className="timeline-cert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ {exp.certLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
