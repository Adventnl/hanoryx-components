import c from './popovers.module.css';
import { useOpen } from './shared';

/* 19 */ export function InfoPopover() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.wrap}>
      <span className={c.label}>Retention <button type="button" className={c.i} aria-label="About retention" aria-expanded={open} onClick={() => setOpen(!open)}>i</button></span>
      {open && <div className={`${c.pop} ${c.top}`} role="note"><p>Files are kept for 30 days after you delete them.</p></div>}
    </div>
  );
}
