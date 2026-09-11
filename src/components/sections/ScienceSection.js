'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const scienceElements = [
  {
    title: 'Collagen',
    description: 'Structural protein essential for skin elasticity and firmness.',
    image: '/images/science/collagen-biology.webp',
    alt: 'Scientific visualization of collagen structure and skin biology',
  },
  {
    title: 'Glutathione',
    description: 'Master antioxidant supporting cellular health and skin vitality.',
    image: '/images/science/glutathione-redox.webp',
    alt: 'Scientific visualization representing glutathione and redox biology',
  },
  {
    title: 'Vitamin C',
    description: 'Powerful antioxidant supporting collagen synthesis and skin brightness.',
    image: '/images/science/vitamin-c.webp',
    alt: 'Scientific visualization representing vitamin C and collagen biology',
  },
  {
    title: 'Antioxidant Support',
    description: 'Comprehensive defense against oxidative stress and cellular aging.',
    image: '/images/science/cellular-structure-final.webp',
    alt: 'Scientific microscopy-style visualization of cellular structure',
  },
];

export default function ScienceSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 border border-[var(--botanical)]/20 rounded-full" />
        <div className="absolute bottom-40 right-1/3 w-96 h-96 border border-[var(--botanical)]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] border border-[var(--botanical)]/5 rounded-full" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Reveal>
            <SectionHeading
              label="The Science Behind Beauty"
              title="Formulated with precision, validated by science"
              subtitle="Our formulations combine advanced research with natural compounds to deliver measurable results."
              align="center"
            />
          </Reveal>
        </div>

        {/* Science Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {scienceElements.map((element, index) => (
            <Reveal key={element.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)]/20 transition-colors"
              >
                {/* Science Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--warm-white)]">
                  <Image
                    src={element.image}
                    alt={element.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ivory)]/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <h3 className="h3 text-[var(--charcoal)] mb-3">
                    {element.title}
                  </h3>
                  <p className="body text-[var(--medium-grey)]">
                    {element.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.5}>
          <div className="text-center">
            <Button href="/science" variant="secondary" size="lg">
              Explore Our Science
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
