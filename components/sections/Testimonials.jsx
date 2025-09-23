import { testimonialsContent } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{testimonialsContent.title}</h2>
          <p>{testimonialsContent.subtitle}</p>
        </header>
        <article className="testimonial">
          <div className="testimonial__rating">
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span>
            <span>{testimonialsContent.ratingLabel}</span>
          </div>
          <blockquote className="testimonial__quote">
            <p>{testimonialsContent.quote}</p>
          </blockquote>
          <div className="testimonial__results">
            {testimonialsContent.results.map((result) => (
              <span key={result} className="chip">
                {result}
              </span>
            ))}
          </div>
          <div className="testimonial__services">
            <h4>Services Provided:</h4>
            <ul>
              {testimonialsContent.servicesProvided.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <footer className="testimonial__client">{testimonialsContent.client}</footer>
        </article>
      </div>
    </section>
  );
}
