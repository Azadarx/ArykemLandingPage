'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Circle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

const scienceTopics = [
  {
    id: 'collagen',
    title: 'Collagen',
    subtitle: 'Structural protein and skin framework',
  },
  {
    id: 'glutathione',
    title: 'Glutathione',
    subtitle: 'Endogenous antioxidant molecule',
  },
  {
    id: 'vitamin-c',
    title: 'Vitamin C',
    subtitle: 'Essential nutrient and antioxidant',
  },
  {
    id: 'antioxidants',
    title: 'Antioxidant Support',
    subtitle: 'Oxidative balance and defense',
  },
  {
    id: 'skin-nutrition',
    title: 'Skin Nutrition',
    subtitle: 'Nutritional influences on skin health',
  },
  {
    id: 'oxidative-stress',
    title: 'Oxidative Stress',
    subtitle: 'Reactive species and balance',
  },
];

const topicContent = {
  collagen: {
    overview: 'Collagen is the most abundant structural protein in the human body, forming a significant component of connective tissues including skin, tendons, ligaments, and bone.',
    points: [
      'Provides mechanical strength and structural framework to skin and other tissues',
      'Contributes to skin elasticity and firmness through its fibrillar structure',
      'Collagen synthesis and degradation are continuous processes influenced by age, nutrition, UV exposure, and other factors',
      'The body\'s natural collagen production changes with aging and environmental stressors',
      'Multiple collagen types exist (Type I, II, III, etc.), each with distinct structural roles',
    ],
    note: 'Research continues to explore how supplemental collagen peptides may support the body\'s natural collagen synthesis processes. Individual responses may vary based on multiple factors including age, overall health, and lifestyle.',
    image: '/images/science/collagen-biology.webp',
    imageAlt: 'Scientific visualization of collagen structure and skin biology',
  },
  glutathione: {
    overview: 'Glutathione (GSH) is a tripeptide composed of three amino acids—glutamate, cysteine, and glycine—functioning as one of the body\'s primary endogenous antioxidants.',
    points: [
      'Exists primarily in its reduced form (GSH) and participates in cellular redox balance',
      'Involved in protecting cells from oxidative damage through various enzymatic pathways',
      'Plays roles in detoxification processes, immune function, and protein synthesis',
      'Glutathione levels can be influenced by age, health status, environmental factors, and nutritional intake',
      'The glutathione system includes related enzymes and cofactors that work synergistically',
    ],
    note: 'Glutathione biology is complex and context-dependent. While research explores various supplementation approaches (oral, IV, precursor support), outcomes depend on individual factors and administration methods.',
    image: '/images/science/glutathione-redox.webp',
    imageAlt: 'Scientific visualization representing glutathione and redox biology',
  },
  'vitamin-c': {
    overview: 'Vitamin C (ascorbic acid) is an essential water-soluble vitamin that functions as a cofactor in numerous enzymatic reactions and serves as an important antioxidant.',
    points: [
      'Required for normal collagen synthesis through its role as a cofactor for prolyl and lysyl hydroxylases',
      'Functions as an antioxidant, donating electrons to neutralize reactive species',
      'Supports glutathione regeneration and works synergistically with other antioxidants',
      'Essential for various physiological processes including immune function and wound healing',
      'Cannot be synthesized by humans and must be obtained through diet or supplementation',
    ],
    note: 'Vitamin C has multiple biological roles. Its contribution to skin health involves complex interactions with collagen synthesis, antioxidant systems, and other nutritional factors.',
    image: '/images/science/vitamin-c.webp',
    imageAlt: 'Scientific visualization representing vitamin C and collagen biology',
  },
  antioxidants: {
    overview: 'Antioxidants are molecules that can donate electrons to reactive species (free radicals), helping to maintain cellular redox balance and protect against oxidative damage.',
    points: [
      'The body produces endogenous antioxidants (glutathione, superoxide dismutase, catalase) and obtains exogenous antioxidants from diet',
      'Different antioxidants work through various mechanisms and in different cellular compartments',
      'Antioxidant systems work synergistically—vitamin C, vitamin E, glutathione, and others support each other',
      'Oxidative balance involves both antioxidant defenses and the controlled production of reactive species for signaling',
      'Antioxidant requirements may increase with factors like UV exposure, pollution, stress, and aging',
    ],
    note: 'Antioxidant support is about balance, not elimination. Reactive species also serve important signaling functions. The goal is maintaining appropriate redox balance.',
    image: '/images/science/cellular-structure-final.webp',
    imageAlt: 'Scientific microscopy-style visualization of cellular structure',
  },
  'skin-nutrition': {
    overview: 'Skin health is influenced by a complex interplay of nutritional factors, both those consumed orally and those delivered topically or through other routes.',
    points: [
      'Proteins, vitamins, minerals, and essential fatty acids all contribute to normal skin structure and function',
      'Nutritional deficiencies can manifest in various skin conditions and impaired healing',
      'Hydration status affects skin moisture content and barrier function',
      'Individual nutritional requirements vary based on age, genetics, health status, and environmental exposures',
      'Skin outcomes are influenced by overall health, lifestyle, sleep, stress management, and environmental protection—not nutrition alone',
    ],
    note: 'Skin nutrition is one component of comprehensive skin health. Outcomes depend on multiple factors including genetics, age, lifestyle, topical care, and medical considerations.',
    image: '/images/science/skin-biology.webp',
    imageAlt: 'Macro visualization of healthy human skin biology',
  },
  'oxidative-stress': {
    overview: 'Oxidative stress refers broadly to an imbalance between the production of reactive oxygen species (ROS) and the body\'s antioxidant defense mechanisms.',
    points: [
      'ROS are produced naturally during metabolism and serve important signaling functions',
      'Excessive ROS production or insufficient antioxidant defenses can lead to oxidative damage',
      'Factors influencing oxidative stress include UV radiation, pollution, smoking, poor diet, inflammation, and certain health conditions',
      'Oxidative stress is implicated in various aspects of aging and multiple health concerns',
      'Both preventing excessive ROS production and supporting antioxidant defenses are relevant strategies',
    ],
    note: 'Oxidative stress is a complex biological concept. No single intervention completely eliminates oxidative stress, nor would complete elimination be desirable given ROS\'s signaling roles.',
    image: '/images/science/cellular-structure-final.webp',
    imageAlt: 'Scientific microscopy-style visualization of cellular structure',
  },
};

