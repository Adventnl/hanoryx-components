import c from "../markup.module.css";

const TICKS = [['Belt wound', true], ['Gates open', true], ['Tea served', false], ['List printed', true]];

export function TickMargin() {
  return (
    <div className={c.fig} role="img" aria-label="A checklist with ticks and one cross drawn in the margin">
      <ul className={c.ticks}>
        {TICKS.map(([t, ok], i) => (
          <li key={t} style={{ '--i': i }}>
            <svg viewBox="0 0 24 24" aria-hidden="true">{ok ? <path pathLength="1" d="M3 13l6 6L21 5" /> : <path pathLength="1" d="M5 5l14 14M19 5L5 19" />}</svg>
            <span data-ok={ok}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
