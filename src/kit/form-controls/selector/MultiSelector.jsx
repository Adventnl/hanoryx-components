import { useId } from 'react';
import { useControllable } from '../../internal/useControllable';
import Combobox from '../combobox/Combobox';
import styles from './MultiSelector.module.css';

/** Native multi-select preserves platform keyboard selection and form submission. */
export function MultiSelector({ label = 'Choose options', options = [], value, defaultValue = [], onChange, disabled = false, name, size = 5 }) {
  const [selected, setSelected] = useControllable({ value, defaultValue, onChange });
  const id = useId();
  return <div className={styles.field}><label htmlFor={id}>{label}</label><select id={id} name={name} multiple size={size} disabled={disabled} value={selected} onChange={event => setSelected([...event.target.selectedOptions].map(option => option.value))}>
    {options.map(option => typeof option === 'string' ? <option key={option}>{option}</option> : <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}
  </select><small>Use your platform's modifier keys to select multiple options.</small></div>;
}
/** Combobox with optional secondary content for each match. Labels remain searchable text. */
export function ComplexSelector({ renderOption, ...props }) {
  return <Combobox {...props} renderOption={renderOption ?? (option => <span><strong>{option.label}</strong>{option.description && <small className={styles.description}>{option.description}</small>}</span>)} />;
}
export function SelectorOption({ children, value, disabled }) { return <option value={value} disabled={disabled}>{children}</option>; }
export function TypeaheadItem({ id, selected = false, children, onSelect, onHighlight }) {
  return <li id={id} role="option" aria-selected={selected} tabIndex={-1} onPointerDown={event => event.preventDefault()} onClick={onSelect} onPointerMove={onHighlight} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect?.(); } }}>{children}</li>;
}
