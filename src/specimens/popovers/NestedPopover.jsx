import { useToggle } from '../../stage/hooks';
import c from './popovers.module.css';
import { Trigger, useOpen } from './shared';

/* 41 */ export function NestedPopover() {
  const [open, setOpen, ref] = useOpen();
  const [inner, flip] = useToggle();
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => { setOpen(!open); }}>Options</Trigger>
      {open && <div className={`${c.pop} ${c.bottom} ${c.nested}`} role="dialog" aria-label="Options"><button type="button" aria-expanded={inner} onClick={flip}>More…</button>{inner && <div className={c.pop2} role="note">A popover inside a popover.</div>}</div>}
    </div>
  );
}
