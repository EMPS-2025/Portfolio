import HeroAnimation from '../HeroAnimation';
import { heroContent } from '@/data/content';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero__background" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <h1 className="hero__title">{heroContent.title}</h1>
          <p className="hero__subtitle">{heroContent.subtitle}</p>
          <p className="hero__tagline">{heroContent.tagline}</p>
          {heroContent.descriptions.map((paragraph) => (
            <p key={paragraph} className="hero__description">
              {paragraph}
            </p>
          ))}
          <div className="hero__stats">
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__statValue" data-value={stat.value}>
                  {stat.value}
                </span>
                <span className="hero__statUnit">{stat.unit}</span>
                <span className="hero__statLabel">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__actions">
            {heroContent.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={`button button--${cta.variant}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}
