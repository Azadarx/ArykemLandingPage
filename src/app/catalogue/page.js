import Link from 'next/link';
import Image from 'next/image';
import { FileText, Layers, Microscope, Users } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { products } from '@/data/products';
import { siteConfig, getCanonicalUrl } from '@/lib/config';

export const metadata = {
  title: 'Product Catalogue',
  description: 'Comprehensive professional portfolio of Arykem dermatology, aesthetic nutrition, and skin health formulations. Detailed product information for healthcare professionals.',
  openGraph: {
    title: 'Product Catalogue | Arykem Pharmaceuticals',
    description: 'Comprehensive portfolio of dermatology, aesthetic nutrition, and skin health formulations.',
    url: getCanonicalUrl('/catalogue'),
  },
  twitter: {
    title: 'Product Catalogue | Arykem Pharmaceuticals',
    description: 'Comprehensive professional portfolio for healthcare practitioners.',
  },
  alternates: {
    canonical: getCanonicalUrl('/catalogue'),
  },
};

const catalogueCoverage = [
  {
    icon: Layers,
    number: '01',
    title: 'Product Portfolio',
    description: 'Complete range spanning dermatology, aesthetic nutrition, IV nutrition, and skin health.',
  },
  {
    icon: Microscope,
    number: '02',
    title: 'Formulation & Composition',
    description: 'Detailed ingredient information and scientific formulation rationale.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Scientific Information',
    description: 'Educational content on biological concepts and application context.',
  },
  {
    icon: Users,
    number: '04',
    title: 'Professional Resource',
    description: 'Information structured for healthcare professionals and clinical settings.',
  },
];

// Featured products for catalogue
const featuredProducts = products.filter(p => 
  ['x-gluta-tab', 'x-gluta-iv-600', 'x-gluta-iv-1200', 'x-gluta-iv-2000', 'collagen'].includes(p.id)
);

// Group remaining products by category
const aestheticNutrition = products.filter(p => p.category === 'Aesthetic Nutrition' && !featuredProducts.find(f => f.id === p.id));
const dermatology = products.filter(p => p.category === 'Dermatology');
const skinHealth = products.filter(p => p.category === 'Skin Health' && !featuredProducts.find(f => f.id === p.id));

