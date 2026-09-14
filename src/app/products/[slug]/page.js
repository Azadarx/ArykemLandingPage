import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { siteConfig, getCanonicalUrl, getAbsoluteUrl } from '@/lib/config';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const productImageUrl = getAbsoluteUrl(`/images/products/${product.slug}.png`);
  const fullProductName = product.fullName || product.name;

  return {
    title: `${fullProductName} | ${siteConfig.shortName}`,
    description: product.shortDescription || product.description,
    openGraph: {
      title: `${fullProductName} | ${siteConfig.shortName}`,
      description: product.shortDescription || product.description,
      url: getCanonicalUrl(`/products/${product.slug}`),
      type: 'website',
      images: [
        {
          url: productImageUrl,
          width: 1200,
          height: 1200,
          alt: product.imageAlt || `${fullProductName} - ${product.category}`,
        },
      ],
    },
    twitter: {
      title: `${fullProductName} | ${siteConfig.shortName}`,
      description: product.shortDescription,
      images: [productImageUrl],
    },
    alternates: {
      canonical: getCanonicalUrl(`/products/${product.slug}`),
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, 3);
  const fullProductName = product.fullName || product.name;
  const productImageAlt = product.imageAlt || `${fullProductName} — Arykem Pharmaceuticals`;

  // Product JSON-LD structured data
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: fullProductName,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    image: getAbsoluteUrl(`/images/products/${product.slug}.png`),
    url: getCanonicalUrl(`/products/${product.slug}`),
  };

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: getCanonicalUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: getCanonicalUrl('/products'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: getCanonicalUrl(`/products/${product.slug}`),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Product Hero */}
      <section className="section pt-32 md:pt-40 pb-16 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          {/* Back Button */}
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[var(--medium-grey)] hover:text-[var(--botanical)] transition-colors mb-12 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Products</span>
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Product Info */}
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <span className="label text-[var(--botanical)]">
                  {product.category}
                </span>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="display text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  {fullProductName}
                </h1>
              </Reveal>

              {product.positioning && (
                <Reveal delay={0.25}>
                  <p className="h4 text-[var(--charcoal)] font-medium italic">
                    {product.positioning}
                  </p>
                </Reveal>
              )}

              <Reveal delay={0.3}>
                <p className="h3 text-[var(--medium-grey)] font-normal">
                  {product.shortDescription}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="body-large text-[var(--medium-grey)]">
                  {product.description}
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="pt-4 border-t border-[var(--soft-grey)]">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {product.form && (
                      <div>
                        <span className="label text-[var(--medium-grey)]">FORM</span>
                        <p className="body mt-1 text-[var(--charcoal)]">{product.form}</p>
                      </div>
                    )}
                    {product.packSize && (
                      <div>
                        <span className="label text-[var(--medium-grey)]">PACK SIZE</span>
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
                      <div className="md:col-span-3">
                        <span className="label text-[var(--medium-grey)]">SERVINGS</span>
                        <p className="body mt-1 text-[var(--charcoal)]">{product.servingsPerPack}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>

              {product.prescriptionStatus && (
                <Reveal delay={0.6}>
                  <div className="p-4 bg-[var(--botanical)]/10 border-l-4 border-[var(--botanical)]">
                    <p className="text-sm font-medium text-[var(--charcoal)]">
                      {product.prescriptionStatus}
                    </p>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right: Premium Product Image */}
            <Reveal delay={0.3}>
              <div className="relative aspect-square bg-white border border-[var(--soft-grey)] overflow-hidden">
                <Image
                  src={`/images/products/${product.slug}.png`}
                  alt={productImageAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-contain p-12"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Composition Section */}
      {product.composition && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-5xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-12 font-[var(--font-cormorant)]">
                Composition
              </h2>
            </Reveal>

            <div className="space-y-6">
              {product.composition.map((item, index) => (
                <Reveal key={item.ingredient} delay={0.1 * index}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <div className="md:col-span-4">
                      <h3 className="text-lg font-medium text-[var(--charcoal)]">
                        {item.ingredient}
                      </h3>
                    </div>
                    <div className="md:col-span-2">
                      <span className="label text-[var(--medium-grey)]">AMOUNT</span>
                      <p className="body text-[var(--charcoal)] mt-1">{item.amount}</p>
                    </div>
                    <div className="md:col-span-6">
                      <span className="label text-[var(--medium-grey)]">ROLE</span>
                      <p className="body text-[var(--medium-grey)] mt-1">{item.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {product.highlights && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-5xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-12 font-[var(--font-cormorant)]">
                Key Highlights
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.highlights.map((highlight, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="flex items-start gap-4 p-6 bg-[var(--ivory)] border border-[var(--soft-grey)]">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[var(--botanical)] flex-shrink-0" />
                    <p className="body text-[var(--charcoal)]">{highlight}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ingredient Science */}
      {product.ingredientScience && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-5xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-4 font-[var(--font-cormorant)]">
                Ingredient Science
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="body-large text-[var(--medium-grey)] mb-12">
                Understanding the science behind each ingredient and its role in the formulation.
              </p>
            </Reveal>

            <div className="space-y-8">
              {Object.entries(product.ingredientScience).map(([key, ingredient], index) => (
                <Reveal key={key} delay={0.1 * index}>
                  <div className="p-8 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2 font-[var(--font-cormorant)]">
                      {ingredient.title}
                    </h3>
                    {ingredient.position && (
                      <p className="text-sm text-[var(--botanical)] font-medium mb-4">
                        {ingredient.position}
                      </p>
                    )}
                    <p className="body text-[var(--medium-grey)] leading-relaxed">
                      {ingredient.description}
                    </p>
                    {ingredient.note && (
                      <p className="body text-[var(--medium-grey)]/70 italic mt-3">
                        {ingredient.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Antioxidant Action / Mechanism (for IV products) */}
      {product.antioxidantAction && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-4 font-[var(--font-cormorant)]">
                {product.antioxidantAction.title}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] leading-relaxed">
                {product.antioxidantAction.description}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Benefits */}
      {product.benefits && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-5xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-12 font-[var(--font-cormorant)]">
                Key Benefits
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="flex items-start gap-4 p-6 bg-[var(--warm-white)] border-l-4 border-[var(--botanical)]">
                    <p className="body text-[var(--charcoal)]">{benefit}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ideal For */}
      {product.idealFor && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-4 font-[var(--font-cormorant)]">
                Ideal For
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="body-large text-[var(--medium-grey)] mb-8">
                This formulation may be particularly suitable for:
              </p>
            </Reveal>

            <div className="space-y-4">
              {product.idealFor.map((item, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--botanical)] flex-shrink-0" />
                    <p className="body-large text-[var(--charcoal)]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Directions / Usage */}
      {product.directions && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Directions for Use
              </h2>
            </Reveal>

            <div className="space-y-6">
              {product.directions.howToUse && (
                <Reveal delay={0.1}>
                  <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3">
                      How to Use
                    </h3>
                    <p className="body text-[var(--medium-grey)]">
                      {product.directions.howToUse}
                    </p>
                  </div>
                </Reveal>
              )}

              {product.directions.recommended && (
                <Reveal delay={0.2}>
                  <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3">
                      Recommended
                    </h3>
                    <p className="body text-[var(--medium-grey)]">
                      {product.directions.recommended}
                    </p>
                  </div>
                </Reveal>
              )}

              {product.directions.schedule && (
                <Reveal delay={0.3}>
                  <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3">
                      Suggested Schedule
                    </h3>
                    <p className="body text-[var(--medium-grey)]">
                      {product.directions.schedule}
                    </p>
                    {product.directions.note && (
                      <p className="body text-[var(--medium-grey)]/70 italic mt-3 text-sm">
                        Note: {product.directions.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Professional Routine (for topical products like LA3C) */}
      {product.professionalRoutine && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Professional Skincare Routine
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.professionalRoutine.morning && (
                <Reveal delay={0.1}>
                  <div className="p-6 bg-[var(--ivory)] border border-[var(--soft-grey)]">
                    <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3">
                      Morning Application
                    </h3>
                    <p className="body text-[var(--medium-grey)]">
                      {product.professionalRoutine.morning}
                    </p>
                  </div>
                </Reveal>
              )}

              {product.professionalRoutine.evening && (
                <Reveal delay={0.2}>
                  <div className="p-6 bg-[var(--ivory)] border border-[var(--soft-grey)]">
                    <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-3">
                      Evening Application
                    </h3>
                    <p className="body text-[var(--medium-grey)]">
                      {product.professionalRoutine.evening}
                    </p>
                  </div>
                </Reveal>
              )}
            </div>

            {product.professionalRoutine.note && (
              <Reveal delay={0.3}>
                <p className="body text-[var(--medium-grey)]/70 italic mt-6 text-center">
                  {product.professionalRoutine.note}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* HCP Discussion Points */}
      {product.hcpDiscussionPoints && (
        <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--ivory)] mb-4 font-[var(--font-cormorant)]">
                Healthcare Professional Discussion Points
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="body-large text-[var(--ivory)]/70 mb-8">
                Key considerations for clinical practice and patient discussions.
              </p>
            </Reveal>

            <div className="space-y-4">
              {product.hcpDiscussionPoints.map((point, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="flex items-start gap-4 p-6 bg-[var(--ivory)]/5 border border-[var(--ivory)]/10">
                    <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--botanical)] flex-shrink-0" />
                    <p className="body text-[var(--ivory)]/90">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clinical Considerations */}
      {product.clinicalConsiderations && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Clinical Use Considerations
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] leading-relaxed">
                {product.clinicalConsiderations}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Safety Information */}
      {product.safety && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Important Safety Information
              </h2>
            </Reveal>

            <div className="space-y-4">
              {product.safety.map((item, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="flex items-start gap-4 p-6 bg-[var(--ivory)] border-l-4 border-[var(--charcoal)]">
                    <p className="body text-[var(--charcoal)]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quality Information */}
      {product.qualityInformation && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Quality Information
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {product.qualityInformation.map((item, index) => (
                <Reveal key={index} delay={0.05 * index}>
                  <div className="p-4 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-center">
                    <p className="text-sm font-medium text-[var(--charcoal)]">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      {product.disclaimer && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-4xl">
            <Reveal>
              <div className="p-8 bg-[var(--ivory)] border-2 border-[var(--medium-grey)]/20">
                <p className="body text-[var(--medium-grey)] text-center italic">
                  {product.disclaimer}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Storage (for prescription products) */}
      {product.storage && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Storage & Handling
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                <p className="body text-[var(--medium-grey)]">
                  {product.storage}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Scientific Focus */}
      {product.scientificFocus && (
        <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--ivory)] mb-8 font-[var(--font-cormorant)]">
                Scientific Focus
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--ivory)]/80 leading-relaxed">
                {product.scientificFocus}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Professional Use */}
      {product.professionalUse && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Professional Application
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] leading-relaxed">
                {product.professionalUse}
              </p>
            </Reveal>

            {product.warning && (
              <Reveal delay={0.3}>
                <div className="mt-8 p-6 bg-[var(--botanical)]/10 border-l-4 border-[var(--botanical)]">
                  <p className="body text-[var(--charcoal)] font-medium">
                    ⚠️ {product.warning}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-12 font-[var(--font-cormorant)]">
                Explore More
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct, index) => {
                const relProductImageAlt = relProduct.imageAlt || `${relProduct.fullName || relProduct.name} — Arykem Pharmaceuticals`;
                
                return (
                  <Reveal key={relProduct.id} delay={0.1 * index}>
                    <Link
                      href={`/products/${relProduct.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-square mb-6 overflow-hidden bg-white border border-[var(--soft-grey)] group-hover:border-[var(--botanical)] transition-colors">
                        <Image
                          src={`/images/products/${relProduct.slug}.png`}
                          alt={relProductImageAlt}
                          fill
                          sizes="(max-width: 768px) 90vw, 33vw"
                          className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <span className="label text-[var(--medium-grey)]">
                          {relProduct.category}
                        </span>
                        <h3 className="text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors font-[var(--font-cormorant)]">
                          {relProduct.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium">
                          <span>View Details</span>
                          <ArrowRight 
                            size={16} 
                            className="group-hover:translate-x-1 transition-transform" 
                          />
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="h1 text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
              Explore the wider Arykem portfolio
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--ivory)]/70 mb-8">
              Discover how our complete range of formulations can support your practice.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                View All Products
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
