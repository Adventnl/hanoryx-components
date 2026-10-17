import { useToggle } from "../../../stage/hooks";
import c from "../markup.module.css";

/* ---------- 02 notes beside the text ---------- */

export function MarginNote() {
  const [on, flip] = useToggle(true);
  return (
    <div className={c.fig}>
      <div className={c.marg} data-on={on}>
        <p className={c.para}>The belt <button type="button" className={c.anchor} aria-expanded={on} onClick={flip}>keeps moving</button>, though nobody asked it to.</p>
        <aside className={c.aside}><b>Check</b> who wound it.</aside>
      </div>
    </div>
  );
}
