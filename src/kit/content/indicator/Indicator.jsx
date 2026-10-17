import styles from './Indicator.module.css';
export function Indicator({ label, children }) { return <span className={styles.indicator} role="status"><span aria-hidden="true">●</span>{label}{children}</span>; }
export function Item({ title, description, leading, trailing, children }) { return <div className={styles.item}>{leading}<div><strong>{title}</strong>{description && <p>{description}</p>}{children}</div>{trailing}</div>; }
