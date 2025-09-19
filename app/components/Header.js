'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Our Process' },
  { href: '/#projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/upload', label: 'Resources' }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="brand" aria-label="Energyminds Power Solution home">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Image src="/energy-minds-logo.png" alt="Energyminds logo" width={48} height={48} />
              <span style={{ fontWeight: 700, letterSpacing: '0.04em' }}>Energyminds</span>
            </div>
          </Link>
          <ul>
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: isActive ? 'var(--text)' : 'var(--muted)',
                      fontWeight: isActive ? 600 : 500
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
