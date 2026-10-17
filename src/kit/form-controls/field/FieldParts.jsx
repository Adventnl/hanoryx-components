import styles from '../../internal/styles/inputs.module.css';

export function FieldLabel({ htmlFor, children, required = false }) {
  return <label className={styles.label} htmlFor={htmlFor}>{children}{required && <span>required</span>}</label>;
}
export function FieldStatus({ id, children, error = false }) {
  return <p id={id} className={error ? styles.error : styles.hint} role={error ? 'alert' : 'status'}>{children}</p>;
}
export function InputGroup({ children, invalid = false }) {
  return <div className={styles.group} data-invalid={invalid || undefined}>{children}</div>;
}
export function InputGroupText({ children, id }) { return <span id={id} className={styles.hint}>{children}</span>; }
