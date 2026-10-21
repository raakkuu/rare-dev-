import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight } from 'lucide-react';
import useSectionNav from '@/hooks/useSectionNav';
import { STUDIO } from '@/lib/content';

export default function HeroLead() {
  const goTo = useSectionNav();

  return (
    <div className="max-w-xl">
      <p className="text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg">{STUDIO.description}</p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <Link
          to="/start-a-project"
          className="group inline-flex items-center justify-between gap-6 border border-foreground bg-foreground px-6 py-4 label-mono text-background transition-all duration-300 hover:border-signal hover:bg-signal hover:shadow-[0_0_40px_-12px_hsl(var(--signal))] sm:justify-start"
        >
          Start a Project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <button
          type="button"
          onClick={() => goTo('work')}
          className="group inline-flex items-center justify-between gap-6 border border-border px-6 py-4 label-mono text-muted-foreground transition-colors duration-300 hover:border-foreground/60 hover:text-foreground sm:justify-start"
        >
          Explore Our Work
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}