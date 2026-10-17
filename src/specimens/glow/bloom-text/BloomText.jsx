import { useToggle } from "../../../stage/hooks";
import c from "../glow.module.css";

export function BloomText() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} onClick={flip}>
      <span className={c.bloom} data-on={on}>Bloom</span>
      <span className={c.note}>{on ? 'glow on' : 'glow off'}</span>
    </button>
  );
}
