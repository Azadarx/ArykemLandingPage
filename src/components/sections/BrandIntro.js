import Reveal from '@/components/ui/Reveal';

export default function BrandIntro() {
  return (
    <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Large Editorial Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display text-[var(--ivory)] leading-tight">
                Dermatology × Aesthetics × Science
              </h2>
            </Reveal>
          </div>

          {/* Right: Supporting Content */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <p className="body-large text-[var(--ivory)]/80">
                Arykem Pharmaceuticals represents a commitment to advancing the 
                intersection of dermatology and aesthetic medicine through 
                science-driven formulations.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="body text-[var(--ivory)]/60">
                Our portfolio spans nutraceuticals, IV nutrition, and dermatological 
                solutions designed for healthcare professionals and their patients 
                who demand excellence.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-4 border-t border-[var(--ivory)]/10">
                <p className="body-small text-[var(--ivory)]/40">
                  Arykem Pharmaceuticals Private Limited
                  <br />
                  Established 2013 · Lucknow, India
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
