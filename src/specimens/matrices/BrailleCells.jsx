import { useState } from 'react';
import c from './matrices.module.css';

/* 20 */ const BRAILLE = { a: '1', b: '12', c: '14', d: '145', e: '15', f: '124', g: '1245', h: '125', i: '24', j: '245', k: '13', l: '123', m: '134', n: '1345', o: '135', p: '1234', q: '12345', r: '1235', s: '234', t: '2345', u: '136', v: '1236', w: '2456', x: '1346', y: '13456', z: '1356' };

const BRAILLE_ORDER = [1, 4, 2, 5, 3, 6];

export function BrailleCells() {
  const [text, setText] = useState('grid');
  const letters = [...text.toLowerCase()].filter((ch) => BRAILLE[ch]);
  return (
    <div className={c.box}>
      <input className={c.input} value={text} maxLength={8} aria-label="Text to turn into braille" onChange={(e) => setText(e.target.value)} />
      <div className={c.braille}>
        {letters.map((ch, k) => (
          <span key={k} aria-label={ch}>{BRAILLE_ORDER.map((d) => <i key={d} data-on={BRAILLE[ch].includes(d)} />)}</span>
        ))}
      </div>
    </div>
  );
}
