import React from 'react';
import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

function JuryMemberCard({ jury, idx }) {
  return (
    <motion.div 
      className="about-block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 240, 255, 0.1)" }}
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '30px',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-cyan)', letterSpacing: '1px', marginBottom: '5px' }}>
        {jury.name}
      </h3>
      
      <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500', marginBottom: '10px' }}>
        {jury.role}
      </p>
      
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontStyle: 'italic', marginBottom: jury.linkedin ? '15px' : '0' }}>
        {jury.company}
      </p>

      {/* LinkedIn Link (if added in the future) */}
      {jury.linkedin && (
        <a 
          href={jury.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-main)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--neon-cyan)';
            e.currentTarget.style.borderColor = 'var(--neon-cyan)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0,240,255,0.3)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-main)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
          }}
          aria-label={`${jury.name} LinkedIn`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
          </svg>
        </a>
      )}
    </motion.div>
  );
}

export default function JuriesSection() {
  const { title, kicker, list } = hackathonData.juries;
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section id="juries" className="about-section">
      <div className="about-container">
        
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-huge">
            <span className="stroke-text">{firstWord}</span><br />
            {restOfTitle}
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>{kicker}</p>
        </motion.div>

        <div className="about-content" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '60px' }}>
          {list.map((jury, idx) => (
            <JuryMemberCard key={idx} jury={jury} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
