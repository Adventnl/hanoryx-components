import { useHot } from "../../../stage/chartKit";
import c from "../passes.module.css";
import { perf } from "../shared";

/* 11 */
export function PostageStamp() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={c.pg} data-hot={hot} aria-label="Postage stamp: hover, tap or press Enter to postmark it" {...bind}>
      <svg className={c.pgStamp} viewBox="0 0 120 150" aria-hidden="true">
        <path d={perf(120, 150, 3.3, 9, 11)} fill="#eeeef1" />
        <rect x="11" y="11" width="98" height="128" fill="#0b0c0e" />
        <circle cx="60" cy="86" r="30" fill="#ff3333" />
        <path d="M18 86h84" stroke="#0b0c0e" strokeWidth="2.4" />
        <path d="M24 96h72M30 106h60M38 116h44" stroke="#0b0c0e" strokeWidth="2.4" />
        <text x="60" y="34" textAnchor="middle" fontSize="8" letterSpacing="2.4" fill="#eeeef1">FIRST CLASS</text>
        <text x="20" y="130" fontSize="15" fill="#eeeef1">1.00</text>
        <text x="100" y="130" textAnchor="end" fontSize="6" letterSpacing="1.6" fill="#eeeef1">HNX</text>
      </svg>
      <svg className={c.pgMark} viewBox="0 0 140 70" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="36" cy="35" r="27" />
        <circle cx="36" cy="35" r="20" strokeWidth="0.8" />
        <text x="36" y="33" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none">14 OCT</text>
        <text x="36" y="42" textAnchor="middle" fontSize="5" fill="currentColor" stroke="none">HNX POST</text>
        <path d="M70 18q9-7 18 0t18 0t18 0M70 30q9-7 18 0t18 0t18 0M70 42q9-7 18 0t18 0t18 0M70 54q9-7 18 0t18 0t18 0" />
      </svg>
    </button>
  );
}
