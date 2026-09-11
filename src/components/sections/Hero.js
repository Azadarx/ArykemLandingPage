'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--warm-white)] via-[var(--ivory)] to-[var(--soft-grey)]">
      {/* Hero Image - Premium Editorial Treatment */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ivory)]/95 via-[var(--ivory)]/85 to-transparent z-10" />
        <Image
          src="/images/hero/hero-main.webp"
          alt="Editorial portrait representing healthy skin and beauty - Arykem Pharmaceuticals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
      </motion.div>

      {/* Abstract Visual Elements - Subtle Enhancement */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--botanical-light)]/20 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative z-30 pt-32 pb-20 md:pt-20 md:pb-0 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label text-[var(--botanical)]">
              ARYKEM PHARMACEUTICALS
            </span>
          </motion.div>

          {/* Main Headline */}
          <div>
            <AnimatedText 
              className="display text-[var(--charcoal)] leading-none px-4 md:px-0"
              delay={0.3}
            >
              Science that redefines beauty
            </AnimatedText>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="body-large text-[var(--medium-grey)] max-w-2xl mx-auto px-4 md:px-0"
          >
            Pioneering dermatology, aesthetics, and science-driven skin health 
            through premium formulations that unite clinical excellence with natural innovation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 px-4 md:px-0"
          >
            <Button href="/products" size="lg">
              Explore Products
            </Button>
            <Button href="/science" variant="secondary" size="lg">
              Discover Our Science
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--charcoal)]/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--charcoal)]/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
