import ContactForm from '@/components/sections/ContactForm';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig, getCanonicalUrl } from '@/lib/config';

export const metadata = {
  title: 'Contact Us',
  description: 'Connect with Arykem Pharmaceuticals for professional enquiries about our dermatology, aesthetic nutrition, and skin health portfolio. We welcome conversations with healthcare professionals.',
  openGraph: {
    title: 'Contact Us | Arykem Pharmaceuticals',
    description: 'Professional enquiries about dermatology and aesthetic formulations. Connect with our team.',
    url: getCanonicalUrl('/contact'),
  },
  twitter: {
    title: 'Contact Us | Arykem Pharmaceuticals',
    description: 'Professional enquiries about dermatology and aesthetic formulations.',
  },
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
};

const enquiryTypes = [
  {
    icon: Mail,
    title: 'Product Information',
    description: 'Professional enquiries about the Arykem portfolio and formulations.',
  },
  {
    icon: Phone,
    title: 'Professional Enquiries',
    description: 'For dermatology, aesthetics, and healthcare professional conversations.',
  },
  {
    icon: Send,
    title: 'Business Enquiries',
    description: 'Appropriate corporate and business communication.',
  },
  {
    icon: Mail,
    title: 'General Enquiries',
    description: 'Other company-related questions and information requests.',
  },
];

export default function ContactPage() {

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container">
          <div className="max-w-4xl">
            <Reveal>
              <span className="label text-[var(--botanical)]">
                CONTACT ARYKEM
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display text-[var(--charcoal)] mt-6 mb-8">
                Start a professional conversation
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="body-large text-[var(--medium-grey)] max-w-3xl">
                We welcome enquiries from healthcare professionals, business partners, 
                and those seeking professional information about Arykem Pharmaceuticals 
                and our dermatology and aesthetic portfolio.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enquiry Pathways */}
      <section className="section bg-[var(--ivory)]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <Reveal>
              <SectionHeading
                label="How Can We Help"
                title="Professional enquiry pathways"
                subtitle="Connect with Arykem for relevant professional conversations."
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {enquiryTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Reveal key={type.title} delay={0.1 * index}>
                  <div className="p-8 bg-[var(--warm-white)] border border-[var(--soft-grey)]">
                    <Icon size={32} className="text-[var(--botanical)] mb-4" />
                    <h3 className="text-xl font-medium text-[var(--charcoal)] mb-3">
                      {type.title}
                    </h3>
                    <p className="body-small text-[var(--medium-grey)]">
                      {type.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section bg-[var(--warm-white)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Corporate Information */}
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <div>
                  <h2 className="h2 text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
                    Corporate Information
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-[var(--charcoal)] mb-2">
                        ARYKEM PHARMACEUTICALS PRIVATE LIMITED
                      </h3>
                      <p className="body-small text-[var(--medium-grey)]">
                        Active, Unlisted Private Company
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[var(--soft-grey)] space-y-4">
                      <div>
                        <span className="label text-[var(--medium-grey)]">CIN</span>
                        <p className="body text-[var(--charcoal)] mt-1">U51101UP2013PTC059850</p>
                      </div>

                      <div>
                        <span className="label text-[var(--medium-grey)]">INCORPORATED</span>
                        <p className="body text-[var(--charcoal)] mt-1">01 October 2013</p>
                      </div>

                      <div>
                        <span className="label text-[var(--medium-grey)]">REGISTERED OFFICE</span>
                        <div className="flex items-start gap-3 mt-2">
                          <MapPin size={20} className="text-[var(--botanical)] flex-shrink-0 mt-1" />
                          <div>
                            <p className="body text-[var(--charcoal)]">Lucknow</p>
                            <p className="body text-[var(--charcoal)]">Uttar Pradesh, India</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <span className="label text-[var(--medium-grey)]">ROC</span>
                        <p className="body text-[var(--charcoal)] mt-1">Kanpur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-8 border-t border-[var(--soft-grey)]">
                  <p className="body-small text-[var(--medium-grey)]">
                    For professional enquiries, please use the contact form or explore 
                    our product portfolio and professional resources.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <Reveal delay={0.3}>
                <div className="p-8 lg:p-10 bg-[var(--ivory)] border border-[var(--soft-grey)]">
                  <h2 className="h2 text-[var(--charcoal)] mb-6 font-[var(--font-cormorant)]">
                    Send an Enquiry
                  </h2>

                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="section bg-[var(--charcoal)] text-[var(--ivory)]">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <h2 className="h1 text-[var(--ivory)] mb-6 font-[var(--font-cormorant)]">
              Have a professional enquiry?
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-[var(--ivory)]/70 mb-8">
              Explore our portfolio and professional resources while we work on 
              connecting our contact channels.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/products" size="lg">
                View Products
              </Button>
              <Button 
                href="/professionals" 
                variant="ghost"
                size="lg"
                className="text-[var(--ivory)] border-2 border-[var(--ivory)]/20 hover:bg-[var(--ivory)]/10 hover:border-[var(--ivory)]/40"
              >
                Professional Resources
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
