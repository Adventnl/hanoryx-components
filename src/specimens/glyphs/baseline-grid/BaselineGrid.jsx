import { useToggle } from "../../../stage/hooks";
import c from "../glyphs.module.css";

export function BaselineGrid() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Baseline grid, show or hide" onClick={flip}>
      <span className={c.bg} data-on={on}>Every line of text rests on the same invisible grid, and so does the next one.</span>
    </button>
  );
}
