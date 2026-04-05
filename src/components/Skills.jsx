import React from 'react';

const SKILLS = [
  // Core Concepts
  { symbol: 'Mb', name: 'Material Balance', category: 'core', num: 1, desc: 'Mass conservation across unit operations' },
  { symbol: 'Th', name: 'Thermodynamics', category: 'core', num: 2, desc: 'VLE, equations of state, energy functions' },
  { symbol: 'Ht', name: 'Heat Transfer', category: 'core', num: 3, desc: 'Conduction, convection, radiation' },
  { symbol: 'Hx', name: 'HX Design', category: 'core', num: 4, desc: 'LMTD, shell & tube, fouling factors' },
  { symbol: 'Fm', name: 'Fluid Mech', category: 'core', num: 5, desc: 'Bernoulli, pipe flow, Reynolds number' },
  { symbol: 'Ds', name: 'Distillation', category: 'core', num: 6, desc: 'McCabe-Thiele, relative volatility' },
  { symbol: 'Tc', name: 'Transient HC', category: 'core', num: 7, desc: 'FDM, CFL stability, numerical PDE solutions' },

  // Programming
  { symbol: 'Mt', name: 'MATLAB', category: 'programming', num: 8, desc: 'Numerical computing & visualization' },
  { symbol: 'Py', name: 'Python', category: 'programming', num: 9, desc: 'Data analysis & scripting' },

  // Tools
  { symbol: 'As', name: 'Aspen Plus', category: 'tools', num: 10, desc: 'Steady-state process simulation' },
  { symbol: 'Pf', name: 'PFD', category: 'tools', num: 11, desc: 'Process Flow Diagrams & P&IDs' },
  { symbol: 'Ps', name: 'Proc Sim', category: 'tools', num: 12, desc: 'Unit operation modeling & flowsheeting' },

  // Soft Skills
  { symbol: 'Na', name: 'Num Analysis', category: 'soft', num: 13, desc: 'Iterative methods, error propagation' },
  { symbol: 'Ld', name: 'Lab Data', category: 'soft', num: 14, desc: 'Experimental data analysis & validation' },
  { symbol: 'Tw', name: 'Tech Writing', category: 'soft', num: 15, desc: 'Reports, documentation, presentations' },
];

const CATEGORY_LABELS = {
  core: 'Core ChemE',
  programming: 'Programming',
  tools: 'Eng. Tools',
  soft: 'Analytical',
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-wrapper">
        <span className="section-label reveal">02 — Skills</span>
        <h2 className="section-title reveal">
          The periodic table of <span className="accent">what I know</span>
        </h2>

        {/* Category legend */}
        <div className="reveal" style={{
          display: 'flex', gap: '24px', flexWrap: 'wrap',
          marginBottom: '32px',
        }}>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <span key={key} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: key === 'core' ? 'var(--teal)'
                   : key === 'programming' ? 'var(--amber)'
                   : key === 'tools' ? 'var(--green)'
                   : 'var(--text-3)',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <span style={{
                display: 'inline-block',
                width: 8, height: 8, borderRadius: 2,
                background: key === 'core' ? 'var(--teal)'
                           : key === 'programming' ? 'var(--amber)'
                           : key === 'tools' ? 'var(--green)'
                           : 'var(--text-3)',
                opacity: 0.7,
              }} />
              {label}
            </span>
          ))}
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div
              key={skill.symbol}
              className="element-card reveal"
              data-category={skill.category}
            >
              <span className="element-number">{skill.num}</span>
              <div className="element-symbol">{skill.symbol}</div>
              <div className="element-name">{skill.name}</div>
              <div className="element-desc">{skill.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
