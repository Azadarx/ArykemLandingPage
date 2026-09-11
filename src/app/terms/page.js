import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Arykem Pharmaceuticals',
  description: 'Terms of service for Arykem Pharmaceuticals website',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="section pt-32 md:pt-40 pb-20 bg-gradient-to-b from-[var(--warm-white)] to-[var(--ivory)]">
        <div className="container max-w-4xl">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--medium-grey)] hover:text-[var(--botanical)] transition-colors mb-12 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="display text-[var(--charcoal)] mb-8 font-[var(--font-cormorant)]">
              Terms of Service
            </h1>
          </Reveal>

          <div className="space-y-8 text-[var(--charcoal)]">
            <Reveal delay={0.2}>
              <div className="p-6 bg-[var(--ivory)] border-l-4 border-[var(--botanical)]">
                <p className="body">
                  <strong>Note:</strong> These terms of service are prepared as a structural placeholder 
                  and should be reviewed and updated with Arykem Pharmaceuticals&apos; specific terms and 
                  legal requirements before public deployment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Website Use
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and conditions of this agreement. If you do not agree to these terms, please do not 
                  use this website.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Professional Information
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Information provided on this website is for professional and educational purposes. 
                  It should not replace professional medical advice, diagnosis, or treatment. Always 
                  seek the advice of qualified healthcare professionals with questions regarding 
                  medical conditions or treatments.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Product Information
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Product information presented on this website is subject to change. While we strive 
                  to ensure accuracy, we make no warranties or representations regarding the completeness 
                  or accuracy of information provided.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Intellectual Property
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of Arykem Pharmaceuticals Private Limited and protected by applicable 
                  copyright and intellectual property laws.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Limitation of Liability
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Arykem Pharmaceuticals Private Limited shall not be liable for any direct, indirect, 
                  incidental, consequential, or punitive damages arising from your use of this website 
                  or any information provided herein.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Changes to Terms
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  We reserve the right to modify these terms at any time. Continued use of the website 
                  following any changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.9}>
              <div className="pt-8 border-t border-[var(--soft-grey)]">
                <p className="body-small text-[var(--medium-grey)] italic">
                  Last updated: {new Date().getFullYear()}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
