import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#fafafa] px-6 py-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] items-center gap-7 border-t border-black/10 pt-7 text-xs font-bold uppercase tracking-[.1em] text-ink/45 md:grid-cols-[1fr_auto_1fr]">
        <a href="#home" aria-label="Westurn Media home" className="relative h-10 w-36">
          <Image src="/logo.jpeg" alt="Westurn Media" fill sizes="144px" className="object-contain object-left" />
        </a>
        <nav className="flex flex-wrap gap-5 md:justify-center">
          <a href="#about" className="transition hover:text-signal">About</a>
          <a href="#services" className="transition hover:text-signal">Services</a>
          <a href="#work" className="transition hover:text-signal">Work</a>
          <a href="#contact" className="flex items-center gap-1 transition hover:text-signal">Start a project <ArrowUpRight size={13} /></a>
        </nav>
        <p className="md:justify-self-end">© {new Date().getFullYear()} Westurn Media</p>
      </div>
    </footer>
  );
}
