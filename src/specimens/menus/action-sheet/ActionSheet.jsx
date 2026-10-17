import { useToggle } from "../../../stage/hooks";
import c from "../menus.module.css";

/* 40 */ export function ActionSheet() {
  const [open, flip] = useToggle();
  return (
    <div className={c.sheet} data-open={open}>
      <button type="button" aria-expanded={open} onClick={flip}>Options</button>
      <div role="menu" aria-label="Action sheet" inert={!open || undefined}>{['Take photo', 'Choose file'].map((t) => <button key={t} type="button" role="menuitem" onClick={flip}>{t}</button>)}<button type="button" role="menuitem" onClick={flip}>Cancel</button></div>
    </div>
  );
}
