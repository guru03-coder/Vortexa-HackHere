import { useState, useEffect } from 'react';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OrganizationSection from './components/OrganizationSection';
import EventDetails from './components/EventDetails';
import HackathonFlow from './components/HackathonFlow';
import ChallengeAreas from './components/ChallengeAreas';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import WhyJoinSection from './components/WhyJoinSection';
import ExperienceZone from './components/ExperienceZone';
import TeamSection from './components/TeamSection';
import FinalCTA from './components/FinalCTA';
import RocketEffect from './components/RocketEffect';
import SplashScreen from './components/SplashScreen';
import JuriesSection from './components/JuriesSection';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    const handleMouse = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* 3D Earth Cursor */}
      <div
        className="earth-cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        className="earth-cursor-trail"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* 3D Rocket Effect */}
      <RocketEffect />

      {/* Starfield Background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <AboutSection />
        <OrganizationSection />
        <EventDetails />
        <HackathonFlow />
        <ChallengeAreas />
        <PrizesSection />
        <SponsorsSection />
        <WhyJoinSection />
        <ExperienceZone />
        <JuriesSection />
        <TeamSection />
        <FinalCTA />

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/images/hackhere-logo.jpeg" alt="HackHere" className="footer-logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <div className="footer-socials">
              <a href="https://www.instagram.com/hackhere_connect/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="mailto:hackhere2026@gmail.com" className="footer-social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
            <p className="footer-text">
              © 2026 <span className="accent">Hackhere</span> | AIventra Hackathon — CODE. BUILD. GET HIRED.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
