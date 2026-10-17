import { Children } from 'react';
import styles from './List.module.css';

export function List({ children, ordered = false, label }) {
  const Tag = ordered ? 'ol' : 'ul';
  return <Tag className={styles.list} aria-label={label}>{children}</Tag>;
}
export function ListItem({ children }) { return <li className={styles.item}>{children}</li>; }
export function MetadataListItem({ term, children }) { return <div className={styles.metadata}><dt>{term}</dt><dd>{children}</dd></div>; }
/** Excess items stay reachable through a native disclosure. */
export function OverflowList({ children, max = 3, label = 'More items' }) {
  const items = Children.toArray(children);
  const count = Math.max(0, Math.floor(max));
  return <div><List>{items.slice(0, count)}</List>{items.length > count && <details><summary>{label} ({items.length - count})</summary><List>{items.slice(count)}</List></details>}</div>;
}
