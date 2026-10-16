import c from './bento.module.css';

/* ---------- helpers ---------- */

export const pad = (n) => String(n).padStart(2, '0');

export function Tile({ k, children, className = '', ...rest }) {
  return <span className={`${c.tile} ${className}`} {...rest}><i className={c.k}>{k}</i>{children}</span>;
}

/* ---------- 01 numbers and charts ---------- */

export const SPARK = 'M0 20 L12 16 L24 18 L36 10 L48 13 L60 6 L72 9 L84 3 L100 5';
