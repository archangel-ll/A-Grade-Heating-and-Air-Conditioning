import { cn } from '@/lib/utils';

export function SectionBackdrop({ image, align = 'right', opacity = 'opacity-10' }: { image: string; align?: 'left' | 'right'; opacity?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={cn(
          'absolute inset-y-0 w-[48%] bg-cover bg-center blur-[1px]',
          align === 'right' ? 'right-0' : 'left-0',
          opacity
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={cn('absolute inset-y-0 w-[52%]', align === 'right' ? 'right-0 bg-gradient-to-l from-white via-white/95 to-transparent' : 'left-0 bg-gradient-to-r from-white via-white/95 to-transparent')} />
    </div>
  );
}
