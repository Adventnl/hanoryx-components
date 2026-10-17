import { useId } from 'react';
import Checkbox from './Checkbox';
import styles from '../../internal/styles/inputs.module.css';

export function CheckboxList({ label, children }) {
  return <fieldset className={styles.options}><legend>{label}</legend>{children}</fieldset>;
}
export function CheckboxListItem({ label, hint, checked, defaultChecked, onChange, disabled, name, value }) {
  const id = useId();
  return <div><Checkbox label={label} name={name} value={value} checked={checked} defaultChecked={defaultChecked} disabled={disabled} aria-describedby={hint ? id : undefined} onChange={onChange} />{hint && <p id={id} className={styles.hint}>{hint}</p>}</div>;
}
export function RadioListItem({ label, checked, defaultChecked, onChange, disabled, name, value }) {
  return <label><input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} disabled={disabled} onChange={onChange} />{label}</label>;
}
