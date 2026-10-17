import c from "../skeletons.module.css";

/* 23 */ export function FlatChart() {
  return (
    <div className={c.flat} role="img" aria-label="Empty chart: no data yet">
      <svg viewBox="0 0 120 50" aria-hidden="true"><path d="M0 40H120" /><path d="M0 10H120M0 25H120" className={c.guide} /></svg>
      <span>No data yet</span>
    </div>
  );
}
