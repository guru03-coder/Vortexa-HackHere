import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Event', id: 'event-details' },
  { label: 'Juries', id: 'juries' },
  { label: 'Team', id: 'team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean);
      let current = 'home';
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 200) {
          current = sec.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('home')}>
        <img
          src="/images/hackhere-logo.jpeg"
          alt="HackHere"
          className="nav-logo-img"
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'inline';
          }}
        />
        <span className="nav-logo-fallback" style={{ display: 'none' }}>
          HACK<span className="accent">HERE</span>
        </span>
      </div>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <>
            <span style={{ transform: 'rotate(45deg) translate(5px, 5px)' }} />
            <span style={{ opacity: 0 }} />
            <span style={{ transform: 'rotate(-45deg) translate(5px, -5px)' }} />
          </>
        ) : (
          <><span /><span /><span /></>
        )}
      </button>
    </nav>
  );
}
