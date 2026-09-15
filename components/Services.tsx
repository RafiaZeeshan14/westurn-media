'use client';

import { ArrowUpRight, BadgeCheck, Megaphone, PackageOpen, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceGroups = [
  {
    label: 'Events & experiences',
    intro: 'From the first brief to the final guest, we make every detail feel intentional.',
    icon: Megaphone,
    services: [
      ['01', 'Event management', 'End-to-end planning, coordination and production for events that run beautifully.'],
      ['02', 'Brand activation', 'High-energy experiences that put your brand in the room and in people’s memory.'],
      ['03', 'Expo stalls & fabrication', 'Strategic, standout exhibition spaces designed and built to attract the right attention.'],
    ],
  },
  {
    label: 'Giveaways & displays',
    intro: 'Useful, memorable brand touchpoints made for the people you want to reach.',
    icon: PackageOpen,
    services: [
      ['04', 'Local & customised giveaways', 'Thoughtful promotional gifts tailored to your campaign, audience and budget.'],
      ['05', 'Imported giveaways', 'A curated range of imported promotional products sourced for quality and impact.'],
      ['06', 'Customised gondola', 'Branded gondola displays that give your products a clear, confident presence.'],
    ],
  },
  {
    label: 'Brand & marketing',
    intro: 'A consistent brand presence across the places your audience sees you.',
    icon: BadgeCheck,
    services: [
      ['07', 'Branding', 'Clear, distinctive brand systems that help your business look and sound like itself.'],
      ['08', 'Social media marketing', 'Content, campaigns and channel strategy built to keep your brand moving.'],
    ],
  },
  {
    label: 'Print & travel',
    intro: 'The practical finishing touches that carry your ideas further.',
    icon: Printer,
    services: [
      ['09', 'Digital printing', 'Fast, flexible print production for campaigns, collateral and event-day essentials.'],
      ['10', 'Offset printing', 'Crisp, consistent high-volume printing for premium brand materials.'],
      ['11', 'Corporate travel & tours', 'Smooth business travel and tour planning, from itinerary to on-ground support.'],
    ],
  },
] as const;

export function Services() {
  return (
    <section id="services" className="soft-glow services-atmosphere bg-[#fafafa] px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-signal">02 / Expertise</p>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, ease: 'easeOut' }}><h2 className="hero-title mx-auto max-w-3xl text-5xl md:text-8xl">From brief to<br /><em>brand impact.</em></h2></motion.div>
        </div>

        <div className="space-y-14">
          {serviceGroups.map(({ label, intro, services, icon: Icon }, groupIndex) => (
            <div key={label}>
              <div className="mb-5 flex flex-col gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="text-signal" size={20} strokeWidth={1.7} />
                  <h3 className="hero-title text-2xl italic text-ink md:text-4xl">{label}</h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-ink/50">{intro}</p>
              </div>

              <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(([num, title, copy], i) => (
                  <motion.article
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: (groupIndex + i) * 0.05 }}
                    className="group relative flex min-h-[240px] flex-col border-b border-r border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-signal/5 md:p-9"
                  >
                    <div className="mb-auto flex items-start justify-between">
                      <span className="text-xs font-bold uppercase tracking-[.16em] text-signal">Service</span>
                      <span className="text-xs font-bold text-ink/30">{num}</span>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center pt-8 text-center">
                      <h4 className="poppins-heading max-w-sm text-2xl font-bold">{title}</h4>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-ink/55">{copy}</p>
                    </div>
                    <ArrowUpRight className="absolute bottom-8 right-8 text-ink/20 transition group-hover:text-signal" size={18} />
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
