import { Link } from '../../action/link/Link';
import styles from '../../internal/styles/navigation.module.css';

export function SideNavSection({ title, children, defaultOpen = true }) { return <details className={styles.sideGroup} open={defaultOpen}><summary>{title}</summary><ul>{children}</ul></details>; }
export function SideNavHeading({ children }) { return <h3>{children}</h3>; }
export function SideNavItem({ to, children, current = false }) { return <li><Link to={to} className={styles.sideItem} aria-current={current ? 'page' : undefined}>{children}</Link></li>; }
export function SideNavCollapseButton({ expanded, onToggle, controls, label = 'Navigation' }) { return <button type="button" aria-expanded={expanded} aria-controls={controls} onClick={() => onToggle?.(!expanded)}>{expanded ? 'Collapse' : 'Expand'} {label}</button>; }
export function MobileNav({ label = 'Navigation', children }) { return <details className={styles.side}><summary>{label}</summary><nav aria-label={label}>{children}</nav></details>; }
export function NavIcon({ children }) { return <span aria-hidden="true">{children}</span>; }
export function NavHeadingMenu({ label, children }) { return <details><summary>{label}</summary>{children}</details>; }
