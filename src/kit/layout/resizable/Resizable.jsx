import { createContext, useContext, useId } from 'react';
import { useResizable } from "./useResizable";
import styles from "./Resizable.module.css";

const ResizeContext = createContext(null);

/** Exactly two panels separated by ResizeHandle; the parent owns the overall size. */
export function Resizable({
  children,
  orientation = 'horizontal',
  value,
  defaultValue = 50,
  onChange,
  min = 10,
  max = 90,
  label = 'Resizable panels',
}) {
  const resize = useResizable({ value, defaultValue, onChange, min, max, orientation });
  const id = useId();
  return (
    <ResizeContext.Provider value={{ ...resize, id }}>
      <div
        className={styles.root}
        data-orientation={orientation}
        role="group"
        aria-label={label}
        style={{ '--split': `${resize.size}%` }}
      >
        {children}
      </div>
    </ResizeContext.Provider>
  );
}

export function ResizablePanel({ children, label, side = 'start' }) {
  const context = useContext(ResizeContext);
  if (!context) throw new Error('ResizablePanel must be inside Resizable.');
  return (
    <section id={`${context.id}-${side}`} className={styles.panel} aria-label={label}>
      {children}
    </section>
  );
}

export function ResizeHandle({ label = 'Resize panels' }) {
  const context = useContext(ResizeContext);
  if (!context) throw new Error('ResizeHandle must be inside Resizable.');
  return (
    <div
      {...context.handleProps}
      className={styles.handle}
      aria-label={label}
      aria-controls={`${context.id}-start ${context.id}-end`}
    />
  );
}
