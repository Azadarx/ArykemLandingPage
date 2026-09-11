import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig, getCanonicalUrl } from '@/lib/config';

export const metadata = {
  title: 'About Arykem Pharmaceuticals',
  description: 'Arykem Pharmaceuticals brings science-driven formulations to modern dermatology and aesthetic practice. Established 2013 in Lucknow, India. Committed to responsible innovation in skin health.',
  openGraph: {
    title: 'About Arykem Pharmaceuticals | Premium Dermatology & Aesthetic Medicine',
    description: 'Science-driven formulations for modern dermatology and aesthetic practice. Established 2013.',
    url: getCanonicalUrl('/about'),
  },
  twitter: {
    title: 'About Arykem Pharmaceuticals',
    description: 'Science-driven formulations for modern dermatology and aesthetic practice.',
  },
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
};

const principles = [
  {
    number: '01',
    title: 'Science First',
    description: 'A commitment to scientifically informed product development and transparent communication rooted in evidence.',
  },
  {
    number: '02',
    title: 'Professional Focus',
    description: 'Designed around the evolving needs of modern dermatology and aesthetic practice.',
  },
  {
    number: '03',
    title: 'Considered Formulation',
    description: 'Focus on relevant ingredients and purposeful formulations that honor both science and application.',
  },
  {
    number: '04',
    title: 'Responsible Communication',
    description: 'Clear, evidence-conscious communication without exaggerated promises or unsupported claims.',
  },
];

