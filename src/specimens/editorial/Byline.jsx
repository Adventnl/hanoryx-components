import { useState } from 'react';
import c from './editorial.module.css';

export function Byline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.fig}>
      <div className={c.by}>
        <span className={c.avatar} aria-hidden="true">AW</span>
        <p><b>By A. Writer</b><span>14 Oct · 8 min read</span></p>
        <button type="button" className={c.more} aria-expanded={open} onClick={() => setOpen((o) => !o)}>{open ? 'less' : 'bio'}</button>
      </div>
      <p className={c.bio} data-on={open}>A. Writer writes about belts, platforms and the people who wind them.</p>
    </div>
  );
}
