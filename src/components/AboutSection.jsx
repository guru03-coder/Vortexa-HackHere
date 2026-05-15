import { motion } from 'framer-motion';

export default function AboutSection() {
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
            VORTEXA?
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3><span className="bullet"></span>THE COMMUNITY</h3>
            <p>
              Hackhere is a high-octane technical community obsessed with pushing the boundaries of innovation.
              We reject the conventional. We build the future. We provide the proving ground for elite 
              developers to forge real-world solutions.
            </p>
          </motion.div>

          <motion.div 
            className="about-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3><span className="bullet"></span>THE EVENT</h3>
            <p>
              Vortexa is our inaugural 24-hour gauntlet. Centered around AI and cross-domain engineering, 
              this is where ideas are violently iterated upon until only the strongest survive. Expect no sleep. 
              Expect greatness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
