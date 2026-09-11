'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { products, categories, getPriorityProducts } from '@/data/products';
import { cn } from '@/lib/utils';

export default function ProductUniverse() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get products based on category, but prioritize Tier 1 products
  const getFilteredProducts = () => {
    let filtered = activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);
    
    // Sort by priority (1 first, then 2), then by name
    filtered.sort((a, b) => {
      if (a.priority !== b.priority) {
        return (a.priority || 999) - (b.priority || 999);
      }
      return a.name.localeCompare(b.name);
    });
    
    return filtered.slice(0, 6); // Show first 6 on homepage
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="section bg-[var(--ivory)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <SectionHeading
              label="Product Universe"
              title="Precision formulations for modern aesthetics"
              subtitle="Our portfolio spans nutraceuticals, IV nutrition, and dermatological solutions."
            />
          </Reveal>
        </div>

        {/* Category Filter */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-[var(--soft-grey)]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === cat.id
                    ? 'bg-[var(--botanical)] text-[var(--ivory)]'
                    : 'bg-[var(--warm-white)] text-[var(--charcoal)] hover:bg-[var(--soft-grey)]'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={0.1 * (index % 6)}>
              <Link
                href={`/products/${product.slug}`}
                className="group block"
              >
                {/* Premium Product Image */}
                <div className="relative aspect-square mb-6 overflow-hidden bg-white border border-[var(--soft-grey)] group-hover:border-[var(--botanical)] transition-colors">
                  <Image
                    src={`/images/products/${product.slug}.png`}
                    alt={`${product.name} — Arykem Pharmaceuticals`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Priority Badge */}
                  {product.priority === 1 && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[var(--botanical)] text-[var(--ivory)] text-xs font-medium uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <span className="label uppercase tracking-wider text-[var(--medium-grey)]">
                    {product.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors font-[var(--font-cormorant)]">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--medium-grey)] group-hover:text-[var(--botanical)] transition-colors">
                    <span className="text-sm">View Details</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="text-center pt-8">
            <Button href="/products" variant="secondary" size="lg">
              View Complete Portfolio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
