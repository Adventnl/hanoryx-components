import c from './graphs.module.css';

/* 26 */ export function TokenPipeline() {
  return (
    <div className={c.fig} role="img" aria-label="Tokens moving through a three stage pipeline">
      <div className={c.pipe}>
        {['Fetch', 'Parse', 'Store'].map((s) => <span key={s}><b>{s}</b></span>)}
        {Array.from({ length: 6 }, (_, i) => <i key={i} style={{ animationDelay: `${i * 0.55}s` }} />)}
      </div>
    </div>
  );
}
