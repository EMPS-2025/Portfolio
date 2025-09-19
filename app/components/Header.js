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
  { href: '/resources', label: 'Resources' }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="brand" aria-label="Energyminds Power Solution home">
            <Image src="/energy-minds-logo.png" alt="Energyminds logo" width={52} height={52} priority />
            <span className="sr-only">Energyminds</span>
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
                      color: isActive ? 'var(--text)' : 'rgba(243, 247, 251, 0.75)',
                      fontWeight: isActive ? 600 : 500,
                      textShadow: isActive ? '0 0 18px rgba(32, 216, 179, 0.45)' : 'none'
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
