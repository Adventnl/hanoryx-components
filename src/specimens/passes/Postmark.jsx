import c from './passes.module.css';

/* 22 */
export function Postmark() {
  return (
    <svg className={c.pm} viewBox="0 0 220 100" role="img" aria-label="A postmark pressed onto the corner of an envelope">
      <defs><path id="pm-ring" d="M60 50m-34 0a34 34 0 1 1 68 0a34 34 0 1 1 -68 0" /></defs>
      <rect className={c.pmPaper} x="2" y="2" width="216" height="96" rx="4" />
      <path className={c.pmAddr} d="M130 80h72M130 88h54" />
      <g className={c.pmInk} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="60" cy="50" r="42" />
        <circle cx="60" cy="50" r="24" strokeWidth="1" />
        <text fontSize="6.2" fill="currentColor" stroke="none"><textPath href="#pm-ring" textLength="208" lengthAdjust="spacing">HANORYX · POST OFFICE · NO. 7 ·</textPath></text>
        <text x="60" y="55" textAnchor="middle" fontSize="17" fill="currentColor" stroke="none">14</text>
        <text x="60" y="65" textAnchor="middle" fontSize="6" letterSpacing="1.4" fill="currentColor" stroke="none">OCT</text>
        <path d="M112 20q8-8 16 0t16 0t16 0t16 0t16 0M112 34q8-8 16 0t16 0t16 0t16 0t16 0M112 48q8-8 16 0t16 0t16 0t16 0t16 0M112 62q8-8 16 0t16 0t16 0t16 0t16 0" />
      </g>
    </svg>
  );
}
