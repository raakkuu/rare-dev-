import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

/** Closing CTA — avatars over a blue glow, one clear action. */
export default function CtaAvatars() {
  const avatars = [
    'linear-gradient(135deg,#2B63FF,#7C3AED)',
    'linear-gradient(135deg,#145DFF,#00C2FF)',
    'linear-gradient(135deg,#6E3BFF,#2B63FF)',
    'linear-gradient(135deg,#00C2FF,#2B63FF)',
    'linear-gradient(135deg,#7C3AED,#145DFF)',
    'linear-gradient(135deg,#0A0D14,#2B63FF)',
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-rv">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center md:py-20"
            style={{ background: 'radial-gradient(70% 100% at 50% 100%, rgba(20,93,255,0.4), rgba(8,10,16,0) 75%)' }}
          >
            <div className="flex justify-center -space-x-3">
              {avatars.map((tone, i) => (
                <span
                  key={i}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[11px] font-semibold text-white"
                  style={{ background: tone }}
                >
                  {['SR', 'TK', 'MB', 'AL', 'JD', '20+'][i]}
                </span>
              ))}
            </div>
            <h2 className="mx-auto mt-8 max-w-2xl font-display text-[clamp(1.9rem,5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
              Build Something Worth Remembering
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              From the first brief to launch day, we design, build, and improve the product your customers touch every
              day. Tell us what you&apos;re working on — we&apos;ll take it from there.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/start-a-project"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-white"
              >
                Start a project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/start-a-project?type=Request%20a%20demo"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}