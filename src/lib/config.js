// Site Configuration for Arykem Pharmaceuticals
// Centralized metadata and SEO configuration

export const siteConfig = {
  // Site Identity
  name: 'Arykem Pharmaceuticals Private Limited',
  shortName: 'Arykem Pharmaceuticals',
  tagline: 'Dermatology | Aesthetics | Skin & Wellness Science',
  
  // Legal Information
  legal: {
    cin: 'U51101UP2013PTC059850',
    incorporated: '01 October 2013',
    registeredOffice: 'Lucknow, Uttar Pradesh, India',
    roc: 'Kanpur',
  },
  
  // URLs - Using environment variable with fallback
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arykem.com',
  
  // SEO Defaults
  description: 'Premium science-driven formulations for dermatology, aesthetics, and skin health. Arykem Pharmaceuticals delivers clinical excellence through nutraceuticals, IV nutrition, and dermatological solutions.',
  keywords: [
    'dermatology',
    'aesthetics',
    'skin health',
    'pharmaceutical',
    'aesthetic medicine',
    'collagen',
    'glutathione',
    'nutraceuticals',
    'IV nutrition',
    'skin wellness',
    'antioxidants',
    'dermatological solutions',
  ],
  
  // Open Graph Defaults
  ogImage: '/images/brand/arykem-logo.png',
  ogType: 'website',
  
  // Twitter/X
  twitterCard: 'summary_large_image',
  
  // Locale
  locale: 'en_US',
  
  // Contact (only include if verified)
  // email: '', // Add when available
  // phone: '', // Add when available
};

// Helper function to generate canonical URL
export function getCanonicalUrl(path = '') {
  const baseUrl = siteConfig.url.replace(/\/$/, ''); // Remove trailing slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// Helper function to generate absolute URL for images
export function getAbsoluteUrl(path) {
  if (path.startsWith('http')) return path;
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
