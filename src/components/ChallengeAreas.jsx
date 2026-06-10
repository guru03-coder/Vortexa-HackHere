import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

export default function ChallengeAreas() {
  const { title, kicker, list } = hackathonData.challenges;
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

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
            {firstWord}<br />
            <span className="stroke-text">{restOfTitle}</span>
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>{kicker}</p>
        </motion.div>

        <div className="event-data-list">
          {list.map((c, index) => (
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
