import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, STUDIO } from '@/lib/content';
import useSectionNav from '@/hooks/useSectionNav';

const SOCIALS = ['LinkedIn', 'X', 'Instagram'];

export default function Footer() {
  const goTo = useSectionNav();

  return (
    <footer className="pt-16 md:pt-20">
      <div className="container-rv">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-semibold uppercase tracking-[0.3em] text-foreground">
              {STUDIO.name}
            </p>
            <p className="mt-4 label-mono text-muted-foreground/70">{STUDIO.discipline}</p>
            <p className="mt-8 max-w-xs leading-relaxed text-muted-foreground">
              Building websites, platforms, and intelligent systems for businesses that want to be remembered.
            </p>
            <Link
              to="/about#ecosystem"
              className="label-mono mt-4 inline-block text-muted-foreground/60 transition-colors duration-300 hover:text-signal"
            >
              Part of the RARE ecosystem
            </Link>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label-mono text-muted-foreground/50">Navigate</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((item) =>
                item.path ? (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-sm text-foreground/85 transition-colors duration-300 hover:text-signal"
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => goTo(item.id)}
                      className="text-sm text-foreground/85 transition-colors duration-300 hover:text-signal"
                    >
                      {item.label}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label-mono text-muted-foreground/50">Contact</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/start-a-project" className="text-sm text-foreground/85 transition-colors duration-300 hover:text-signal">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/start-a-project" className="text-sm text-foreground/85 transition-colors duration-300 hover:text-signal">
                  Start a Project
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground/50">Email — coming soon</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label-mono text-muted-foreground/50">Follow</h3>
            <ul className="mt-6 space-y-3">
              {SOCIALS.map((name) => (
                <li key={name} className="label-mono text-muted-foreground/40">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground/40">Profiles being set up.</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-muted-foreground/50">© 2026 {STUDIO.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 label-mono text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}