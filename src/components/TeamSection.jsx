import { motion } from 'framer-motion';

const team = [
  {
    name: 'EZHIL KK',
    role: 'Sponsor & Communication Lead',
    photo: '/images/ezhil.jpg.jpeg',
    color: '#00f0ff',
    linkedin: 'https://www.linkedin.com/in/kk-ezhil-6a31a6235/',
  },
  {
    name: 'K GURU PRAKASH',
    role: 'Developer Team Lead',
    photo: '/images/guru_new.png',
    color: '#a855f7',
    linkedin: 'https://www.linkedin.com/in/k-guru-prakash-9a4184337/',
    objectPosition: 'top',
    objectFit: 'contain',
  },
  {
    name: 'RITHIKA S',
    role: 'Social Media & Content Lead',
    photo: '/images/rithika.jpg.jpeg',
    color: '#ec4899',
    linkedin: 'https://www.linkedin.com/in/rithika-somasundaram/',
  },
  {
    name: 'SHUBAASHREE S',
    role: 'Outreach & Content Lead',
    photo: '/images/shubaashree.jpg.jpeg',
    color: '#ff2244',
    linkedin: 'https://www.linkedin.com/in/shubaashreesureshbabu',
  },
];

export default function TeamSection() {
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
            <span className="stroke-text">CORE</span><br />
            TEAM
          </h2>
          <p className="hero-kicker" style={{ marginTop: '20px' }}>THE ARCHITECTS OF THE VORTEX</p>
        </motion.div>

        <div className="about-content" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {team.map((member, i) => (
            <motion.div 
              key={i}
              className="about-block"
              style={{ padding: '0', overflow: 'hidden', border: `1px solid ${member.color}40`, background: '#050505' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <img 
                src={member.photo} 
                alt={member.name} 
                style={{ width: '100%', height: '250px', objectFit: member.objectFit || 'cover', objectPosition: member.objectPosition || 'center', filter: 'grayscale(100%) contrast(1.2)', transition: 'filter 0.3s' }} 
                onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'}
                onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2)'}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', color: member.color }}>{member.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '15px' }}>{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noreferrer" style={{ color: member.color, fontSize: '0.8rem', textDecoration: 'none', borderBottom: `1px solid ${member.color}`, paddingBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
