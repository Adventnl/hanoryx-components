import styles from './Layout.module.css';

export function Layout({ children }) { return <div className={styles.layout}>{children}</div>; }
export function LayoutHeader({ children }) { return <header className={styles.header}>{children}</header>; }
export function LayoutContent({ children }) { return <div className={styles.content}>{children}</div>; }
export function LayoutFooter({ children }) { return <footer className={styles.footer}>{children}</footer>; }
export function LayoutPanel({ children, label = 'Panel' }) { return <aside className={styles.panel} aria-label={label}>{children}</aside>; }
export function FormLayout({ children, onSubmit, label = 'Form' }) { return <form className={styles.form} aria-label={label} onSubmit={onSubmit}>{children}</form>; }
export function GridSpan({ children, span = 1 }) { return <div style={{ gridColumn: `span ${Math.max(1, Math.floor(span))}` }}>{children}</div>; }
export function ScrollableArea({ children, label = 'Scrollable content', maxHeight = '24rem' }) {
  return <div className={styles.scroll} role="region" aria-label={label} tabIndex={0} style={{ maxHeight }}>{children}</div>;
}
