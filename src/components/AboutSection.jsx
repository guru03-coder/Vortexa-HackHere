import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

export default function AboutSection() {
  const { sections } = hackathonData.about;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            <span className="stroke-text">WHAT IS</span><br />
            {hackathonData.event.name}?
          </h2>
        </motion.div>

        <div className="about-content">
          {sections.map((section, idx) => (
            <motion.div 
              key={section.id}
              className="about-block"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * (idx + 1) }}
            >
              <h3><span className="bullet"></span>{section.title}</h3>
              <p>{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
