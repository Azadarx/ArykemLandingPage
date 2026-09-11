import Link from 'next/link';
import { ArrowRight, Beaker, Microscope, Heart, Sparkles, Book, FileText } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { products } from '@/data/products';
import { siteConfig, getCanonicalUrl } from '@/lib/config';

export const metadata = {
  title: 'For Healthcare Professionals',
  description: 'Professional resources and science-driven formulations for dermatologists, aesthetic physicians, and healthcare professionals. Access clinical insights and evidence-conscious product information.',
  openGraph: {
    title: 'For Healthcare Professionals | Arykem Pharmaceuticals',
    description: 'Professional resources and science-driven formulations for dermatologists, aesthetic physicians, and healthcare professionals.',
    url: getCanonicalUrl('/professionals'),
  },
  twitter: {
    title: 'For Healthcare Professionals | Arykem Pharmaceuticals',
    description: 'Professional resources and evidence-conscious product information for healthcare professionals.',
  },
  alternates: {
    canonical: getCanonicalUrl('/professionals'),
  },
};

const scienceTopics = [
  {
    icon: Microscope,
    title: 'Collagen Biology',
    description: 'Understanding collagen as a structural protein and its role in skin architecture.',
    link: '/science',
  },
  {
    icon: Beaker,
    title: 'Glutathione & Redox Balance',
    description: 'The endogenous antioxidant system and cellular redox homeostasis.',
    link: '/science',
  },
  {
    icon: Sparkles,
    title: 'Vitamin C',
    description: 'Essential cofactor for collagen synthesis and antioxidant defense.',
    link: '/science',
  },
  {
    icon: Heart,
    title: 'Antioxidant Support',
    description: 'Synergistic antioxidant systems and oxidative stress management.',
    link: '/science',
  },
  {
    icon: Book,
    title: 'Skin Nutrition',
    description: 'Nutritional factors influencing skin health and aesthetic outcomes.',
    link: '/science',
  },
  {
    icon: FileText,
    title: 'Oxidative Stress',
    description: 'Understanding reactive species, balance, and biological implications.',
    link: '/science',
  },
];

const professionalResources = [
  {
    title: 'Product Portfolio',
    description: 'Complete range of dermatology and aesthetic formulations.',
    href: '/products',
  },
  {
    title: 'Science',
    description: 'Scientific foundations and biological concepts.',
    href: '/science',
  },
  {
    title: 'Insights',
    description: 'Educational perspectives on skin health and aesthetics.',
    href: '/insights',
  },
  {
    title: 'Catalogue',
    description: 'Comprehensive product information and specifications.',
    href: '/catalogue',
  },
  {
    title: 'Contact',
    description: 'Professional inquiries and support.',
    href: '/contact',
  },
];

