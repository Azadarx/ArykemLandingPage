import Link from 'next/link';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-[var(--botanical)] text-[var(--ivory)] hover:bg-[var(--botanical-dark)]',
  secondary: 'bg-transparent border-2 border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--ivory)]',
  ghost: 'bg-transparent text-[var(--charcoal)] hover:bg-[var(--warm-white)]',
};

const buttonSizes = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-10 py-4 text-lg',
};

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  className,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out';
  const variantStyles = buttonVariants[variant] || buttonVariants.primary;
  const sizeStyles = buttonSizes[size] || buttonSizes.md;
  
  const combinedClassName = cn(
    baseStyles,
    variantStyles,
    sizeStyles,
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
