'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaneshaSilhouette, MandalaPattern, DiyaLamp } from './SVGComponents';

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [petals, setPetals] = useState<Array<{ id: number; left: string; delay: number; duration: number; size: number }>>([]);
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; duration: number }>>([]);

  const generatePetals = useCallback(() => {
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 4,
      size: 15 + Math.random() * 15,
    }));
    setPetals(newPetals);
  }, []);

  const generateParticles = useCallback(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 5 + Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generatePetals();
    generateParticles();
  }, [generatePetals, generateParticles]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background mandala */}
          <motion.div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            <MandalaPattern className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-[var(--color-gold)] opacity-10" />
          </motion.div>

          {/* Floating petals */}
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="petal"
              style={{
                left: petal.left,
                top: '-20px',
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
              }}
            >
              <svg width={petal.size} height={petal.size} viewBox="0 0 20 20">
                <ellipse cx="10" cy="10" rx="6" ry="10" fill="#E8A317" opacity="0.6" transform={`rotate(${Math.random() * 45}, 10, 10)`} />
              </svg>
            </div>
          ))}

          {/* Gold particles */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="gold-particle"
              style={{
                left: p.left,
                bottom: '0',
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}

          {/* Diya lamps */}
          <motion.div
            className="absolute left-6 md:left-16"
            style={{ top: '38%' }}
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <DiyaLamp className="w-12 h-16 md:w-16 md:h-20 text-[var(--color-gold)]" />
          </motion.div>

          <motion.div
            className="absolute right-6 md:right-16"
            style={{ top: '38%' }}
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <DiyaLamp className="w-12 h-16 md:w-16 md:h-20 text-[var(--color-gold)]" />
          </motion.div>

          {/* Ganesha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(201, 168, 76, 0.4))',
                  'drop-shadow(0 0 25px rgba(201, 168, 76, 0.7))',
                  'drop-shadow(0 0 10px rgba(201, 168, 76, 0.4))',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GaneshaSilhouette className="w-32 h-36 md:w-44 md:h-48 text-[var(--color-gold)]" />
            </motion.div>
          </motion.div>

          {/* Sanskrit text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl md:text-2xl font-[var(--font-serif)] text-[var(--color-gold)] tracking-widest z-10"
          >
            श्री गणेशाय नमः
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mt-6 z-10"
          />

          {/* Welcome message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-6 text-center z-10 px-4"
          >
            <p className="text-[var(--color-gold-light)] font-[var(--font-serif)] text-base md:text-lg italic leading-relaxed">
              With the blessings of Lord Ganesha,
            </p>
            <p className="text-[var(--color-gold-light)] font-[var(--font-serif)] text-base md:text-lg italic leading-relaxed">
              we invite you to celebrate our wedding.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
