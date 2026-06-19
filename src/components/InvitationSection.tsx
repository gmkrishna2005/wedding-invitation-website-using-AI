'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GoldDivider, LotusIcon, OrnamentalCorner } from './SVGComponents';

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

export default function InvitationSection() {
  return (
    <section id="invitation" className="section-padding relative">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <LotusIcon className="w-16 h-10 mx-auto text-[var(--color-gold)] opacity-30 mb-6" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-[var(--color-gold-light)] tracking-[4px] uppercase font-light mb-2">
            Sacred Invitation
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <GoldDivider />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative mt-12 p-8 md:p-12 gold-border-card">
            <OrnamentalCorner position="top-left" />
            <OrnamentalCorner position="top-right" />
            <OrnamentalCorner position="bottom-left" />
            <OrnamentalCorner position="bottom-right" />

            <p className="font-[var(--font-serif)] text-lg md:text-xl text-[var(--color-khaki)] leading-relaxed italic mb-8">
              With immense joy and divine blessings, the families warmly invite you to celebrate the sacred wedding of
            </p>

            <div className="my-8">
              <h3 className="font-[var(--font-script)] text-4xl md:text-5xl text-[var(--color-gold-light)] mb-1">
                Jahnavi
              </h3>
              <p className="font-[var(--font-serif)] text-sm text-[var(--color-cortez)] tracking-[3px] uppercase">
                (MCA)
              </p>
            </div>

            <p className="font-[var(--font-serif)] text-2xl text-[var(--color-gold)] italic my-4">&amp;</p>

            <div className="my-8">
              <h3 className="font-[var(--font-script)] text-4xl md:text-5xl text-[var(--color-gold-light)] mb-1">
                Penchalaswamy M.S.
              </h3>
              <div className="mt-3 space-y-1">
                <p className="font-[var(--font-serif)] text-sm text-[var(--color-cortez)] tracking-[2px]">
                  Operations Manager
                </p>
                <p className="font-[var(--font-serif)] text-sm text-[var(--color-cortez)] tracking-[2px]">
                  Star Phones
                </p>
                <p className="font-[var(--font-serif)] text-sm text-[var(--color-cortez)] tracking-[2px]">
                  Sydney, Australia
                </p>
              </div>
            </div>

            <div className="my-8">
              <GoldDivider />
            </div>

            <div className="mt-8">
              <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-khaki)] mb-4">
                Bride&apos;s Parents
              </p>
              <p className="font-[var(--font-serif)] text-xl md:text-2xl text-[var(--color-gold-light)] font-light">
                Sri Goli Surendrayya
              </p>
              <p className="font-[var(--font-serif)] text-lg text-[var(--color-gold)] italic my-1">&amp;</p>
              <p className="font-[var(--font-serif)] text-xl md:text-2xl text-[var(--color-gold-light)] font-light">
                Smt. Shailaja
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
