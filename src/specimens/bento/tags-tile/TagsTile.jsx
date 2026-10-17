import { useState } from 'react';
import c from "../bento.module.css";
import { Tile } from "../shared";

const TAGS = ['belts', 'gates', 'tea', 'maps', 'notes'];

export function TagsTile() {
  const [on, setOn] = useState(() => new Set(['tea']));
  const toggle = (t) => setOn((s) => { const n = new Set(s); if (n.has(t)) n.delete(t); else n.add(t); return n; });
  return (
    <div className={c.fig}>
      <Tile k={`Tags · ${on.size}`}>
        <span className={c.chips}>{TAGS.map((t) => <button key={t} type="button" aria-pressed={on.has(t)} onClick={() => toggle(t)}>{t}</button>)}</span>
      </Tile>
    </div>
  );
}
