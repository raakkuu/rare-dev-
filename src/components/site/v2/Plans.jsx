import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

const SETS = {
  websites: [
    {
      name: 'Business Website',
      price: '৳19,999',
      note: 'one-time · from',
      desc: 'A sharp, fast website that makes your business look credible and turns visitors into enquiries.',
      type: 'Websites',
      features: ['Custom design', 'Responsive on all devices', 'Contact & enquiry forms', 'Basic SEO setup', 'Delivered in weeks'],
      featured: false,
    },
    {
      name: 'E-Commerce',
      price: '৳49,999',
      note: 'one-time · from',
      desc: 'A complete online store — catalogue, checkout, payments, and order operations, ready to sell.',
      type: 'E-Commerce',
      features: ['Everything in Business', 'Full product catalogue', 'Checkout & payments', 'Order management', 'Integrations & support'],
      featured: true,
    },
  ],
  software: [
    {
      name: 'Web Applications',
      price: '৳75,000',
      note: 'one-time · from',
      desc: 'Dashboards, portals, and custom business systems built around your workflow.',
      type: 'Web Applications',
      features: ['Dashboards & portals', 'Role-based access', 'Workflow automation', 'API integrations', 'Performance & security'],
      featured: false,
    },
    {
      name: 'Custom Software',
      price: 'Scoped',
      note: 'per project',
      desc: 'SaaS products, AI systems, and complex platforms — scoped and quoted individually.',
      type: 'SaaS & Software',
      features: ['SaaS & AI products', 'Architecture for scale', 'Fixed written quote', 'Dedicated team', 'Monthly support option'],
      featured: true,
    },
  ],
};

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 md:p-9 ${
        plan.featured
          ? 'border border-electric/50 shadow-[0_30px_90px_rgba(20,93,255,0.25)]'
          : 'border border-white/10 bg-white/[0.04]'
      }`}
      style={
        plan.featured
          ? { background: 'linear-gradient(160deg, rgba(20,93,255,0.4), rgba(10,13,20,0.35) 70%)' }
          : undefined
      }
    >
      {plan.featured && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-electric/30 to-transparent" />
      )}
      <span className="relative inline-block w-fit rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-foreground">
        {plan.name}
      </span>
      <div className="relative mt-6 flex items-end gap-2">
        <p className="font-display text-4xl font-semibold tracking-[-0.02em] text-foreground md:text-5xl">
          {plan.price}
        </p>
        <p className="pb-1.5 text-xs text-muted-foreground">{plan.note}</p>
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{plan.desc}</p>
      <Link
        to={`/start-a-project?type=${encodeURIComponent(plan.type)}`}
        className={`group relative mt-7 inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300 ${
          plan.featured
            ? 'bg-foreground text-background hover:bg-white'
            : 'border border-white/15 text-foreground hover:border-electric hover:text-electric'
        }`}
      >
        {plan.featured ? 'Get started' : 'Request a quote'}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
      <p className="relative mt-7 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
        What&apos;s included
      </p>
      <ul className="relative mt-4 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Plans — card-based pricing with a functional audience toggle. */
export default function Plans() {
  const [set, setSet] = useState('websites');

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[50rem] max-w-full -translate-x-1/2 opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 0%, rgba(20,93,255,0.35), rgba(8,10,16,0) 70%)' }}
      />
      <div className="container-rv">
        <Reveal>
          <h2 className="text-center font-display text-[clamp(1.9rem,5vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            Plans For Every Stage
            <br />
            <span className="text-muted-foreground/70">Of Your Business</span>
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mx-auto mt-9 flex w-fit items-center rounded-full border border-white/10 bg-white/5 p-1">
            {[
              ['websites', 'Websites'],
              ['software', 'Software & AI'],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSet(key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  set === key ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            {SETS[set].map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-10 text-center text-xs text-muted-foreground/70">
            Fixed written quote before work starts · no hourly surprises · ongoing support available
          </p>
        </Reveal>
      </div>
    </section>
  );
}