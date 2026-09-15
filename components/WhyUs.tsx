'use client';

import { motion } from 'framer-motion';

const reasons = [
  ['01', 'End-to-end execution', 'One sharp team from first sketch to final sign-off.'],
  ['02', 'Creative direction', 'A clear point of view that makes every touchpoint count.'],
  ['03', 'On-time delivery', 'Calm, precise production when the pressure is on.'],
  ['04', 'Trusted partners', 'A network of the best people, built over a decade.'],
];

export function WhyUs() {
  return (
    <section className="why-atmosphere bg-[#fafafa] px-6 py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-signal">04 / Why Westurn</p>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, ease: 'easeOut' }}><h2 className="hero-title text-5xl md:text-8xl">Good energy.<br /><em>Great work.</em></h2></motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-black/15">
          {reasons.map(([num, title, copy], i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08 }}
              className="grid gap-4 border-b border-black/15 py-7 md:grid-cols-[88px_1fr_1fr] md:items-center md:gap-8 md:py-9"
            >
              <span className="text-xs font-bold tracking-[.14em] text-signal">{num}</span>
              <h3 className="poppins-heading text-xl font-bold md:text-2xl">{title}</h3>
              <p className="max-w-sm text-sm leading-6 text-ink/50">{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
