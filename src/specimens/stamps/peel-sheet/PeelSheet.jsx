import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../stamps.module.css";

const STK = ['circle', 'star', 'heart', 'bolt', 'moon', 'flag'];

/* 09 */ export function PeelSheet() {
  const [gone, setGone] = useState([1]);
  const flip = (i) => setGone((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]));
  return (
    <div className={c.sheetGrid} role="group" aria-label="Sticker sheet">
      {STK.map((n, i) => (
        <button key={n} type="button" className={c.stk} data-gone={gone.includes(i)} aria-pressed={!gone.includes(i)} aria-label={`Sticker ${i + 1}`} onClick={() => flip(i)} style={{ '--h': i * 58 }}>
          <Ico n={n === 'circle' ? 'sun' : n} />
        </button>
      ))}
    </div>
  );
}
