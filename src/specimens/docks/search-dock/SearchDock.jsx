import { useRef, useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 25 */ export function SearchDock() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <form className={c.search} data-open={open} role="search" aria-label="Search dock" onSubmit={(e) => e.preventDefault()}>
      <button type="button" aria-label={open ? 'Close search' : 'Open search'} aria-expanded={open} onClick={() => { setOpen(!open); if (!open) setTimeout(() => ref.current?.focus(), 200); }}><Ico n="search" /></button>
      <input ref={ref} aria-label="Search" placeholder="Search…" tabIndex={open ? 0 : -1} />
    </form>
  );
}
