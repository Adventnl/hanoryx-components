import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function FoldDown() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A panel that folds down like a table" onClick={flip}>
      <span className={`${c.stage} ${c.tall}`}>
        <span className={c.wall} data-on={on}><i className={c.shelf}><b>Table</b></i></span>
      </span>
    </button>
  );
}
