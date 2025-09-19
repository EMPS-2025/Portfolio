const steps = [
  {
    title: 'Discover & Model',
    body: 'We begin with energy audits, consumption profiling and financial modelling to pinpoint high-impact opportunities.'
  },
  {
    title: 'Engineer & Simulate',
    body: 'Our design studio produces detailed engineering drawings, 3D shading studies and bankable yield assessments.'
  },
  {
    title: 'Deploy & Optimise',
    body: 'Project managers oversee procurement, installation and commissioning while our analytics layer keeps you optimised.'
  }
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <h2 className="section-heading">A Proven, Data-Led Process</h2>
        <p className="section-subheading">
          Energyminds unites engineering excellence with digital monitoring to de-risk projects and deliver
          predictable performance for every kilowatt installed.
        </p>
        <div className="timeline">
          {steps.map((step) => (
            <div key={step.title} className="timeline-step">
              <strong>{step.title}</strong>
              <p style={{ color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
