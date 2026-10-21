import { useState } from 'react';
import Reveal from '@/components/site/Reveal';

const STROKE = '#262A33';
const SURFACE = '#14161B';
const DIM = '#9BA1AC';
const BRIGHT = '#F2F3F5';
const ELECTRIC = '#35E8F5';

const VIEWS = [
  {
    id: 'interface',
    label: 'Interface',
    caption: 'A storefront interface — catalogue, product detail, and a checkout with no friction.',
    stack: ['React front-end', 'Commerce engine', 'Payments'],
  },
  {
    id: 'automation',
    label: 'Automation',
    caption: 'The same product, wired into a pipeline — orders, records, and notifications that run themselves.',
    stack: ['Queues', 'Webhooks', 'Scheduled jobs'],
  },
  {
    id: 'ai',
    label: 'AI layer',
    caption: 'An assistant reading the same data — answering questions and acting in plain language.',
    stack: ['Language model', 'Search', 'Actions'],
  },
];

/** Interface — storefront with a live checkout panel. */
function InterfacePanel() {
  return (
    <svg viewBox="0 0 480 270" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="479" height="269" fill="none" stroke={STROKE} />
      {[24, 180, 336].map((x) => (
        <g key={x}>
          <rect x={x} y="24" width="120" height="86" fill="none" stroke={STROKE} />
          <rect x={x + 10} y="34" width="100" height="50" fill={SURFACE} stroke={STROKE} />
          <rect x={x + 10} y="92" width="56" height="5" fill={BRIGHT} opacity="0.7" />
          <rect x={x + 10} y="102" width="34" height="4" fill={ELECTRIC} opacity="0.8" />
        </g>
      ))}
      <rect x="24" y="128" width="432" height="1" fill={STROKE} />
      <rect x="24" y="150" width="200" height="10" fill={BRIGHT} opacity="0.75" />
      <rect x="24" y="170" width="140" height="6" fill={DIM} opacity="0.5" />
      <rect x="300" y="140" width="156" height="106" fill={SURFACE} stroke={ELECTRIC} strokeOpacity="0.45" />
      <rect x="312" y="154" width="80" height="6" fill={BRIGHT} opacity="0.7" />
      <rect x="312" y="170" width="56" height="4" fill={DIM} opacity="0.5" />
      <line x1="312" y1="188" x2="444" y2="188" stroke={STROKE} />
      <rect x="312" y="198" width="132" height="16" fill="none" stroke={ELECTRIC} strokeOpacity="0.6" />
      <rect x="318" y="203" width="44" height="6" fill={ELECTRIC} opacity="0.85" />
    </svg>
  );
}

/** Automation — an order pipeline running itself. */
function AutomationPanel() {
  const nodes = [
    { x: 30, y: 50, label: 'ORDER' },
    { x: 180, y: 50, label: 'VERIFY' },
    { x: 330, y: 50, label: 'FULFIL' },
    { x: 180, y: 160, label: 'RECORD' },
    { x: 330, y: 160, label: 'NOTIFY' },
  ];
  return (
    <svg viewBox="0 0 480 270" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="479" height="269" fill="none" stroke={STROKE} />
      {nodes.map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={node.y} width="96" height="40" fill={SURFACE} stroke={STROKE} />
          <text x={node.x + 12} y={node.y + 24} fill={DIM} fontSize="10" letterSpacing="1.4" fontFamily="var(--font-mono)">
            {node.label}
          </text>
        </g>
      ))}
      <line x1="126" y1="70" x2="178" y2="70" stroke={STROKE} />
      <line x1="276" y1="70" x2="328" y2="70" stroke={STROKE} />
      <line x1="228" y1="90" x2="228" y2="158" stroke={STROKE} />
      <line x1="276" y1="180" x2="328" y2="180" stroke={STROKE} />
      <line x1="426" y1="70" x2="452" y2="70" stroke={ELECTRIC} strokeOpacity="0.7" className="rv-flow" />
      <line x1="426" y1="180" x2="452" y2="180" stroke={ELECTRIC} strokeOpacity="0.7" className="rv-flow" />
      <circle cx="378" cy="70" r="3" fill={ELECTRIC} className="rv-dot" />
      <circle cx="378" cy="180" r="3" fill={ELECTRIC} className="rv-dot" />
      <text x="24" y="238" fill={DIM} fontSize="9" letterSpacing="2" fontFamily="var(--font-mono)">
        RUNNING · 4 JOBS · 0 FAILURES
      </text>
    </svg>
  );
}

