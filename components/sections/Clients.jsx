import { clientsContent } from '@/data/content';

export default function Clients() {
  return (
    <section id="clients" className="section section--alt">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{clientsContent.title}</h2>
          <p>{clientsContent.subtitle}</p>
        </header>
        <div className="clientGrid">
          {clientsContent.categories.map((category) => (
            <article key={category.title} className="clientGrid__category">
              <h3>{category.title}</h3>
              <div className="clientGrid__items">
                {category.clients.map((client) => (
                  <span key={client} className="chip chip--large">
                    {client}
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
