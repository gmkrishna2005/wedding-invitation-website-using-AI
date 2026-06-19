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

interface VenueCardProps {
  name: string;
  address: string[];
  mapQuery: string;
}

function VenueCard({ name, address, mapQuery }: VenueCardProps) {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

  return (
    <div className="venue-card">
      {/* Map */}
      <div className="map-container mb-6">
        <iframe
          src={embedUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
        />
      </div>

      {/* Venue Info */}
      <h3 className="font-[var(--font-serif)] text-xl md:text-2xl text-[var(--color-gold-light)] font-light mb-3">
        {name}
      </h3>
      {address.map((line, i) => (
        <p key={i} className="font-[var(--font-sans)] text-sm text-[var(--color-khaki)] leading-relaxed">
          {line}
        </p>
      ))}

      {/* Get Directions Button */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="directions-btn mt-6 inline-flex"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        Get Directions
      </a>
    </div>
  );
}

export default function VenueSection() {
  return (
    <section id="venues" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div className="text-center mb-12">
            <LotusIcon className="w-14 h-8 mx-auto text-[var(--color-gold)] opacity-25 mb-6" />
            <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-[var(--color-gold-light)] tracking-[4px] uppercase font-light mb-2">
              Venue Information
            </h2>
            <GoldDivider />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <FadeUp delay={0.1}>
            <div>
              <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-4 text-center">
                Wedding &amp; Reception Venue
              </p>
              <VenueCard
                name="DGP Kalyana Mandapam"
                address={['Bangla Thota', 'Nellore']}
                mapQuery="DGP Kalyana Mandapam Bangla Thota Nellore"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-4 text-center">
                Lunch Venue
              </p>
              <VenueCard
                name="CBY Kalyana Mandapam"
                address={['Near Vidyavihar School', '4th Mile', 'Nellore']}
                mapQuery="CBY Kalyana Mandapam 4th Mile Nellore"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
