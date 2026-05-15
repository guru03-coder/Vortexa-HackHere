import { motion } from 'framer-motion';

const experiences = [
  {
    icon: '🎮',
    title: 'MINI GAMES',
    desc: 'Fun breaks with competitive mini-games throughout the event',
    color: '#00f0ff'
  },
  {
    icon: '🎯',
    title: 'MENTOR SESSIONS',
    desc: 'Interactive guidance from industry experts and senior developers',
    color: '#a855f7'
  },
  {
    icon: '🎁',
    title: 'SURPRISE DROPS',
    desc: 'Unexpected rewards, swag drops, and secret challenges',
    color: '#ec4899'
  },
  {
    icon: '⚡',
    title: 'HIGH ENGAGEMENT',
    desc: 'Reward-based participation for the most active participants',
    color: '#39ff14'
  },
];

export default function ExperienceZone() {
  return (
    <section id="experience" className="event-section">
      <div className="event-container">
        
        <motion.div 
          className="event-header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            <span className="stroke-text">EXPERIENCE</span><br />
            ZONE
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>24 HOURS OF NON-STOP ENERGY</p>
        </motion.div>

        <div className="event-data-list">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="event-data-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: -10, backgroundColor: 'rgba(0, 240, 255, 0.05)', borderRightColor: exp.color }}
            >
              <div className="data-icon" style={{ color: exp.color }}>{exp.icon}</div>
              <div className="data-content">
                <div className="data-value" style={{ color: exp.color, fontSize: '1.2rem' }}>{exp.title}</div>
                <div className="data-label" style={{ marginTop: '10px', color: 'var(--text-main)', letterSpacing: '1px', textTransform: 'none' }}>{exp.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
