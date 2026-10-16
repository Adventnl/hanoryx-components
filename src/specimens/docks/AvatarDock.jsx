import c from './docks.module.css';

/* 31 */ export function AvatarDock() {
  const names = ['A', 'B', 'C', 'D', 'E'];
  return (
    <div className={c.avatars} role="group" aria-label="Avatar dock">
      {names.map((n, k) => <button key={n} type="button" aria-label={`Person ${n}`} style={{ '--k': k }}>{n}</button>)}
      <span>+3</span>
    </div>
  );
}
