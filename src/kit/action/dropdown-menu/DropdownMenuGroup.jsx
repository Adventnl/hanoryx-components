import { RadioMenuContext } from './internal/menu-context';
import DropdownMenu from './DropdownMenu';
import styles from './DropdownMenu.module.css';

export function DropdownMenuGroup({ label, children }) {
  return <li role="none">{label && <span className={styles.label}>{label}</span>}<ul role="group" aria-label={label} className={styles.group}>{children}</ul></li>;
}
export function DropdownMenuRadioGroup({ value, onChange, label, children }) {
  return <RadioMenuContext.Provider value={{ value, onChange }}><DropdownMenuGroup label={label}>{children}</DropdownMenuGroup></RadioMenuContext.Provider>;
}
export function DropdownMenuSubmenu({ label, children }) {
  return <li role="none"><DropdownMenu label={label} submenu>{children}</DropdownMenu></li>;
}
