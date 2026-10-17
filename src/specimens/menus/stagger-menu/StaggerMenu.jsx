import { useToggle } from "../../../stage/hooks";
import c from "../menus.module.css";

/* 29 */ export function StaggerMenu() {
  const [open, flip] = useToggle();
  return (
    <div className={c.stagger} data-open={open}>
      <button type="button" aria-expanded={open} onClick={flip}>Menu</button>
      <ul>{['One', 'Two', 'Three', 'Four'].map((t, k) => <li key={t} style={{ '--k': k }}><a href="#stagger" tabIndex={open ? 0 : -1} onClick={(e) => e.preventDefault()}>{t}</a></li>)}</ul>
    </div>
  );
}
