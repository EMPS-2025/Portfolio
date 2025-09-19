import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { resourceLibrary } from '@/data/resources';

export const metadata = {
  title: 'Statutory Requirements - Energy Minds Power Solutions',
  description: 'Download the latest statutory compliance documents for Energy Minds Power Solutions Private Limited.'
};

export default function StatutoryRequirementsPage() {
  return (
    <div className="page page--light">
      <Header />
      <main className="statutory">
        <div className="container statutory__inner">
          <header className="section__header">
            <h1>Statutory Requirements</h1>
            <p>Access the current statutory compliance documentation for Energy Minds Power Solutions Private Limited.</p>
          </header>
          <section className="statutory__documents">
            {resourceLibrary.statutoryRequirements.map((document) => (
              <article key={document.href} className="card card--document">
                <h2>{document.title}</h2>
                <p>{document.description}</p>
                <Link href={document.href} className="button button--primary" target="_blank" rel="noreferrer">
                  View PDF
                </Link>
              </article>
            ))}
          </section>
          <section className="statutory__guidance">
            <h2>How to update these documents</h2>
            <ol>
              <li>Replace the PDF files inside <code>public/documents</code> with the latest versions.</li>
              <li>Update the metadata in <code>data/resources.js</code> to reflect new titles and publication dates.</li>
              <li>Deploy the site. The new files are served instantly without further code changes.</li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
