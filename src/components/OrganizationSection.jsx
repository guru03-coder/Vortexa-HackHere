import { motion } from 'framer-motion';

const missions = [
  { icon: '💡', label: 'INNOVATION', desc: 'Pushing boundaries of what\'s possible' },
  { icon: '🔬', label: 'EXPLORATION', desc: 'Discovering new technological frontiers' },
  { icon: '⚡', label: 'DISRUPTION', desc: 'Challenging the conventional approach' },
];

export default function OrganizationSection() {
  return (
    <section id="organization" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            <span className="stroke-text">THE</span><br />
            ORGANIZATION
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>EMPOWERING ENTHUSIASTS TO INNOVATE AND LEAD</p>
        </motion.div>

        <div className="about-content" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {missions.map((m, i) => (
            <motion.div 
              key={i}
              className="about-block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <h3><span className="bullet"></span>{m.label}</h3>
              <p>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
