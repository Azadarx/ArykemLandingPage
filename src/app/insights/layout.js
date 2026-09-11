import { siteConfig, getCanonicalUrl, getAbsoluteUrl } from '@/lib/config';

export const metadata = {
  title: 'Scientific Insights & Research',
  description: 'Educational insights exploring the intersection of dermatology, aesthetics, and nutritional science. Evidence-conscious perspectives on skin health, collagen biology, antioxidants, and more.',
  openGraph: {
    title: 'Scientific Insights & Research | Arykem Pharmaceuticals',
    description: 'Educational insights exploring skin health, collagen biology, antioxidants, and nutritional science.',
    url: getCanonicalUrl('/insights'),
    images: [
      {
        url: getAbsoluteUrl('/images/science/cellular-structure-final.webp'),
        width: 1200,
        height: 630,
        alt: 'Arykem Pharmaceuticals Scientific Insights',
      },
    ],
  },
  twitter: {
    title: 'Scientific Insights | Arykem Pharmaceuticals',
    description: 'Educational insights on skin health and nutritional science.',
    images: [getAbsoluteUrl('/images/science/cellular-structure-final.webp')],
  },
  alternates: {
    canonical: getCanonicalUrl('/insights'),
  },
};

export default function InsightsLayout({ children }) {
  return children;
}
