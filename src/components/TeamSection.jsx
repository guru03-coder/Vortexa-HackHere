import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hackathonData } from '../data/hackathonData';

function TeamMemberCard({ member, idx }) {
  const [imageError, setImageError] = useState(false);
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div 
      className="about-block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -5, boxShadow: `0 0 20px ${member.color ? member.color + '33' : 'rgba(0, 240, 255, 0.1)'}` }}
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
      {/* Avatar Section */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        {member.photo && !imageError ? (
          <img 
            src={member.photo} 
            alt={member.name}
            onError={() => setImageError(true)}
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              objectFit: member.objectFit || 'cover',
              objectPosition: member.objectPosition || 'center',
              border: `2px solid ${member.color || 'var(--neon-magenta)'}`,
              boxShadow: `0 0 15px ${member.color ? member.color + '44' : 'rgba(236,72,153,0.3)'}`
            }}
          />
        ) : (
          <div 
            className="team-avatar-placeholder" 
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: `linear-gradient(135deg, ${member.color || 'var(--neon-magenta)'}, var(--neon-blue))`, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fff',
              boxShadow: `0 0 15px ${member.color ? member.color + '44' : 'rgba(236,72,153,0.3)'}`
            }}
          >
            {initials}
          </div>
        )}
      </div>

      <h3 style={{ fontSize: '1.2rem', color: member.color || 'var(--neon-magenta)', letterSpacing: '1px', marginBottom: '5px' }}>
        {member.name}
      </h3>
      
      <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: '500', marginBottom: '15px' }}>
        {member.role}
      </p>

      {/* LinkedIn Link */}
      {member.linkedin && (
        <a 
          href={member.linkedin} 
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
            e.currentTarget.style.color = member.color || 'var(--neon-cyan)';
            e.currentTarget.style.borderColor = member.color || 'var(--neon-cyan)';
            e.currentTarget.style.boxShadow = `0 0 10px ${member.color ? member.color + '66' : 'rgba(0,240,255,0.3)'}`;
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-main)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
          }}
          aria-label={`${member.name} LinkedIn`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
          </svg>
        </a>
      )}
    </motion.div>
  );
}

export default function TeamSection() {
  const { title, kicker, list } = hackathonData.team;
  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section id="team" className="about-section">
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
          {list.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
