import c from './kinetic.module.css';

/* 36 */ const GRID_WORD = 'KINETICTYPEMOVESNOW';

export function LetterGrid() {
  return (
    <div className={c.fig} role="img" aria-label="A grid of letters turning over, one after another">
      <div className={c.lgrid}>{[...GRID_WORD.padEnd(20, '·')].map((ch, i) => <span key={i} style={{ '--i': i }}>{ch}</span>)}</div>
    </div>
  );
}
