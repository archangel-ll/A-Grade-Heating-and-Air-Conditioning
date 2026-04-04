import { siteContent } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export function ReviewBadgeCluster({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-3 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {siteContent.trustBadges.map((badge) => (
        <div key={badge} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-premium">
          {badge}
        </div>
      ))}
    </div>
  );
}
