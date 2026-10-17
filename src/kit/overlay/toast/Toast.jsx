import styles from '../../internal/styles/feedback.module.css';

/** Persistent inline notification. ToastProvider and useToast provide timed portal notifications. */
export function Toast({ title, children, onDismiss, tone = 'info' }) {
  return <div className={styles.toast} role="status" data-tone={tone}><span>{tone}</span><div><strong>{title}</strong>{children}</div>{onDismiss && <button type="button" onClick={onDismiss} aria-label="Dismiss notification">×</button>}</div>;
}
