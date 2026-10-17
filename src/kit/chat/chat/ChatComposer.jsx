import { createContext, useContext, useId, useRef, useState } from 'react';
import { useControllable } from "../../internal/useControllable";
import styles from "./Chat.module.css";

const ComposerContext = createContext(null);
function useComposer() {
  const value = useContext(ComposerContext);
  if (!value) throw new Error('Composer parts must be inside ChatComposer.');
  return value;
}


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
