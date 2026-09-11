'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function ContactCTA() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-[var(--charcoal)] via-[var(--deep-grey)] to-[var(--charcoal)] text-[var(--ivory)]">
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[var(--botanical-light)] to-transparent blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <Reveal>
            <h2 className="display text-[var(--ivory)]">
              Redefine what&apos;s possible in beauty
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--ivory)]/70 max-w-2xl mx-auto">
              Discover how Arykem&apos;s science-driven formulations can elevate 
              your practice or personal aesthetic journey.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button href="/products" size="lg">
                Explore Products
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="text-[var(--ivory)] border-2 border-[var(--ivory)]/20 hover:bg-[var(--ivory)]/10 hover:border-[var(--ivory)]/40">
                Contact Arykem
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
