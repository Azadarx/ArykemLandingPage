import { FileText, Beaker, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const professionalResources = [
  {
    icon: FileText,
    title: 'Product Portfolio',
    description: 'Comprehensive information on our complete range of formulations.',
    href: '/products',
  },
  {
    icon: Beaker,
    title: 'Scientific Resources',
    description: 'Research insights and formulation science for clinical reference.',
    href: '/science',
  },
  {
    icon: Users,
    title: 'Professional Support',
    description: 'Dedicated support for healthcare practitioners and clinics.',
    href: '/professionals',
  },
  {
    icon: FileText,
    title: 'Product Catalogue',
    description: 'Downloadable catalogue with detailed product specifications.',
    href: '/catalogue',
  },
];

export default function ProfessionalsSection() {
  return (
    <section className="section bg-[var(--ivory)]">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <SectionHeading
              label="For Healthcare Professionals"
              title="Built for the modern practice"
              subtitle="Serving dermatologists, aestheticians, cosmetologists, and healthcare professionals with science-driven solutions."
              align="center"
            />
          </Reveal>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {professionalResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Reveal key={resource.title} delay={0.1 * index}>
                <Link
                  href={resource.href}
                  className="group block p-8 bg-[var(--warm-white)] border border-[var(--soft-grey)] hover:border-[var(--botanical)] hover:bg-white transition-all"
                >
                  <div className="mb-6">
                    <Icon 
                      size={32} 
                      className="text-[var(--botanical)] group-hover:scale-110 transition-transform" 
                    />
                  </div>
                  <h3 className="text-lg font-medium text-[var(--charcoal)] mb-3">
                    {resource.title}
                  </h3>
                  <p className="body-small text-[var(--medium-grey)] mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--botanical)] text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform" 
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
