import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

export default function EventDetails() {
  const { venue, dates, duration, mode, prizePool, venueLink } = hackathonData.event;

  const details = [
    { label: 'VENUE', value: venue, icon: '📍', color: 'var(--neon-cyan)', link: venueLink },
    { label: 'DATES', value: dates, icon: '📅', color: 'var(--neon-magenta)' },
    { label: 'DURATION', value: duration, icon: '⏱️', color: 'var(--neon-blue)' },
    { label: 'MODE', value: mode, icon: '🌐', color: 'var(--text-main)' },
  ];

  return (
    <section id="event-details" className="event-section">
      <div className="event-container">
        
        <motion.div 
          className="event-header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            MISSION<br />
            <span className="stroke-text">DATA</span>
          </h2>
        </motion.div>

        <div className="event-data-list">
          {details.map((item, index) => (
            <motion.div 
              key={item.label}
              className="event-data-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: -10, backgroundColor: 'rgba(0, 240, 255, 0.05)' }}
            >
              <div className="data-icon" style={{ color: item.color }}>{item.icon}</div>
              <div className="data-content">
                <div className="data-label">{item.label}</div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="data-value link" style={{ color: item.color }}>
                    {item.value} <span style={{ fontSize: '0.8rem' }}>↗</span>
                  </a>
                ) : (
                  <div className="data-value" style={{ color: item.color }}>{item.value}</div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Prize Pool */}
          <motion.div 
            className="event-data-item prize-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="data-icon">🏆</div>
            <div className="data-content">
              <div className="data-label">PRIZE POOL</div>
              <div className="data-value prize-value">{prizePool}</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
