import c from './wipes.module.css';
import { useWipe } from './shared';

/* 41 */ export function TextMask() {
  const [b, flip] = useWipe(3200);
  return (
    <button type="button" className={`${c.wipe} ${c.textMask}`} data-b={b} aria-pressed={b} aria-label="Text mask. Press to run it again" onClick={flip}>
      <span className={c.a}><b>A</b></span>
      <span className={c.t} aria-hidden="true">REVEAL</span>
    </button>
  );
}
