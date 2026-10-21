import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import ServiceRow from '@/components/site/ServiceRow';
import { FULL_SERVICES, SERVICES } from '@/lib/content';

export default function Services() {
  const [openIndex, setOpenIndex] = useState(false);

  return (
    <section id="services" className="border-b border-border py-20 md:py-32">
      <div className="container-rv">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="label-mono text-muted-foreground">Services</h2>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                Everything digital. Built properly.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                One studio for the whole product — from the first interface decision to the systems that keep it
                running after launch.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 border-t border-border">
          {SERVICES.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setOpenIndex((v) => !v)}
            aria-expanded={openIndex}
            className="group inline-flex items-center gap-4 border border-border px-6 py-4 label-mono text-foreground transition-colors duration-300 hover:border-signal hover:text-signal"
          >
            {openIndex ? 'Hide full service index' : 'View all services'}
            {openIndex ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
          </button>
          <p className="label-mono text-muted-foreground/50">Scoped per project · Quoted before we start</p>
        </div>

        <AnimatePresence initial={false}>
          {openIndex && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 0.84, 0.24, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-10 grid gap-x-10 gap-y-0 border-t border-border sm:grid-cols-2">
                {FULL_SERVICES.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-5 border-b border-border py-5">
                    <span className="label-mono text-signal">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[0.95rem] text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}