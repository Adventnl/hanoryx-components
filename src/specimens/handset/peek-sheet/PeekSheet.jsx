import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 15 */ export function PeekSheet() {
  const [up, setUp] = useState(false);
  return (
    <Phone label="Bottom sheet">
      <span className={c.map} />
      <div className={c.sheet} data-up={up}>
        <button type="button" className={c.grab} aria-expanded={up} aria-label="Sheet handle" onClick={() => setUp((v) => !v)} />
        <b className={c.h}>Nearby</b><u className={c.line} /><u className={c.line} style={{ width: '60%' }} /><u className={c.line} />
      </div>
    </Phone>
  );
}
