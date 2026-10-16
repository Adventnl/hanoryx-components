import { useState } from 'react';
import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 3 */ export function GuardCover() {
  const [open, setOpen] = useState(false);
  const [on, flip, set] = useToggle();
  return (
    <div className={c.guard} data-open={open}>
      <button type="button" className={c.gSwitch} aria-pressed={on} aria-label="Guarded switch" tabIndex={open ? 0 : -1} onClick={flip}><i /></button>
      <button type="button" className={c.gCover} aria-label={open ? 'Close the cover' : 'Lift the cover'} aria-expanded={open} onClick={() => { setOpen(!open); set(false); }} />
    </div>
  );
}
