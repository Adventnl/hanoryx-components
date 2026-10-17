import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import c from "../terminal.module.css";
import { cx } from "../shared";

const HEX = [0x48, 0x61, 0x6e, 0x6f, 0x72, 0x79, 0x78, 0x00, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x73, 0x21];

/* 32 */ export function ByteDump() {
  const [h, setH] = useState(-1);
  const ch = (b) => (b > 31 && b < 127 ? String.fromCharCode(b) : "../index");
  return (
    <div className={c.win} onMouseLeave={() => setH(-1)}>
      {[0, 8].map((o) => (
        <div key={o} className={cx(c.ln, c.hexrow)}>
          <span className={c.dim}>{pad2(o)}</span>
          <span>{HEX.slice(o, o + 8).map((b, i) => <button key={i} type="button" className={c.byte} data-hot={h === o + i} aria-label={`byte ${o + i}: ${b.toString(16)}`} onMouseEnter={() => setH(o + i)} onFocus={() => setH(o + i)} onBlur={() => setH(-1)}>{b.toString(16).padStart(2, '0')}</button>)}</span>
          <span className={c.asc}>{HEX.slice(o, o + 8).map((b, i) => <i key={i} data-hot={h === o + i}>{ch(b)}</i>)}</span>
        </div>
      ))}
    </div>
  );
}
