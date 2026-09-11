import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer | Arykem Pharmaceuticals',
  description: 'Medical and professional disclaimer for Arykem Pharmaceuticals',
};

export default function DisclaimerPage() {
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
              Medical & Professional Disclaimer
            </h1>
          </Reveal>

          <div className="space-y-8 text-[var(--charcoal)]">
            <Reveal delay={0.2}>
              <div className="p-6 bg-[var(--ivory)] border-l-4 border-[var(--botanical)]">
                <p className="body">
                  <strong>Important:</strong> This disclaimer is prepared as a structural placeholder 
                  and should be reviewed and updated with Arykem Pharmaceuticals&apos; specific medical 
                  and professional disclaimers before public deployment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Professional and Educational Purpose
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Information provided on this website is intended for professional and educational 
                  purposes. It is not intended as medical advice, diagnosis, or treatment. All content 
                  should be considered in the context of professional clinical judgment and individual 
                  patient assessment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Not Medical Advice
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  The information on this website does not constitute medical advice and should not 
                  be used to diagnose or treat any health condition. Always consult qualified healthcare 
                  professionals for medical advice, diagnosis, and treatment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Professional Use Products
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Certain products presented on this website are intended for use by qualified 
                  healthcare professionals only. Professional products should only be administered 
                  by appropriately trained and licensed practitioners in appropriate clinical settings.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Individual Results May Vary
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Individual responses to nutritional supplements, topical formulations, and 
                  professional treatments vary based on genetics, age, health status, lifestyle, 
                  and numerous other factors. No specific results are guaranteed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Scientific Information
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Scientific information presented is intended to explain biological concepts and 
                  formulation rationale. It should not be interpreted as making specific treatment 
                  claims or guaranteeing particular outcomes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Product Information Accuracy
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  While we strive to ensure accuracy, product formulations and information may change. 
                  Always refer to actual product packaging and consult with healthcare professionals 
                  regarding current product specifications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.9}>
              <div className="space-y-6">
                <h2 className="h2 text-[var(--charcoal)] font-[var(--font-cormorant)]">
                  Healthcare Professional Responsibility
                </h2>
                <p className="body text-[var(--medium-grey)]">
                  Healthcare professionals using Arykem products maintain full responsibility for 
                  their clinical decisions, including product selection, dosing, patient assessment, 
                  and monitoring. Information provided is educational and does not replace professional 
                  clinical judgment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1.0}>
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