/** AI — an assistant reading live data and acting. */
function AiPanel() {
  return (
    <svg viewBox="0 0 480 270" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="479" height="269" fill="none" stroke={STROKE} />
      <rect x="250" y="28" width="206" height="30" fill={SURFACE} stroke={STROKE} />
      <rect x="262" y="41" width="150" height="5" fill={BRIGHT} opacity="0.6" />
      <rect x="24" y="70" width="300" height="52" fill="none" stroke={ELECTRIC} strokeOpacity="0.5" />
      <rect x="36" y="84" width="220" height="5" fill={BRIGHT} opacity="0.75" />
      <rect x="36" y="98" width="150" height="5" fill={DIM} opacity="0.5" />
      <rect x="290" y="134" width="166" height="30" fill={SURFACE} stroke={STROKE} />
      <rect x="302" y="147" width="110" height="5" fill={BRIGHT} opacity="0.6" />
      <rect x="24" y="176" width="240" height="34" fill="none" stroke={ELECTRIC} strokeOpacity="0.5" />
      <rect x="36" y="190" width="120" height="5" fill={ELECTRIC} opacity="0.85" />
      <rect x="168" y="190" width="70" height="5" fill={DIM} opacity="0.5" />
      <circle cx="36" cy="232" r="3" fill={ELECTRIC} className="rv-dot" />
      <circle cx="48" cy="232" r="3" fill={ELECTRIC} className="rv-dot" style={{ animationDelay: '0.4s' }} />
      <circle cx="60" cy="232" r="3" fill={ELECTRIC} className="rv-dot" style={{ animationDelay: '0.8s' }} />
      <text x="84" y="236" fill={DIM} fontSize="9" letterSpacing="2" fontFamily="var(--font-mono)">
        READING ORDER DATA…
      </text>
    </svg>
  );
}

const PANELS = { interface: InterfacePanel, automation: AutomationPanel, ai: AiPanel };

/** Signature interactive showcase — one product, three layers deep. */
export default function Showcase() {
  const [view, setView] = useState('interface');
  const current = VIEWS.find((v) => v.id === view) ?? VIEWS[0];
  const Panel = PANELS[current.id];

  return (
    <section id="showcase" className="border-b border-border py-20 md:py-32">
      <div className="container-rv">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="label-mono text-muted-foreground">Interactive</h2>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                One product. Three layers deep.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                The way we think about a build: the interface people touch, the systems running underneath, and the
                intelligence layered on top. Switch between them.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="relative lg:col-span-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 -z-10 opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 45%, rgba(20,93,255,0.30), rgba(8,9,11,0) 70%)',
                }}
              />
              <div className="border border-border bg-surface/50">
                <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-electric/70" />
                  </span>
                  <span className="label-mono text-muted-foreground/60">rare.dev — systems view</span>
                  <span className="label-mono ml-auto text-muted-foreground/60">Fig. 02</span>
                </div>

                <div role="tablist" aria-label="System layers" className="flex gap-1 overflow-x-auto border-b border-border px-3 pt-3">
                  {VIEWS.map((v) => (
                    <button
                      key={v.id}
                      role="tab"
                      type="button"
                      aria-selected={view === v.id}
                      onClick={() => setView(v.id)}
                      className={`shrink-0 border border-b-0 px-4 py-3 label-mono transition-colors duration-300 ${
                        view === v.id
                          ? 'border-border bg-background text-foreground'
                          : 'border-transparent text-muted-foreground/60 hover:text-foreground'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>

                <div role="tabpanel" aria-label={`${current.label} layer`} className="relative aspect-[16/9] w-full">
                  <Panel />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-10 lg:col-span-4">
              <div>
                <p className="label-mono text-muted-foreground/50">
                  0{VIEWS.indexOf(current) + 1} / {current.label}
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{current.caption}</p>
              </div>
              <div>
                <h3 className="label-mono text-muted-foreground/50">Stack notes</h3>
                <ul className="mt-4">
                  {current.stack.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-t border-border py-3 text-sm text-foreground/85"
                    >
                      <span className="h-1 w-1 bg-electric" />
                      {item}
                    </li>
                  ))}
                  <li className="border-t border-border" />
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground/60">
                  Every frame here is drawn in code — the same discipline we bring to the products themselves.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}