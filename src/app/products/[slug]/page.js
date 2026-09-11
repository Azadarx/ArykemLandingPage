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

  return {
    title: product.name,
    description: product.shortDescription || product.description,
    openGraph: {
      title: `${product.name} | ${siteConfig.shortName}`,
      description: product.shortDescription || product.description,
      url: getCanonicalUrl(`/products/${product.slug}`),
      type: 'website',
      images: [
        {
          url: productImageUrl,
          width: 1200,
          height: 1200,
          alt: `${product.name} - ${product.category}`,
        },
      ],
    },
    twitter: {
      title: `${product.name} | ${siteConfig.shortName}`,
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

  // Product JSON-LD structured data
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
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
                  {product.name}
                </h1>
              </Reveal>

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

              {product.form && (
                <Reveal delay={0.5}>
                  <div className="pt-4 border-t border-[var(--soft-grey)]">
                    <div className="flex gap-8">
                      <div>
                        <span className="label text-[var(--medium-grey)]">FORM</span>
                        <p className="body mt-1 text-[var(--charcoal)]">{product.form}</p>
                      </div>
                      {product.packaging && (
                        <div>
                          <span className="label text-[var(--medium-grey)]">PACKAGING</span>
                          <p className="body mt-1 text-[var(--charcoal)]">{product.packaging}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Right: Premium Product Image */}
            <Reveal delay={0.3}>
              <div className="relative aspect-square bg-white border border-[var(--soft-grey)] overflow-hidden">
                <Image
                  src={`/images/products/${product.slug}.png`}
                  alt={`${product.name} — Arykem Pharmaceuticals`}
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
              {relatedProducts.map((relProduct, index) => (
                <Reveal key={relProduct.id} delay={0.1 * index}>
                  <Link
                    href={`/products/${relProduct.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-square mb-6 overflow-hidden bg-white border border-[var(--soft-grey)] group-hover:border-[var(--botanical)] transition-colors">
                      <Image
                        src={`/images/products/${relProduct.slug}.png`}
                        alt={`${relProduct.name} — Arykem Pharmaceuticals`}
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
              ))}
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
