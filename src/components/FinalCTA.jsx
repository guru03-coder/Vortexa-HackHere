import { motion } from 'framer-motion';

export default function FinalCTA() {
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
            VORTEX
          </h2>
          
          <p className="cta-subtitle">
            Join 150+ elite innovators in the ultimate hackathon experience. 
            The clock is ticking. The vortex awaits.
          </p>

          <button 
            className="hero-cta cta-button"
            onClick={() => window.open('https://unstop.com/p/aiventra-hackhere-1676309', '_blank')}
          >
            SECURE YOUR SPOT <span className="arrow">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
