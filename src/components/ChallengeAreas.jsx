import { motion } from 'framer-motion';

const challenges = [
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Build intelligent systems that learn, adapt, and transform industries',
    gradient: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(0,240,255,0.02))',
    borderColor: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.3)'
  },
  {
    icon: '🛡️',
    title: 'Cyber Security',
    desc: 'Defend digital frontiers with innovative security solutions and threat detection',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.02))',
    borderColor: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.3)'
  },
  {
    icon: '⛓️',
    title: 'BlockChain',
    desc: 'Build decentralized applications and trustless systems for the future',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.02))',
    borderColor: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.3)'
  },
  {
    icon: '⚙️',
    title: 'DevOps',
    desc: 'Automate, integrate, and deploy — streamline the software lifecycle',
    gradient: 'linear-gradient(135deg, rgba(57,255,20,0.15), rgba(57,255,20,0.02))',
    borderColor: '#39ff14',
    glow: 'rgba(57, 255, 20, 0.3)'
  }
];

export default function ChallengeAreas() {
  return (
    <section id="challenges" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        CHALLENGE <span className="accent">DOMAINS</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Choose your frontier. Shape the future.
      </motion.p>

      <div className="challenges-grid">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            className="glass-card challenge-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{
              scale: 1.04,
              borderColor: c.borderColor,
              boxShadow: `0 0 40px ${c.glow}`
            }}
          >
            <motion.div
              className="challenge-sphere"
              style={{ background: c.gradient, border: `1px solid ${c.borderColor}20` }}
              animate={{
                boxShadow: [
                  `0 0 20px ${c.glow.replace('0.3', '0.1')}`,
                  `0 0 35px ${c.glow.replace('0.3', '0.25')}`,
                  `0 0 20px ${c.glow.replace('0.3', '0.1')}`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {c.icon}
            </motion.div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
