import styles from './Chat.module.css';

export function ChatMessageList({ children, label = 'Messages', announce = false, ref }) {
  return (
    <ol
      ref={ref}
      className={styles.messages}
      aria-label={label}
      aria-live={announce ? 'polite' : 'off'}
      aria-relevant="additions text"
    >
      {children}
    </ol>
  );
}

export function ChatMessage({ author, children, metadata, role = 'assistant' }) {
  return (
    <li className={styles.message} data-speaker={role}>
      <strong>{author || role}</strong>
      <div>{children}</div>
      {metadata}
    </li>
  );
}

export function ChatMessageBubble({ children }) {
  return <div className={styles.bubble}>{children}</div>;
}

export function ChatMessageMetadata({ children, dateTime }) {
  return (
    <footer className={styles.metadata}>
      {dateTime ? <time dateTime={dateTime}>{children}</time> : children}
    </footer>
  );
}

export function ChatSystemMessage({ children }) {
  return (
    <li className={styles.system}>
      <span>System</span> {children}
    </li>
  );
}

export function ChatToolCalls({ calls = [] }) {
  return (
    <ul className={styles.tools}>
      {calls.map((call) => (
        <li key={call.id}>
          <details>
            <summary>
              {call.name} — {call.status}
            </summary>
            <pre>
              {typeof call.output === 'string'
                ? call.output
                : JSON.stringify(call.output ?? call.arguments, null, 2)}
            </pre>
          </details>
        </li>
      ))}
    </ul>
  );
}
