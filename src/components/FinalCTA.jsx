import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FinalCTA() {
  // Generate warp lines
  const warpLines = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 1.5 + Math.random() * 2,
      height: 80 + Math.random() * 200,
      opacity: 0.2 + Math.random() * 0.4,
      color: Math.random() > 0.5 ? 'var(--neon-cyan)' : 'var(--neon-purple)',
    }));
  }, []);

  return (
    <section className="final-cta">
      {/* Warp speed lines */}
      <div className="warp-lines">
        {warpLines.map((line, i) => (
          <div
            key={i}
            className="warp-line"
            style={{
              left: line.left,
              animationDelay: `${line.delay}s`,
              animationDuration: `${line.duration}s`,
              background: `linear-gradient(to bottom, transparent, ${line.color}, transparent)`,
              opacity: line.opacity,
            }}
          />
        ))}
      </div>

      {/* Radial glow behind text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <motion.h2
        initial={{ opacity: 0, scale: 0.85, rotateX: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Ready to <span className="accent">Escape Gravity?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join 150+ innovators in the ultimate hackathon experience
      </motion.p>

      <motion.div
        className="final-buttons"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.button
          className="btn-primary btn-register-glow"
          whileHover={{ scale: 1.08, y: -5, boxShadow: '0 0 60px rgba(0,240,255,0.6)' }}
          whileTap={{ scale: 0.97 }}
          style={{ fontSize: '1.2rem', padding: '20px 50px' }}
          onClick={() => window.open('https://unstop.com/p/aiventra-hackhere-1676309', '_blank')}
        >
          📝 Register Now
        </motion.button>
      </motion.div>
    </section>
  );
}
