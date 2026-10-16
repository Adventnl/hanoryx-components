import c from './popovers.module.css';
import { Trigger, useOpen } from './shared';

/* 5 */ export function ClickPopover() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(!open)}>Rename</Trigger>
      {open && <form className={`${c.pop} ${c.bottom}`} role="dialog" aria-label="Rename" onSubmit={(e) => { e.preventDefault(); setOpen(false); }}><label>Name<input defaultValue="Untitled" autoFocus /></label><button type="submit">Save</button></form>}
    </div>
  );
}
