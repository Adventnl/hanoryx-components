import { useState } from 'react';
import c from './figures.module.css';

/* 41 */ const SI = { '-12': 'pico', '-9': 'nano', '-6': 'micro', '-3': 'milli', 0: '', 3: 'kilo', 6: 'mega', 9: 'giga', 12: 'tera' };

export function NotationSwitch() {
  const [text, setText] = useState('0.000472');
  const n = Number(text);
  const ok = text.trim() !== '' && Number.isFinite(n) && n !== 0;
  const exp = ok ? Math.floor(Math.log10(Math.abs(n))) : 0;
  const eng = ok ? Math.floor(exp / 3) * 3 : 0;
  return (
    <div className={c.fig}>
      <input className={c.input} value={text} maxLength={14} aria-label="A number to write in other notations" onChange={(e) => setText(e.target.value.replace(/[^0-9.eE+-]/g, ''))} />
      <dl className={c.bases}>
        <dt>sci</dt><dd>{ok ? n.toExponential() : '—'}</dd>
        <dt>eng</dt><dd>{ok ? `${+(n / 10 ** eng).toPrecision(4)} × 10^${eng}` : '—'}</dd>
        <dt>si</dt><dd>{ok && SI[eng] !== undefined ? `${+(n / 10 ** eng).toPrecision(4)} ${SI[eng] || '(none)'}` : '—'}</dd>
      </dl>
    </div>
  );
}
