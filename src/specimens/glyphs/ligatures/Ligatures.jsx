import { useToggle } from "../../../stage/hooks";
import c from "../glyphs.module.css";

export function Ligatures() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Ligatures, switch on or off" onClick={flip}>
      <span className={c.lig} style={{ fontVariantLigatures: on ? 'common-ligatures discretionary-ligatures' : 'none' }}>office, fifty, affluent flight</span>
      <span className={c.note}>{on ? 'ligatures on' : 'ligatures off'}</span>
    </button>
  );
}
