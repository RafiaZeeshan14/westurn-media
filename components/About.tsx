'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [[150, 'events delivered'], [10, 'years in motion'], [80, 'brands trusted'], [30, 'cities reached']] as const;

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1400;
    const started = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <>{count}+</>;
}

export function About() {
  return (
    <section id="about" className="about-atmosphere bg-[#fafafa] px-6 py-28 lg:px-12 lg:py-40">
      <div className="relative z-10 mx-auto max-w-[1440px]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-signal">01 / About us</p>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, ease: 'easeOut' }}><h2 className="hero-title text-6xl leading-[.95] md:text-8xl">The details are the <em>difference.</em></h2></motion.div>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-ink/60">
          Westurn Media is an independent event partner for teams who want to move people, not just fill a room. From first thought to final encore, we bring clear thinking, sharp creative and calm execution to every brief.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 border-y border-black/15 md:grid-cols-4">
        {stats.map(([number, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * .08 }}
            className="border-b border-black/15 px-4 py-7 text-center last:border-b-0 md:border-b-0 md:border-r md:px-6 md:py-10 md:last:border-r-0"
          >
            <div className="hero-title text-5xl md:text-7xl"><CountUp target={number} /></div>
            <div className="mt-3 text-xs font-bold uppercase tracking-[.12em] text-ink/45">{label}</div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
