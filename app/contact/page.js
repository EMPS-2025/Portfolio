'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Unable to send your enquiry.');
      }

      setStatus('success');
      setFeedback('Thank you for reaching out. Our consultants will respond within one business day.');
      setFormState({ name: '', email: '', phone: '', message: '', service: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('Something went wrong while submitting the form. Please try again later.');
    }
  };

  return (
    <section>
      <div className="container contact-grid">
        <div>
          <h1 className="section-heading" style={{ textAlign: 'left' }}>
            Let us co-create your next renewable energy milestone
          </h1>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
            Share your project objectives and our engineers will return with a custom roadmap covering
            feasibility, commercials and implementation timelines.
          </p>
          <div className="card" style={{ marginTop: '2rem' }}>
            <p style={{ marginTop: 0, color: 'var(--muted)' }}>
              Energyminds Power Solution Pvt. Ltd.
              <br />
              #402, Innovation Towers, Bengaluru 560001
              <br />
              India
            </p>
            <p style={{ color: 'var(--muted)' }}>
              Phone: <a href="tel:+919876543210">+91 98765 43210</a>
              <br />
              Email: <a href="mailto:info@energyminds.in">info@energyminds.in</a>
            </p>
          </div>
        </div>
        <div className="card form-card">
          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Full name" required value={formState.name} onChange={handleChange} />
            <input
              name="email"
              type="email"
              placeholder="Work email"
              required
              value={formState.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={formState.phone}
              onChange={handleChange}
            />
            <select name="service" value={formState.service} onChange={handleChange}>
              <option value="">Area of interest</option>
              <option value="solar">Solar PV Engineering</option>
              <option value="storage">Hybrid & Storage</option>
              <option value="efficiency">Energy Efficiency</option>
              <option value="advisory">Energy Advisory</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your energy goals"
              rows={5}
              required
              value={formState.message}
              onChange={handleChange}
            />
            <button className="button" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Submit enquiry'}
            </button>
            {feedback && (
              <p style={{ color: status === 'error' ? '#ff9b9b' : 'var(--muted)', margin: 0 }}>{feedback}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
