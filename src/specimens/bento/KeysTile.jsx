import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

const KEYS = [...'QWERT'];

export function KeysTile() {
  const [last, setLast] = useState('');
  return (
    <div className={c.fig}>
      <Tile k="Keys">
        <div className={c.keys} tabIndex={0} role="group" aria-label="Press Q, W, E, R or T to light a key" onKeyDown={(e) => { const k = e.key.toUpperCase(); if (KEYS.includes(k)) setLast(k); }} onBlur={() => setLast('')}>
          {KEYS.map((k) => <i key={k} data-on={last === k}>{k}</i>)}
        </div>
      </Tile>
    </div>
  );
}
