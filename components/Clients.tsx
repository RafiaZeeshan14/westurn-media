'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  ['airArabia.png', 'Air Arabia'],
  ['ccl.png', 'CCL'],
  ['cocola.png', 'Coca-Cola'],
  ['eneos.png', 'ENEOS'],
  ['kolson.png', 'Kolson'],
  ['meezan.png', 'Meezan'],
  ['standard.png', 'Standard Chartered'],
  ['telenor.png', 'Telenor'],
  ['toyota.png', 'Toyota'],
] as const;

const logoScale: Record<string, string> = {
  'ccl.png': 'scale-[.72]',
  'kolson.png': 'scale-[1.45]',
  'cocola.png': 'scale-[1.2]',
  'meezan.png': 'scale-[1.1]',
  'standard.png': 'scale-[.9]',
};

export function Clients() {
  return (
    <section className="soft-glow clients-atmosphere bg-[#fafafa] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-signal">03 / Our clients</p>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, ease: 'easeOut' }}><h2 className="hero-title text-5xl md:text-8xl">Trusted by<br /><em>leading brands.</em></h2></motion.div>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-ink/55">
            We work with ambitious teams to create experiences that move people and build lasting brand value.
          </p>
        </div>

        <div className="client-marquee mt-16 overflow-hidden border-y border-black/10 py-8">
          <div className="client-track flex w-max items-center">
            {[...clients, ...clients].map(([src, name], index) => (
              <div key={`${src}-${index}`} className="flex h-24 w-56 shrink-0 items-center justify-center px-6 sm:w-64 sm:px-8">
                <div className="flex h-16 w-48 items-center justify-center">
                  <Image src={`/${src}`} alt={`${name} logo`} width={240} height={96} className={`client-logo max-h-16 w-full object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 ${logoScale[src] ?? ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
