import { useToggle } from "../../../stage/hooks";
import c from "../glyphs.module.css";

export function HangingPunctuation() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Hanging punctuation, switch on or off" onClick={flip}>
      <span className={c.hang} data-on={on}>“Quotation marks belong in the margin, so the text lines up.”</span>
    </button>
  );
}
