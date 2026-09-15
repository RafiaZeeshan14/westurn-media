'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="hero-reference relative overflow-hidden bg-[#faf9f6] lg:min-h-screen">
      <motion.div initial={{ opacity: 0, x: 18, scale: 1.02 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: .05, duration: .7, ease: 'easeOut' }} className="hero-art pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image src="/hero2.png" alt="A vibrant technology exhibition and event space" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="hero-photo object-cover object-center" />
        <div className="hero-photo-overlay absolute inset-0" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] lg:ml-7 items-center px-6 pb-12 pt-28 lg:min-h-screen lg:px-4 lg:pb-0 lg:pt-20">
        <div className="w-full  lg:w-[64%] lg:pl-0 lg:pr-6">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05, duration: .55, ease: 'easeOut' }} className="mt-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-signal">
            <span className="h-px w-8 bg-signal" /> Ideas <span className="text-ink/25">|</span> Experiences <span className="text-ink/25">|</span> Impact
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .7, ease: 'easeOut' }} className="hidden lg:block">
            <h1 className="hero-title max-w-3xl text-6xl leading-[.9] md:text-8xl lg:text-[clamp(4.5rem,7vw,7.6rem)]">
              Events<br />
              That<br />
              <em>Move Brands</em>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .7, ease: 'easeOut' }} className="mt-6 lg:hidden">
            <div className="hero-mobile-art relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem]">
              <Image src="/hero2.png" alt="A vibrant technology exhibition and event space" fill sizes="100vw" className="hero-photo object-cover object-center" />
              <div className="absolute inset-0 z-[1] bg-black/40" />
              <div className="absolute inset-0 z-10 flex items-end p-6">
                <h1 className="hero-title text-5xl leading-[.88] text-white"><span className="block">Events</span><span className="block">That</span><em className="!text-white">Move Brands</em></h1>
              </div>
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .22, duration: .6, ease: 'easeOut' }} className="mt-8 max-w-md text-sm leading-6 text-ink/65 md:text-base">
            From concept to execution, we create powerful brand experiences that leave a lasting impression.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .6, ease: 'easeOut' }} className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="flex items-center gap-2 rounded-full bg-signal px-5 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-white transition hover:bg-ink">Let&apos;s create together <ArrowUpRight size={14} /></a>
            <a href="#work" className="flex items-center gap-2 rounded-full border border-ink/20 bg-white/70 px-5 py-4 text-[10px] font-bold uppercase tracking-[.14em] transition hover:border-signal hover:text-signal">Explore our work <ArrowUpRight size={14} /></a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45, duration: .7, ease: 'easeOut' }} className="mt-16 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-ink/40 lg:flex">
            <span className="hero-scroll-line h-12 w-px bg-signal" /> Scroll to explore
          </motion.div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-ink/45 lg:flex">Discover Westurn <ArrowDown size={14} className="text-signal" /></a>
    </section>
  );
}
