import c from './handset.module.css';

const SCREENS = ['Welcome', 'Sign in', 'Feed', 'Chat', 'Settings'];

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.big}>
        <i />
        <div className={c.track}>
          {SCREENS.map((t, k) => (
            <section key={t}>
              <b>{t}</b>
              {[0, 1, 2, 3].map((r) => <u key={r} style={{ '--r': r, '--k': k }} />)}
              <em />
            </section>
          ))}
        </div>
        <span className={c.dots}>{SCREENS.map((t, k) => <s key={t} style={{ '--k': k }} />)}</span>
      </div>
      <small>5 SCREENS · 1 HANDSET</small>
    </div>
  );
}
