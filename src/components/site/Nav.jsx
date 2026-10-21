import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS, STUDIO } from '@/lib/content';
import useSectionNav from '@/hooks/useSectionNav';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const goTo = useSectionNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const go = (id) => {
    setOpen(false);
    goTo(id);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled ? 'border-border bg-background/80 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <div
          className={`container-rv flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? 'h-16' : 'h-20 md:h-24'
          }`}
        >
          <Link to="/" className="font-display text-sm font-semibold uppercase tracking-[0.42em] text-foreground">
            {STUDIO.name}
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`group relative label-mono transition-colors duration-300 ${
                    pathname === item.path ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-signal transition-all duration-300 ${
                      pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => go(item.id)}
                  className="group relative label-mono text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                </button>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/start-a-project"
              className="group hidden items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-white lg:inline-flex"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:border-foreground/60 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="container-rv flex h-full flex-col pb-10 pt-24">
              <nav aria-label="Mobile" className="flex flex-col">
                {NAV_LINKS.map((item, i) =>
                  item.path ? (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                      className="border-b border-border"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-5 text-left"
                      >
                        <span className="font-display text-[2rem] font-medium uppercase leading-none tracking-[-0.02em] text-foreground">
                          {item.label}
                        </span>
                        <span className="label-mono text-muted-foreground/60">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.button
                      key={item.label}
                      type="button"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                      onClick={() => go(item.id)}
                      className="flex items-baseline justify-between border-b border-border py-5 text-left"
                    >
                      <span className="font-display text-[2rem] font-medium uppercase leading-none tracking-[-0.02em] text-foreground">
                        {item.label}
                      </span>
                      <span className="label-mono text-muted-foreground/60">0{i + 1}</span>
                    </motion.button>
                  ),
                )}
              </nav>

              <div className="mt-auto pt-10">
                <Link
                  to="/start-a-project"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border border-foreground bg-foreground px-6 py-5 label-mono text-background"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-6 label-mono text-muted-foreground/60">
                  {STUDIO.name} / {STUDIO.discipline}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}