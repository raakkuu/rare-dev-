const STROKE = '#262A33';
const DIM = '#9BA1AC';
const BRIGHT = '#F2F3F5';
const SIGNAL = '#35E8F5';

const BAR = [30, 54, 42, 72, 96, 60, 84, 38, 66];

function Frame() {
  return <rect x="0.5" y="0.5" width="479" height="299" fill="none" stroke={STROKE} />;
}

/** Corporate website — Nexa */
function NexaVisual() {
  return (
    <>
      <Frame />
      <line x1="0" y1="40" x2="480" y2="40" stroke={STROKE} />
      <rect x="24" y="16" width="52" height="8" fill={BRIGHT} opacity="0.85" />
      {[290, 336].map((x) => (
        <rect key={x} x={x} y="18" width="34" height="5" fill={DIM} opacity="0.5" />
      ))}
      <rect x="392" y="13" width="64" height="14" fill="none" stroke={SIGNAL} strokeOpacity="0.55" />
      <rect x="24" y="76" width="298" height="18" fill={BRIGHT} opacity="0.82" />
      <rect x="24" y="104" width="212" height="18" fill={BRIGHT} opacity="0.45" />
      <rect x="24" y="140" width="124" height="6" fill={DIM} opacity="0.45" />
      {[24, 172, 320].map((x) => (
        <g key={x}>
          <rect x={x} y={182} width={136} height={82} fill="none" stroke={STROKE} />
          <rect x={x + 16} y={198} width={38} height={7} fill={BRIGHT} opacity="0.7" />
          <rect x={x + 16} y={214} width={88} height={4} fill={DIM} opacity="0.45" />
          <rect x={x + 16} y={224} width={64} height={4} fill={DIM} opacity="0.45" />
        </g>
      ))}
    </>
  );
}

/** Storefront — Mono */
function MonoVisual() {
  const tiles = [
    { x: 24, y: 64 },
    { x: 248, y: 64 },
    { x: 24, y: 178 },
    { x: 248, y: 178 },
  ];
  return (
    <>
      <Frame />
      <rect x="24" y="24" width="64" height="8" fill={BRIGHT} opacity="0.85" />
      {[310, 372].map((x) => (
        <rect key={x} x={x} y="20" width="54" height="15" fill="none" stroke={STROKE} />
      ))}
      <rect x="436" y="20" width="20" height="15" fill="none" stroke={SIGNAL} strokeOpacity="0.55" />
      {tiles.map((t) => (
        <g key={`${t.x}-${t.y}`}>
          <rect x={t.x} y={t.y} width={208} height={100} fill="none" stroke={STROKE} />
          <rect x={t.x + 12} y={t.y + 12} width={76} height={76} fill="#14161B" stroke={STROKE} />
          <line x1={t.x + 12} y1={t.y + 88} x2={t.x + 88} y2={t.y + 12} stroke={STROKE} />
          <rect x={t.x + 104} y={t.y + 18} width={62} height={6} fill={BRIGHT} opacity="0.75" />
          <rect x={t.x + 104} y={t.y + 32} width={40} height={4} fill={DIM} opacity="0.5" />
          <rect x={t.x + 104} y={t.y + 50} width={26} height={6} fill={SIGNAL} opacity="0.75" />
          <rect x={t.x + 104} y={t.y + 72} width={44} height={14} fill="none" stroke={STROKE} />
        </g>
      ))}
    </>
  );
}

