import { motion } from 'framer-motion';

const missions = [
  { icon: '💡', label: 'Innovation', desc: 'Pushing boundaries of what\'s possible' },
  { icon: '🔬', label: 'Exploration', desc: 'Discovering new technological frontiers' },
  { icon: '⚡', label: 'Disruption', desc: 'Challenging the conventional approach' },
];

export default function OrganizationSection() {
  return (
    <section id="organization" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        THE <span className="accent">ORGANIZATION</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        A futuristic tech community empowering enthusiasts to innovate and lead
      </motion.p>

      {/* Orbit Animation */}
      <div className="orbit-container">
        <div className="orbit-center">HACK<br/>HERE</div>

        {/* Ring 1 */}
        <div className="orbit-ring" style={{ width: 220, height: 220, animationDuration: '18s' }}>
          <div className="orbit-item" style={{ top: -16, left: '50%', transform: 'translateX(-50%)' }}>
            💡 Innovation
          </div>
        </div>

        {/* Ring 2 */}
        <div className="orbit-ring" style={{ width: 300, height: 300, animationDuration: '26s', animationDirection: 'reverse' }}>
          <div className="orbit-item" style={{ bottom: -16, left: '50%', transform: 'translateX(-50%)', animationDuration: '26s', animationDirection: 'reverse' }}>
            🔬 Exploration
          </div>
          <div className="orbit-item" style={{ top: '50%', right: -20, transform: 'translateY(-50%)', animationDuration: '26s', animationDirection: 'reverse' }}>
            ⚡ Disruption
          </div>
        </div>
      </div>

      {/* Mission Cards below orbit */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 60, flexWrap: 'wrap' }}>
        {missions.map((m, i) => (
          <motion.div
            key={i}
            className="glass-card"
            style={{ padding: '28px 24px', textAlign: 'center', width: 200 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15 }}
            whileHover={{ y: -8, boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)' }}
          >
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>{m.icon}</span>
            <h4 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: 6 }}>{m.label}</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
