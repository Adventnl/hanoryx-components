import c from './popovers.module.css';
import { Trigger, useOpen } from './shared';

/* 23 */ export function PinnedTip() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-expanded={open} onClick={() => setOpen(!open)}>Pin the tip</Trigger>
      <span role="note" className={`${c.tip} ${c.top} ${c.rich}`} data-open={open}><b>Stays open</b>Press elsewhere, or Escape, to close.</span>
    </div>
  );
}
