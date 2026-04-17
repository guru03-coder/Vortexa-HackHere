import { motion } from 'framer-motion';

const prizes = [
  {
    icon: '💼',
    title: 'Internship Opportunities',
    color: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.25)'
  },
  {
    icon: '🏆',
    title: 'Prize Pool',
    value: '₹1,00,000',
    color: '#FFD700',
    glow: 'rgba(255, 215, 0, 0.25)',
    isCenter: true
  },
  {
    icon: '🎁',
    title: 'Goodies & Merchandise',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.25)'
  }
];

export default function PrizesSection() {
  return (
    <section id="prizes" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        REWARD <span className="accent">SYSTEM</span>
      </motion.h2>

      <div className="prizes-grid">
        {prizes.map((prize, i) => (
          <motion.div
            key={i}
            className={`glass-card prize-card ${prize.isCenter ? 'prize-card-center' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{
              y: -8,
              boxShadow: `0 0 50px ${prize.glow}`,
              borderColor: `${prize.color}40`
            }}
            animate={{
              y: [0, -6, 0]
            }}
            style={{
              borderTop: `3px solid ${prize.color}40`
            }}
          >
            <div className="hologram" />
            <motion.span
              className="prize-icon"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              {prize.icon}
            </motion.span>
            <h3 style={{ color: prize.color }}>{prize.title}</h3>
            {prize.value && (
              <p className="reward prize-value-text">{prize.value}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
