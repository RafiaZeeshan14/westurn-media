'use client';

import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Contact', '#contact']];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="#home" aria-label="Westurn Media home" className="relative h-10 w-32 sm:w-36">
          <Image src="/logo.jpeg" alt="Westurn Media" fill sizes="144px" className="object-contain object-left" priority />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs font-bold uppercase tracking-[0.12em] text-ink/60 transition hover:text-signal">{label}</a>)}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-signal bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-signal transition hover:bg-signal hover:text-white md:flex">Let&apos;s talk <ArrowUpRight size={14} /></a>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-black/10 bg-white md:hidden"><div className="flex flex-col gap-6 px-6 py-8">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="display text-3xl font-bold">{label}</a>)}</div></motion.nav>}
      </AnimatePresence>
    </header>
  );
}