function SciencePage() {
  const [activeTopic, setActiveTopic] = useState('collagen');
  const currentContent = topicContent[activeTopic];

  // Get relevant products for current topic
  const getRelevantProducts = (topicId) => {
    if (topicId === 'collagen') {
      return products.filter(p => p.id === 'collagen');
    }
    if (topicId === 'glutathione' || topicId === 'vitamin-c' || topicId === 'antioxidants') {
      return products.filter(p => p.name.includes('X-GLUTA'));
    }
    return [];
  };

  const relevantProducts = getRelevantProducts(activeTopic);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                THE SCIENCE BEHIND BEAUTY
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                Understanding the science behind healthier skin
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-3xl">
                Skin health and aesthetic outcomes involve multiple biological and 
                nutritional factors. Understanding ingredients, biological systems, 
                and their limitations is an important part of informed professional 
                practice and realistic expectations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Science Topics Navigation */}
      <section className="py-12 bg-[var(--ivory)] border-y border-[var(--soft-grey)] sticky top-20 z-40 backdrop-blur-sm bg-[var(--ivory)]/95">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {scienceTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={cn(
                  'p-4 text-left border transition-all duration-300',
                  activeTopic === topic.id
                    ? 'bg-[var(--charcoal)] text-[var(--ivory)] border-[var(--charcoal)]'
                    : 'bg-[var(--warm-white)] text-[var(--charcoal)] border-[var(--soft-grey)] hover:border-[var(--botanical)]'
                )}
              >
                <h3 className="text-sm font-medium mb-1">{topic.title}</h3>
                <p className="text-xs opacity-70">{topic.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Content */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container max-w-6xl">
          <Reveal key={activeTopic}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Science Image - Editorial Treatment */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <div className="relative aspect-[3/4] overflow-hidden border border-[var(--soft-grey)]">
                    <Image
                      src={currentContent.image}
                      alt={currentContent.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/10 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Overview */}
                <div>
                  <h2 className="h2 text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
                    {scienceTopics.find(t => t.id === activeTopic)?.title}
                  </h2>
                  <p className="body-large text-[var(--medium-grey)] leading-relaxed">
                    {currentContent.overview}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-4">
                  {currentContent.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 bg-[var(--ivory)] border-l-2 border-[var(--botanical)]">
                      <Circle size={8} className="text-[var(--botanical)] flex-shrink-0 mt-2" fill="currentColor" />
                      <p className="body text-[var(--charcoal)]">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Important Note */}
                <div className="p-6 bg-[var(--botanical)]/10 border-l-4 border-[var(--botanical)]">
                  <p className="body text-[var(--charcoal)]">
                    <strong className="font-medium">Important:</strong> {currentContent.note}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Products */}
      {relevantProducts.length > 0 && (
        <section className="section bg-[var(--ivory)]">
          <div className="container">
            <div className="max-w-4xl">
              <Reveal>
                <SectionHeading
                  label="Science → Formulation"
                  title="Arykem products featuring this science"
                  subtitle="Our formulations that incorporate these scientific concepts."
                />
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {relevantProducts.map((product, index) => (
                  <Reveal key={product.id} delay={0.1 * index}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="group block p-8 bg-[var(--warm-white)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] transition-all"
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
          </div>
        </section>
      )}

      {/* Scientific Responsibility Statement */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-4xl">
          <Reveal>
            <h2 className="h2 text-[var(--ivory)] mb-8 text-center font-[var(--font-cormorant)]">
              Our Commitment to Scientific Responsibility
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6 text-center max-w-3xl mx-auto">
              <p className="body-large text-[var(--ivory)]/80">
                Arykem believes in evidence-conscious communication. We aim to explain 
                biological concepts accurately without making unsupported treatment claims.
              </p>
              <p className="body text-[var(--ivory)]/60">
                Individual responses to nutritional and dermatological interventions vary 
                based on genetics, age, health status, lifestyle, and many other factors. 
                Professional guidance remains essential.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="h1 text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
              Explore our science-driven formulations
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--medium-grey)] mb-8">
              See how these scientific concepts translate into Arykem&apos;s portfolio 
              of dermatology and aesthetic solutions.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                View All Products
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                About Arykem
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default SciencePage;
