'use client';

import { motion } from 'framer-motion';
import { MandalaPattern, LotusIcon, GoldDivider } from './SVGComponents';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(74, 14, 14, 0.5) 0%, rgba(21, 14, 12, 1) 70%)',
      }}
    >
      {/* Background mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <MandalaPattern className="w-[800px] h-[800px] text-[var(--color-gold)] opacity-[0.04]" />
      </div>

      {/* Gold texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(201, 168, 76, 0.1) 2px,
            rgba(201, 168, 76, 0.1) 4px
          )`,
        }}
      />

      <div className="relative z-10 text-center px-4">
        {/* Lotus icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8"
        >
          <LotusIcon className="w-20 h-12 text-[var(--color-gold)] opacity-40" />
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-[var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-gold-light)] mb-2 tracking-wide"
        >
          Jahnavi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 my-4"
        >
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
          <span className="font-[var(--font-serif)] text-2xl md:text-3xl text-[var(--color-gold)] italic">&amp;</span>
          <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-[var(--font-script)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-gold-light)] mb-10 tracking-wide"
        >
          Penchala Swamy
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="font-[var(--font-serif)] text-sm md:text-base tracking-[6px] uppercase text-[var(--color-khaki)] mb-2">
            Wedding Date
          </p>
          <p className="font-[var(--font-serif)] text-2xl md:text-3xl text-[var(--color-gold-light)] tracking-[4px] font-light">
            02 July 2026
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="my-10"
        >
          <GoldDivider />
        </motion.div>

        {/* Sanskrit blessing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-[var(--font-serif)] text-base md:text-lg text-[var(--color-cortez)] italic tracking-wide max-w-xl mx-auto leading-relaxed"
        >
          वक्रतुंड महाकाय सूर्यकोटि समप्रभ।
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <a href="#invitation" className="cta-button">
            Celebrate With Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
