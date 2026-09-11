import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { insights } from '@/data/insights';

export default function InsightsPreview() {
  // Get first 3 insights from the actual data
  const featuredInsights = insights.slice(0, 3);

  return (
    <section className="section bg-[var(--warm-white)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <SectionHeading
              label="Insights"
              title="Science, research, and perspectives"
              subtitle="Exploring the intersection of dermatology, aesthetics, and nutritional science."
            />
          </Reveal>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {featuredInsights.map((insight, index) => (
            <Reveal key={insight.slug} delay={0.1 * index}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="aspect-[16/10] mb-6 bg-gradient-to-br from-[var(--soft-grey)] to-[var(--sand)] relative overflow-hidden">
                  {insight.image && (
                    <Image
                      src={insight.image}
                      alt={insight.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/20 to-transparent" />
                  <div className="absolute inset-0 border border-[var(--charcoal)]/5 group-hover:border-[var(--botanical)]/20 transition-colors" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="label text-[var(--botanical)]">
                    {insight.category}
                  </span>
                  <h3 className="h3 text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors">
                    {insight.title}
                  </h3>
                  <p className="body text-[var(--medium-grey)]">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium pt-2">
                    <span>Read Article</span>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform" 
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="text-center pt-8">
            <Button href="/insights" variant="secondary" size="lg">
              View All Insights
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
