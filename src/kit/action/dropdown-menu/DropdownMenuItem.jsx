import { useContext } from 'react';
import { MenuContext, RadioMenuContext } from './internal/menu-context';
import styles from '../../internal/styles/navigation.module.css';

/** Menu action; disabled actions are skipped by keyboard navigation. */
export function DropdownMenuItem({ children, label, onSelect, disabled = false, danger = false, role = 'menuitem', checked, keepOpen = false }) {
  const menu = useContext(MenuContext);
  return <li role="none"><button type="button" role={role} aria-checked={checked} tabIndex={-1} className={styles.menuItem} data-danger={danger || undefined} disabled={disabled}
    onClick={() => { onSelect?.(); if (!keepOpen) menu?.close(); }}>{checked !== undefined && <span aria-hidden="true">{checked ? '✓ ' : '○ '}</span>}{children ?? label}</button></li>;
}
export function DropdownMenuCheckboxItem({ checked = false, onChange, ...props }) {
  return <DropdownMenuItem {...props} role="menuitemcheckbox" checked={checked} keepOpen onSelect={() => onChange?.(!checked)} />;
}
export function DropdownMenuRadioItem({ value, ...props }) {
  const radio = useContext(RadioMenuContext);
  if (!radio) throw new Error('DropdownMenuRadioItem requires DropdownMenuRadioGroup.');
  return <DropdownMenuItem {...props} role="menuitemradio" checked={radio.value === value} onSelect={() => radio.onChange?.(value)} />;
}
export function DropdownMenuDivider() {
  return <li role="separator" className={styles.menuSep} />;
}
