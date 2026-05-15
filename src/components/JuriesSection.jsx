import { motion } from 'framer-motion';

const juriesData = [
  {
    name: "ANTONY",
    role: "Interned in Prism Software Solutions",
    company: "placed in Chris Byte Solutions Private Limited",
    image: "/images/antony.jpeg"
  },
  {
    name: "GOKUL",
    role: "Executive HR",
    company: "Cognizant",
    image: "/images/gokul.jpeg"
  },
  {
    name: "YUVA SRI",
    role: "Software developer | PWC",
    company: "Intern | Zoho",
    image: "/images/yuvasri.jpeg"
  }
];

export default function JuriesSection() {
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
            <span className="stroke-text">GUESTS</span><br />
            & JURIES
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>THE EXPERTS WHO WILL EVALUATE YOUR MISSION</p>
          
          <button 
            className="hero-cta"
            style={{ marginTop: '40px' }}
            onClick={() => window.open('https://unstop.com/p/aiventra-hackhere-1676309', '_blank')}
          >
            APPLY AS JURY <span className="arrow">→</span>
          </button>
        </motion.div>

        <div className="about-content" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {juriesData.map((jury, i) => (
            <motion.div 
              key={i}
              className="about-block"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 20px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {jury.image ? (
                <img 
                  src={jury.image} 
                  alt={jury.name} 
                  style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '25px', objectFit: 'cover', border: '3px solid var(--neon-cyan)' }} 
                />
              ) : (
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', marginBottom: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: 'rgba(255,255,255,0.2)' }}>
                  ?
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>{jury.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{jury.role}</p>
              {jury.company && <p style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: '700', letterSpacing: '1px' }}>{jury.company}</p>}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
