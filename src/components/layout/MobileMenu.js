'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation } from '@/data/navigation';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[var(--ivory)] z-[70] shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--soft-grey)]">
                <Link href="/" onClick={onClose}>
                  <Image
                    src="/images/brand/arykem-logo.png"
                    alt="Arykem Pharmaceuticals"
                    width={220}
                    height={52}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 text-[var(--charcoal)] hover:text-[var(--botanical)] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-1">
                  {mainNavigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            'block px-4 py-3 rounded-lg text-lg font-medium transition-colors',
                            isActive
                              ? 'bg-[var(--botanical)] text-[var(--ivory)]'
                              : 'text-[var(--charcoal)] hover:bg-[var(--warm-white)]'
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-[var(--soft-grey)]">
                <Button href="/products" className="w-full justify-center">
                  Explore Products
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
