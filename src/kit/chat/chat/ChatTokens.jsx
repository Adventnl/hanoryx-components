import styles from './Chat.module.css';

export function ChatComposerTokenElement({ children, onRemove, label }) {
  return (
    <span className={styles.token}>
      {children}
      {onRemove && (
        <button type="button" aria-label={`Remove ${label || children}`} onClick={onRemove}>
          ×
        </button>
      )}
    </span>
  );
}

export function ChatDictationButton({ active = false, onToggle, disabled = false }) {
  return (
    <button
      type="button"
      className={styles.button}
      aria-pressed={active}
      disabled={disabled || !onToggle}
      onClick={() => onToggle(!active)}
    >
      {active ? 'Stop dictation' : 'Start dictation'}
    </button>
  );
}

export function ChatTokenizedText({ tokens = [] }) {
  return (
    <span>
      {tokens.map((token, i) =>
        typeof token === 'string' ? (
          <span key={i}>{token}</span>
        ) : (
          <mark className={styles.token} key={token.id ?? i}>
            {token.label}
          </mark>
        ),
      )}
    </span>
  );
}
