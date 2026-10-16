import { useState } from 'react';
import c from './graphs.module.css';

/* 17 */ const fnv = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i += 1) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h; };

const hex = (n) => n.toString(16).padStart(8, '0');

const mine = (i, prev) => { let nonce = 0; while (fnv(`${i}|${prev}|${nonce}`) % 16 !== 0) nonce += 1; return { i, prev, nonce, hash: hex(fnv(`${i}|${prev}|${nonce}`)) }; };

export function BlockChain() {
  const [len, setLen] = useState(3);
  const chain = [];
  for (let i = 0; i < len; i += 1) chain.push(mine(i, i ? chain[i - 1].hash : '00000000'));
  return (
    <div className={c.fig}>
      <div className={c.chain}>
        {chain.slice(-3).map((b, k) => (
          <p key={b.i} data-new={k === 2 && len > 3}><em>#{b.i}</em><span>prev {b.prev.slice(0, 5)}</span><span>nonce {b.nonce}</span><b>{b.hash.slice(0, 6)}</b></p>
        ))}
      </div>
      <div className={c.pair}><button type="button" onClick={() => setLen((v) => v + 1)}>Mine a block</button></div>
    </div>
  );
}
