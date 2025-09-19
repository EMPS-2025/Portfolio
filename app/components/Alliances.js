const alliances = [
  'MNRE Empanelled EPC',
  'ISO 9001 & 14001 Certified',
  'Channel Partner - Tata Power Solar',
  'Open Access Advisory Desk',
  'Remote Monitoring Network Operations'
];

export default function Alliances() {
  return (
    <section>
      <div className="container">
        <h2 className="section-heading">Trusted Alliances & Accreditations</h2>
        <p className="section-subheading">
          We collaborate with technology leaders, financial institutions and policy bodies to deliver
          bankable projects that perform in the real world.
        </p>
        <div className="card-grid">
          {alliances.map((item) => (
            <article key={item} className="card" style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
