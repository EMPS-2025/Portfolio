import { journeyContent } from '@/data/content';

export default function Journey() {
  return (
    <section id="journey" className="section section--alt">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{journeyContent.title}</h2>
          <p>{journeyContent.subtitle}</p>
        </header>
        <div className="timeline">
          {journeyContent.milestones.map((milestone) => (
            <article key={milestone.title} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__card">
                <span className="timeline__date">{milestone.date}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
                <span className="timeline__category">{milestone.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
