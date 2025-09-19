import { marketsContent } from '@/data/content';

export default function Markets() {
  return (
    <section id="markets" className="section">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{marketsContent.title}</h2>
          <p>{marketsContent.subtitle}</p>
        </header>
        <div className="grid grid--three">
          {marketsContent.markets.map((market) => (
            <article key={market.title} className="card">
              <span className="card__icon" aria-hidden="true">
                {market.icon}
              </span>
              <h3>{market.title}</h3>
              <p>{market.description}</p>
              <ul className="pillList pillList--compact">
                {market.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <span className="card__badge">{market.volume}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
