import { CAPABILITIES } from '@/lib/content';

/** Credential strip — a quiet marquee of what the studio builds. */
export default function HeroRail() {
  const items = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <div className="relative overflow-hidden border-t border-border" aria-hidden="true">
      <div className="marquee-track items-center py-5">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-8 pr-8">
            <span className="label-mono text-muted-foreground/70">{item}</span>
            <span className="h-1 w-1 bg-electric/80" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}