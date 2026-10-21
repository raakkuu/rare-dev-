const NODES = [
  { x: 24, y: 30, w: 232, h: 48, label: 'Client interface', meta: 'web · store · application' },
  { x: 24, y: 126, w: 232, h: 48, label: 'Application logic', meta: 'workflows · rules · apis' },
  { x: 24, y: 222, w: 232, h: 48, label: 'Data layer', meta: 'records · search · storage' },
  { x: 328, y: 30, w: 208, h: 48, label: 'Delivery', meta: 'hosting · performance' },
  { x: 328, y: 126, w: 208, h: 48, label: 'AI & automation', meta: 'agents · pipelines' },
  { x: 328, y: 222, w: 208, h: 48, label: 'Integrations', meta: 'payments · services' },
];

const SPINE = [
  [140, 78, 140, 126],
  [140, 174, 140, 222],
  [256, 54, 328, 54],
  [256, 150, 328, 150],
  [256, 246, 328, 246],
];

/** Engineered interface element for the hero — drawn in code, no assets. */
export default function SystemDiagram() {
  return (
    <figure className="relative w-full border border-border bg-surface/50">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="label-mono text-muted-foreground">System map</span>
        <span className="label-mono text-muted-foreground/60">Fig. 01</span>
      </div>

      <svg viewBox="0 0 560 336" className="h-auto w-full" role="img" aria-label="Diagram of a digital product architecture">
        <defs>
          <pattern id="rv-diagram-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0 L0 0 0 28" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="560" height="336" fill="url(#rv-diagram-grid)" />

        {SPINE.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2A2E38" strokeWidth="1" />
        ))}

        <path d="M140 78 L140 222 L328 246" fill="none" stroke="#35E8F5" strokeWidth="1" opacity="0.7" className="rv-flow" />

        {NODES.map((n) => (
          <g key={n.label}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} fill="#14161B" stroke="#2C2C31" strokeWidth="1" />
            <text x={n.x + 16} y={n.y + 21} fill="#F2F2F2" fontSize="11" letterSpacing="1.4" fontFamily="var(--font-mono)">
              {n.label.toUpperCase()}
            </text>
            <text x={n.x + 16} y={n.y + 37} fill="#8E8E93" fontSize="9.5" fontFamily="var(--font-mono)">
              {n.meta}
            </text>
          </g>
        ))}

        <circle cx="140" cy="54" r="3" fill="#35E8F5" className="rv-dot" />
        <circle cx="140" cy="54" r="7" fill="none" stroke="#35E8F5" strokeWidth="1" opacity="0.35" />
        <circle cx="432" cy="150" r="3" fill="#35E8F5" className="rv-dot" />
        <circle cx="432" cy="150" r="7" fill="none" stroke="#35E8F5" strokeWidth="1" opacity="0.35" />

        <line x1="24" y1="300" x2="536" y2="300" stroke="#2C2C31" strokeWidth="1" />
        {[
          { x: 24, label: 'design' },
          { x: 200, label: 'build' },
          { x: 376, label: 'launch' },
        ].map((step, i) => (
          <g key={step.label}>
            <rect x={step.x} y={314} width={5} height={5} fill="#35E8F5" />
            <text x={step.x + 14} y={319} fill="#8E8E93" fontSize="9.5" letterSpacing="1.6" fontFamily="var(--font-mono)">
              {step.label.toUpperCase()}
            </text>
            {i < 2 && <line x1={step.x + 120} y1={316.5} x2={step.x + 166} y2={316.5} stroke="#2C2C31" strokeWidth="1" />}
          </g>
        ))}
      </svg>

      <figcaption className="border-t border-border px-5 py-3 label-mono text-muted-foreground/60">
        One system — interface, logic, data, and everything it connects to.
      </figcaption>
    </figure>
  );
}