import { useEffect, useRef } from 'react';
import { useLive } from "../../../stage/hooks";
import { usePrefersReducedMotion } from "../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from "../passes.module.css";

/* 9 */
const CUT = 'M20 20H280V100H20Z';

export function CutHere() {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const svg = useRef(null);
  useEffect(() => {
    const el = svg.current;
    if (!el || !el.pauseAnimations) return;
    if (live && !reduced) el.unpauseAnimations(); else el.pauseAnimations();
  }, [live, reduced]);
  return (
    <svg ref={svg} className={c.ch} viewBox="0 0 300 120" role="img" aria-label="A coupon with scissors snipping along its dashed border">
      <rect className={c.chBody} x="12" y="12" width="276" height="96" rx="6" />
      <text className={c.chBig} x="150" y="66" textAnchor="middle">20% off</text>
      <text className={c.chSmall} x="150" y="86" textAnchor="middle">CUT ALONG THE LINE</text>
      <path className={c.chDash} d={CUT} pathLength="1" />
      <path className={c.chCut} d={CUT} pathLength="1">
        <animate attributeName="stroke-dashoffset" from="1" to="0" dur="7s" repeatCount="indefinite" />
      </path>
      <g className={c.chScissors}>
        <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path={CUT} />
        <g className={c.chChop}>
          <path d="M-6 -4 14 2.6M-6 4 14 -2.6" />
          <circle cx="-9" cy="-5.4" r="3.1" />
          <circle cx="-9" cy="5.4" r="3.1" />
        </g>
      </g>
    </svg>
  );
}