/** Product dashboard — Orbit */
function OrbitVisual() {
  return (
    <>
      <Frame />
      <rect x="20" y="20" width="86" height="260" fill="none" stroke={STROKE} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="34" y={38 + i * 30} width={i === 1 ? 52 : 38} height="5" fill={i === 1 ? SIGNAL : DIM} opacity={i === 1 ? 0.85 : 0.45} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={122 + i * 112} y="20" width="100" height="46" fill="none" stroke={STROKE} />
          <rect x={134 + i * 112} y="32" width={34} height={9} fill={BRIGHT} opacity="0.8" />
          <rect x={134 + i * 112} y="50" width={50} height={4} fill={DIM} opacity="0.45" />
        </g>
      ))}
      <rect x="122" y="82" width="324" height="118" fill="none" stroke={STROKE} />
      {BAR.map((h, i) => (
        <rect
          key={i}
          x={140 + i * 33}
          y={182 - h}
          width="14"
          height={h}
          fill={i === 4 ? SIGNAL : BRIGHT}
          opacity={i === 4 ? 0.9 : 0.22}
        />
      ))}
      <line x1="140" y1="182" x2="430" y2="182" stroke={STROKE} />
      <rect x="122" y="212" width="324" height="68" fill="none" stroke={STROKE} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="138" y={228 + i * 20} width="46" height="4" fill={DIM} opacity="0.5" />
          <rect x="216" y={228 + i * 20} width="80" height="4" fill={BRIGHT} opacity="0.5" />
          <rect x="360" y={228 + i * 20} width="60" height="4" fill={DIM} opacity="0.35" />
        </g>
      ))}
    </>
  );
}

/** Automation flow — Atlas */
function AtlasVisual() {
  return (
    <>
      <Frame />
      <defs>
        <marker id="rv-atlas-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0 0 L6 3.5 L0 7" fill="none" stroke={STROKE} strokeWidth="1" />
        </marker>
      </defs>
      {[
        { x: 24, y: 44, label: 'trigger' },
        { x: 168, y: 44, label: 'process' },
        { x: 312, y: 44, label: 'route' },
        { x: 168, y: 152, label: 'sync' },
        { x: 312, y: 152, label: 'notify' },
      ].map((n) => (
        <g key={n.label}>
          <rect x={n.x} y={n.y} width="96" height="42" fill="#101012" stroke={STROKE} />
          <text x={n.x + 12} y={n.y + 26} fill={DIM} fontSize="9" letterSpacing="1.4" fontFamily="var(--font-mono)">
            {n.label.toUpperCase()}
          </text>
        </g>
      ))}
      <line x1="120" y1="65" x2="166" y2="65" stroke={STROKE} markerEnd="url(#rv-atlas-arrow)" />
      <line x1="264" y1="65" x2="310" y2="65" stroke={STROKE} markerEnd="url(#rv-atlas-arrow)" />
      <line x1="216" y1="86" x2="216" y2="150" stroke={STROKE} markerEnd="url(#rv-atlas-arrow)" />
      <line x1="264" y1="173" x2="310" y2="173" stroke={STROKE} markerEnd="url(#rv-atlas-arrow)" />
      <line x1="312" y1="65" x2="410" y2="65" stroke={SIGNAL} strokeOpacity="0.6" className="rv-flow" />
      <line x1="24" y1="228" x2="456" y2="228" stroke={STROKE} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="30" cy={248 + i * 20} r="2.5" fill={i === 0 ? SIGNAL : DIM} opacity={i === 0 ? 1 : 0.5} />
          <rect x="46" y={245 + i * 20} width="120" height="4" fill={DIM} opacity="0.45" />
          <rect x="186" y={245 + i * 20} width="64" height="4" fill={BRIGHT} opacity="0.4" />
        </g>
      ))}
    </>
  );
}

const VARIANTS = { nexa: NexaVisual, mono: MonoVisual, orbit: OrbitVisual, atlas: AtlasVisual };

/** Code-drawn interface previews — replaceable with real project imagery. */
export default function ProjectVisual({ variant, label = 'Concept project' }) {
  const Visual = VARIANTS[variant] ?? NexaVisual;
  return (
    <div className="relative aspect-[8/5] w-full overflow-hidden bg-surface/40">
      <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
        <Visual />
      </svg>
      <span className="label-mono absolute left-4 top-4 text-muted-foreground/50">{label}</span>
    </div>
  );
}