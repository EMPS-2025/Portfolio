import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-content">
        <div>
          <p className="badge">Integrated Renewable Energy Specialists</p>
          <h1 className="gradient-text">
            Designing bespoke solar, storage and energy efficiency systems for progressive businesses.
          </h1>
          <p>
            Energyminds Power Solution engineers turnkey renewable energy plants that drive measurable
            savings and sustainability gains. From feasibility to commissioning and beyond, we are your
            strategic clean energy partner.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link className="button" href="#services">
              Explore Services
            </Link>
            <Link className="button" href="/contact" style={{ background: 'transparent', color: 'var(--text)', border: '1px solid rgba(255,255,255,0.2)' }}>
              Talk to Us
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="energy-orbit">
            <div className="solar-core" />
            <div className="orbiting-panel">Solar</div>
            <div className="orbiting-leaf">Wind</div>
          </div>
        </div>
      </div>
    </section>
  );
}
