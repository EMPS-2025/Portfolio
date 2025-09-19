import { teamContent } from '@/data/content';

export default function Team() {
  return (
    <section id="team" className="section section--alt">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{teamContent.title}</h2>
          <p>{teamContent.subtitle}</p>
        </header>
        <div className="grid grid--three">
          {teamContent.members.map((member) => (
            <article key={member.name} className="card card--stacked">
              <span className="card__icon" aria-hidden="true">
                {member.icon}
              </span>
              <h3>{member.name}</h3>
              <p className="card__meta">{member.role}</p>
              <p>{member.background}</p>
              {member.education ? <p>{member.education}</p> : null}
              <div className="chipGroup">
                {member.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
