/** Hand-drawn electric arrow — an original SVG motif, not an icon font glyph. */
export default function HandArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 44 C 34 53, 68 47, 94 27"
        stroke="hsl(var(--electric))"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M81 22 L97 25 L90 40"
        stroke="hsl(var(--electric))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}