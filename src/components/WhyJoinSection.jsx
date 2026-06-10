import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

export default function WhyJoinSection() {
  const { title, kicker, benefits } = hackathonData.whyParticipate;
  const list = benefits || [];
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section id="benefits" className="flow-section">
      <div className="flow-container-new">
        
        <motion.div 
          className="flow-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            {firstWord}<br />
            <span className="stroke-text">{restOfTitle}</span>
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>{kicker}</p>
        </motion.div>

        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '60px' }}>
          {list.map((item, idx) => (
            <motion.div 
              key={idx}
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)" }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-magenta)'}`,
                padding: '30px',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="benefit-icon" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{item.icon}</div>
              <h3 className="benefit-title" style={{ fontSize: '1.2rem', marginBottom: '15px', color: idx % 2 === 0 ? 'var(--neon-cyan)' : 'var(--neon-magenta)', letterSpacing: '1px' }}>{item.title}</h3>
              <p className="benefit-desc" style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