const professionals = [
  'Dermatologists',
  'Aesthetic Physicians',
  'Cosmetologists',
  'Healthcare Professionals',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                ABOUT ARYKEM
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                Building a more considered approach to beauty and skin health
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-3xl">
                Arykem Pharmaceuticals represents a commitment to advancing the 
                intersection of pharmaceutical expertise, dermatology, and aesthetic 
                medicine through science-driven formulations designed for the modern 
                professional practice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-[var(--ivory)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="label text-[var(--botanical)]">
                  WHO WE ARE
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="h2 text-[var(--charcoal)] mt-6 font-[var(--font-cormorant)]">
                  A pharmaceutical company with an expanding focus
                </h2>
              </Reveal>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.2}>
                <p className="body-large text-[var(--medium-grey)]">
                  Arykem Pharmaceuticals Private Limited is an Indian pharmaceutical 
                  company with a growing focus on dermatology, aesthetics, and 
                  professional skin-health solutions.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="body text-[var(--medium-grey)]">
                  Our portfolio spans nutraceuticals, IV nutrition, and dermatological 
                  formulations—each developed with attention to scientific understanding 
                  and the evolving requirements of aesthetic and clinical practice.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-6 border-t border-[var(--soft-grey)]">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="label text-[var(--medium-grey)]">INCORPORATED</span>
                      <p className="body text-[var(--charcoal)] mt-2">01 October 2013</p>
                    </div>
                    <div>
                      <span className="label text-[var(--medium-grey)]">REGISTERED</span>
                      <p className="body text-[var(--charcoal)] mt-2">Lucknow, Uttar Pradesh</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Direction */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <Reveal>
              <h2 className="display text-[var(--ivory)] font-[var(--font-cormorant)]">
                Dermatology × Aesthetics × Science
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--ivory)]/80 max-w-3xl mx-auto">
                Arykem&apos;s direction reflects the convergence of clinical thinking, 
                skin health, aesthetic practice, nutrition, and scientific understanding—bringing 
                scientifically informed products into modern professional settings.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="body text-[var(--ivory)]/60 max-w-2xl mx-auto">
                This is not about superficial beauty alone. It is about understanding 
                skin biology, nutritional factors, antioxidant systems, and the role 
                each plays in comprehensive aesthetic outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Arykem - Principles */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <SectionHeading
                label="Why Arykem"
                title="Built on principle, not promises"
                subtitle="Our approach to dermatology and aesthetics is guided by clear commitments."
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={0.1 * index}>
                <div className="p-8 lg:p-10 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)]/20 transition-colors">
                  <span className="text-6xl font-light text-[var(--botanical)]/20 font-[var(--font-cormorant)]">
                    {principle.number}
                  </span>
                  <h3 className="text-2xl font-medium text-[var(--charcoal)] mt-4 mb-3">
                    {principle.title}
                  </h3>
                  <p className="body text-[var(--medium-grey)]">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <p className="body-small text-[var(--medium-grey)] text-center mt-12 max-w-2xl mx-auto">
              These principles represent our internal commitments and brand philosophy, 
              not independently verified certifications or external validations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Arykem Journey */}
      <section className="section bg-[var(--ivory)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <Reveal>
              <SectionHeading
                label="The Arykem Journey"
                title="Evolution through focus"
                align="center"
              />
            </Reveal>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--soft-grey)]" />

            {/* Timeline Event */}
            <Reveal delay={0.2}>
              <div className="relative pl-20 md:pl-0 md:w-1/2 pb-16">
                <div className="absolute left-8 md:left-auto md:right-0 w-4 h-4 rounded-full bg-[var(--botanical)] border-4 border-[var(--ivory)]" />
                <div className="md:pr-12 md:text-right">
                  <span className="text-4xl font-light text-[var(--botanical)] font-[var(--font-cormorant)]">
                    2013
                  </span>
                  <h3 className="text-xl font-medium text-[var(--charcoal)] mt-2 mb-3">
                    Foundation
                  </h3>
                  <p className="body text-[var(--medium-grey)]">
                    Arykem Pharmaceuticals Private Limited incorporated in Lucknow, 
                    Uttar Pradesh, establishing our pharmaceutical foundation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative pl-20 md:pl-1/2 md:ml-12">
                <div className="absolute left-8 md:left-0 w-4 h-4 rounded-full bg-[var(--botanical)] border-4 border-[var(--ivory)]" />
                <div className="md:pl-12">
                  <span className="text-4xl font-light text-[var(--botanical)] font-[var(--font-cormorant)]">
                    Today
                  </span>
                  <h3 className="text-xl font-medium text-[var(--charcoal)] mt-2 mb-3">
                    Dermatology & Aesthetics Focus
                  </h3>
                  <p className="body text-[var(--medium-grey)]">
                    Expanded focus on dermatology, aesthetic medicine, and professional 
                    skin-health formulations spanning nutraceuticals, IV nutrition, and 
                    clinical dermatology solutions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dermatology & Aesthetics */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <Reveal>
              <h2 className="display text-[var(--ivory)] font-[var(--font-cormorant)]">
                Beyond products. Toward better professional conversations.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--ivory)]/80 max-w-3xl mx-auto">
                Arykem exists within the broader ecosystem of dermatology, aesthetics, 
                skin nutrition, antioxidant support, and professional education—contributing 
                formulations that support informed clinical dialogue.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="body text-[var(--ivory)]/60 max-w-2xl mx-auto">
                We recognize that meaningful aesthetic outcomes emerge from understanding 
                skin biology, nutritional factors, environmental influences, and the 
                limitations of intervention—not from overstated promises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Professional Ecosystem */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <Reveal>
                <SectionHeading
                  label="Professional Ecosystem"
                  title="Designed for the professionals who shape aesthetic outcomes"
                  subtitle="Arykem serves the healthcare professionals at the forefront of modern dermatology and aesthetic medicine."
                />
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10">
                  <Button href="/products" size="lg">
                    Explore Products
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-6">
              {professionals.map((prof, index) => (
                <Reveal key={prof} delay={0.1 * index}>
                  <div className="p-6 bg-[var(--ivory)] border border-[var(--soft-grey)]">
                    <p className="text-lg font-medium text-[var(--charcoal)]">
                      {prof}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Information */}
      <section className="section bg-[var(--ivory)]">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-[var(--charcoal)] font-[var(--font-cormorant)]">
                ARYKEM PHARMACEUTICALS PRIVATE LIMITED
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center md:text-left">
                <span className="label text-[var(--medium-grey)]">CIN</span>
                <p className="body text-[var(--charcoal)] mt-2">U51101UP2013PTC059850</p>
              </div>
              <div className="text-center md:text-left">
                <span className="label text-[var(--medium-grey)]">INCORPORATED</span>
                <p className="body text-[var(--charcoal)] mt-2">01 October 2013</p>
              </div>
              <div className="text-center md:text-left">
                <span className="label text-[var(--medium-grey)]">REGISTERED OFFICE</span>
                <p className="body text-[var(--charcoal)] mt-2">Lucknow, Uttar Pradesh</p>
              </div>
              <div className="text-center md:text-left">
                <span className="label text-[var(--medium-grey)]">ROC</span>
                <p className="body text-[var(--charcoal)] mt-2">Kanpur</p>
              </div>
              <div className="text-center md:text-left md:col-span-2">
                <span className="label text-[var(--medium-grey)]">STATUS</span>
                <p className="body text-[var(--charcoal)] mt-2">Active, Unlisted Private Company</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="h1 text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
              Explore the thinking behind the portfolio
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--ivory)]/70 mb-8">
              Understand the science and formulations that define Arykem&apos;s approach 
              to dermatology and aesthetic medicine.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                Explore Products
              </Button>
              <Button 
                href="/science" 
                variant="ghost"
                size="lg"
                className="text-[var(--ivory)] border-2 border-[var(--ivory)]/20 hover:bg-[var(--ivory)]/10 hover:border-[var(--ivory)]/40"
              >
                Discover Our Science
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
