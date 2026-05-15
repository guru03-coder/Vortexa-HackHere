import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING_CORE_SYSTEMS...");
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const texts = [
      "CONNECTING_TO_HACKHERE_SERVERS...",
      "BYPASSING_MAINFRAME_FIREWALLS...",
      "DECRYPTING_VORTEX_PROTOCOL...",
      "INJECTING_PAYLOAD...",
      "SYSTEM_OVERRIDE_SUCCESSFUL",
      "ACCESS_GRANTED_"
    ];
    
    let currentTextIndex = 0;
    const textInterval = setInterval(() => {
      if (currentTextIndex < texts.length) {
        setLoadingText(texts[currentTextIndex]);
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200); // Short glitch effect on text change
        currentTextIndex++;
      }
    }, 800); // Slowed down from 500

    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 1200); // Wait longer at 100%
          return 100;
        }
        return p + Math.floor(Math.random() * 12) + 2; // Slower increments
      });
    }, 250); // Slowed down from 150

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="splash-screen brutalist-loader-box"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: '#050505',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace',
          color: 'var(--neon-cyan)',
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
        }}
      >
        <div style={{ width: '90%', maxWidth: '500px', padding: '40px', border: '2px solid rgba(0, 240, 255, 0.2)', background: 'rgba(0,0,0,0.5)', position: 'relative' }}>
          
          {/* Decorative Corner Accents */}
          <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '20px', height: '20px', borderTop: '2px solid var(--neon-cyan)', borderLeft: '2px solid var(--neon-cyan)' }}></div>
          <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '20px', height: '20px', borderTop: '2px solid var(--neon-cyan)', borderRight: '2px solid var(--neon-cyan)' }}></div>
          <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '20px', height: '20px', borderBottom: '2px solid var(--neon-cyan)', borderLeft: '2px solid var(--neon-cyan)' }}></div>
          <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '20px', borderBottom: '2px solid var(--neon-cyan)', borderRight: '2px solid var(--neon-cyan)' }}></div>

          {/* Brutalist Logo Block */}
          <div style={{
            background: 'var(--neon-cyan)',
            color: '#000',
            padding: '8px 12px',
            fontWeight: '900',
            fontSize: '1rem',
            letterSpacing: '3px',
            marginBottom: '20px',
            textTransform: 'uppercase',
            boxShadow: '4px 4px 0 var(--neon-magenta)',
            display: 'inline-block',
          }}>
            HACKHERE.INIT
          </div>
          <div style={{
            background: progress === 100 ? 'var(--neon-magenta)' : 'var(--neon-cyan)',
            color: '#000',
            padding: '15px 20px',
            fontWeight: '900',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            letterSpacing: '8px',
            marginBottom: '40px',
            textTransform: 'uppercase',
            boxShadow: progress === 100 ? '6px 6px 0 var(--neon-cyan)' : '6px 6px 0 var(--neon-magenta)',
            animation: glitchActive ? 'cyber-glitch 0.2s steps(2) infinite alternate' : 'none',
            display: 'inline-block',
            transition: 'background 0.3s, box-shadow 0.3s'
          }}>
            VORTEXA<span style={{ opacity: 0.5 }}>_</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <span style={{ animation: glitchActive ? 'cyber-glitch 0.1s steps(2) infinite' : 'none' }}>
              {loadingText}
            </span>
            <span style={{ color: progress === 100 ? 'var(--neon-magenta)' : 'var(--neon-cyan)', fontWeight: 'bold' }}>
              {Math.min(progress, 100)}%
            </span>
          </div>
          
          <div style={{
            width: '100%',
            height: '24px',
            border: '2px solid rgba(255,255,255,0.2)',
            padding: '2px',
            position: 'relative'
          }}>
            <motion.div 
              style={{
                height: '100%',
                background: progress === 100 ? 'var(--neon-magenta)' : 'var(--neon-cyan)',
                boxShadow: progress === 100 ? '0 0 10px var(--neon-magenta)' : '0 0 10px var(--neon-cyan)'
              }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
            />
          </div>
          
          <div style={{ 
            marginTop: '30px', 
            fontSize: '0.8rem', 
            color: 'rgba(255,255,255,0.4)',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>[ HACKHERE PRESENTS ]</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
