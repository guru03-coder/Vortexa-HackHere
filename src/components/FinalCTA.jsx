import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

export default function FinalCTA() {
  const { name, registrationLink } = hackathonData.event;
  return (
    <section className="cta-section">
      <div className="cta-container">
        
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge cta-title">
            <span className="stroke-text">ENTER THE</span><br />
            {name.toUpperCase()}
          </h2>
          
          <p className="cta-subtitle">
            Join elite innovators in the ultimate hackathon experience. 
            The clock is ticking. The {name.toLowerCase()} awaits.
          </p>

          <button 
            className="hero-cta cta-button"
            onClick={() => window.open(registrationLink, '_blank')}
          >
            SECURE YOUR SPOT <span className="arrow">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
