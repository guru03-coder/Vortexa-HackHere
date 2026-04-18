import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'PWC',
    role: 'Brand Partner',
    logo: (
      <img src="/images/sponsors/logo_pwc.png" alt="PWC" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Journi',
    role: 'Travel Partner',
    logo: (
      <img src="/images/sponsors/journi.jpeg" alt="Journi" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'StartupTN',
    role: 'Venue Partner',
    logo: (
      <>
        <img 
          src="/images/sponsors/startuptn.jpeg" 
          alt="StartupTN" 
          style={{ height: '40px', objectFit: 'contain' }} 
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.nextElementSibling) e.target.nextElementSibling.style.display = 'block';
          }} 
        />
        <span style={{ display: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>StartupTN</span>
      </>
    ),
  },
  {
    name: 'Elyon Clothing',
    role: 'Merchandise Partner',
    logo: (
      <img src="/images/sponsors/elyon.jpeg" alt="Elyon Clothing" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Wyntrix',
    role: 'Internship Partner',
    logo: (
      <img src="/images/sponsors/wyntrix.jpeg" alt="Wyntrix" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        SPACE <span className="accent">DOCK</span> PARTNERS
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        The forces that make this mission possible
      </motion.p>

      <div className="sponsors-orbit sponsors-single-line">
        {sponsors.map((s, i) => (
          <motion.div
            key={i}
            className="glass-card sponsor-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            whileHover={{
              scale: 1.06,
              borderColor: 'rgba(0, 240, 255, 0.3)',
            }}
            transition={{
              delay: i * 0.15,
              y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.logo}
            </div>
            <h3 style={{ textAlign: 'center', marginBottom: '4px' }}>{s.name}</h3>
            {s.role && <span style={{ textAlign: 'center', display: 'block', width: '100%', fontSize: '0.85rem' }}>{s.role}</span>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
