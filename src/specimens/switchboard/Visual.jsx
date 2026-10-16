import c from './switchboard.module.css';

export function Visual() {
  return (
    <div className={c.board} aria-hidden="true">
      <div className={c.plate}>BUS A · 40 WAYS</div>
      <div className={c.lamps}>
        {Array.from({ length: 40 }, (_, k) => <i key={k} style={{ '--k': k }} />)}
        <b className={c.scan} />
      </div>
      <div className={c.bus}><i /></div>
      <div className={c.dial}><span /></div>
    </div>
  );
}
