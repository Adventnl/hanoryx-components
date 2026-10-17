import c from "../menus.module.css";
import { useOpen } from "../shared";

/* 12 */ export function BreadcrumbMenu() {
  const [open, setOpen, ref] = useOpen();
  return (
    <nav ref={ref} className={c.crumb} aria-label="Breadcrumb with menu">
      <a href="#crumb" onClick={(e) => e.preventDefault()}>Home</a><span>/</span>
      <div>
        <button type="button" aria-label="Show hidden levels" aria-expanded={open} onClick={() => setOpen(!open)}>…</button>
        {open && <ul role="menu">{['Projects', 'Archive', '2024'].map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{t}</button></li>)}</ul>}
      </div>
      <span>/</span><b aria-current="page">Report</b>
    </nav>
  );
}
