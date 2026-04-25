import { motion } from 'framer-motion';

const officialSponsors = [
  {
    name: 'MeDo',
    role: 'Official Sponsor',
    logo: (
      <div style={{ background: '#ffffff', borderRadius: '10px', padding: '6px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/images/sponsors/medo.png" alt="MeDo" style={{ height: '32px', objectFit: 'contain' }} />
      </div>
    ),
  },
  {
    name: 'Journi',
    role: 'Official Sponsor',
    logo: (
      <img src="/images/sponsors/journi.jpeg" alt="Journi" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
];

const poweredBy = [
  {
    name: 'Elyon Clothing',
    role: 'Powered By',
    logo: (
      <img src="/images/sponsors/elyon.jpeg" alt="Elyon Clothing" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Maestrominds',
    role: 'Powered By',
    logo: (
      <img src="/images/sponsors/maestrominds.png" alt="Maestrominds" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'FeatherlessAI',
    role: 'Powered By',
    logo: (
      <img src="/images/sponsors/featherlessai.jpeg" alt="FeatherlessAI" style={{ height: '40px', objectFit: 'contain' }} />
    ),
  },
];

function SponsorCard({ s, i }) {
  return (
    <motion.div
      className="glass-card sponsor-card"
      style={{ flex: '1 1 180px', maxWidth: '200px', minWidth: '160px' }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, -12, 0] }}
      whileHover={{ scale: 1.06, borderColor: 'rgba(0, 240, 255, 0.3)' }}
      transition={{
        delay: i * 0.15,
        y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {s.logo}
      </div>
      <h3 style={{ textAlign: 'center', marginBottom: '4px' }}>{s.name}</h3>
      {s.role && <span style={{ textAlign: 'center', display: 'block', width: '100%', fontSize: '0.85rem' }}>{s.role}</span>}
    </motion.div>
  );
}

const rowLabel = (text) => (
  <div style={{
    width: '100%',
    textAlign: 'center',
    fontSize: '0.7rem',
    fontWeight: '700',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
    marginBottom: '1rem',
    marginTop: '0.5rem',
  }}>
    — {text} —
  </div>
);

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        SPACE <span className="accent">DOCK</span> PARTNERS
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        The forces that make this mission possible
      </motion.p>

      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>

        {/* Official Sponsors Row */}
        {rowLabel('Official Sponsors')}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', width: '100%', marginBottom: '1.5rem' }}>
          {officialSponsors.map((s, i) => <SponsorCard key={i} s={s} i={i} />)}
        </div>

        {/* Powered By Row */}
        {rowLabel('Powered By')}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', width: '100%' }}>
          {poweredBy.map((s, i) => <SponsorCard key={i} s={s} i={i + 2} />)}
        </div>

      </div>
    </section>
  );
}
