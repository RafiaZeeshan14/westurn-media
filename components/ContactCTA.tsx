'use client';

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactCTA() {
  return (
    <section id="contact" className="soft-glow border-t border-black/10 bg-[#fafafa] px-6 py-24 text-ink lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-signal">05 / Make a move</p>
          <h2 className="hero-title max-w-xl text-5xl leading-[.98] md:text-7xl">Let&apos;s create something <em>extraordinary.</em></h2>
          <div className="mt-14 space-y-5 text-sm text-ink/60">
            <a className="flex items-center gap-3 transition hover:text-signal" href="mailto:hello@westurn.media"><Mail size={16} /> hello@westurn.media</a>
            <a className="flex items-center gap-3 transition hover:text-signal" href="tel:+922135555555"><Phone size={16} /> +92 21 3555 5555</a>
            <span className="flex items-center gap-3"><MapPin size={16} /> Karachi · Lahore · Islamabad</span>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-7 self-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <label className="text-xs font-bold uppercase tracking-[.12em] text-ink/50">Name<input required className="mt-3 w-full border-b border-black/20 bg-transparent pb-3 text-base font-normal text-ink outline-none transition placeholder:text-ink/35 focus:border-signal" placeholder="Your name" /></label>
            <label className="text-xs font-bold uppercase tracking-[.12em] text-ink/50">Email<input required type="email" className="mt-3 w-full border-b border-black/20 bg-transparent pb-3 text-base font-normal text-ink outline-none transition placeholder:text-ink/35 focus:border-signal" placeholder="you@company.com" /></label>
          </div>
          <label className="text-xs font-bold uppercase tracking-[.12em] text-ink/50">Event type<input className="mt-3 w-full border-b border-black/20 bg-transparent pb-3 text-base font-normal text-ink outline-none transition placeholder:text-ink/35 focus:border-signal" placeholder="What are we making?" /></label>
          <label className="text-xs font-bold uppercase tracking-[.12em] text-ink/50">A little about it<textarea rows={3} className="mt-3 w-full resize-none border-b border-black/20 bg-transparent pb-3 text-base font-normal text-ink outline-none transition placeholder:text-ink/35 focus:border-signal" placeholder="Dates, location, ambitions..." /></label>
          <button className="flex w-fit items-center gap-3 rounded-full bg-signal px-6 py-4 text-xs font-bold uppercase tracking-[.1em] text-white transition hover:bg-ink">Send enquiry <ArrowUpRight size={15} /></button>
        </motion.form>
      </div>
    </section>
  );
}
