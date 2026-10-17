import { useState } from 'react';
import c from "../fold.module.css";

const STICKERS = ['Star', 'Dot', 'Bolt'];

export function StickerSheet() {
  const [gone, setGone] = useState(() => new Set());
  const toggle = (k) => setGone((s) => { const n = new Set(s); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  return (
    <div className={c.fig}>
      <div className={c.sheetBox}>
        {STICKERS.map((s, k) => (
          <button key={s} type="button" aria-pressed={gone.has(k)} aria-label={`${s} sticker; peel it off or put it back`} onClick={() => toggle(k)}>
            <i className={c.ghost} />
            <i className={c.sticker} data-gone={gone.has(k)} style={{ '--r': `${(k - 1) * 14}deg` }}>{['A', 'B', 'C'][k]}</i>
          </button>
        ))}
      </div>
    </div>
  );
}
