import { motion } from 'framer-motion';

const rounds = [
  {
    round: 'Round 1',
    title: 'Launch',
    subtitle: 'Open Innovation',
    date: '18 Apr 2026 – 26 Apr 2026',
    dateDetail: '',
    steps: [
      {
        icon: '🚀',
        title: 'Launch (PPT Submission)',
        desc: 'Online screening — Creativity, Feasibility, Innovation, Impact',
        color: '#00f0ff'
      }
    ]
  },
  {
    round: 'Round 2',
    title: 'Build & Pitch',
    subtitle: 'Hackathon Day',
    date: 'May 4–5, 2026',
    dateDetail: '24-Hour Hackathon',
    steps: [
      {
        icon: '🧠',
        title: 'Ideation',
        desc: 'Deep dive into challenge domains and brainstorm solutions',
        color: '#a855f7'
      },
      {
        icon: '🛠️',
        title: 'Build',
        desc: 'Build your prototype at venue with mentorship support',
        color: '#ec4899'
      },
      {
        icon: '🏁',
        title: 'Final Pitch',
        desc: 'Present to judges — Innovation, Execution, Impact, Presentation',
        color: '#39ff14'
      }
    ]
  }
];

export default function HackathonFlow() {
  return (
    <section id="flow" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        THE <span className="accent">JOURNEY</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Your path from idea to impact
      </motion.p>

      <div className="journey-rounds">
        {rounds.map((round, ri) => (
          <motion.div
            key={ri}
            className="journey-round"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ri * 0.3, duration: 0.7 }}
          >
            {/* Round Header */}
            <div className="round-header">
              <div className="round-badge">{round.round}</div>
              <div className="round-dates">
                <span className="round-date">{round.date}</span>
                {round.dateDetail && <span className="round-date-detail">{round.dateDetail}</span>}
              </div>
            </div>

            {/* Steps within the round */}
            <div className="flow-container">
              {round.steps.map((step, i) => (
                <motion.div key={i} style={{ display: 'contents' }}>
                  <motion.div
                    className="flow-step"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ri * 0.3 + i * 0.15 }}
                  >
                    <motion.div
                      className="flow-step-icon"
                      style={{
                        borderColor: `${step.color}30`,
                        boxShadow: `0 0 20px ${step.color}15`
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 0 35px ${step.color}40`,
                        borderColor: step.color
                      }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 style={{ color: step.color }}>{step.title}</h3>
                    <p>{step.desc}</p>
                  </motion.div>
                  {i < round.steps.length - 1 && (
                    <motion.div
                      className="flow-connector"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ri * 0.3 + i * 0.15 + 0.3, duration: 0.5 }}
                      style={{ background: `linear-gradient(90deg, ${step.color}, ${round.steps[i + 1].color})` }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
