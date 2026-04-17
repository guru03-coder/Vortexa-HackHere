import { motion } from 'framer-motion';

const experiences = [
  {
    icon: '🎮',
    title: 'Mini Games',
    desc: 'Fun breaks with competitive mini-games throughout the event',
    color: '#00f0ff'
  },
  {
    icon: '🎯',
    title: 'Mentor Sessions',
    desc: 'Interactive guidance from industry experts and senior developers',
    color: '#a855f7'
  },
  {
    icon: '🎁',
    title: 'Surprise Drops',
    desc: 'Unexpected rewards, swag drops, and secret challenges',
    color: '#ec4899'
  },
  {
    icon: '⚡',
    title: 'High Engagement',
    desc: 'Reward-based participation for the most active participants',
    color: '#39ff14'
  },
];

export default function ExperienceZone() {
  return (
    <section id="experience" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        EXPERIENCE <span className="accent">ZONE</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        24 hours of non-stop energy and engagement
      </motion.p>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="glass-card experience-card"
            initial={{ opacity: 0, y: 30, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{
              y: -8,
              boxShadow: `0 0 35px ${exp.color}20`,
              borderColor: `${exp.color}30`
            }}
          >
            <motion.span
              className="exp-icon"
              whileHover={{ scale: 1.3, rotate: 10 }}
            >
              {exp.icon}
            </motion.span>
            <h3 style={{ color: exp.color }}>{exp.title}</h3>
            <p>{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
