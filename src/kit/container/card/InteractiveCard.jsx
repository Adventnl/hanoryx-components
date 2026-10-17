import { Link } from '../../action/link/Link';
import { useControllable } from '../../internal/useControllable';
import styles from './InteractiveCard.module.css';

/** One whole-card action. Children must not contain other interactive elements. */
export function ClickableCard({ title, children, to, href, onClick, disabled = false }) {
  const content = <><strong>{title}</strong><span>{children}</span></>;
  return to !== undefined || href ? <Link className={styles.card} to={to} href={href}>{content}</Link> : <button className={styles.card} type="button" disabled={disabled} onClick={onClick}>{content}</button>;
}
export function SelectableCard({ title, children, checked, defaultChecked = false, onChange, disabled = false, name, value }) {
  const [selected, setSelected] = useControllable({ value: checked, defaultValue: defaultChecked, onChange });
  return <label className={styles.card} data-selected={selected}><input type="checkbox" name={name} value={value} checked={selected} disabled={disabled} onChange={event => setSelected(event.target.checked)} /><strong>{title}</strong><span>{children}</span></label>;
}
