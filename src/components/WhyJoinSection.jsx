import { motion } from 'framer-motion';

const benefits = [
  { icon: '🚀', title: 'Innovation', desc: 'Push creative boundaries' },
  { icon: '🌐', title: 'Networking', desc: 'Connect with peers & pros' },
  { icon: '💼', title: 'Internships', desc: 'Partner company offers' },
  { icon: '📜', title: 'Certificates', desc: 'Recognition & achievement' },
  { icon: '🧠', title: 'Skill Growth', desc: 'Hands-on learning' },
];

export default function WhyJoinSection() {
  return (
    <section className="section" style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        WHY <span className="accent">JOIN?</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        More than a competition — it's a launchpad
      </motion.p>

      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            className="glass-card benefit-item"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, borderColor: 'rgba(0, 240, 255, 0.2)' }}
          >
            <motion.span
              className="benefit-icon"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {b.icon}
            </motion.span>
            <h4>{b.title}</h4>
            <p>{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
