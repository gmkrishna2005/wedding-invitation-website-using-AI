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

interface EventCardProps {
  id: string;
  heading: string;
  date: string;
  details: Array<{ label: string; value: string }>;
  venue: string[];
  accentColor?: string;
}

function EventCard({ id, heading, date, details, venue, accentColor = 'var(--color-gold)' }: EventCardProps) {
  return (
    <section id={id} className="section-padding relative">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <LotusIcon className="w-14 h-8 mx-auto text-[var(--color-gold)] opacity-25 mb-6" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-[var(--color-gold-light)] tracking-[4px] uppercase font-light mb-2">
            {heading}
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <GoldDivider />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="temple-card mt-10 p-8 md:p-12 text-center">
            <OrnamentalCorner position="top-left" />
            <OrnamentalCorner position="top-right" />
            <OrnamentalCorner position="bottom-left" />
            <OrnamentalCorner position="bottom-right" />

            {/* Date */}
            <div className="mb-8">
              <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-2">
                Date
              </p>
              <p
                className="font-[var(--font-serif)] text-2xl md:text-3xl font-light tracking-[3px]"
                style={{ color: accentColor }}
              >
                {date}
              </p>
            </div>

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto my-6 opacity-40" />

            {/* Details */}
            {details.map((detail, index) => (
              <div key={index} className="mb-6">
                <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-1">
                  {detail.label}
                </p>
                <p className="font-[var(--font-serif)] text-lg md:text-xl text-[var(--color-gold-light)] font-light">
                  {detail.value}
                </p>
              </div>
            ))}

            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto my-6 opacity-40" />

            {/* Venue */}
            <div>
              <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-2">
                Venue
              </p>
              {venue.map((line, i) => (
                <p key={i} className="font-[var(--font-serif)] text-base md:text-lg text-[var(--color-gold-light)] font-light leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function WeddingCeremony() {
  return (
    <EventCard
      id="ceremony"
      heading="Wedding Ceremony"
      date="02 July 2026"
      details={[
        { label: 'Muhurtham', value: '1:03 AM – 2:50 AM' },
      ]}
      venue={['DGP Kalyana Mandapam', 'Bangla Thota', 'Nellore']}
    />
  );
}

export function ReceptionSection() {
  return (
    <EventCard
      id="reception"
      heading="Reception"
      date="01 July 2026"
      details={[
        { label: 'Time', value: '6:00 PM onwards' },
        { label: 'Dinner', value: '8:00 PM onwards' },
      ]}
      venue={['DGP Kalyana Mandapam', 'Bangla Thota', 'Nellore']}
    />
  );
}

export function WeddingLunch() {
  return (
    <EventCard
      id="lunch"
      heading="Wedding Lunch"
      date="01 July 2026"
      details={[
        { label: 'Time', value: '11:00 AM' },
        { label: 'Lunch', value: '12:00 PM' },
      ]}
      venue={[
        'CBY Kalyana Mandapam',
        'Near Vidyavihar School',
        '4th Mile',
        'Nellore',
      ]}
    />
  );
}

export function PushkaramSection() {
  return (
    <section id="pushkaram" className="section-padding relative">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <LotusIcon className="w-14 h-8 mx-auto text-[var(--color-gold)] opacity-25 mb-6" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-[var(--color-gold-light)] tracking-[4px] uppercase font-light mb-2">
            Pushkaram
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <GoldDivider />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 p-8 md:p-10 relative border border-[var(--color-gold)] bg-gradient-to-b from-[rgba(74,14,14,0.3)] to-[rgba(21,14,12,0.9)]"
            style={{ boxShadow: '0 0 30px rgba(201, 168, 76, 0.15)' }}
          >
            <OrnamentalCorner position="top-left" />
            <OrnamentalCorner position="top-right" />
            <OrnamentalCorner position="bottom-left" />
            <OrnamentalCorner position="bottom-right" />

            {/* Om symbol */}
            <p className="text-4xl text-[var(--color-gold)] mb-4">ॐ</p>

            <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-2">
              Sacred Timing
            </p>
            <p className="font-[var(--font-serif)] text-2xl md:text-3xl text-[var(--color-gold-light)] font-light tracking-wider">
              2:12 PM – 2:16 PM
            </p>

            {/* Decorative bottom lotus */}
            <div className="mt-6">
              <LotusIcon className="w-12 h-7 mx-auto text-[var(--color-gold)] opacity-20" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
