'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GoldDivider, LotusIcon, MandalaPattern } from './SVGComponents';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function ClosingSection() {
  return (
    <section id="closing" className="section-padding relative overflow-hidden">
      {/* Background mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <MandalaPattern className="w-[600px] h-[600px] text-[var(--color-gold)] opacity-[0.03]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeUp>
          <LotusIcon className="w-20 h-12 mx-auto text-[var(--color-gold)] opacity-30 mb-8" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <GoldDivider wide />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="my-12">
            <p className="font-[var(--font-telugu)] text-4xl md:text-6xl text-[var(--color-gold-light)] mb-4 leading-relaxed shimmer-text">
              శుభమస్తు
            </p>
            <p className="font-[var(--font-telugu)] text-3xl md:text-5xl text-[var(--color-gold)] mb-8 shimmer-text">
              కళ్యాణమస్తు
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <GoldDivider />
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-10 font-[var(--font-serif)] text-lg md:text-xl text-[var(--color-khaki)] italic leading-relaxed">
            Thank you for being a cherished part of our celebration.
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="mt-12">
            <LotusIcon className="w-16 h-10 mx-auto text-[var(--color-gold)] opacity-20" />
          </div>
        </FadeUp>

        {/* Footer */}
        <FadeUp delay={0.6}>
          <div className="mt-16 pt-8 border-t border-[rgba(201,168,76,0.1)]">
            <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-momoshio)]">
              Jahnavi &amp; Penchala Swamy
            </p>
            <p className="font-[var(--font-serif)] text-xs text-[var(--color-momoshio)] mt-1 tracking-wider">
              02 · 07 · 2026
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
