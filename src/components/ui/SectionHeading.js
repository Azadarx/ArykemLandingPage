import { cn } from '@/lib/utils';

export default function SectionHeading({ 
  label,
  title, 
  subtitle, 
  align = 'left',
  className 
}) {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col gap-4', alignmentClass, className)}>
      {label && (
        <span className="label text-[var(--medium-grey)]">
          {label}
        </span>
      )}
      {title && (
        <h2 className="h2 text-[var(--charcoal)] max-w-3xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="body-large text-[var(--medium-grey)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
