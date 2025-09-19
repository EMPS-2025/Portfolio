'use client';

import { useState } from 'react';
import { contactContent } from '@/data/content';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const updateField = (field) => (event) => {
    setFormState((previous) => ({ ...previous, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Unable to send your message.');
      }

      setStatus({ type: 'success', message: 'Thank you! We will connect with you shortly.' });
      setFormState({ name: '', email: '', company: '', service: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container section__inner">
        <header className="section__header">
          <h2>{contactContent.title}</h2>
          <p>{contactContent.subtitle}</p>
        </header>
        <div className="contact">
          <div className="contact__details">
            {contactContent.details.map((detail) => (
              <article key={detail.heading} className="card card--contact">
                <span className="card__icon" aria-hidden="true">
                  {detail.icon}
                </span>
                <div>
                  <h3>{detail.heading}</h3>
                  {detail.lines?.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {detail.links?.map((link) => (
                    <p key={link.href}>
                      <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
                        {link.label}
                      </a>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <form className="form" onSubmit={handleSubmit} aria-live="polite">
            <h3>{contactContent.formTitle}</h3>
            <label className="form__field">
              <span>Name</span>
              <input type="text" value={formState.name} onChange={updateField('name')} required />
            </label>
            <label className="form__field">
              <span>Email</span>
              <input type="email" value={formState.email} onChange={updateField('email')} required />
            </label>
            <label className="form__field">
              <span>Company</span>
              <input type="text" value={formState.company} onChange={updateField('company')} required />
            </label>
            <label className="form__field">
              <span>Service Interest</span>
              <select value={formState.service} onChange={updateField('service')} required>
                <option value="">Select a service</option>
                {contactContent.services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
            <label className="form__field">
              <span>Message</span>
              <textarea value={formState.message} rows={4} onChange={updateField('message')} required />
            </label>
            <button type="submit" className="button button--primary" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status.type !== 'idle' ? (
              <p className={`form__status form__status--${status.type}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
