import c from './boards.module.css';

export const cx = (...a) => a.filter(Boolean).join(' ');

export const Bd = ({ label, children, className, ...r }) => <div className={cx(c.bd, className)} role="group" aria-label={label} {...r}>{children}</div>;

export const LANES = ['To do', 'Doing', 'Done'];

export const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const START = [['Brief', 0], ['Wire', 0], ['Review', 1], ['Ship', 2], ['Docs', 1]];
