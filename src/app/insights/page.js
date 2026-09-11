'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { insights, insightCategories } from '@/data/insights';
import { cn } from '@/lib/utils';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredInsights = activeCategory === 'all'
    ? insights
    : insights.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                ARYKEM INSIGHTS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                Perspectives on skin, science and aesthetic practice
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-3xl">
                Educational articles exploring the scientific foundations of skin 
                health, aesthetic medicine, and the biological concepts that inform 
                professional practice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-[var(--ivory)] border-y border-[var(--soft-grey)]">
        <div className="container">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {insightCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-6 py-3 text-sm font-medium transition-all duration-300 border',
                    activeCategory === cat.id
                      ? 'bg-[var(--charcoal)] text-[var(--ivory)] border-[var(--charcoal)]'
                      : 'bg-transparent text-[var(--charcoal)] border-[var(--charcoal)]/20 hover:border-[var(--charcoal)] hover:bg-[var(--warm-white)]'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-20">
              <p className="body text-[var(--medium-grey)]">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredInsights.map((insight, index) => (
                <Reveal key={insight.id} delay={0.1 * (index % 6)}>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="group block"
                  >
                    {/* Article Card Image */}
                    <div className="relative aspect-[16/10] mb-6 overflow-hidden border border-[var(--soft-grey)] group-hover:border-[var(--botanical)]/20 transition-colors bg-[var(--warm-white)]">
                      {insight.image ? (
                        <>
                          <Image
                            src={insight.image}
                            alt={insight.imageAlt || insight.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/20 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--ivory)] to-[var(--soft-grey)]">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--botanical)]/10 to-transparent blur-2xl" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="label text-[var(--botanical)] bg-[var(--ivory)]/95 backdrop-blur-sm px-3 py-1">
                          {insight.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Info */}
                    <div className="space-y-3">
                      <h3 className="h3 text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors">
                        {insight.title}
                      </h3>
                      <p className="body text-[var(--medium-grey)] line-clamp-3">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-[var(--medium-grey)] text-sm">
                          <Clock size={16} />
                          <span>{insight.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium">
                          <span>Read Article</span>
                          <ArrowRight 
                            size={16} 
                            className="group-hover:translate-x-1 transition-transform" 
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Editorial Note */}
      <section className="section bg-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <p className="body text-[var(--medium-grey)]">
              These articles are educational in nature and intended to provide 
              scientifically grounded perspectives on skin health and aesthetic 
              medicine. They should not replace professional medical advice, 
              diagnosis, or treatment.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
