'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import { insights } from '@/data/insights';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Keyboard shortcut to open search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Search logic with intelligent suggestions using useMemo
  const suggestions = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const searchQuery = query.toLowerCase();
    const results = [];

    // Search products (prioritize priority 1)
    const productResults = products
      .filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery) ||
        product.shortDescription.toLowerCase().includes(searchQuery)
      )
      .sort((a, b) => {
        // Sort by priority first, then by relevance
        if (a.priority !== b.priority) {
          return a.priority - b.priority;
        }
        // Exact name match comes first
        const aNameMatch = a.name.toLowerCase().startsWith(searchQuery);
        const bNameMatch = b.name.toLowerCase().startsWith(searchQuery);
        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;
        return 0;
      })
      .slice(0, 6)
      .map(product => ({
        type: 'product',
        id: product.id,
        title: product.name,
        subtitle: product.category,
        description: product.shortDescription,
        url: `/products/${product.slug}`,
        priority: product.priority,
      }));

    results.push(...productResults);

    // Search insights
    const insightResults = insights
      .filter(insight =>
        insight.title.toLowerCase().includes(searchQuery) ||
        insight.category.toLowerCase().includes(searchQuery) ||
        insight.excerpt.toLowerCase().includes(searchQuery)
      )
      .slice(0, 4)
      .map(insight => ({
        type: 'insight',
        id: insight.id,
        title: insight.title,
        subtitle: insight.category,
        description: insight.excerpt,
        url: `/insights/${insight.slug}`,
      }));

    results.push(...insightResults);

    // Add page suggestions
    const pages = [
      { title: 'Home', url: '/', keywords: ['home', 'main', 'landing'] },
      { title: 'Products', url: '/products', keywords: ['products', 'portfolio', 'formulations'] },
      { title: 'Science', url: '/science', keywords: ['science', 'research', 'scientific'] },
      { title: 'Insights', url: '/insights', keywords: ['insights', 'articles', 'blog'] },
      { title: 'For Professionals', url: '/professionals', keywords: ['professionals', 'healthcare', 'doctors'] },
      { title: 'Catalogue', url: '/catalogue', keywords: ['catalogue', 'catalog', 'brochure', 'download'] },
      { title: 'About', url: '/about', keywords: ['about', 'company', 'arykem'] },
      { title: 'Contact', url: '/contact', keywords: ['contact', 'reach', 'email', 'phone'] },
    ];

    const pageResults = pages
      .filter(page =>
        page.title.toLowerCase().includes(searchQuery) ||
        page.keywords.some(keyword => keyword.includes(searchQuery))
      )
      .slice(0, 2)
      .map(page => ({
        type: 'page',
        id: page.url,
        title: page.title,
        subtitle: 'Page',
        url: page.url,
      }));

    results.push(...pageResults);

    return results.slice(0, 10);
  }, [query]);

  const handleResultClick = (url) => {
    router.push(url);
    setIsOpen(false);
    setQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleResultClick(suggestions[0].url);
    }
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--medium-grey)] bg-[var(--warm-white)] hover:bg-[var(--soft-grey)] border border-[var(--soft-grey)] rounded-sm transition-colors"
        aria-label="Open search"
      >
        <Search size={18} />
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden md:inline-flex items-center px-2 py-0.5 text-xs bg-[var(--ivory)] border border-[var(--soft-grey)] rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[var(--charcoal)]/60 backdrop-blur-sm animate-fadeIn">
          <div
            ref={searchRef}
            className="w-full max-w-2xl bg-[var(--ivory)] border border-[var(--soft-grey)] rounded-sm shadow-2xl animate-slideDown"
          >
            {/* Search Input */}
            <form onSubmit={handleSubmit} className="relative border-b border-[var(--soft-grey)]">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--medium-grey)]"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, insights, or pages..."
                className="w-full pl-12 pr-12 py-4 text-lg bg-transparent text-[var(--charcoal)] placeholder:text-[var(--medium-grey)] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                  setSuggestions([]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--medium-grey)] hover:text-[var(--charcoal)] transition-colors"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </form>

            {/* Search Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query && suggestions.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-[var(--medium-grey)]">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-sm text-[var(--medium-grey)] mt-2">
                    Try searching for products like &ldquo;Collagen&rdquo; or &ldquo;X-GLUTA&rdquo;
                  </p>
                </div>
              )}

              {suggestions.length > 0 && (
                <div className="py-2">
                  {suggestions.map((result, index) => (
                    <button
                      key={`${result.type}-${result.id}`}
                      onClick={() => handleResultClick(result.url)}
                      className="w-full px-6 py-4 text-left hover:bg-[var(--warm-white)] transition-colors border-b border-[var(--soft-grey)] last:border-b-0 group"
                    >
                      <div className="flex items-start gap-4">
                        {/* Type Indicator */}
                        <div className="flex-shrink-0 mt-1">
                          {result.type === 'product' && (
                            <div className="w-10 h-10 rounded-sm bg-[var(--botanical)]/10 flex items-center justify-center">
                              <span className="text-[var(--botanical)] font-medium text-sm">P</span>
                            </div>
                          )}
                          {result.type === 'insight' && (
                            <div className="w-10 h-10 rounded-sm bg-[var(--charcoal)]/10 flex items-center justify-center">
                              <span className="text-[var(--charcoal)] font-medium text-sm">A</span>
                            </div>
                          )}
                          {result.type === 'page' && (
                            <div className="w-10 h-10 rounded-sm bg-[var(--medium-grey)]/10 flex items-center justify-center">
                              <span className="text-[var(--medium-grey)] font-medium text-sm">→</span>
                            </div>
                          )}
                        </div>

                        {/* Result Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-[var(--charcoal)] group-hover:text-[var(--botanical)] transition-colors">
                              {result.title}
                            </h4>
                            {result.priority === 1 && result.type === 'product' && (
                              <span className="px-2 py-0.5 text-xs font-medium text-[var(--botanical)] bg-[var(--botanical)]/10 rounded">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[var(--medium-grey)] mb-1">
                            {result.subtitle}
                          </p>
                          {result.description && (
                            <p className="text-sm text-[var(--medium-grey)] line-clamp-1">
                              {result.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Tips */}
              {!query && (
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-[var(--charcoal)] mb-3">
                      Featured Products
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {products.filter(p => p.priority === 1).slice(0, 4).map(product => (
                        <button
                          key={product.id}
                          onClick={() => handleResultClick(`/products/${product.slug}`)}
                          className="px-3 py-2 text-left text-sm text-[var(--charcoal)] bg-[var(--warm-white)] hover:bg-[var(--soft-grey)] rounded-sm transition-colors"
                        >
                          {product.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--soft-grey)]">
                    <p className="text-xs text-[var(--medium-grey)]">
                      <span className="font-medium">Tip:</span> Use{' '}
                      <kbd className="px-1.5 py-0.5 bg-[var(--warm-white)] border border-[var(--soft-grey)] rounded text-xs">
                        ⌘K
                      </kbd>{' '}
                      to quickly open search from anywhere
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
