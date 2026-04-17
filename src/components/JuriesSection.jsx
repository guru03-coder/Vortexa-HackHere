import { motion } from 'framer-motion';

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
        OUR <span className="accent">JURIES</span>
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
        {[1, 2, 3].map((item, i) => (
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
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', color: 'rgba(255,255,255,0.2)' }}>
              ?
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: 'rgba(255,255,255,0.5)' }}>To be announced</h3>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>Jury Member</p>
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
