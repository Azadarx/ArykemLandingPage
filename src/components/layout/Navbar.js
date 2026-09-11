'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import GlobalSearch from '@/components/ui/GlobalSearch';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsMobileMenuOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[var(--ivory)]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative flex items-center group"
            >
              {/* Desktop Logo */}
              <div className="hidden sm:block">
                <Image
                  src="/images/brand/arykem-logo.png"
                  alt="Arykem Pharmaceuticals"
                  width={400}
                  height={100}
                  priority
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-opacity group-hover:opacity-80"
                />
              </div>
              {/* Mobile Symbol */}
              <div className="block sm:hidden">
                <Image
                  src="/images/brand/arykem-symbol.png"
                  alt="Arykem"
                  width={64}
                  height={64}
                  priority
                  className="h-14 w-14 object-contain transition-opacity group-hover:opacity-80"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors relative py-2',
                      isActive
                        ? 'text-[var(--botanical)]'
                        : 'text-[var(--charcoal)] hover:text-[var(--botanical)]'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--botanical)]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Search & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <GlobalSearch />
              <Button href="/products" size="sm">
                Explore Products
              </Button>
            </div>

            {/* Mobile Menu Button & Search */}
            <div className="flex lg:hidden items-center gap-2">
              <GlobalSearch />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[var(--charcoal)] hover:text-[var(--botanical)] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
