"use client";

import { motion, useReducedMotion } from "motion/react";
import { Bus } from "lucide-react";
import Image from "next/image";
import {
  AppleIcon,
  GooglePlayIcon,
  DownloadButtonLarge,
} from "@/components/HomeComponents";

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  const fadeScale = shouldReduceMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.2 } };

  return (
    <section aria-label="Hero" className="relative overflow-hidden bg-brand-light pt-24 pb-32 lg:pt-32 lg:pb-48">
      <div aria-hidden="true" className="absolute top-0 left-0 h-full w-full opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-brand blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-brand blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-subtle px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-brand mb-8 shadow-sm">
              <Bus size={14} aria-hidden="true" />
              Official Transit App
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-content-primary sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
              The Future of <br />
              <span className="text-brand">Grand Lake</span> <br />
              Transit.
            </h1>
            <p className="text-xl text-content-secondary max-w-lg leading-relaxed mb-12">
              Real-time tracking, digital ticketing, and seamless route planning.
              Everything you need for a better commute, right in your pocket.
            </p>

            <div className="flex flex-wrap gap-4">
              <DownloadButtonLarge
                icon={<AppleIcon />}
                platform="App Store"
                className="bg-black text-white"
              />
              <DownloadButtonLarge
                icon={<GooglePlayIcon />}
                platform="Google Play"
                className="bg-brand text-white"
              />
            </div>
          </motion.div>

          <motion.div {...fadeScale} className="relative">
            <div className="relative z-10 mx-auto w-full max-w-[320px] rounded-[3rem] bg-zinc-900 p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_20px_50px_rgba(0,0,0,0.2)]">
              <div className="overflow-hidden rounded-[2.5rem] bg-white aspect-[9/19.5]">
                <div className="flex h-full flex-col">
                  <div className="flex-1 relative overflow-hidden">
                    <Image
                      src="/assets/bus.png"
                      alt="GLK Transit bus on route in Grand Lake"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-brand-subtle blur-3xl opacity-50" />
            <div aria-hidden="true" className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-brand-pale blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
