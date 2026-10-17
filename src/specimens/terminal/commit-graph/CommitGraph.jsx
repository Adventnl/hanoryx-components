import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const GRAPH = [['*', ' ', ' ', 'a41f', 'merge ui-pass'], ['|', '\\', ' ', '', ''], ['|', ' ', '*', 'c09d', 'tune the ease'], ['*', ' ', '|', '7e12', 'add nav'], ['|', '/', ' ', '', ''], ['*', ' ', ' ', '19bb', 'first light']];

/* 18 */ export function CommitGraph() {
  const [s, setS] = useState('a41f');
  return (
    <div className={cx(c.win, c.graph)} role="group" aria-label="Commit graph">
      {GRAPH.map(([a, b, d, h, m], i) => (
        <div key={i} className={c.ln}>
          <span className={c.gl}>{a}{b}{d}</span>
          {h ? <button type="button" className={c.hash} aria-pressed={s === h} onClick={() => setS(h)}>{h} <span className={c.dim}>{m}</span></button> : null}
        </div>
      ))}
    </div>
  );
}
