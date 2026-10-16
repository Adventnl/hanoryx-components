import c from './drift.module.css';

const ARMS = 3;

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.spiral}>
        {Array.from({ length: 63 }, (_, k) => <i key={k} style={{ '--a': (k % ARMS) * (360 / ARMS) + k * 14, '--r': 2.2 + k * 0.68, '--s': 0.6 + (k % 5) * 0.22, '--k': k }} />)}
      </div>
      <small>63 PARTICLES · 3 ARMS</small>
    </div>
  );
}
