import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Zoho',
    role: '',
    logo: (
      <svg viewBox="0 0 120 40" width="100" height="34" fill="none">
        <text x="10" y="30" fontFamily="'Orbitron', sans-serif" fontSize="28" fontWeight="900" fill="#E42527">Z</text>
        <text x="32" y="30" fontFamily="'Orbitron', sans-serif" fontSize="28" fontWeight="900" fill="#FDB913">o</text>
        <text x="56" y="30" fontFamily="'Orbitron', sans-serif" fontSize="28" fontWeight="900" fill="#1B9F4A">h</text>
        <text x="80" y="30" fontFamily="'Orbitron', sans-serif" fontSize="28" fontWeight="900" fill="#2B7FC0">o</text>
      </svg>
    ),
  },
  {
    name: 'Journi',
    role: 'Travel Partner',
    logo: <span style={{ fontSize: '2.5rem' }}>✈️</span>,
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
    logo: <span style={{ fontSize: '2.5rem' }}>👕</span>,
  },
  {
    name: 'Wyntrix',
    role: 'Internship Partner',
    logo: <span style={{ fontSize: '2.5rem' }}>💼</span>,
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
            <h3>{s.name}</h3>
            {s.role && <span>{s.role}</span>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
