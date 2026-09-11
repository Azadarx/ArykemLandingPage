import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Arykem Pharmaceuticals',
  description: 'Privacy policy for Arykem Pharmaceuticals website',
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </Reveal>

          <div className="space-y-8 text-[var(--charcoal)]">
            <Reveal delay={0.2}>
              <div className="p-6 bg-[var(--ivory)] border-l-4 border-[var(--botanical)]">
                <p className="body">
                  <strong>Note:</strong> This privacy policy is prepared as a structural placeholder 
                  and should be reviewed and updated with Arykem Pharmaceuticals&apos; specific privacy 
                  practices and legal requirements before public deployment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Information Collection
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Arykem Pharmaceuticals Private Limited respects your privacy. This website may 
                  collect certain information when you interact with our services, including when 
                  you contact us through our contact form or navigate our website.
                </p>
                <p className="body text-[var(--medium-grey)]">
                  Information collected may include your name, email address, professional affiliation, 
                  and any other details you voluntarily provide when contacting us or using our services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Use of Information
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Information collected is used to respond to your inquiries, provide information 
                  about our products and services, and improve our website experience. We do not 
                  sell or share your personal information with third parties for marketing purposes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Data Security
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  We implement reasonable security measures to protect your information. However, 
                  no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Cookies
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  This website may use cookies to enhance user experience and analyze website traffic. 
                  You can choose to disable cookies through your browser settings.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Contact Information
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  For questions about this privacy policy or our privacy practices, please contact 
                  us through our contact page.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
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
