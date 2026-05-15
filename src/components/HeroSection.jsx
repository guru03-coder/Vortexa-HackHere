import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date('2026-06-20T09:00:00+05:30').getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Side: Massive Typography */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="hero-kicker"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            HACKHERE PRESENTS
          </motion.p>
          <motion.h1 
            className="hero-title-massive"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {"VORTEXA".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    textShadow: ["0px 0px 0px rgba(0,240,255,0)", "0px 0px 20px rgba(0,240,255,0.6)", "0px 0px 0px rgba(0,240,255,0)"]
                  }
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                }}
                whileHover={{
                  textShadow: "0px 0px 40px rgba(0,240,255,1), 0px 0px 80px rgba(0,240,255,0.8)",
                  scale: 1.1,
                  color: "#fff",
                  transition: { duration: 0.2 }
                }}
                style={{ display: "inline-block", cursor: "crosshair" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="hero-details">
            <p className="hero-date">JUNE 20–21, 2026</p>
            <p className="hero-venue">INTRO WORKS, CHENNAI</p>
          </div>
          <motion.button 
            className="hero-cta"
            onClick={() => {}}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,240,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            INITIALIZE SEQUENCE <span className="arrow">→</span>
          </motion.button>
        </motion.div>

        {/* Right Side: Minimalist Countdown */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="countdown-minimal">
            <div className="countdown-header">SYSTEM LAUNCH IN</div>
            <div className="countdown-grid">
              <div className="cd-block">
                <span className="cd-val">{String(countdown.days).padStart(2, '0')}</span>
                <span className="cd-lbl">DAY</span>
              </div>
              <div className="cd-block">
                <span className="cd-val">{String(countdown.hours).padStart(2, '0')}</span>
                <span className="cd-lbl">HRS</span>
              </div>
              <div className="cd-block">
                <span className="cd-val">{String(countdown.mins).padStart(2, '0')}</span>
                <span className="cd-lbl">MIN</span>
              </div>
              <div className="cd-block">
                <span className="cd-val">{String(countdown.secs).padStart(2, '0')}</span>
                <span className="cd-lbl">SEC</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
