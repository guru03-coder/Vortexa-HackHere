import { motion } from 'framer-motion';

const rounds = [
  {
    round: 'Phase 1',
    title: 'LAUNCH',
    desc: 'Online screening — Creativity, Feasibility, Innovation, Impact',
    date: '18 Apr – 3 May',
    color: 'var(--neon-cyan)',
    icon: '🚀'
  },
  {
    round: 'Phase 2',
    title: 'IDEATION',
    desc: 'Deep dive into challenge domains and brainstorm solutions',
    date: 'June 20',
    color: 'var(--neon-magenta)',
    icon: '🧠'
  },
  {
    round: 'Phase 3',
    title: 'BUILD',
    desc: 'Build your prototype at venue with mentorship support',
    date: 'June 20-21',
    color: 'var(--neon-blue)',
    icon: '🛠️'
  },
  {
    round: 'Phase 4',
    title: 'PITCH',
    desc: 'Present to judges — Innovation, Execution, Impact, Presentation',
    date: 'June 21',
    color: '#39ff14',
    icon: '🏁'
  }
];

export default function HackathonFlow() {
  return (
    <section id="flow" className="flow-section">
      <div className="flow-container-new">
        
        <motion.div 
          className="flow-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            THE<br />
            <span className="stroke-text">JOURNEY</span>
          </h2>
        </motion.div>

        <div className="timeline">
          {rounds.map((step, i) => (
            <motion.div 
              key={step.round}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="timeline-content" style={{ borderLeft: i % 2 !== 0 ? `4px solid ${step.color}` : 'none', borderRight: i % 2 === 0 ? `4px solid ${step.color}` : 'none' }}>
                <div className="timeline-icon" style={{ color: step.color }}>{step.icon}</div>
                <div className="timeline-phase" style={{ color: step.color }}>{step.round} | {step.date}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
