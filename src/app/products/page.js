'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get filtered products and sort by priority
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
    
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  // Featured products (first 2 from filtered list)
  const featuredProducts = filteredProducts.slice(0, 2);
  const regularProducts = filteredProducts.slice(2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                PRODUCT UNIVERSE
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                Formulated for the modern aesthetic practice
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-2xl mb-10">
                Arykem brings together a comprehensive portfolio spanning dermatology, 
                aesthetic nutrition, and professional skin health applications—each 
                formulation representing our commitment to scientific excellence.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Button href="#portfolio" variant="secondary" size="lg">
                Explore the Portfolio
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section id="portfolio" className="py-12 bg-[var(--ivory)] border-y border-[var(--soft-grey)]">
        <div className="container">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
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

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="section bg-[var(--ivory)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {featuredProducts.map((product, index) => (
                <Reveal key={product.id} delay={0.1 * index}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block"
                  >
                    {/* Premium Product Image */}
                    <div className="relative aspect-square mb-8 overflow-hidden bg-white border border-[var(--soft-grey)] group-hover:border-[var(--botanical)] transition-colors">
                      <Image
                        src={`/images/products/${product.slug}.png`}
                        alt={`${product.name} — Arykem Pharmaceuticals`}
                        fill
                        sizes="(max-width: 1024px) 90vw, 45vw"
                        className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <span className="label uppercase tracking-wider text-[var(--botanical)]">
                        {product.category}
                      </span>
                      <h2 className="h2 text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors font-[var(--font-cormorant)]">
                        {product.name}
                      </h2>
                      <p className="body text-[var(--medium-grey)]">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-[var(--botanical)] font-medium pt-2">
                        <span>Explore Product</span>
                        <ArrowRight 
                          size={20} 
                          className="group-hover:translate-x-2 transition-transform" 
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Products Grid */}
      {regularProducts.length > 0 && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {regularProducts.map((product, index) => (
                <Reveal key={product.id} delay={0.05 * index}>
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
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <span className="label uppercase tracking-wider text-[var(--medium-grey)]">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors font-[var(--font-cormorant)]">
                        {product.name}
                      </h3>
                      <p className="body-small text-[var(--medium-grey)] line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium pt-1">
                        <span>View Details</span>
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
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Reveal>
              <h2 className="h1 text-[var(--ivory)] font-[var(--font-cormorant)]">
                Explore the science behind our formulations
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--ivory)]/70">
                Every Arykem product reflects our commitment to scientific rigor, 
                clinical excellence, and the evolving needs of modern aesthetic practice.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button href="/science" size="lg">
                  Discover Our Science
                </Button>
                <Button 
                  href="/contact" 
                  variant="ghost" 
                  size="lg"
                  className="text-[var(--ivory)] border-2 border-[var(--ivory)]/20 hover:bg-[var(--ivory)]/10 hover:border-[var(--ivory)]/40"
                >
                  Contact Us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
