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

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <LotusIcon className="w-14 h-8 mx-auto text-[var(--color-gold)] opacity-25 mb-6" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-5xl text-[var(--color-gold-light)] tracking-[4px] uppercase font-light mb-2">
            For Assistance
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <GoldDivider />
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 p-8 md:p-12 border border-[rgba(201,168,76,0.2)] bg-gradient-to-b from-[rgba(84,46,33,0.1)] to-[rgba(21,14,12,0.8)]">
            <p className="font-[var(--font-serif)] text-xl md:text-2xl text-[var(--color-gold-light)] font-light mb-2">
              Sri Goli Surendraiah
            </p>

            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto my-6 opacity-40" />

            <p className="font-[var(--font-serif)] text-xs tracking-[4px] uppercase text-[var(--color-cortez)] mb-4">
              Phone
            </p>
            <p className="font-[var(--font-serif)] text-lg text-[var(--color-gold-light)] tracking-[2px] mb-8">
              9493454649
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Call Button */}
              <a href="tel:+919493454649" className="contact-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                Call Now
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919493454649"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
