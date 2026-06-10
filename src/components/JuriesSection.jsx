import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

export default function JuriesSection() {
  const { title, kicker, list } = hackathonData.juries;
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section id="juries" className="about-section">
      <div className="about-container">
        
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            <span className="stroke-text">{firstWord}</span><br />
            {restOfTitle}
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>{kicker}</p>
        </motion.div>

        <div className="about-content" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '60px' }}>
          {list.map((jury, idx) => (
            <motion.div 
              key={idx}
              className="about-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 240, 255, 0.1)" }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div 
                className="jury-avatar-placeholder" 
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  marginBottom: '20px',
                  boxShadow: '0 0 15px rgba(0,240,255,0.3)'
                }}
              >
                {jury.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-cyan)', letterSpacing: '1px', marginBottom: '5px' }}>{jury.name}</h3>
              <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500', marginBottom: '10px' }}>{jury.title}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontStyle: 'italic' }}>{jury.company}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
