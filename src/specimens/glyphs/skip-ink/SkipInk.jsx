import { useToggle } from "../../../stage/hooks";
import c from "../glyphs.module.css";

export function SkipInk() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Skip ink, switch on or off" onClick={flip}>
      <span className={c.skip} style={{ textDecorationSkipInk: on ? 'auto' : 'none' }}>gypsy jumping quickly</span>
    </button>
  );
}
