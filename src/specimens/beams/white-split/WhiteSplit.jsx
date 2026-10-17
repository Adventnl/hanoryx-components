import c from "../beams.module.css";
import { cx } from "../shared";

/* 29 */ export function WhiteSplit() {
  return (
    <button type="button" className={cx(c.sw, c.prism)} aria-label="A prism that splits white light; hover or focus to widen it">
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true">
        <path d="M0 34H40" className={c.white} />
        <path d="M40 22L54 46H26Z" className={c.glass} transform="translate(8 -2)" />
        {['#ff4d4d', '#ff9a4d', '#ffe14d', '#6ee7b7', '#60a5fa', '#c084fc'].map((col, k) => <path key={col} d="M56 34L110 34" stroke={col} className={c.fan} style={{ '--k': k - 2.5 }} />)}
      </svg>
    </button>
  );
}
