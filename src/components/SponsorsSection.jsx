import { motion } from 'framer-motion';

const sponsors = [
  {
    name: 'Journi',
    role: 'Official Sponsor',
    logo: (
      <img src="/images/sponsors/journi.jpeg" alt="Journi" style={{ height: '52px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Elyon Clothing',
    role: 'Powered By',
    logo: (
      <img src="/images/sponsors/elyon.jpeg" alt="Elyon Clothing" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Cristel',
    role: 'Intern Sponsor',
    logo: (
      <img src="/images/sponsors/intern1.jpeg" alt="Cristel" style={{ height: '52px', objectFit: 'contain', borderRadius: '4px' }} />
    ),
  },
  {
    name: 'Balvion Tech',
    role: 'Intern Sponsor',
    logo: (
      <img src="/images/sponsors/intern 2.jpeg" alt="Balvion Tech" style={{ height: '52px', objectFit: 'contain', borderRadius: '4px' }} />
    ),
  },
];

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
        {s.logo}
      </div>
      <h3 className="sponsor-name">{s.name}</h3>
      {s.role && <span className="sponsor-role">{s.role}</span>}
    </motion.div>
  );
}

export default function SponsorsSection() {
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
            <span className="stroke-text">OUR</span><br />
            SPONSORS
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>THE FORCES THAT MAKE THIS MISSION POSSIBLE</p>
        </motion.div>

        <div className="sponsors-content">
          <div className="sponsor-tier">
            <h3 className="tier-title"><span className="bullet"></span>PARTNERS</h3>
            <div className="sponsor-grid">
              {sponsors.map((s, i) => <SponsorCard key={i} s={s} i={i} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
