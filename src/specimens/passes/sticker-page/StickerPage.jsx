import { useState } from 'react';
import c from "../passes.module.css";

/* 32 */
const STK = ['H', 'OK', 'NEW', 'GO', 'A+', '42'];

const LID = [[22, 30, -9], [60, 24, 10], [40, 64, -14], [76, 62, 7], [16, 70, 12], [54, 44, -4]];

export function StickerPage() {
  const [stuck, setStuck] = useState([false, true, false, false, false, false]);
  const flip = (i) => setStuck((s) => s.map((x, k) => (k === i ? !x : x)));
  return (
    <div className={c.fig}>
      <div className={c.ss}>
        <span className={c.ssSheet}>
          {STK.map((t, i) => (
            <button key={t} type="button" className={c.ssPad} aria-pressed={stuck[i]} aria-label={`Sticker ${t}: ${stuck[i] ? 'take it off the lid' : 'stick it on the lid'}`} onClick={() => flip(i)}>
              {!stuck[i] && <span className={c.ssSticker} data-k={i}>{t}</span>}
            </button>
          ))}
        </span>
        <span className={c.ssLid} aria-hidden="true">
          {STK.map((t, i) => stuck[i] && <span key={t} className={`${c.ssSticker} ${c.ssPut}`} data-k={i} style={{ left: `${LID[i][0]}%`, top: `${LID[i][1]}%`, '--r': `${LID[i][2]}deg` }}>{t}</span>)}
        </span>
      </div>
    </div>
  );
}
