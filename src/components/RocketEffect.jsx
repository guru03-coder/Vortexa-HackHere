import { useState, useEffect, useMemo } from 'react';

export default function RocketEffect() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  // Fire particles
  const fireParticles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      size: 3 + Math.random() * 8,
      delay: Math.random() * 0.6,
      duration: 0.4 + Math.random() * 0.5,
      xOffset: (Math.random() - 0.5) * 16,
      color: Math.random() > 0.5
        ? `rgba(255, ${100 + Math.floor(Math.random() * 100)}, 0, ${0.5 + Math.random() * 0.5})`
        : `rgba(255, ${180 + Math.floor(Math.random() * 75)}, ${Math.floor(Math.random() * 50)}, ${0.4 + Math.random() * 0.4})`,
    }));
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
          setScroll(progress);
          setVisible(window.scrollY > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  // Zigzag movement calculations
  const cycleSpeed = 5;
  const amplitude = 20;
  const rocketX = 50 + Math.sin(scroll * Math.PI * 2 * cycleSpeed) * amplitude;
  const rocketY = ((scroll * 4) % 1) * 80 + 10;

  // Calculate rotation based on movement direction
  const prevScroll = Math.max(0, scroll - 0.002);
  const prevX = 50 + Math.sin(prevScroll * Math.PI * 2 * cycleSpeed) * amplitude;
  const dx = rocketX - prevX;
  const rotation = Math.atan2(-1, dx * 2) * (180 / Math.PI) + 90;

  return (
    <div
      className="rocket-3d"
      style={{
        left: `${rocketX}%`,
        top: `${rocketY}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        opacity: 0.35,
      }}
    >
      {/* Rocket SVG */}
      <svg
        viewBox="0 0 60 100"
        width="45"
        height="75"
        className="rocket-svg"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,100,0,0.5))' }}
      >
        <defs>
          <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="30%" stopColor="#e5e7eb" />
            <stop offset="60%" stopColor="#f9fafb" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
          <linearGradient id="rocketNose" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <radialGradient id="rocketWindow">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
        </defs>

        {/* Nose cone */}
        <path d="M30,2 C30,2 42,22 42,35 L18,35 C18,22 30,2 30,2Z" fill="url(#rocketNose)" />

        {/* Body */}
        <rect x="18" y="35" width="24" height="35" rx="2" fill="url(#rocketBody)" />

        {/* Window */}
        <circle cx="30" cy="42" r="7" fill="url(#rocketWindow)" stroke="#e5e7eb" strokeWidth="1.5" />
        <circle cx="28" cy="40" r="2" fill="rgba(255,255,255,0.4)" />

        {/* Stripe */}
        <rect x="18" y="55" width="24" height="3" fill="#ef4444" opacity="0.8" />

        {/* Left fin */}
        <path d="M18,60 L6,78 L12,78 L18,70Z" fill="url(#rocketNose)" />
        {/* Right fin */}
        <path d="M42,60 L54,78 L48,78 L42,70Z" fill="url(#rocketNose)" />

        {/* Exhaust nozzle */}
        <path d="M22,70 L22,75 L38,75 L38,70Z" fill="#6b7280" />
        <path d="M24,75 L24,78 L36,78 L36,75Z" fill="#4b5563" />
      </svg>

      {/* Fire/Exhaust Trail */}
      <div className="rocket-fire-container">
        {/* Main flame */}
        <div className="rocket-flame rocket-flame-core" />
        <div className="rocket-flame rocket-flame-mid" />
        <div className="rocket-flame rocket-flame-outer" />

        {/* Particles */}
        {fireParticles.map((p, i) => (
          <div
            key={i}
            className="fire-particle"
            style={{
              width: p.size,
              height: p.size,
              left: `calc(50% + ${p.xOffset}px)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              background: p.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
