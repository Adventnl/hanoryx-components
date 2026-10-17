import { useState } from 'react';
import c from "../toasts.module.css";

/* 40 */ export function FannedNotices() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.fanBox} onPointerEnter={() => setOpen(true)} onPointerLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} data-open={open}>
      {['Build passed', 'Deploy started', 'Review requested'].map((t, i) => <button key={t} type="button" style={{ '--i': i }}>{t}</button>)}
    </div>
  );
}
