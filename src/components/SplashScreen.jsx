import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  return (
    <AnimatePresence>
      <motion.div
        className="splash-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        onAnimationComplete={() => {}}
      >
        {/* Background particles */}
        <div className="splash-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="splash-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 1.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </div>

        {/* Logo container */}
        <motion.div className="splash-logo-container">
          {/* Glowing ring behind logo */}
          <motion.div
            className="splash-ring"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 0.6, 0.3] }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Logo image */}
          <motion.img
            src="/images/hackhere-logo.jpeg"
            alt="HackHere"
            className="splash-logo-img"
            initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Tagline below logo */}
          <motion.p
            className="splash-tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Presents
          </motion.p>

          {/* AIVENTRA text reveal */}
          <motion.h1
            className="splash-title"
            initial={{ opacity: 0, scale: 0.5, letterSpacing: '20px' }}
            animate={{ opacity: 1, scale: 1, letterSpacing: '8px' }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            AIVENTRA
          </motion.h1>
        </motion.div>

        {/* Final zoom-in transition */}
        <motion.div
          className="splash-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.0 }}
          onAnimationComplete={onComplete}
        />
      </motion.div>
    </AnimatePresence>
  );
}
