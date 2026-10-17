import { useState } from 'react';
import c from "../glyphs.module.css";

const SERIFS = ['none', 'hairline', 'slab', 'bracketed'];

const FEET = {
  none: 'M44 14H56V86H44Z',
  hairline: 'M44 14H56V86H44ZM30 14H70V16H30ZM30 84H70V86H30Z',
  slab: 'M44 14H56V86H44ZM30 14H70V22H30ZM30 78H70V86H30Z',
  bracketed: 'M44 22H56V78H44ZM30 14H70V19Q56 20 56 30V70Q56 80 70 81V86H30V81Q44 80 44 70V30Q44 20 30 19Z',
};

export function SerifStyles() {
  const [k, setK] = useState(2);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Serif style ${SERIFS[k]}. Try the next`} onClick={() => setK((x) => (x + 1) % SERIFS.length)}>
      <svg className={c.serifSvg} viewBox="0 0 100 100" aria-hidden="true"><path d={FEET[SERIFS[k]]} /></svg>
      <span className={c.note}>{SERIFS[k]}</span>
    </button>
  );
}
