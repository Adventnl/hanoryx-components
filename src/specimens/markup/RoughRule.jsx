import c from './markup.module.css';

export function RoughRule() {
  return (
    <div className={c.fig}>
      <p className={c.para}>Every <span className={c.rough}>word counts<svg viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M2 7C28 3 62 11 98 4" /><path pathLength="1" d="M4 11C34 8 70 13 96 9" /></svg></span> on this belt.</p>
    </div>
  );
}
