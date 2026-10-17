import { useToggle } from "../../../stage/hooks";
import c from "../markup.module.css";

const SCRIBBLE = 'M3 10L97 4 5 16 97 10 7 22 95 16 9 24 93 20';

export function ScribbleOut() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <span className={c.para}>Please do not <span className={c.scrib} data-on={on}>mention the belt<svg viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d={SCRIBBLE} /></svg></span> again.</span>
    </button>
  );
}
