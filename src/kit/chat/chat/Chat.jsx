import styles from './Chat.module.css';

export function Chat({ label = 'Conversation', children }) {
  return (
    <section className={styles.chat} aria-label={label}>
      {children}
    </section>
  );
}

export function ChatLayout({ children, composer, label = 'Conversation', maxHeight = '32rem' }) {
  return (
    <section className={styles.layout} aria-label={label}>
      <div className={styles.scroll} style={{ maxHeight }}>
        {children}
      </div>
      {composer}
    </section>
  );
}

export function ChatLayoutScrollButton({ targetRef, children = 'Latest message' }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => targetRef.current?.lastElementChild?.scrollIntoView({ block: 'nearest' })}
    >
      {children}
    </button>
  );
}
