import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function ProductCard({ 
  title, 
  category,
  description,
  image,
  href,
  className 
}) {
  return (
    <Link 
      href={href}
      className={cn(
        'group block transition-all duration-500',
        className
      )}
    >
      {/* Premium Product Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white border border-[var(--warm-grey)] transition-colors group-hover:border-[var(--botanical)]">
        {image && (
          <Image
            src={image}
            alt={`${title} — Arykem Pharmaceuticals`}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      
      {/* Product Information */}
      <div className="mt-6 space-y-2.5">
        {category && (
          <span className="label uppercase tracking-wider text-[var(--medium-grey)]">
            {category}
          </span>
        )}
        <h3 className="h3 text-[var(--charcoal)] transition-colors group-hover:text-[var(--botanical)]">
          {title}
        </h3>
        {description && (
          <p className="body text-[var(--medium-grey)] line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
