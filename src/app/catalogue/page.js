'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { products, getProductBySlug } from '@/data/products';


// TODO: CONFIRM MARINEX RETINOL QUANTITY WITH ARYKEM BEFORE PUBLICATION
// Source conflict: Detailed visual shows 30 mcg, Product list visual shows 60 mcg
// Current value in data: Check products.js MARINEX_RETINOL_MCG constant
const MARINEX_RETINOL_NOTE = "Retinol quantity pending final confirmation";

// Catalogue organization
const catalogueCategories = [
  {
    id: 'redefine-beauty',
    number: '01',
    title: 'REDEFINE BEAUTY',
    subtitle: 'Marine Nutrition & Antioxidant Support',
    products: ['marinex', 'x-gluta-tab']
  },
  {
    id: 'advanced-skincare',
    number: '02',
    title: 'ADVANCED SKINCARE',
    subtitle: 'Topical Vitamin C & Antioxidant System',
    products: ['la3c']
  },
  {
    id: 'glutathione-iv',
    number: '03',
    title: 'GLUTATHIONE IV THERAPY',
    subtitle: 'Professional Antioxidant Support',
    products: ['x-gluta-iv-600', 'x-gluta-iv-1200', 'x-gluta-iv-2000']
  },
  {
    id: 'clinical-wellness',
    number: '04',
    title: 'CLINICAL WELLNESS',
    subtitle: 'Probiotic & Bone Health Support',
    products: ['repob', 'ktoseven']
  }
];