export default function CataloguePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                ARYKEM CATALOGUE
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                The Arykem professional portfolio
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-3xl mb-10">
                A consolidated view of Arykem&apos;s dermatology, aesthetic nutrition, 
                skin health, and IV nutrition portfolio—designed for healthcare professionals 
                seeking comprehensive product information.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/products" size="lg">
                  Explore Products
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Arykem
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="section bg-[var(--ivory)]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <SectionHeading
                label="Portfolio Overview"
                title="8 formulations across 4 therapeutic categories"
                subtitle="Arykem's current product range designed for professional dermatology and aesthetic practice."
              />
            </Reveal>
          </div>

          <div className="space-y-12">
            {/* Aesthetic Nutrition */}
            {aestheticNutrition.length > 0 && (
              <Reveal delay={0.2}>
                <div>
                  <h3 className="text-xl font-medium text-[var(--charcoal)] mb-4 pb-4 border-b border-[var(--soft-grey)]">
                    Aesthetic Nutrition
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {aestheticNutrition.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="p-4 bg-[var(--warm-white)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-colors text-center"
                      >
                        <span className="text-lg font-medium text-[var(--charcoal)] font-[var(--font-cormorant)]">
                          {product.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Dermatology */}
            {dermatology.length > 0 && (
              <Reveal delay={0.3}>
                <div>
                  <h3 className="text-xl font-medium text-[var(--charcoal)] mb-4 pb-4 border-b border-[var(--soft-grey)]">
                    Dermatology
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {dermatology.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="p-4 bg-[var(--warm-white)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-colors text-center"
                      >
                        <span className="text-lg font-medium text-[var(--charcoal)] font-[var(--font-cormorant)]">
                          {product.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* All Products Link */}
            <Reveal delay={0.4}>
              <div className="text-center pt-8">
                <Button href="/products" variant="secondary">
                  View Complete Product Details
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Professional Catalogue Resource */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Visual */}
            <Reveal>
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--ivory)] via-[var(--soft-grey)] to-[var(--sand)] border border-[var(--soft-grey)] p-12 flex items-center justify-center">
                {/* Abstract Document Stack */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[var(--warm-white)] border-2 border-[var(--charcoal)]/10 translate-x-4 translate-y-4" />
                  <div className="absolute inset-0 bg-[var(--warm-white)] border-2 border-[var(--charcoal)]/10 translate-x-2 translate-y-2" />
                  <div className="absolute inset-0 bg-[var(--ivory)] border-2 border-[var(--charcoal)]/20 flex flex-col items-center justify-center p-8 text-center">
                    <FileText size={48} className="text-[var(--botanical)] mb-6" />
                    <h3 className="text-3xl font-medium text-[var(--charcoal)] mb-3 font-[var(--font-cormorant)]">
                      ARYKEM
                    </h3>
                    <p className="label text-[var(--medium-grey)]">
                      PRODUCT CATALOGUE
                    </p>
                    <div className="mt-6 text-sm text-[var(--medium-grey)]">
                      Professional Resource
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Content */}
            <div className="space-y-6">
              <Reveal delay={0.2}>
                <SectionHeading
                  label="Professional Catalogue Resource"
                  title="Comprehensive product information"
                  subtitle="Detailed formulation, composition, and professional resource information consolidated for healthcare professionals."
                />
              </Reveal>

              <Reveal delay={0.3}>
                <p className="body text-[var(--medium-grey)]">
                  The Arykem professional catalogue will provide comprehensive information 
                  on our complete dermatology and aesthetic portfolio, scientific rationale, 
                  and application context for professional practice.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Request Catalogue Information
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What the Catalogue Covers */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <SectionHeading
                label="Catalogue Coverage"
                title="Comprehensive professional information"
                align="center"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {catalogueCoverage.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.number} delay={0.1 * index}>
                  <div className="p-8 bg-[var(--ivory)]/5 border border-[var(--ivory)]/10">
                    <div className="flex items-start gap-6">
                      <span className="text-5xl font-light text-[var(--botanical-light)]/40 font-[var(--font-cormorant)]">
                        {item.number}
                      </span>
                      <div className="flex-1">
                        <Icon size={32} className="text-[var(--botanical-light)] mb-4" />
                        <h3 className="text-xl font-medium text-[var(--ivory)] mb-3">
                          {item.title}
                        </h3>
                        <p className="body-small text-[var(--ivory)]/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Focus */}
      <section className="section bg-[var(--ivory)]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <SectionHeading
                label="Product Focus"
                title="Featured formulations"
                subtitle="Selected products representing Arykem's approach to aesthetic nutrition and skin health."
              />
            </Reveal>
          </div>

          <div className="space-y-8 max-w-4xl">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={0.1 * index}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block p-8 bg-[var(--warm-white)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Product Image */}
                    <div className="relative w-full md:w-48 aspect-square bg-white border border-[var(--soft-grey)] flex-shrink-0">
                      <Image
                        src={`/images/products/${product.slug}.png`}
                        alt={`${product.name} — Arykem Pharmaceuticals`}
                        fill
                        sizes="(max-width: 768px) 50vw, 192px"
                        className="object-contain p-6"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <span className="label uppercase tracking-wider text-[var(--botanical)]">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mt-2 mb-3 font-[var(--font-cormorant)]">
                        {product.name}
                      </h3>
                      <p className="body text-[var(--medium-grey)] mb-4">
                        {product.shortDescription}
                      </p>
                      {product.form && (
                        <span className="label text-[var(--medium-grey)]">
                          {product.form}
                        </span>
                      )}
                    </div>

                    {/* Composition Preview */}
                    {product.composition && product.composition.length > 0 && (
                      <div className="md:w-80 p-6 bg-[var(--ivory)] border border-[var(--soft-grey)] flex-shrink-0">
                        <h4 className="label text-[var(--medium-grey)] mb-3">
                          COMPOSITION
                        </h4>
                        <ul className="space-y-2">
                          {product.composition.slice(0, 4).map((comp) => (
                            <li key={comp.ingredient} className="text-sm text-[var(--charcoal)]">
                              <span className="font-medium">{comp.ingredient}</span>
                              <span className="text-[var(--medium-grey)]"> — {comp.amount}</span>
                            </li>
                          ))}
                          {product.composition.length > 4 && (
                            <li className="text-sm text-[var(--medium-grey)] italic">
                              + {product.composition.length - 4} more
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="h1 text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
              Explore the portfolio
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--ivory)]/70 mb-8">
              Discover the complete Arykem range of dermatology and aesthetic formulations.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                View Products
              </Button>
              <Button 
                href="/contact" 
                variant="ghost"
                size="lg"
                className="text-[var(--ivory)] border-2 border-[var(--ivory)]/20 hover:bg-[var(--ivory)]/10 hover:border-[var(--ivory)]/40"
              >
                Contact Arykem
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
