'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="home"
      className="hero-reference relative min-h-screen overflow-hidden bg-[#faf9f6] lg:min-h-screen"
    >
      {/* DESKTOP IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 18, scale: 1.02 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          delay: 0.05,
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="hero-art pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
      >
        <Image
          src="/hero2.png"
          alt="A vibrant technology exhibition and event space"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="hero-photo object-cover object-center"
        />

        <div className="hero-photo-overlay absolute inset-0" />
      </motion.div>

      {/* MOBILE + TABLET IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.18,
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="
          hero-mobile-photo
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-[42%]
          sm:h-[45%]
          lg:hidden
        "
      >
        <Image
          src="/hero2.png"
          alt="A vibrant technology exhibition and event space"
          fill
          sizes="100vw"
          className="hero-photo object-cover object-center"
        />

        <div className="hero-photo-overlay absolute inset-0" />
      </motion.div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1440px]
          items-start
          px-6
          pt-28
          pb-[45vh]

          md:items-start
          md:justify-center
          md:px-10
          md:pt-28
          md:pb-[45vh]

          lg:ml-7
          lg:min-h-screen
          lg:items-center
          lg:justify-start
          lg:px-4
          lg:pb-0
          lg:pt-26
        "
      >
        <div
          className="
            w-full

            md:flex
            md:flex-col
            md:items-center
            md:text-center

            lg:block
            lg:w-[64%]
            lg:pl-0
            lg:pr-6
            lg:text-left
          "
        >

          {/* EYEBROW */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05,
              duration: 0.55,
              ease: 'easeOut',
            }}
            className="
              mt-3
              flex
              items-center
              gap-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-signal

              md:justify-center

              lg:justify-start
            "
          >
            <span className="h-px w-8 bg-signal" />

            Ideas

            <span className="text-ink/25">|</span>

            Experiences

            <span className="text-ink/25">|</span>

            Impact
          </motion.p>

          {/* DESKTOP TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="hidden lg:block"
          >
            <h1 className="hero-title max-w-3xl text-6xl leading-[.9] md:text-8xl lg:text-[clamp(4.5rem,7vw,7.6rem)]">
              Events
              <br />
              That
              <br />
              <em>Move Brands</em>
            </h1>
          </motion.div>

          {/* MOBILE TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="mt-7 md:hidden"
          >
            <h1
              className="
                hero-title
                relative
                z-10
                max-w-[290px]
                text-[clamp(3.8rem,14vw,5.2rem)]
                leading-[.84]
              "
            >
              <span className="block">Events</span>
              <span className="block">That</span>
              <em className="block">Move Brands</em>
            </h1>
          </motion.div>

          {/* TABLET / MD TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="mt-10 hidden md:block lg:hidden"
          >
            <h1
              className="
                hero-title
                relative
                z-10
                max-w-[680px]
                text-[clamp(4.2rem,9vw,6.7rem)]
                leading-[.86]
                tracking-[-0.03em]
              "
            >
              <span>Events That</span>
              <br />
              <em>Move Brands</em>
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.22,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="
              relative
              z-10
              mt-7
              max-w-[290px]
              text-[0.95rem]
              leading-[1.5]
              text-ink/65

              md:mx-auto
              md:mt-7
              md:max-w-[460px]
              md:text-[1rem]

              lg:mx-0
              lg:mt-8
              lg:max-w-md
              lg:text-base
            "
          >
            From concept to execution, we create powerful brand experiences
            that leave a lasting impression.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="
              relative
              z-10
              mt-4
              flex
              flex-col
              items-start
              gap-3

              md:mt-7
              md:flex-row
              md:items-center
              md:justify-center

              lg:mt-9
              lg:justify-start
            "
          >
            {/* CREATE BUTTON */}
            <a
              href="#contact"
              className="
                hidden
                w-[250px]
                items-center
                justify-between
                gap-2
                rounded-full
                bg-signal
                px-6
                py-3.5
                text-[9px]
                font-bold
                uppercase
                tracking-[.14em]
                text-white
                transition
                hover:bg-ink

                md:flex

                lg:w-[208px]
                lg:px-4
                lg:py-3
              "
            >
              Let&apos;s create together
              <ArrowUpRight size={15} />
            </a>

            {/* EXPLORE BUTTON */}
            <a
              href="#work"
              className="
                hidden
                items-center
                justify-between
                gap-2
                rounded-full
                border
                border-ink/25
                bg-white
                px-4
                py-3
                text-[9px]
                font-bold
                uppercase
                tracking-[.12em]
                transition
                hover:border-signal
                hover:text-signal

                lg:flex
                lg:w-[182px]
              "
            >
              Explore our work
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* SCROLL TO EXPLORE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="
              relative
              z-10
              mt-5
              flex
              items-center
              gap-5
              text-[9px]
              font-bold
              uppercase
              tracking-[.18em]
              text-ink/40

              md:mt-8
              md:justify-center

              lg:mt-16
              lg:justify-start
            "
          >
            <span className="hero-scroll-line h-10 w-px bg-signal" />

            Scroll to explore

            <ArrowDown
              size={16}
              className="text-ink/50"
            />
          </motion.div>

        </div>
      </div>

      {/* DESKTOP DISCOVER */}
      <a
        href="#about"
        className="
          absolute
          bottom-8
          right-6
          hidden
          items-center
          gap-3
          text-[10px]
          font-bold
          uppercase
          tracking-[.18em]
          text-ink/45
          lg:flex
        "
      >
        Discover Westurn

        <ArrowDown
          size={14}
          className="text-signal"
        />
      </a>
    </section>
  );
}