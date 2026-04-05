import React from 'react';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Flash Drum VLE Simulation — Raoult\'s Law',
    tags: [
      { label: 'Python', variant: '' },
      { label: 'Thermodynamics', variant: 'amber' },
      { label: 'Phase Equilibrium', variant: '' },
    ],
    desc: "Built a complete computational tool in Python for binary vapor-liquid equilibrium (VLE) using Raoult's Law and Antoine parameters. Implemented the Rachford-Rice algorithm to compute bubble point, dew point, and subcooled/superheated conditions. The tool performs comprehensive material balances and generates publication-quality phase diagrams (T-xy, P-xy) and flash sweep analysis plots for 8 different chemical components.",
    link: 'https://github.com/sonuchoudhary-2006/Flash-Drum-Simulation',
  },
  {
    title: '1-D Transient Heat Conduction Simulation',
    tags: [
      { label: 'MATLAB', variant: '' },
      { label: 'Numerical Methods', variant: '' },
      { label: 'PDE', variant: 'amber' },
    ],
    desc: "Developed a MATLAB simulation to solve the 1-D transient heat conduction equation using Finite Difference Methods. Engineered both Explicit (Forward Euler) and unconditionally stable Implicit (Crank-Nicolson) computational schemes. Conducted rigorous CFL stability parameter analysis, verified spatial grid convergence orders, and successfully validated all numerical approximations against exact Fourier series analytical solutions.",
    link: 'https://github.com/sonuchoudhary-2006/Simulation-of-Transient-Heat-Conduction',
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-wrapper">
        <span className="section-label reveal">04 — Projects</span>
        <h2 className="section-title reveal">
          Things I've <span className="accent">built & studied</span>
        </h2>

        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <div
              key={i}
              className="project-card reveal"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div className="project-tags">
                {proj.tags.map((t, j) => (
                  <span
                    key={j}
                    className={`project-tag ${t.variant}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              
              <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                {proj.link && (
                  <a
                    href={proj.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', padding: '10px 20px' }}
                  >
                    <Github size={16} /> source code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
