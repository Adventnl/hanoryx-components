import { createContext, useContext, useId, useRef, useState } from 'react';
import { useControllable } from '../internal/useControllable';
import styles from './Chat.module.css';

const ComposerContext = createContext(null);
function useComposer() {
  const value = useContext(ComposerContext);
  if (!value) throw new Error('Composer parts must be inside ChatComposer.');
  return value;
}

/** A named conversation region. The caller owns messages, streaming and transport. */
export function Chat({ label = 'Conversation', children }) {
  return (
    <section className={styles.chat} aria-label={label}>
      {children}
    </section>
  );
}

/** A bounded conversation viewport with a separate composer slot. */
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

/** Scroll the supplied message-list ref to its latest message without moving focus. */
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

/** An ordered transcript. Announcements are opt-in to avoid rereading history. */
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

/** One transcript item; author names are visible, and role is never only a colour. */
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

/** Tool calls stay inspectable as native disclosures; arguments are rendered as text. */
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

/** A controlled or uncontrolled composer. Sending calls the host; no request is made here. */
export function ChatComposer({
  children,
  value,
  defaultValue = '',
  onChange,
  onSend,
  disabled = false,
  label = 'Message composer',
  clearOnSend = true,
}) {
  const [text, setText] = useControllable({ value, defaultValue, onChange });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const locked = useRef(false);
  const errorId = useId();
  async function send(event) {
    event.preventDefault();
    if (disabled || locked.current || !text.trim() || !onSend) return;
    const submitted = text;
    locked.current = true;
    setPending(true);
    setError('');
    try {
      await onSend(submitted);
      if (clearOnSend) setText('');
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Message could not be sent. Try again.');
    } finally {
      locked.current = false;
      setPending(false);
    }
  }
  return (
    <ComposerContext.Provider
      value={{
        text,
        setText,
        disabled: disabled || pending,
        canSend: Boolean(onSend && text.trim()),
        errorId: error ? errorId : undefined,
      }}
    >
      <form className={styles.composer} aria-label={label} onSubmit={send} aria-busy={pending}>
        {children || (
          <>
            <ChatComposerInput />
            <ChatSendButton />
          </>
        )}
        {error && (
          <p id={errorId} role="alert">
            {error}
          </p>
        )}
      </form>
    </ComposerContext.Provider>
  );
}

export function ChatComposerInput({ label = 'Message', placeholder = 'Write a message…', rows = 3 }) {
  const { text, setText, disabled, errorId } = useComposer();
  const id = useId();
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        aria-describedby={errorId}
      />
    </div>
  );
}

export function ChatSendButton({ children = 'Send' }) {
  const { disabled, canSend } = useComposer();
  return (
    <button className={styles.button} type="submit" disabled={disabled || !canSend}>
      {children}
    </button>
  );
}

export function ChatComposerDrawer({ title = 'Attachments and tools', children }) {
  return (
    <details className={styles.drawer}>
      <summary>{title}</summary>
      {children}
    </details>
  );
}

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

/** Dictation is supplied by the host so browser support and consent remain explicit. */
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

/** Render tokenized text safely as React text; tokens can carry a visible label. */
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
