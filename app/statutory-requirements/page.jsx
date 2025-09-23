import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { resourceLibrary } from '@/data/resources';

export const metadata = {
  title: 'Statutory Requirements - Energy Minds Power Solutions',
  description: 'Download the latest statutory compliance documents for Energy Minds Power Solutions Private Limited.'
};

export default function StatutoryRequirementsPage() {
  const statutoryDocument = resourceLibrary.statutoryRequirements[0];

  if (!statutoryDocument) {
    return (
      <div className="page page--light">
        <Header />
        <main className="statutory">
          <div className="container statutory__inner">
            <header className="section__header">
              <h1>Statutory Requirements</h1>
              <p>The statutory requirements document will appear here once it has been uploaded.</p>
            </header>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page page--light">
      <Header />
      <main className="statutory">
        <div className="container statutory__inner">
          <header className="section__header">
            <h1>Statutory Requirements</h1>
            <p>Access the current statutory compliance documentation for Energy Minds Power Solutions Private Limited.</p>
          </header>
          <section className="statutory__viewer" aria-label="Statutory requirements PDF">
            <iframe
              src={`${statutoryDocument.href}#toolbar=0&view=fitH`}
              title={statutoryDocument.title}
              loading="lazy"
              className="statutory__iframe"
            />
            <div className="statutory__download">
              <a href={statutoryDocument.href} className="button button--primary" target="_blank" rel="noreferrer">
                Download PDF
              </a>
              <p>{statutoryDocument.description}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
