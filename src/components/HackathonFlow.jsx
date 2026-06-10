import { motion } from 'framer-motion';

import { hackathonData } from '../data/hackathonData';

export default function HackathonFlow() {
  const { title, kicker, rounds } = hackathonData.flow;
  const timelineData = rounds || [];
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section id="flow" className="about-section">
      <div className="about-container">
        
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            {firstWord}<br />
            <span className="stroke-text">{restOfTitle}</span>
          </h2>
          {kicker && <p className="hero-kicker" style={{ marginTop: '20px' }}>{kicker}</p>}
        </motion.div>

        <div className="flow-timeline">
          {timelineData.map((step, idx) => (
            <motion.div 
              key={step.round || idx}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-phase">{step.round}</span>
                <h3 className="timeline-title">{step.title}</h3>
                <span className="timeline-date">{step.date}</span>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
