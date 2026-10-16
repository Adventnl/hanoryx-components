import c from './docks.module.css';

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visDock}>{Array.from({ length: 7 }, (_, k) => <i key={k} style={{ '--k': k }} />)}</div>
      <div className={c.visShelf} />
      <div className={c.visBar}><i /></div>
      <small>7 ITEMS · ONE SWELL</small>
    </div>
  );
}
