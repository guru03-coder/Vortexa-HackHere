import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

function SponsorCard({ s, i }) {
  return (
    <motion.div
      className="sponsor-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
    >
      <div className="sponsor-logo-box">
        {s.logo ? (
          <img 
            src={s.logo} 
            alt={s.name} 
            style={{ height: '52px', objectFit: 'contain', borderRadius: '4px' }} 
            onError={(e) => {
              e.target.style.display = 'none';
              const sib = e.target.nextElementSibling;
              if (sib) sib.style.display = 'block';
            }} 
          />
        ) : null}
        {(!s.logo || s.logo === '') && (
          <div className="sponsor-text-fallback" style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--neon-cyan)', textTransform: 'uppercase' }}>
            {s.name}
          </div>
        )}
      </div>
      <h3 className="sponsor-name">{s.name}</h3>
      {s.role && <span className="sponsor-role">{s.role}</span>}
    </motion.div>
  );
}

export default function SponsorsSection() {
  const { title, kicker, list } = hackathonData.sponsors;
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section id="sponsors" className="about-section">
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

        <div className="sponsors-content">
          <div className="sponsor-tier">
            <div className="sponsor-grid">
              {list.map((s, i) => <SponsorCard key={i} s={s} i={i} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
