import { siteConfig, getCanonicalUrl } from '@/lib/config';

export const metadata = {
  title: 'Product Portfolio',
  description: 'Explore Arykem Pharmaceuticals comprehensive portfolio spanning dermatology, aesthetic nutrition, and professional skin health applications. Science-driven formulations for modern practice.',
  openGraph: {
    title: 'Product Portfolio | Arykem Pharmaceuticals',
    description: 'Science-driven formulations for dermatology, aesthetics, and skin health. Explore nutraceuticals, IV nutrition, and dermatological solutions.',
    url: getCanonicalUrl('/products'),
  },
  twitter: {
    title: 'Product Portfolio | Arykem Pharmaceuticals',
    description: 'Science-driven formulations for dermatology, aesthetics, and skin health.',
  },
  alternates: {
    canonical: getCanonicalUrl('/products'),
  },
};

export default function ProductsLayout({ children }) {
  return children;
}
