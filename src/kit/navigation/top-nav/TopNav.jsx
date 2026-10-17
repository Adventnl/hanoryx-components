import { Link } from '../../action/link/Link';
import styles from './TopNav.module.css';

export function TopNav({ label = 'Primary navigation', children }) { return <nav className={styles.nav} aria-label={label}>{children}</nav>; }
export function TopNavHeading({ children, to }) { return <div className={styles.heading}>{to ? <Link to={to}>{children}</Link> : children}</div>; }
export function TopNavItem({ to, href, current = false, children }) { return <Link to={to} href={href} aria-current={current ? 'page' : undefined} className={styles.item}>{children}</Link>; }
export function TopNavMenu({ label, children }) { return <details className={styles.menu}><summary>{label}</summary><div className={styles.panel}>{children}</div></details>; }
export function TopNavMegaMenu({ label, children }) { return <details className={`${styles.menu} ${styles.mega}`}><summary>{label}</summary><div className={styles.panel}>{children}</div></details>; }
export function TopNavMegaMenuItem({ title, children, to }) { return <Link className={styles.feature} to={to}><strong>{title}</strong><span>{children}</span></Link>; }
export function TopNavMegaMenuFeaturedCard({ title, children, to, eyebrow }) { return <Link className={`${styles.feature} ${styles.featured}`} to={to}>{eyebrow && <small>{eyebrow}</small>}<strong>{title}</strong><span>{children}</span></Link>; }
