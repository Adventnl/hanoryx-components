import c from './heroes.module.css';

export const cx = (...a) => a.filter(Boolean).join(' ');

export const Sc = ({ label, className, children, ...r }) => <div className={cx(c.sc, className)} role="group" aria-label={label} {...r}>{children}</div>;

export const Nav = () => <span className={c.nav}><i /><s /><s /><s /></span>;

export const Cta = ({ children = 'Get started', ...p }) => <button type="button" className={c.cta} {...p}>{children}</button>;
