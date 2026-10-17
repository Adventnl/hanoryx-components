import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function NotebookSpread() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A notebook spread; turn the page" onClick={flip}>
      <span className={c.stage}>
        <span className={c.nb} data-on={on}>
          <i className={c.pgL}><b>2</b></i>
          <i className={c.pgR}><b>3</b></i>
          <i className={c.turn}><i className={c.tf}><b>1</b></i><i className={c.tb}><b>2</b></i></i>
        </span>
      </span>
    </button>
  );
}
