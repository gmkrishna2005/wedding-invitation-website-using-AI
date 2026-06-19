'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GoldDivider, LotusIcon } from './SVGComponents';

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

interface FamilyCardProps {
  title: string;
  fatherName: string;
  motherName: string;
  details: Array<{ label: string; value: string }>;
}

function FamilyCard({ title, fatherName, motherName, details }: FamilyCardProps) {
  return (
    <div className="text-center p-8 md:p-10 border border-[rgba(201,168,76,0.2)] bg-gradient-to-b from-[rgba(84,46,33,0.15)] to-[rgba(21,14,12,0.6)] transition-all duration-300 hover:border-[rgba(201,168,76,0.4)]">
      <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-6">
        {title}
      </p>

      <p className="font-[var(--font-serif)] text-xl md:text-2xl text-[var(--color-gold-light)] font-light">
        {fatherName}
      </p>
      <p className="font-[var(--font-serif)] text-lg text-[var(--color-gold)] italic my-2">&amp;</p>
      <p className="font-[var(--font-serif)] text-xl md:text-2xl text-[var(--color-gold-light)] font-light mb-6">
        {motherName}
      </p>

      <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto my-6 opacity-40" />

      {details.map((detail, i) => (
        <div key={i} className="mb-3">
          <p className="font-[var(--font-serif)] text-xs tracking-[3px] uppercase text-[var(--color-cortez)]">
            {detail.label}
          </p>
          <p className="font-[var(--font-sans)] text-sm text-[var(--color-khaki)]">
            {detail.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function FamilySection() {
  return (
    <section id="family" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <div className="text-center mb-12">
            <LotusIcon className="w-14 h-8 mx-auto text-[var(--color-gold)] opacity-25 mb-6" />
            <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-[var(--color-gold-light)] tracking-[4px] uppercase font-light mb-2">
              Families
            </h2>
            <GoldDivider />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <FadeUp delay={0.1}>
            <FamilyCard
              title="Bride's Family"
              fatherName="Sri Goli Surendrayya"
              motherName="Smt. Shailaja"
              details={[
                { label: 'Village', value: 'Mypadu' },
                { label: 'Mandal', value: 'Indukurpet' },
                { label: 'District', value: 'Nellore' },
              ]}
            />
          </FadeUp>

          <FadeUp delay={0.2}>
            <FamilyCard
              title="Groom's Family"
              fatherName="Sri M. Subrahmanyam"
              motherName="Smt. Padmavathi"
              details={[
                { label: 'Village', value: 'Nellore' },
                { label: 'District', value: 'Nellore' },
              ]}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
