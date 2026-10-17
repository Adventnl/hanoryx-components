import { useToggle } from "../../../stage/hooks";
import c from "../menus.module.css";

/* 31 */ export function OverlayMenu() {
  const [open, flip] = useToggle();
  return (
    <div className={c.overlay} data-open={open}>
      <button type="button" aria-expanded={open} aria-label="Full-screen menu" onClick={flip}>{open ? 'Close' : 'Menu'}</button>
      <nav aria-label="Overlay menu" inert={!open || undefined}>{['01 Work', '02 Notes', '03 Say hi'].map((t, k) => <a key={t} href="#overlay" style={{ '--k': k }} onClick={(e) => e.preventDefault()}>{t}</a>)}</nav>
    </div>
  );
}