// Group products by category for professional view
const aestheticNutrition = products.filter(p => p.category === 'Aesthetic Nutrition');
const ivNutrition = products.filter(p => p.category === 'IV Nutrition');
const skinHealth = products.filter(p => p.category === 'Skin Health');
const dermatology = products.filter(p => p.category === 'Dermatology');

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                FOR HEALTHCARE PROFESSIONALS
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                Supporting the modern practice with science, formulation and perspective
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-3xl mb-10">
                Arykem Pharmaceuticals serves dermatologists, aesthetic physicians, 
                cosmetologists, and healthcare professionals with science-driven 
                formulations designed around the evolving needs of professional practice.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/products" size="lg">
                  Explore the Portfolio
                </Button>
                <Button href="/science" variant="secondary" size="lg">
                  Explore the Science
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Professional Perspective */}
      <section className="section bg-[var(--ivory)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  label="The Professional Perspective"
                  title="A multidimensional approach to aesthetic practice"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.2}>
                <p className="body-large text-[var(--medium-grey)]">
                  Modern aesthetic practice involves multiple interconnected dimensions: 
                  skin health, nutrition, antioxidant biology, collagen dynamics, aesthetic 
                  procedures, and patient-specific considerations.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="body text-[var(--medium-grey)]">
                  Arykem&apos;s formulations are designed to integrate into this multidimensional 
                  context—providing scientifically informed options that respect the complexity 
                  of aesthetic outcomes while supporting professional clinical judgment.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-6 border-t border-[var(--soft-grey)]">
                  <p className="body-small text-[var(--medium-grey)] italic">
                    Information provided is intended for professional and educational context. 
                    It should not replace clinical judgment, diagnosis, or individualized 
                    patient assessment.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Product Universe */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <SectionHeading
                label="Professional Product Universe"
                title="Formulations designed for clinical and aesthetic practice"
                subtitle="Our portfolio organized by therapeutic and application focus."
              />
            </Reveal>
          </div>

          <div className="space-y-16">
            {/* Aesthetic Nutrition */}
            {aestheticNutrition.length > 0 && (
              <Reveal delay={0.2}>
                <div>
                  <h3 className="text-2xl font-medium text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
                    Aesthetic Nutrition
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aestheticNutrition.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="group p-8 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                      >
                        <h4 className="text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mb-2 font-[var(--font-cormorant)]">
                          {product.name}
                        </h4>
                        <p className="body-small text-[var(--medium-grey)] mb-4">
                          {product.shortDescription}
                        </p>
                        {product.form && (
                          <span className="label text-[var(--medium-grey)]">
                            {product.form}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* IV Nutrition */}
            {ivNutrition.length > 0 && (
              <Reveal delay={0.3}>
                <div>
                  <h3 className="text-2xl font-medium text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
                    IV Nutrition
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ivNutrition.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="group p-8 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                      >
                        <h4 className="text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mb-2 font-[var(--font-cormorant)]">
                          {product.name}
                        </h4>
                        <p className="body-small text-[var(--medium-grey)] mb-4">
                          {product.shortDescription}
                        </p>
                        {product.warning && (
                          <span className="label text-[var(--botanical)]">
                            Professional Use Only
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Skin Health */}
            {skinHealth.length > 0 && (
              <Reveal delay={0.4}>
                <div>
                  <h3 className="text-2xl font-medium text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
                    Skin Health
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skinHealth.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="group p-8 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                      >
                        <h4 className="text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mb-2 font-[var(--font-cormorant)]">
                          {product.name}
                        </h4>
                        <p className="body-small text-[var(--medium-grey)]">
                          {product.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Dermatology */}
            {dermatology.length > 0 && (
              <Reveal delay={0.5}>
                <div>
                  <h3 className="text-2xl font-medium text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
                    Dermatology
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dermatology.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className="group p-6 bg-[var(--ivory)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                      >
                        <h4 className="text-lg font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors font-[var(--font-cormorant)]">
                          {product.name}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Science for Practice */}
      <section className="section bg-[var(--charcoal)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <span className="label text-[var(--botanical-light)] mb-6 block">
                SCIENCE FOR PRACTICE
              </span>
              <h2 className="h1 text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
                Biological concepts relevant to aesthetic medicine
              </h2>
              <p className="body-large text-[var(--ivory)]/70">
                Understanding the scientific foundations that inform formulation and application.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scienceTopics.slice(0, 3).map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Reveal key={topic.title} delay={0.1 * index}>
                  <Link
                    href={topic.link}
                    className="group block p-8 bg-[var(--ivory)]/5 border border-[var(--ivory)]/10 hover:border-[var(--botanical-light)]/40 hover:bg-[var(--ivory)]/10 transition-all h-full"
                  >
                    <Icon size={36} className="text-[var(--botanical-light)] mb-5" strokeWidth={1.5} />
                    <h3 className="text-xl font-medium text-[var(--ivory)] mb-3 font-[var(--font-cormorant)]">
                      {topic.title}
                    </h3>
                    <p className="body text-[var(--ivory)]/70 mb-6 leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--botanical-light)] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/science"
                className="inline-flex items-center gap-2 text-[var(--botanical-light)] hover:text-[var(--ivory)] transition-colors text-base font-medium"
              >
                <span>Explore All Science Topics</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Professional Resources */}
      <section className="section bg-[var(--ivory)]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <SectionHeading
                label="Professional Resources"
                title="Access comprehensive information and support"
                subtitle="Resources designed for healthcare professionals."
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {professionalResources.map((resource, index) => (
              <Reveal key={resource.title} delay={0.1 * index}>
                <Link
                  href={resource.href}
                  className="group block p-8 bg-[var(--warm-white)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
                >
                  <h3 className="text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors mb-3">
                    {resource.title}
                  </h3>
                  <p className="body-small text-[var(--medium-grey)] mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium">
                    <span>Access</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Responsibility Notice */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="p-10 border-l-4 border-[var(--botanical)] bg-[var(--ivory)]">
              <h3 className="text-xl font-medium text-[var(--charcoal)] mb-4">
                Professional Responsibility
              </h3>
              <p className="body text-[var(--medium-grey)]">
                Information on this website is intended for professional and educational 
                context and should not replace clinical judgment, diagnosis, or individualized 
                patient assessment. Healthcare professionals should exercise their professional 
                expertise when considering any formulation or approach. Product selection, 
                dosing, and administration protocols remain the responsibility of qualified 
                healthcare providers based on individual patient evaluation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
