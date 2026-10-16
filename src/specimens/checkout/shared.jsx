import c from './checkout.module.css';

export const LINES = [['Trail shell', 98], ['Wool socks ×2', 24], ['Map case', 18], ['Water bottle', 22], ['Gift wrap', 4], ['Shipping', 0]];

export const cx = (...a) => a.filter(Boolean).join(' ');

export const $ = (n, cur = '$') => `${cur}${n.toFixed(2).replace(/\.00$/, '')}`;

export const Co = ({ label, children, className, ...r }) => <div className={cx(c.co, className)} role="group" aria-label={label} {...r}>{children}</div>;

export const Step = ({ v, set, min = 0, max = 9, label }) => <span className={c.step}><button type="button" aria-label={`Fewer ${label}`} disabled={v <= min} onClick={() => set(v - 1)}>−</button><b aria-live="polite">{v}</b><button type="button" aria-label={`More ${label}`} disabled={v >= max} onClick={() => set(v + 1)}>+</button></span>;

export const group = (s) => s.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
