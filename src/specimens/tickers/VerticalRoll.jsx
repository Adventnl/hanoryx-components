import c from './tickers.module.css';

/* ---------- 03 rolling lists ---------- */

const ROLL = ['Gate 7 opens at seven', 'Tea is served on platform two', 'A glove was found in carriage four', 'The 18:02 leaves from track nine', 'Mind the gap'];

const ROLLED = [...ROLL, ...ROLL.slice(0, 3)];

export function VerticalRoll() {
  return (
    <div className={c.fig} role="img" aria-label="Headlines rolling up one line at a time">
      <div className={c.vroll}><ol>{ROLLED.map((l, i) => <li key={i}>{l}</li>)}</ol></div>
    </div>
  );
}
