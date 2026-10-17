import { useToggle } from "../../../stage/hooks";
import c from "../keypads.module.css";

/* 35 */ export function RadialFAB() {
  const [open, flip] = useToggle();
  return (
    <div className={c.fab} data-open={open}>
      {['✎', '⌕', '＋'].map((t, i) => <button type="button" key={t} tabIndex={open ? 0 : -1} aria-label={['Edit', 'Find', 'Add'][i]} style={{ '--i': i }}>{t}</button>)}
      <button type="button" className={c.fabMain} aria-expanded={open} aria-label="Actions" onClick={flip}>＋</button>
    </div>
  );
}
