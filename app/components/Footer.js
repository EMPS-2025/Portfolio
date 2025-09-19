import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ textAlign: 'center' }}>
        <p>
          <strong>Energyminds Power Solution</strong> &copy; {new Date().getFullYear()} — Powering a cleaner
          tomorrow.
        </p>
        <p>
          <Link href="mailto:info@energyminds.in">info@energyminds.in</Link> ·{' '}
          <Link href="tel:+919876543210">+91 98765 43210</Link>
        </p>
        <p className="badge">CIN: U40106KA2017PTC101010</p>
      </div>
    </footer>
  );
}
