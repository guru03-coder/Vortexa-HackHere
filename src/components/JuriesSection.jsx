import { motion } from 'framer-motion';

const juriesData = [
  {
    name: "Antony",
    role: "Interned in Prism Software Solutions",
    company: "placed in Chris Byte Solutions Private Limited",
    image: "/images/antony.jpeg"
  },
  {
    name: "Gokul",
    role: "Executive HR",
    company: "Cognizant",
    image: "/images/gokul.jpeg"
  },
  {
    name: "Yuva Sri",
    role: "Software developer | PWC",
    company: "Intern | Zoho",
    image: "/images/yuvasri.jpeg"
  }
];

export default function JuriesSection() {
  return (
    <section id="juries" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        OUR <span className="accent">CHIEF GUEST</span> <span style={{ color: '#ffffff' }}>AND</span> <span className="accent">JURIES</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        The experts who will evaluate your mission
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', padding: '1rem' }}>
        {juriesData.map((jury, i) => (
          <motion.div
            key={i}
            className="glass-card"
            style={{ padding: '3rem 2rem', textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.3)' }}
          >
            {jury.image ? (
              <img 
                src={jury.image} 
                alt={jury.name} 
                style={{ width: '160px', height: '160px', borderRadius: '50%', marginBottom: '1.5rem', objectFit: 'cover', border: '2px solid rgba(0, 240, 255, 0.3)' }} 
              />
            ) : (
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', color: 'rgba(255,255,255,0.2)' }}>
                ?
              </div>
            )}
            <h3 style={{ marginBottom: '0.5rem', color: jury.name === "To be announced" ? 'rgba(255,255,255,0.5)' : '#fff' }}>{jury.name}</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: jury.company ? '0.4rem' : '0' }}>{jury.role}</p>
            {jury.company && <p style={{ color: 'rgba(0, 240, 255, 0.8)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{jury.company}</p>}
          </motion.div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <motion.button 
            className="btn glow-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply as Jury
          </motion.button>
      </div>
    </section>
  );
}
