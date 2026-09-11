import Link from 'next/link';
import Image from 'next/image';
import { footerNavigation } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--charcoal)] text-[var(--ivory)]">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link 
              href="/" 
              className="inline-block mb-6 group"
            >
              <Image
                src="/images/brand/arykem-logo.png"
                alt="Arykem Pharmaceuticals"
                width={400}
                height={100}
                className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="body text-[var(--ivory)]/70 max-w-sm mb-6">
              Premium dermatology and aesthetic medicine solutions driven by science and innovation.
            </p>
            <p className="body-small text-[var(--ivory)]/50">
              Arykem Pharmaceuticals Private Limited
              <br />
              CIN: U51101UP2013PTC059850
              <br />
              Incorporated: 01 October 2013
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4 text-[var(--ivory)]">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-small text-[var(--ivory)]/70 hover:text-[var(--botanical-light)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4 text-[var(--ivory)]">Products</h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-small text-[var(--ivory)]/70 hover:text-[var(--botanical-light)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4 text-[var(--ivory)]">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-small text-[var(--ivory)]/70 hover:text-[var(--botanical-light)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="font-medium mb-4 text-[var(--ivory)]">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <Link
                    href={item.href}
                    className="body-small text-[var(--ivory)]/70 hover:text-[var(--botanical-light)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--ivory)]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-small text-[var(--ivory)]/50 text-center md:text-left">
              © {currentYear} Arykem Pharmaceuticals Private Limited. All rights reserved.
            </p>
            <p className="body-small text-[var(--ivory)]/50 text-center md:text-right">
              Registered Office: Lucknow, Uttar Pradesh | RoC: Kanpur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
