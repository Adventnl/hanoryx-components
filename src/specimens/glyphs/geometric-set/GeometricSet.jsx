import { useHot } from "../../../stage/chartKit";
import c from "../glyphs.module.css";

export function GeometricSet() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Geometric letters, hover to show how they are built" {...bind}>
      <svg className={c.geo} viewBox="0 0 150 56" aria-hidden="true">
        <g className={c.geoLetters}>
          <circle cx="20" cy="28" r="18" />
          <path d="M52 10V46H60A18 18 0 0 0 60 10Z" />
          <path d="M96 46V10H104A9 9 0 0 1 104 28H96" />
          <path d="M126 10V46M126 10H134A8 8 0 0 1 134 26H126M126 26H136A10 10 0 0 1 136 46H126" />
        </g>
        <g className={c.geoBuild}>
          <circle cx="20" cy="28" r="18" /><circle cx="20" cy="28" r="1.4" />
          <circle cx="60" cy="28" r="18" /><circle cx="104" cy="19" r="9" />
          <circle cx="134" cy="18" r="8" /><circle cx="136" cy="36" r="10" />
          <path d="M0 10H150M0 46H150" />
        </g>
      </svg>
    </button>
  );
}
