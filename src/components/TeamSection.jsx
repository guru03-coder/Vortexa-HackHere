import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const team = [
  {
    name: 'EZHIL KK',
    role: 'Sponsor & Communication Lead',
    photo: '/images/ezhil.jpg.jpeg',
    color: '#00f0ff',
    linkedin: 'https://www.linkedin.com/in/kk-ezhil-6a31a6235/',
    achievements: [
      'Strong foundation in software development',
      'Organized hackathons, symposiums & NGO volunteering',
      'Sponsor Team Lead with strong outreach skills',
      'Active in Social Impact Initiatives',
    ],
  },
  {
    name: 'K GURU PRAKASH',
    role: 'Developer Team Lead',
    photo: '/images/guru.jpg.jpeg',
    color: '#a855f7',
    linkedin: 'https://www.linkedin.com/in/k-guru-prakash-9a4184337/',
    achievements: [
      'AWS Cloud club secretary',
      'CCIC Club captain',
      'IEEE EMBS Society Core',
      'Participated & Won many Hackathons',
      'Full Stack Developer & Technical Lead',
    ],
  },
  {
    name: 'RITHIKA S',
    role: 'Social Media & Content Lead',
    photo: '/images/rithika.jpg.jpeg',
    color: '#ec4899',
    linkedin: 'https://www.linkedin.com/in/rithika-somasundaram/',
    achievements: [
      'District-Level Event Management Coordinator (YUCI)',
      'Secretary — IEEE RS & ITS Society',
      'Core team lead — Organized 3+ hackathons',
      'Customer Success Manager at Maestrominds',
    ],
  },
  {
    name: 'SHUBAASHREE S',
    role: 'Outreach & Content Lead',
    photo: '/images/shubaashree.jpg.jpeg',
    color: '#ff2244',
    linkedin: 'https://www.linkedin.com/in/shubaashreesureshbabu',
    achievements: [
      'Intern at CED (Anna Univ) & Zecurit',
      'Winner — Google Gen AI Hackathon',
      'Lead — IEEE Education Society',
      'Full Stack & Swift Developer',
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TeamMember({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });
  const isPhotoRight = index % 2 === 0;

  const photoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.4,
      rotateY: isPhotoRight ? 45 : -45,
      x: isPhotoRight ? 80 : -80,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }
    },
    exit: {
      opacity: 0.15,
      scale: 0.6,
      rotateY: isPhotoRight ? 20 : -20,
      transition: { duration: 0.6 }
    }
  };

  const infoVariants = {
    hidden: {
      opacity: 0,
      x: isPhotoRight ? -100 : 100,
      rotateY: isPhotoRight ? -10 : 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        delay: 0.25,
        ease: [0.16, 1, 0.3, 1],
      }
    },
    exit: {
      opacity: 0,
      x: isPhotoRight ? -50 : 50,
      transition: { duration: 0.5 }
    }
  };

  const photoContent = (
    <motion.div
      className="team-photo-col"
      variants={photoVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'exit'}
      style={{ perspective: 1000 }}
    >
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-photo-link">
        <div className="team-photo-card" style={{ '--member-color': member.color }}>
          <img
            src={member.photo}
            alt={member.name}
            className="team-member-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div
            className="team-photo-fallback"
            style={{
              display: 'none',
              background: `linear-gradient(135deg, ${member.color}40, ${member.color}15)`
            }}
          >
            <span className="fallback-initials">{member.name.split(' ').map(n => n[0]).join('')}</span>
            <span className="fallback-text">Photo</span>
          </div>
          {/* Gradient overlay at bottom for name */}
          <div className="team-photo-overlay">
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role" style={{ color: member.color }}>{member.role}</p>
          </div>
          {/* Photo glow */}
          <div className="team-photo-glow" style={{ background: member.color }} />
          {/* Corner accent */}
          <div className="team-photo-corner" style={{ borderColor: member.color }} />
        </div>
      </a>
      <motion.a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="team-linkedin-btn"
        style={{ borderColor: `${member.color}50`, color: member.color }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        <LinkedInIcon />
        Connect on LinkedIn
      </motion.a>
    </motion.div>
  );

  const infoContent = (
    <motion.div
      className="team-info-col"
      variants={infoVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'exit'}
    >
      <div className="team-info-panel glass-card" style={{ borderColor: `${member.color}15` }}>
        <div className="team-info-header">
          <div className="team-info-line" style={{ background: member.color }} />
          <h4 style={{ color: member.color }}>Experience & Achievements</h4>
        </div>
        <ul className="team-achievements">
          {member.achievements.map((ach, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: isPhotoRight ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + j * 0.12 }}
              style={{ '--accent': member.color }}
            >
              {ach}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      className={`team-member-row ${isPhotoRight ? 'photo-right' : 'photo-left'}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {isPhotoRight ? (
        <>
          {infoContent}
          {photoContent}
        </>
      ) : (
        <>
          {photoContent}
          {infoContent}
        </>
      )}
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="section team-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="accent">TEAM</span>
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        The crew making the mission possible
      </motion.p>

      <div className="team-zigzag">
        {team.map((member, i) => (
          <TeamMember key={i} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
