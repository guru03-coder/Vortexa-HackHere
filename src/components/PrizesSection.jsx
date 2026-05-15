import { motion } from 'framer-motion';

const prizes = [
  {
    icon: '🏆',
    title: 'PRIZE POOL',
    value: '₹1,00,000',
    color: '#FFD700',
    isMain: true
  },
  {
    icon: '💼',
    title: 'INTERNSHIP OPPORTUNITIES',
    value: 'Direct hiring for top teams',
    color: '#00f0ff',
  },
  {
    icon: '🎁',
    title: 'GOODIES & MERCHANDISE',
    value: 'Exclusive Vortexa gear for participants',
    color: '#ec4899',
  }
];

export default function PrizesSection() {
  return (
    <section id="prizes" className="event-section">
      <div className="event-container">
        
        <motion.div 
          className="event-header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            REWARD<br />
            <span className="stroke-text">SYSTEM</span>
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>ONLY THE STRONGEST SURVIVE</p>
        </motion.div>

        <div className="event-data-list">
          {prizes.map((prize, index) => (
            <motion.div 
              key={index}
              className={`event-data-item ${prize.isMain ? 'prize-item' : ''}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: -10, backgroundColor: 'rgba(0, 240, 255, 0.05)', borderRightColor: prize.color }}
            >
              <div className="data-icon" style={{ color: prize.color }}>{prize.icon}</div>
              <div className="data-content">
                <div className="data-label">{prize.title}</div>
                <div className="data-value" style={{ color: prize.color, fontSize: prize.isMain ? '2rem' : '1.2rem' }}>{prize.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
