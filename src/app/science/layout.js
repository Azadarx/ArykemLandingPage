import { siteConfig, getCanonicalUrl, getAbsoluteUrl } from '@/lib/config';

export const metadata = {
  title: 'The Science Behind Our Formulations',
  description: 'Explore the scientific foundations of Arykem formulations. Evidence-conscious insights into collagen biology, glutathione, antioxidants, and skin nutrition science.',
  openGraph: {
    title: 'The Science Behind Our Formulations | Arykem Pharmaceuticals',
    description: 'Evidence-conscious insights into collagen biology, glutathione, antioxidants, and skin nutrition.',
    url: getCanonicalUrl('/science'),
    images: [
      {
        url: getAbsoluteUrl('/images/science/collagen-biology.webp'),
        width: 1200,
        height: 630,
        alt: 'Arykem Pharmaceuticals - Science-driven formulations',
      },
    ],
  },
  twitter: {
    title: 'The Science Behind Our Formulations | Arykem',
    description: 'Evidence-conscious insights into skin health science.',
    images: [getAbsoluteUrl('/images/science/collagen-biology.webp')],
  },
  alternates: {
    canonical: getCanonicalUrl('/science'),
  },
};

export default function ScienceLayout({ children }) {
  return children;
}
