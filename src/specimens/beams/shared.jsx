import c from './beams.module.css';

export const Sv = ({ children, label, extra, ...p }) => <div className={c.sw} role="img" aria-label={label} {...p}><svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true">{children}</svg>{extra}</div>;

export const Lit = ({ d, dur = 2.4, delay = 0, len = 14, color, w }) => (
  <>
    <path d={d} className={c.base} />
    <path d={d} pathLength="100" className={c.lit} style={{ '--len': len, animationDuration: `${dur}s`, animationDelay: `${delay}s`, stroke: color, strokeWidth: w }} />
  </>
);

export function cx(...a) { return a.filter(Boolean).join(' '); }
