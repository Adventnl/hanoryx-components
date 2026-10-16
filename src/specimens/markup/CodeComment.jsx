import { useState } from 'react';
import c from './markup.module.css';

const CODE = ['function tick(belt) {', '  belt.advance(1);', '  if (belt.full) belt.stop();', '  return belt.position;', '}'];

export function CodeComment() {
  const [open, setOpen] = useState(() => new Set([2]));
  const toggle = (i) => setOpen((s) => {
    const n = new Set(s);
    if (n.has(i)) n.delete(i); else n.add(i);
    return n;
  });
  return (
    <div className={c.fig}>
      <ol className={c.code}>
        {CODE.map((l, i) => (
          <li key={i}>
            <button type="button" className={c.codeLine} aria-expanded={open.has(i)} onClick={() => toggle(i)}><i>{i + 1}</i><code>{l}</code><b aria-hidden="true">+</b></button>
            {open.has(i) ? <p className={c.review}>Should this wait for the next tick?</p> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
