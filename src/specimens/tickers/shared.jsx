import c from './tickers.module.css';

/* ---------- building blocks ---------- */

/** A split-flap cell for one character (or a short word). When `cur` differs from
 *  `prev` the old top half falls and the new bottom half drops into place; the
 *  parent remounts the cell (a new key) to run it again. */
export function Cell({ cur, prev = cur, i = 0 }) {
  const go = cur !== prev;
  const was = go ? prev : cur;
  return (
    <span className={`${c.cell} ${go ? c.go : ''}`} style={{ '--i': i, '--len': cur.length }}>
      <b className={`${c.h} ${c.up}`} data-ch={cur} />
      <b className={`${c.h} ${c.dn}`} data-ch={was} />
      <b className={`${c.h} ${c.up} ${c.fu}`} data-ch={was} />
      <b className={`${c.h} ${c.dn} ${c.fd}`} data-ch={cur} />
    </span>
  );
}

/** A column of digits that slides to show digit `d`. */
export const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Roll({ d }) {
  return <span className={c.roll} style={{ '--d': d }} aria-hidden="true">{DIGITS.map((n) => <i key={n}>{n}</i>)}</span>;
}

/** A belt: its children, twice in a row, slid along by exactly one copy. */
export function Belt({ children, dur = 16, rev = false, className = '', copies = 2, scroll = false }) {
  return (
    <span className={`${c.belt} ${className}`}>
      <span className={`${c.runs} ${scroll ? c.byScroll : ''}`} style={{ '--dur': `${dur}s`, animationDirection: rev ? 'reverse' : 'normal' }}>
        {Array.from({ length: copies }, (_, k) => (
          k ? <span key={k} className={c.runSet} aria-hidden="true" inert>{children}</span> : <span key={k} className={c.runSet}>{children}</span>
        ))}
      </span>
    </span>
  );
}
