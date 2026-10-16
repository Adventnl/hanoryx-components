import c from './handset.module.css';

export const cx = (...a) => a.filter(Boolean).join(' ');

export const Phone = ({ label, className, children, ...rest }) => <div className={cx(c.ph, className)} role="group" aria-label={label} {...rest}><i className={c.notch} />{children}</div>;

export const Sw = ({ on, set, label }) => <button type="button" role="switch" aria-checked={on} aria-label={label} className={c.sw} onClick={() => set(!on)}><i /></button>;

export const Av = ({ h = 0, s = '' }) => <b className={c.av} style={{ '--h': h }}>{s}</b>;
