import c from './menus.module.css';

const STOPS = ['Files', 'Edit', 'View', 'Tools', 'Share', 'Help', 'More'];

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.hub}><b>MENU</b></div>
      {STOPS.map((s, k) => (
        <div key={s} className={c.stop} style={{ '--a': (k * 360) / STOPS.length, '--k': k }}>
          <i /><span>{s}</span>
        </div>
      ))}
      <small>1 HUB · 7 STOPS</small>
    </div>
  );
}
