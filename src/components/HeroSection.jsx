import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 0]);

  useEffect(() => {
    const target = new Date('2026-05-04T09:00:00+05:30').getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="hero">
      {/* 3D Perspective Depth Grid */}
      <motion.div className="hero-depth-grid" style={{ opacity: gridOpacity }} />

      {/* Floating Glowing Orbs for depth */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Particle Ring */}
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="hero-content-3d"
      >
        <motion.p
          className="hero-presents"
          initial={{ opacity: 0, y: 30, rotateX: -20 }}
          animate={{ opacity: 0.8, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hackhere Presents
        </motion.p>

        {/* 3D Submerging AIVENTRA Title */}
        <div className="hero-title-wrapper">
          <h1 className="hero-title hero-title-3d">
            {'AIVENTRA'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="hero-char"
                initial={{ opacity: 0, y: 100, rotateX: -90, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -10,
                  scale: 1.15,
                  textShadow: '0 0 40px rgba(0,240,255,0.8)',
                  transition: { duration: 0.2 }
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          {/* Reflection */}
          <div className="hero-title-reflection" aria-hidden="true">
            AIVENTRA
          </div>
        </div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          CODE. BUILD. GET HIRED.
        </motion.p>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          "Where Ideas Escape Gravity"
        </motion.p>

        {/* Countdown Timer — Centered & 3D */}
        <motion.div
          className="hero-countdown"
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {[
            { val: countdown.days, label: 'Days' },
            { val: countdown.hours, label: 'Hours' },
            { val: countdown.mins, label: 'Minutes' },
            { val: countdown.secs, label: 'Seconds' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="countdown-item countdown-item-3d"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="countdown-value">
                {String(item.val).padStart(2, '0')}
              </span>
              <span className="countdown-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Single Register Button — Centered */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <motion.button
            className="btn-primary btn-register-glow"
            whileHover={{ scale: 1.08, y: -5, boxShadow: '0 0 60px rgba(0,240,255,0.6)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open('https://unstop.com/p/aiventra-hackhere-1676309', '_blank')}
          >
            🚀 Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
