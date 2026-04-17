import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <>
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

        <ul className="nav-links">
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
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>✕</button>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
