import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { ECOSYSTEM } from '@/lib/content';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-16 md:py-24">
      <div className="container-rv">
        <Reveal>
          <h2 className="text-center font-display text-[clamp(1.9rem,5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            RARE is bigger than one studio.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            RARE DEV is one part of a wider RARE brand ecosystem — separate brands, one standard. Each does its own
            thing, none of them competes, and together they point at the same idea: things made properly.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {ECOSYSTEM.map((brand, i) => {
            const featured = brand.status === 'here';
            const isLabs = brand.status === 'labs';
            const card = (
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-colors duration-500 ${
                  featured ? 'border border-electric/50' : 'border border-white/10 bg-white/[0.04] hover:border-electric/40'
                }`}
                style={
                  featured
                    ? { background: 'linear-gradient(160deg, rgba(20,93,255,0.35), rgba(10,13,20,0.35) 75%)' }
                    : undefined
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-foreground">{brand.name}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest ${
                      featured ? 'bg-white/15 text-white' : 'border border-white/15 text-muted-foreground/60'
                    }`}
                  >
                    {featured ? 'This studio' : isLabs ? 'In build' : 'Coming soon'}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">{brand.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{brand.body}</p>
                {isLabs && (
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-electric">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            );
            return (
              <Reveal key={brand.name} delay={i * 0.05}>
                {isLabs ? (
                  <Link to="/labs" className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-5 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60">For clients</p>
              <p className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground md:text-xl">
                RARE DEV builds technology for clients.
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl border border-electric/40 p-7"
              style={{ background: 'linear-gradient(160deg, rgba(20,93,255,0.35), rgba(10,13,20,0.35) 75%)' }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">For RARE</p>
              <p className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground md:text-xl">
                RARE LABS builds products we own.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}