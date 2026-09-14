import { siteConfig, getCanonicalUrl } from '@/lib/config';

export const metadata = {
  title: 'Product Catalogue | Dermatology, Aesthetics & Clinical Wellness',
  description: 'Explore the Arykem Pharmaceuticals product catalogue covering dermatology, aesthetics, antioxidant nutrition, glutathione IV therapy, skincare and clinical wellness products.',
  openGraph: {
    title: 'Arykem Product Catalogue | Dermatology, Aesthetics & Clinical Wellness',
    description: 'Explore the Arykem Pharmaceuticals product catalogue covering dermatology, aesthetics, antioxidant nutrition, glutathione IV therapy, skincare and clinical wellness products.',
    url: getCanonicalUrl('/catalogue'),
    type: 'website',
  },
  twitter: {
    title: 'Arykem Product Catalogue | Dermatology, Aesthetics & Clinical Wellness',
    description: 'Professional product catalogue for healthcare practitioners.',
  },
  alternates: {
    canonical: getCanonicalUrl('/catalogue'),
  },
};

export default function CatalogueLayout({ children }) {
  return children;
}
