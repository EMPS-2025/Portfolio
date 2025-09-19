'use client';

import { useEffect, useState } from 'react';

export default function UploadPage() {
  const [pdfs, setPdfs] = useState([]);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const fetchPdfs = async () => {
    try {
      const response = await fetch('/api/pdfs');
      if (!response.ok) {
        throw new Error('Unable to fetch documents');
      }
      const data = await response.json();
      setPdfs(data.files);
    } catch (error) {
      console.error(error);
      setMessage('Failed to load PDFs');
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.querySelector('input[name="pdf"]');
    if (!fileInput || !(fileInput instanceof HTMLInputElement) || !fileInput.files?.length) {
      setMessage('Please select a PDF to upload.');
      return;
    }
    const formData = new FormData();
    formData.append('pdf', fileInput.files[0]);

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      setStatus('success');
      setMessage('PDF uploaded successfully.');
      form.reset();
      fetchPdfs();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Unable to upload PDF right now.');
    }
  };

  return (
    <section>
      <div className="container">
        <h1 className="section-heading">Knowledge Resources</h1>
        <p className="section-subheading">
          Upload corporate profiles, capability statements or compliance documents. Uploaded PDFs are available
          for your team to access instantly below.
        </p>
        <div className="card" style={{ marginBottom: '2rem' }}>
          <form onSubmit={handleUpload}>
            <input name="pdf" type="file" accept="application/pdf" required />
            <button className="button" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Uploading…' : 'Upload PDF'}
            </button>
            {message && (
              <p style={{ marginTop: '1rem', color: status === 'error' ? '#ff9b9b' : 'var(--muted)' }}>{message}</p>
            )}
          </form>
        </div>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Available documents</h2>
          <div className="pdf-list">
            {pdfs.length === 0 && <p style={{ color: 'var(--muted)' }}>No documents uploaded yet.</p>}
            {pdfs.map((file) => (
              <div key={file.name} className="pdf-item">
                <div>
                  <strong>{file.name}</strong>
                  <p style={{ margin: 0, color: 'var(--muted)' }}>{file.size}</p>
                </div>
                <a className="button" href={file.url} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
