import { motion } from 'framer-motion';

const benefits = [
  { icon: '🚀', title: 'INNOVATION', desc: 'Push creative boundaries' },
  { icon: '🌐', title: 'NETWORKING', desc: 'Connect with peers & pros' },
  { icon: '💼', title: 'INTERNSHIPS', desc: 'Partner company offers' },
  { icon: '📜', title: 'CERTIFICATES', desc: 'Recognition & achievement' },
  { icon: '🧠', title: 'SKILL GROWTH', desc: 'Hands-on learning' },
];

export default function WhyJoinSection() {
  return (
    <section id="why-join" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            <span className="stroke-text">WHY</span><br />
            JOIN?
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>MORE THAN A COMPETITION — IT'S A LAUNCHPAD</p>
        </motion.div>

        <div className="about-content" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              className="about-block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <h3><span className="bullet"></span>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
