import { servicesContent } from '@/data/content';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{servicesContent.title}</h2>
          <p>{servicesContent.subtitle}</p>
        </header>
        <div className="grid grid--three">
          {servicesContent.services.map((service) => (
            <article key={service.title} className="card card--service">
              <span className="card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="pillList">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
