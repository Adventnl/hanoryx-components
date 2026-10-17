import { Button } from '../../../ui/button/Button';
import { useControllable } from '../../internal/useControllable';
import styles from './ButtonGroup.module.css';

export function ButtonGroup({ label = 'Actions', children }) {
  return <div role="group" aria-label={label} className={styles.group}>{children}</div>;
}
export function IconButton({ label, icon: Icon, ...props }) {
  return <Button {...props} magnetic={false} aria-label={label}><span aria-hidden="true">{Icon ? <Icon /> : '⋯'}</span></Button>;
}
export function ToggleButton({ pressed, defaultPressed = false, onChange, children, ...props }) {
  const [active, setActive] = useControllable({ value: pressed, defaultValue: defaultPressed, onChange });
  return <Button {...props} magnetic={false} aria-pressed={active} onClick={() => setActive(!active)}>{children}</Button>;
}
export function ToggleButtonGroup({ options = [], value, defaultValue = [], onChange, label = 'Options' }) {
  const [selected, setSelected] = useControllable({ value, defaultValue, onChange });
  return <ButtonGroup label={label}>{options.map(option => <ToggleButton key={option.value} disabled={option.disabled} pressed={selected.includes(option.value)} onChange={active => setSelected(active ? [...selected, option.value] : selected.filter(v => v !== option.value))}>{option.label}</ToggleButton>)}</ButtonGroup>;
}
