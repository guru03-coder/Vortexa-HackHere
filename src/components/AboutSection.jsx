import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          WHAT IS <span className="accent">AIVENTRA?</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          A next-gen hackathon pushing innovation beyond limits — where ideas defy conventional boundaries
        </motion.p>

        <div className="about-grid">
          <motion.div variants={itemVariants} className="glass-card about-card">
            <h3 style={{ color: 'var(--neon-purple)' }}>🔮 Hackhere Community</h3>
            <p>
              A technical community focused on innovation, collaboration, and competition.
              We provide a platform for students to explore technologies, build real-world
              solutions, and connect with peers and the industry.
            </p>
            <div className="about-tags">
              {['Innovation', 'Collaboration', 'Academia ↔ Industry', 'Hands-on Learning'].map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card about-card" style={{ borderColor: 'rgba(0, 240, 255, 0.15)' }}>
            <h3>⚡ The Inaugural Hackathon</h3>
            <p>
              AIventra focuses on creative and unconventional problem-solving.
              With AI as the central pillar, we encourage cross-domain innovation
              to transform ideas into impactful solutions inspired by real-world issues.
            </p>
            <div className="about-tags">
              {['Artificial Intelligence', 'Cross-Domain', 'Real-World Impact'].map(tag => (
                <span key={tag} className="about-tag" style={{ borderColor: 'rgba(168, 85, 247, 0.2)', background: 'rgba(168, 85, 247, 0.06)', color: 'var(--neon-purple)' }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
