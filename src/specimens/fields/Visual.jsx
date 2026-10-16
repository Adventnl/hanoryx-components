import c from './fields.module.css';

const ROWS = ['NAME', 'EMAIL', 'ROLE', 'TEAM', 'DATE', 'CODE', 'NOTE', 'SECRET'];

export function Visual() {
  return (
    <div className={c.form} aria-hidden="true">
      <p>NEW RECORD</p>
      {ROWS.map((t, r) => (
        <div key={t} className={c.row} style={{ '--r': r }}><span>{t}</span><div className={c.fld}><i /></div></div>
      ))}
      <b className={c.send}>SUBMIT</b>
    </div>
  );
}
