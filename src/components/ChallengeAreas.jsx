import { motion } from 'framer-motion';

const challenges = [
  {
    icon: '🤖',
    title: 'ARTIFICIAL INTELLIGENCE',
    desc: 'Build intelligent systems that learn, adapt, and transform industries',
    color: '#00f0ff'
  },
  {
    icon: '🛡️',
    title: 'CYBER SECURITY',
    desc: 'Defend digital frontiers with innovative security solutions and threat detection',
    color: '#a855f7'
  },
  {
    icon: '⛓️',
    title: 'BLOCKCHAIN',
    desc: 'Build decentralized applications and trustless systems for the future',
    color: '#ec4899'
  },
  {
    icon: '⚙️',
    title: 'DEVOPS',
    desc: 'Automate, integrate, and deploy — streamline the software lifecycle',
    color: '#39ff14'
  }
];

export default function ChallengeAreas() {
  return (
    <section id="challenges" className="event-section">
      <div className="event-container">
        
        <motion.div 
          className="event-header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            CHALLENGE<br />
            <span className="stroke-text">DOMAINS</span>
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>CHOOSE YOUR FRONTIER. SHAPE THE FUTURE.</p>
        </motion.div>

        <div className="event-data-list">
          {challenges.map((c, index) => (
            <motion.div 
              key={index}
              className="event-data-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: -10, backgroundColor: 'rgba(0, 240, 255, 0.05)', borderRightColor: c.color }}
            >
              <div className="data-icon" style={{ color: c.color }}>{c.icon}</div>
              <div className="data-content">
                <div className="data-value" style={{ color: c.color, fontSize: '1.2rem' }}>{c.title}</div>
                <div className="data-label" style={{ marginTop: '10px', color: 'var(--text-main)', letterSpacing: '1px', textTransform: 'none' }}>{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
