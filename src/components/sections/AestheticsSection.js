import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

const focusAreas = [
  {
    title: 'Skin Health',
    description: 'Comprehensive solutions for optimal skin vitality and radiance.',
  },
  {
    title: 'Aesthetic Nutrition',
    description: 'Advanced nutraceuticals supporting beauty from within.',
  },
  {
    title: 'Antioxidant Support',
    description: 'Protective formulations combating oxidative stress and aging.',
  },
  {
    title: 'Professional Practice',
    description: 'Clinical-grade solutions designed for healthcare settings.',
  },
];

export default function AestheticsSection() {
  return (
    <section className="section bg-[var(--charcoal)] text-[var(--ivory)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <Reveal>
              <span className="label text-[var(--botanical-light)]">
                DERMATOLOGY × AESTHETICS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display text-[var(--ivory)]">
                Where science meets aesthetic excellence
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--ivory)]/70">
                Arykem bridges the evolving landscape of dermatology and aesthetic 
                medicine, providing solutions that honor both clinical rigor and 
                aesthetic aspiration.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-4">
                <Button href="/products" size="lg">
                  Explore Solutions
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={0.1 * index}>
                <div className="p-6 bg-[var(--ivory)]/5 border border-[var(--ivory)]/10 hover:border-[var(--botanical-light)]/30 transition-colors">
                  <h3 className="text-xl font-medium text-[var(--ivory)] mb-3">
                    {area.title}
                  </h3>
                  <p className="body-small text-[var(--ivory)]/60">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
