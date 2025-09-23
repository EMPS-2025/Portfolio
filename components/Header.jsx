import Image from 'next/image';
import Link from 'next/link';
import { navigationLinks } from '@/data/content';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label="Energy Minds Power Solutions">
          <span className="header__logoWrap">
            <Image src="/images/logo.png" alt="Energy Minds Power Solutions logo" width={160} height={64} priority />
            <span className="header__pulse" />
          </span>
        </Link>
        <nav className="header__nav" aria-label="Primary">
          <ul className="header__menu">
            {navigationLinks.map((item) => (
              <li key={item.href} className="header__menuItem">
                <a href={item.href} className="header__link">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="header__menuItem">
              <Link href="/statutory-requirements" className="header__link">
                Statutory Requirements
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