export default function CataloguePage() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    
    try {
      const { generatePremiumCataloguePDF } = await import('@/utils/generatePremiumCataloguePDF');
      await generatePremiumCataloguePDF(products);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-catalogue-section="${sectionId}"]`);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ivory)]">

      {/* SECTION 01 — COVER */}
      <section 
        data-catalogue-section="cover"
        className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                ARYKEM PHARMACEUTICALS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] font-[var(--font-cormorant)]">
                Product Catalogue
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="h3 text-[var(--medium-grey)] font-normal max-w-3xl mx-auto">
                Science for a Healthier Tomorrow
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="body-large text-[var(--medium-grey)] max-w-2xl mx-auto">
                Comprehensive professional portfolio spanning dermatology, aesthetic nutrition, 
                glutathione IV therapy, advanced skincare, and clinical wellness formulations.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  onClick={() => scrollToSection('index')}
                  size="lg"
                  className="group"
                >
                  Explore Products
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button
                  onClick={generatePDF}
                  variant="secondary"
                  size="lg"
                  disabled={isGeneratingPDF}
                  className="group"
                >
                  <Download className="mr-2 group-hover:translate-y-0.5 transition-transform" size={20} />
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download Catalogue'}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="pt-8">
                <p className="text-sm text-[var(--medium-grey)] uppercase tracking-wider">
                  Dermatology • Aesthetics • Clinical Wellness
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 02 — INTRODUCTION */}
      <section 
        data-catalogue-section="introduction"
        className="section bg-[var(--warm-white)] border-y border-[var(--soft-grey)]"
      >
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Heading */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="h1 text-[var(--charcoal)] font-[var(--font-cormorant)] mb-6">
                  Science. Care. Professional Confidence.
                </h2>
              </Reveal>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.2}>
                <p className="body-large text-[var(--medium-grey)] leading-relaxed">
                  Arykem Pharmaceuticals Pvt. Ltd. develops and presents science-led products 
                  across dermatology, aesthetics, skin nutrition and clinical wellness, with a 
                  focus on professional use, formulation clarity and responsible product communication.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--soft-grey)]">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-medium text-[var(--botanical)] font-[var(--font-cormorant)] mb-2">
                      8
                    </div>
                    <p className="text-sm text-[var(--medium-grey)]">
                      Products
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-medium text-[var(--botanical)] font-[var(--font-cormorant)] mb-2">
                      4
                    </div>
                    <p className="text-sm text-[var(--medium-grey)]">
                      Categories
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-medium text-[var(--botanical)] font-[var(--font-cormorant)] mb-2">
                      100%
                    </div>
                    <p className="text-sm text-[var(--medium-grey)]">
                      Science-Led
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PORTFOLIO INDEX */}
      <section 
        data-catalogue-section="index"
        className="section bg-[var(--ivory)]"
      >
        <div className="container max-w-5xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--charcoal)] mb-12 text-center font-[var(--font-cormorant)]">
              Portfolio Index
            </h2>
          </Reveal>

          <div className="space-y-8">
            {catalogueCategories.map((category, index) => (
              <Reveal key={category.id} delay={0.1 * index}>
                <div className="bg-[var(--warm-white)] border border-[var(--soft-grey)] p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <span className="text-5xl font-light text-[var(--botanical)]/40 font-[var(--font-cormorant)]">
                      {category.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-[var(--charcoal)] mb-2 font-[var(--font-cormorant)]">
                        {category.title}
                      </h3>
                      <p className="text-[var(--medium-grey)]">
                        {category.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => scrollToSection(category.id)}
                      className="text-[var(--botanical)] hover:text-[var(--charcoal)] transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-20">
                    {category.products.map((productSlug) => {
                      const product = getProductBySlug(productSlug);
                      return product ? (
                        <button
                          key={productSlug}
                          onClick={() => scrollToSection(productSlug)}
                          className="text-left p-4 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors">
                              {product.name}
                            </span>
                            <ArrowRight size={16} className="text-[var(--medium-grey)] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE SECTIONS */}
      {catalogueCategories.map((category, catIndex) => (
        <div key={category.id}>
          {/* Category Header */}
          <section 
            data-catalogue-section={category.id}
            className="section bg-[var(--charcoal)] text-[var(--ivory)]"
          >
            <div className="container max-w-5xl">
              <Reveal>
                <div className="flex items-center gap-8 mb-6">
                  <span className="text-6xl font-light text-[var(--botanical)]/40 font-[var(--font-cormorant)]">
                    {category.number}
                  </span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-medium text-[var(--ivory)] font-[var(--font-cormorant)]">
                      {category.title}
                    </h2>
                    <p className="text-[var(--ivory)]/70 mt-2">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Category Products */}
          {category.products.map((productSlug, prodIndex) => {
            const product = getProductBySlug(productSlug);
            if (!product) return null;

            return (
              <CatalogueProductSection
                key={productSlug}
                product={product}
                index={prodIndex}
                categoryId={category.id}
              />
            );
          })}
        </div>
      ))}

      {/* FOOTER CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
              Explore the Wider Arykem Portfolio
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-[var(--ivory)]/70 mb-8">
              Discover detailed product information, scientific rationale, and professional resources.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                View All Products
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
      </section>
    </div>
  );
}

// Catalogue Product Section Component
function CatalogueProductSection({ product, index, categoryId }) {
  const fullProductName = product.fullName || product.name;
  const productImageAlt = product.imageAlt || `${fullProductName} — Arykem Pharmaceuticals`;

  return (
    <section
      data-catalogue-section={product.slug}
      id={product.slug}
      className="section bg-[var(--ivory)] border-b border-[var(--soft-grey)]"
    >
      <div className="container max-w-6xl">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Product Image */}
          <Reveal delay={0.1}>
            <div className="relative aspect-square bg-white border-2 border-[var(--soft-grey)]">
              <Image
                src={`/images/products/${product.slug}.png`}
                alt={productImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-12"
              />
            </div>
          </Reveal>

          {/* Product Overview */}
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <span className="label text-[var(--botanical)]">
                {product.category}
              </span>
            </Reveal>

            <Reveal delay={0.3}>
              <h3 className="text-4xl md:text-5xl font-medium text-[var(--charcoal)] font-[var(--font-cormorant)]">
                {product.name}
              </h3>
            </Reveal>

            {product.fullName && product.fullName !== product.name && (
              <Reveal delay={0.35}>
                <p className="text-xl text-[var(--medium-grey)] font-medium">
                  {product.fullName}
                </p>
              </Reveal>
            )}

            {product.positioning && (
              <Reveal delay={0.4}>
                <p className="text-lg text-[var(--charcoal)] italic border-l-4 border-[var(--botanical)] pl-6 py-2">
                  {product.positioning}
                </p>
              </Reveal>
            )}

            <Reveal delay={0.5}>
              <p className="body-large text-[var(--medium-grey)] leading-relaxed">
                {product.description}
              </p>
            </Reveal>

            {/* Pack Information */}
            <Reveal delay={0.6}>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--soft-grey)]">
                {product.form && (
                  <div>
                    <span className="label text-[var(--medium-grey)]">FORM</span>
                    <p className="body mt-1 text-[var(--charcoal)]">{product.form}</p>
                  </div>
                )}
                {product.packSize && (
                  <div>
                    <span className="label text-[var(--medium-grey)]">PACK</span>
                    <p className="body mt-1 text-[var(--charcoal)]">{product.packSize}</p>
                  </div>
                )}
                {product.route && (
                  <div>
                    <span className="label text-[var(--medium-grey)]">ROUTE</span>
                    <p className="body mt-1 text-[var(--charcoal)]">{product.route}</p>
                  </div>
                )}
                {product.servingsPerPack && (
                  <div>
                    <span className="label text-[var(--medium-grey)]">SERVINGS</span>
                    <p className="body mt-1 text-[var(--charcoal)]">{product.servingsPerPack}</p>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 text-[var(--botanical)] font-medium hover:gap-4 transition-all"
              >
                View Full Product Details
                <ArrowRight size={20} />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Composition */}
        {product.composition && product.composition.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <h4 className="text-2xl font-medium text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Composition
              </h4>
            </Reveal>

            <div className="space-y-4">
              {product.composition.map((comp, idx) => (
                <Reveal key={idx} delay={0.05 * idx}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <div className="md:col-span-4">
                      <h5 className="font-semibold text-[var(--charcoal)]">
                        {comp.ingredient}
                      </h5>
                    </div>
                    <div className="md:col-span-2">
                      <span className="label text-[var(--medium-grey)]">AMOUNT</span>
                      <p className="body text-[var(--charcoal)] mt-1">{comp.amount}</p>
                    </div>
                    <div className="md:col-span-6">
                      <span className="label text-[var(--medium-grey)]">ROLE</span>
                      <p className="body-small text-[var(--medium-grey)] mt-1">{comp.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Benefits */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <h4 className="text-2xl font-medium text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Key Support Areas
              </h4>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, idx) => (
                <Reveal key={idx} delay={0.05 * idx}>
                  <div className="flex items-start gap-3 p-4 bg-[var(--warm-white)] border-l-4 border-[var(--botanical)]">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--botanical)] flex-shrink-0" />
                    <p className="body text-[var(--charcoal)]">{benefit}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Ideal For */}
        {product.idealFor && product.idealFor.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <h4 className="text-2xl font-medium text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Ideal For
              </h4>
            </Reveal>

            <div className="bg-[var(--warm-white)] border border-[var(--soft-grey)] p-8">
              <div className="space-y-4">
                {product.idealFor.map((item, idx) => (
                  <Reveal key={idx} delay={0.05 * idx}>
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-1 mt-2.5 rounded-full bg-[var(--medium-grey)] flex-shrink-0" />
                      <p className="body text-[var(--charcoal)]">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Directions */}
        {product.directions && (
          <div className="mb-16">
            <Reveal>
              <h4 className="text-2xl font-medium text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Directions for Use
              </h4>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.directions.howToUse && (
                <Reveal delay={0.1}>
                  <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <h5 className="font-semibold text-[var(--charcoal)] mb-3">How to Use</h5>
                    <p className="body-small text-[var(--medium-grey)]">{product.directions.howToUse}</p>
                  </div>
                </Reveal>
              )}

              {product.directions.recommended && (
                <Reveal delay={0.2}>
                  <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <h5 className="font-semibold text-[var(--charcoal)] mb-3">Recommended</h5>
                    <p className="body-small text-[var(--medium-grey)]">{product.directions.recommended}</p>
                  </div>
                </Reveal>
              )}

              {product.directions.schedule && (
                <Reveal delay={0.3}>
                  <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)] md:col-span-2">
                    <h5 className="font-semibold text-[var(--charcoal)] mb-3">Suggested Schedule</h5>
                    <p className="body-small text-[var(--medium-grey)] mb-2">{product.directions.schedule}</p>
                    {product.directions.note && (
                      <p className="body-small text-[var(--medium-grey)]/70 italic text-sm">
                        Note: {product.directions.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        )}

        {/* HCP Discussion Points */}
        {product.hcpDiscussionPoints && product.hcpDiscussionPoints.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <h4 className="text-2xl font-medium text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Healthcare Professional Discussion Points
              </h4>
            </Reveal>

            <div className="bg-[var(--charcoal)] text-[var(--ivory)] p-8">
              <div className="space-y-4">
                {product.hcpDiscussionPoints.map((point, idx) => (
                  <Reveal key={idx} delay={0.05 * idx}>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--botanical)] flex-shrink-0" />
                      <p className="body text-[var(--ivory)]/90">{point}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Safety & Prescription Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {product.prescriptionStatus && (
            <Reveal>
              <div className="p-6 bg-[var(--botanical)]/10 border-l-4 border-[var(--botanical)]">
                <p className="font-semibold text-[var(--charcoal)]">
                  {product.prescriptionStatus}
                </p>
              </div>
            </Reveal>
          )}

          {product.warning && (
            <Reveal delay={0.1}>
              <div className="p-6 bg-[var(--charcoal)] text-[var(--ivory)]">
                <p className="text-sm font-medium">
                  ⚠️ {product.warning}
                </p>
              </div>
            </Reveal>
          )}

          {product.disclaimer && (
            <Reveal delay={0.2}>
              <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)] md:col-span-2">
                <p className="body-small text-[var(--medium-grey)] italic text-center">
                  {product.disclaimer}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
