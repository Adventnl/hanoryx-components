import { useToggle } from "../../../stage/hooks";
import c from "../markup.module.css";

const CIRCLE = 'M52 4C24 2 3 12 4 26c1 13 27 16 52 14 29-2 42-11 40-24C94 7 70 3 40 6';

export function HandCircle() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <span className={c.para}>The gates open at <span className={c.circled} data-on={on}>seven<svg viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d={CIRCLE} /></svg></span> sharp.</span>
    </button>
  );
}
