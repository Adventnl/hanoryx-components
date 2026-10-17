import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function LetterFold() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A letter in three folds" onClick={flip}>
      <span className={c.stage}>
        <span className={c.letter} data-on={on}>
          <i className={c.lt}><b>Top</b></i>
          <i className={c.lm}><b>Middle</b></i>
          <i className={c.lb}><b>Bottom</b></i>
        </span>
      </span>
    </button>
  );
}
