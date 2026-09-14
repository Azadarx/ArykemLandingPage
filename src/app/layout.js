import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductChatSupport from "@/components/ui/ProductChatSupport";
import { siteConfig, getCanonicalUrl, getAbsoluteUrl } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} - Premium Dermatology & Aesthetic Medicine`,
      },
    ],
  },
  
  // Twitter/X
  twitter: {
    card: siteConfig.twitterCard,
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [getAbsoluteUrl(siteConfig.ogImage)],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      {
        url: '/images/brand/arykem-symbol.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/brand/arykem-symbol.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/brand/arykem-symbol.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/images/brand/arykem-symbol.png',
  },
  
  // Additional
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }) {
  // Organization structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: getAbsoluteUrl('/images/brand/arykem-logo.png'),
    description: siteConfig.description,
    legalName: siteConfig.name,
    foundingDate: siteConfig.legal.incorporated,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ProductChatSupport />
      </body>
    </html>
  );
}
