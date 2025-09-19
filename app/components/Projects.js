const projects = [
  {
    name: 'GreenTech Manufacturing Campus',
    summary: '5 MWp solar + 2 MWh storage hybrid plant delivering 62% grid independence and INR 1.8 Cr annual savings.'
  },
  {
    name: 'Urban Commercial Towers',
    summary: 'High-rise portfolio retrofit with BMS integration, LED lighting, chiller optimisation and EV charging infra.'
  },
  {
    name: 'Agro Processing Cluster',
    summary: 'Decentralised microgrid powering cold storage, ensuring 24/7 uptime and 38% reduction in diesel usage.'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading">Flagship Deployments</h2>
        <p className="section-subheading">
          From manufacturing plants to commercial estates, we deliver reliable renewable energy assets that
          align with ESG roadmaps and financial priorities.
        </p>
        <div className="card-grid">
          {projects.map((project) => (
            <article key={project.name} className="card">
              <h3 style={{ marginTop: 0 }}>{project.name}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{project.summary}</p>
              <span className="badge">Utility scale</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
