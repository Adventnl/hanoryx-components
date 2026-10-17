import { useState } from 'react';
import c from "../editorial.module.css";

export function CorrectionNotice() {
  const [open, setOpen] = useState(true);
  return (
    <div className={c.fig}>
      <div className={c.corr} data-on={open}>
        <p><b>Correction</b> An earlier version of this article said the belt was <del>wound</del><ins>wound by hand</ins>.</p>
        <button type="button" className={c.more} onClick={() => setOpen(false)}>dismiss</button>
      </div>
      {!open ? <button type="button" className={c.mini} onClick={() => setOpen(true)}>restore notice</button> : null}
    </div>
  );
}
