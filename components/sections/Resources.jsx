import Link from 'next/link';
import { resourceLibrary } from '@/data/resources';

export default function Resources() {
  return (
    <section id="our-solutions" className="section section--alt">
      <div className="container section__inner">
        <header className="section__header">
          <h2>Digital Document Library</h2>
          <p>Latest tenders, statutory requirements, and daily market updates curated by Energy Minds Power Solutions.</p>
        </header>
        <div className="resources">
          <div className="resources__column">
            <h3>Latest Tenders</h3>
            <ul>
              {resourceLibrary.tenders.map((tender) => (
                <li key={tender.title}>
                  <Link href={tender.href} target="_blank" rel="noreferrer">
                    <span className="resources__title">{tender.title}</span>
                    <span className="resources__meta">{tender.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="resources__column">
            <h3>Daily Market Updates</h3>
            <ul>
              {resourceLibrary.marketUpdates.map((update) => (
                <li key={update.title}>
                  <Link href={update.href} target="_blank" rel="noreferrer">
                    <span className="resources__title">{update.title}</span>
                    <span className="resources__meta">{update.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="resources__column">
            <h3>Statutory Requirements</h3>
            <ul>
              {resourceLibrary.statutoryRequirements.map((document) => (
                <li key={document.title}>
                  <Link href={document.href} target="_blank" rel="noreferrer">
                    <span className="resources__title">{document.title}</span>
                    <span className="resources__meta">{document.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="resources__note">
              Looking for more? Visit our{' '}
              <Link href="/statutory-requirements" className="resources__link">
                dedicated statutory requirements page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
