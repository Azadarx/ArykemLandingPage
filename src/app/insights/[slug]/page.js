import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { getInsightBySlug, getRelatedInsights, insights } from '@/data/insights';
import { products } from '@/data/products';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { siteConfig, getCanonicalUrl, getAbsoluteUrl } from '@/lib/config';

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  
  if (!insight) {
    return {
      title: 'Article Not Found',
    };
  }

  const insightImageUrl = insight.image ? getAbsoluteUrl(insight.image) : getAbsoluteUrl(siteConfig.ogImage);

  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: `${insight.title} | Arykem Insights`,
      description: insight.excerpt,
      url: getCanonicalUrl(`/insights/${insight.slug}`),
      type: 'article',
      article: {
        section: insight.category,
      },
      images: [
        {
          url: insightImageUrl,
          width: 1200,
          height: 630,
          alt: insight.imageAlt || insight.title,
        },
      ],
    },
    twitter: {
      title: `${insight.title} | Arykem Insights`,
      description: insight.excerpt,
      images: [insightImageUrl],
    },
    alternates: {
      canonical: getCanonicalUrl(`/insights/${insight.slug}`),
    },
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = getRelatedInsights(insight.id, 2);
  const relatedProducts = insight.relatedProducts 
    ? products.filter(p => insight.relatedProducts.includes(p.id))
    : [];

  // Split content into paragraphs for better rendering
  const contentSections = insight.content.split('\n\n');

  // Article JSON-LD structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    image: insight.image ? getAbsoluteUrl(insight.image) : undefined,
    articleSection: insight.category,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: getAbsoluteUrl('/images/brand/arykem-logo.png'),
      },
    },
    url: getCanonicalUrl(`/insights/${insight.slug}`),
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
        name: 'Insights',
        item: getCanonicalUrl('/insights'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: insight.title,
        item: getCanonicalUrl(`/insights/${insight.slug}`),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Article Hero */}
      <section className="section pt-32 md:pt-40 pb-16 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[var(--medium-grey)] hover:text-[var(--botanical)] transition-colors mb-12 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Insights</span>
            </Link>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <span className="label text-[var(--botanical)]">
                {insight.category}
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="display text-[var(--charcoal)] font-[var(--font-cormorant)]">
                {insight.title}
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="body-large text-[var(--medium-grey)]">
                {insight.excerpt}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-center gap-2 text-[var(--medium-grey)] pt-4">
                <Clock size={18} />
                <span className="text-sm">{insight.readTime}</span>
              </div>
            </Reveal>
          </div>

          {/* Hero Image */}
          {insight.image && (
            <Reveal delay={0.5}>
              <div className="relative aspect-[21/9] mt-12 overflow-hidden border border-[var(--soft-grey)]">
                <Image
                  src={insight.image}
                  alt={insight.imageAlt || insight.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/10 to-transparent" />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Article Content */}
      <article className="section bg-[var(--ivory)]">
        <div className="container max-w-3xl">
          <div className="prose-custom space-y-6">
            {contentSections.map((section, index) => {
              // Handle markdown headers
              if (section.startsWith('## ')) {
                return (
                  <Reveal key={index} delay={0.1}>
                    <h2 className="h2 text-[var(--charcoal)] mt-12 mb-6 font-[var(--font-cormorant)]">
                      {section.replace('## ', '')}
                    </h2>
                  </Reveal>
                );
              }
              
              // Handle markdown h3
              if (section.startsWith('### ')) {
                return (
                  <Reveal key={index} delay={0.1}>
                    <h3 className="text-2xl font-medium text-[var(--charcoal)] mt-8 mb-4">
                      {section.replace('### ', '')}
                    </h3>
                  </Reveal>
                );
              }

              // Handle bold markdown
              if (section.startsWith('**') && section.endsWith('**')) {
                return (
                  <Reveal key={index} delay={0.1}>
                    <h4 className="text-xl font-medium text-[var(--charcoal)] mt-6 mb-3">
                      {section.replace(/\*\*/g, '')}
                    </h4>
                  </Reveal>
                );
              }

              // Handle bullet lists
              if (section.includes('\n- ')) {
                const items = section.split('\n- ').filter(Boolean);
                return (
                  <Reveal key={index} delay={0.1}>
                    <ul className="space-y-3 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-[var(--botanical)] flex-shrink-0" />
                          <span className="body text-[var(--medium-grey)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }

              // Regular paragraphs
              return (
                <Reveal key={index} delay={0.1}>
                  <p className="body text-[var(--medium-grey)] leading-relaxed">
                    {section}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </article>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section bg-[var(--warm-white)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Explore Related Products
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map((product, index) => (
                <Reveal key={product.id} delay={0.1 * index}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block p-8 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                  >
                    <span className="label text-[var(--botanical)]">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mt-3 mb-2 font-[var(--font-cormorant)]">
                      {product.name}
                    </h3>
                    <p className="body-small text-[var(--medium-grey)] mb-4">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium">
                      <span>View Product</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="section bg-[var(--ivory)]">
          <div className="container max-w-4xl">
            <Reveal>
              <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                Related Articles
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedInsights.map((relatedInsight, index) => (
                <Reveal key={relatedInsight.id} delay={0.1 * index}>
                  <Link
                    href={`/insights/${relatedInsight.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/10] mb-4 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-grey)] relative overflow-hidden border border-[var(--soft-grey)] group-hover:border-[var(--botanical)]/20 transition-colors">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--botanical)]/10 to-transparent blur-2xl" />
                      </div>
                    </div>
                    <span className="label text-[var(--botanical)]">
                      {relatedInsight.category}
                    </span>
                    <h3 className="text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mt-2 mb-2">
                      {relatedInsight.title}
                    </h3>
                    <p className="body-small text-[var(--medium-grey)] line-clamp-2">
                      {relatedInsight.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore More CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="h1 text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
              Explore the science and formulations
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--ivory)]/70 mb-8">
              Discover how Arykem brings scientific understanding into 
              professional dermatology and aesthetic practice.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/science" size="lg">
                Explore the Science
              </Button>
              <Button 
                href="/products" 
                variant="ghost"
                size="lg"
                className="text-[var(--ivory)] border-2 border-[var(--ivory)]/20 hover:bg-[var(--ivory)]/10 hover:border-[var(--ivory)]/40"
              >
                View Products
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
