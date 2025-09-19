'use client';

import { useEffect, useState } from 'react';

export default function ResourcesPage() {
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  const formatDate = (value) => {
    if (!value) return null;

    try {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return null;
      }

      return new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(date);
    } catch (error) {
      console.error('Failed to format date', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setStatus('loading');
      setMessage('');

      try {
        const response = await fetch('/api/pdfs');
        if (!response.ok) {
          throw new Error('Unable to fetch documents');
        }

        const data = await response.json();
        setCategories(data.categories || []);
        setStatus('ready');
      } catch (error) {
        console.error(error);
        setMessage('We could not load the document library right now. Please refresh the page in a moment.');
        setStatus('error');
      }
    };

    fetchCategories();
  }, []);

  return (
    <section>
      <div className="container">
        <h1 className="section-heading">Document Library</h1>
        <p className="section-subheading">
          Explore Energyminds Power Solution LLP resources for procurement teams, compliance officers and market
          analysts. Documents are organised by tender notices, statutory requirements and daily market updates.
        </p>

        {message && (
          <div className="card" role="status" aria-live="polite" style={{ marginBottom: '2rem' }}>
            <p style={{ margin: 0, color: status === 'error' ? '#ffb4b4' : 'var(--muted)' }}>{message}</p>
          </div>
        )}

        {categories.map((category) => (
          <div key={category.id} className="card resource-card">
            <div className="resource-card__header">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            <div className="resource-card__list">
              {category.documents.length === 0 ? (
                <p className="resource-card__empty">No documents have been published in this section yet.</p>
              ) : (
                category.documents.map((document) => {
                  const updatedOn = formatDate(document.modified);

                  return (
                    <article key={document.url} className="resource-card__item">
                    <div>
                      <h3>{document.name}</h3>
                      <p>
                        {document.size}
                        {updatedOn && <span className="resource-card__meta">Updated {updatedOn}</span>}
                      </p>
                    </div>
                    <a className="button" href={document.url} target="_blank" rel="noopener noreferrer">
                      View PDF
                    </a>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        ))}

        {status === 'loading' && (
          <div className="card" style={{ marginTop: '2rem' }}>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Loading the latest documents…</p>
          </div>
        )}

        <div className="card info-card">
          <h2 style={{ marginTop: 0 }}>How to keep these PDFs up to date</h2>
          <p>
            Upload new files to the <code>public/documents</code> folder on the server. Create or place PDFs inside the
            <code>tenders</code>, <code>statutory-requirements</code> or <code>market-updates</code> sub-folders to have
            them automatically displayed above. The page checks the folder contents on each visit—no manual code changes
            are needed.
          </p>
          <p>
            Prefer a web-based content management system? Connect this page to services like{' '}
            <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer">
              Sanity
            </a>{' '}
            or{' '}
            <a href="https://strapi.io" target="_blank" rel="noopener noreferrer">
              Strapi
            </a>{' '}
            using their media libraries. Each platform offers non-technical upload interfaces and publishes secure file
            URLs that you can surface here.
          </p>
        </div>
      </div>
    </section>
  );
}
