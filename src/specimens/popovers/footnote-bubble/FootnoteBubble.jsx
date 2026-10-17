import c from "../popovers.module.css";
import { useOpen } from "../shared";

/* 11 */ export function FootnoteBubble() {
  const [open, setOpen, ref] = useOpen();
  return (
    <p ref={ref} className={c.note}>Light moves slowly in glass<button type="button" aria-expanded={open} aria-label="Footnote 1" onClick={() => setOpen(!open)}><sup>1</sup></button>.
      {open && <span role="note" className={`${c.tip} ${c.top} ${c.rich}`} data-open>Roughly two thirds of its speed in a vacuum.</span>}
    </p>
  );
}
