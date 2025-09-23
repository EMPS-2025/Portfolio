import { aboutContent } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{aboutContent.title}</h2>
          <p>{aboutContent.subtitle}</p>
        </header>
        <div className="grid grid--two">
          {aboutContent.cards.map((card) => (
            <article key={card.title} className="card">
              <span className="card__icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
        <div className="callout">
          <p>{aboutContent.description}</p>
        </div>
      </div>
    </section>
  );
}
