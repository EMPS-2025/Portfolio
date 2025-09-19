const services = [
  {
    title: 'Solar PV Engineering',
    description:
      'Custom engineered rooftop and ground-mount solar projects optimised for maximum generation and ROI.',
    highlights: ['Site assessment', '3D layout & shading study', 'Performance analytics']
  },
  {
    title: 'Energy Storage Systems',
    description:
      'Hybrid battery solutions delivering grid resiliency, demand-charge reduction and peak shaving.',
    highlights: ['Lithium & flow chemistry', 'EMS integration', 'Operations monitoring']
  },
  {
    title: 'Energy Efficiency',
    description:
      'Audits and retrofits to reduce consumption through intelligent HVAC, lighting and process upgrades.',
    highlights: ['ISO 50001 consulting', 'Retro-commissioning', 'Smart metering']
  }
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-heading">Holistic Renewable Energy Services</h2>
        <p className="section-subheading">
          Our multi-disciplinary team covers the complete project lifecycle with engineering rigour and
          digital intelligence. Each engagement is tailor-made for your operational and sustainability KPIs.
        </p>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 style={{ marginTop: 0 }}>{service.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{service.description}</p>
              <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem', color: 'var(--muted)' }}>
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
