import { motion } from 'framer-motion';
import { useRef } from 'react';

const orbitItems = [
  { label: 'VENUE', value: 'StartupTN, Nandanam', icon: '📍', color: '#00f0ff', position: 'top', link: 'https://www.google.com/maps/place/StartupTN/data=!4m2!3m1!1s0x0:0xec60c66c7d34f058?sa=X&ved=1t:2428&ictx=111&cshid=1776503725464821' },
  { label: 'DATES', value: 'May 4–5', icon: '📅', color: '#a855f7', position: 'right' },
  { label: 'DURATION', value: '24 Hours', icon: '⏱️', color: '#ec4899', position: 'bottom' },
  { label: 'MODE', value: 'Hybrid', icon: '🌐', color: '#3b82f6', position: 'left' },
];

const prizePool = {
  label: 'PRIZE POOL',
  value: '₹1,00,000',
  icon: '💰',
};

function TiltCard({ children, color }) {
  const cardRef = useRef(null);

  const handleMouse = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <div
      ref={cardRef}
      className="glass-card planet-card"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 0.2s ease-out', borderTop: `2px solid ${color}30` }}
    >
      {children}
    </div>
  );
}

export default function EventDetails() {
  return (
    <section id="event-details" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        MISSION <span className="accent">PARAMETERS</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Everything you need to know about the mission
      </motion.p>

      {/* Plus Formation Layout */}
      <motion.div
        className="planet-plus-layout"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Card */}
        <motion.div
          className="planet-pos planet-pos-top"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <a href={orbitItems[0].link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
            <TiltCard color={orbitItems[0].color}>
              <span className="planet-item-icon">{orbitItems[0].icon}</span>
              <span className="planet-item-label">{orbitItems[0].label}</span>
              <span className="planet-item-value" style={{ color: orbitItems[0].color }}>StartupTN</span>
              <span className="planet-item-value" style={{ color: orbitItems[0].color, fontSize: '0.85em', opacity: 0.8 }}>Nandanam</span>
              <span style={{ color: 'rgba(0,240,255,0.5)', fontSize: '0.7rem', marginTop: '4px', display: 'block' }}>📌 View on Maps</span>
            </TiltCard>
          </a>
        </motion.div>

        {/* Left Card */}
        <motion.div
          className="planet-pos planet-pos-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <TiltCard color={orbitItems[3].color}>
            <span className="planet-item-icon">{orbitItems[3].icon}</span>
            <span className="planet-item-label">{orbitItems[3].label}</span>
            <span className="planet-item-value" style={{ color: orbitItems[3].color }}>{orbitItems[3].value}</span>
          </TiltCard>
        </motion.div>

        {/* Center Planet — Prize Pool */}
        <motion.div
          className="planet-center-fixed"
          animate={{
            boxShadow: [
              '0 0 50px rgba(245,158,11,0.3), 0 0 100px rgba(245,158,11,0.1), inset -10px -10px 30px rgba(0,0,0,0.3)',
              '0 0 70px rgba(245,158,11,0.5), 0 0 140px rgba(245,158,11,0.15), inset -10px -10px 30px rgba(0,0,0,0.3)',
              '0 0 50px rgba(245,158,11,0.3), 0 0 100px rgba(245,158,11,0.1), inset -10px -10px 30px rgba(0,0,0,0.3)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.08 }}
        >
          <span className="planet-icon">{prizePool.icon}</span>
          <span className="planet-label">{prizePool.label}</span>
          <span className="planet-value">{prizePool.value}</span>
          <div className="planet-surface" />
          <div className="planet-highlight" />
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="planet-pos planet-pos-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <TiltCard color={orbitItems[1].color}>
            <span className="planet-item-icon">{orbitItems[1].icon}</span>
            <span className="planet-item-label">{orbitItems[1].label}</span>
            <span className="planet-item-value" style={{ color: orbitItems[1].color }}>{orbitItems[1].value}</span>
          </TiltCard>
        </motion.div>

        {/* Bottom Card */}
        <motion.div
          className="planet-pos planet-pos-bottom"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          <TiltCard color={orbitItems[2].color}>
            <span className="planet-item-icon">{orbitItems[2].icon}</span>
            <span className="planet-item-label">{orbitItems[2].label}</span>
            <span className="planet-item-value" style={{ color: orbitItems[2].color }}>{orbitItems[2].value}</span>
          </TiltCard>
        </motion.div>

        {/* Connector Lines */}
        <div className="plus-line plus-line-v" />
        <div className="plus-line plus-line-h" />
      </motion.div>
    </section>
  );
}
