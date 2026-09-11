import Hero from '@/components/sections/Hero';
import BrandIntro from '@/components/sections/BrandIntro';
import ProductUniverse from '@/components/sections/ProductUniverse';
import ScienceSection from '@/components/sections/ScienceSection';
import AestheticsSection from '@/components/sections/AestheticsSection';
import ProfessionalsSection from '@/components/sections/ProfessionalsSection';
import InsightsPreview from '@/components/sections/InsightsPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import { siteConfig, getCanonicalUrl, getAbsoluteUrl } from '@/lib/config';

export const metadata = {
  title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
  description: 'Pioneering dermatology, aesthetics, and science-driven skin health through premium formulations that unite clinical excellence with natural innovation.',
  openGraph: {
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: 'Pioneering dermatology, aesthetics, and science-driven skin health through premium formulations that unite clinical excellence with natural innovation.',
    url: getCanonicalUrl('/'),
    images: [
      {
        url: getAbsoluteUrl('/images/hero/hero-main.webp'),
        width: 1920,
        height: 1080,
        alt: 'Arykem Pharmaceuticals - Science that redefines beauty',
      },
    ],
  },
  twitter: {
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: 'Pioneering dermatology, aesthetics, and science-driven skin health through premium formulations.',
    images: [getAbsoluteUrl('/images/hero/hero-main.webp')],
  },
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductUniverse />
      <ScienceSection />
      <AestheticsSection />
      <ProfessionalsSection />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}
