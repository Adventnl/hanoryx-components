import c from './feeds.module.css';

export const MSGS = [['Ana', 'Standup in five?'], ['You', 'Yes — joining now'], ['Kofi', 'Deploy is green'], ['You', 'Nice. Shipping.'], ['Mara', 'Can someone review #482?'], ['You', 'On it'], ['Ana', 'Thanks all'], ['Kofi', 'Lunch?']];

export const cx = (...a) => a.filter(Boolean).join(' ');

export const Fd = ({ label, children, className, ...r }) => <div className={cx(c.fd, className)} role="group" aria-label={label} {...r}>{children}</div>;

export const Av = ({ h, s }) => <b className={c.av} style={{ '--h': h }}>{s}</b>;

export const NAMES = ['Ana Reyes', 'Kofi Mensah', 'Mara Lind', 'Ravi Shah', 'Sol Park'];
