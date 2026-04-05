import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '2nd', label: 'Year' },
  { value: '6.53', label: 'CGPA' },
  { value: '2', label: 'Virtual Simulations' },
  { value: '2', label: 'Projects' },
];

export default function About() {
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="section-wrapper">
        <span className="section-label reveal">01 — About</span>
        <h2 className="section-title reveal">
          A little about <span className="accent">myself</span>
        </h2>

        <div className="about-grid reveal">


          <div className="about-text">
            <p>
              I am a second-year Chemical Engineering student at the National
              Institute of Technology, Hamirpur with a deep curiosity for how
              things flow, react, and transform. My core interests lie at
              the intersection of heat transfer, process simulation, and
              renewable energy systems — fields where fundamental science
              meets real-world impact.
            </p>
            <p>
              Beyond coursework, I have gained practical exposure through
              virtual programs at APA Group (solar PV systems) and LifeArc
              (drug discovery pipelines). I enjoy writing MATLAB scripts to
              solve transient PDEs, analyzing lab data from calorimeters and
              heat exchangers, and occasionally sketching out process flow
              diagrams for systems that don't exist yet. When I'm not in
              the lab, you'll find me coordinating events with Dravya, our
              departmental society at NIT Hamirpur.
            </p>

            <div className="about-stats">
              {STATS.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">{countersVisible ? s.value : '—'}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
