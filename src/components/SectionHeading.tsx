import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={cn('mb-8 max-w-3xl', className)}>
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p> : null}
      <h2 className={cn('text-3xl font-bold tracking-tight text-ink md:text-4xl', titleClassName)}>{title}</h2>
      {description ? <p className={cn('mt-3 text-base text-slate-600 md:text-lg', descriptionClassName)}>{description}</p> : null}
    </div>
  );
}
