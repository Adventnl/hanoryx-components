import styles from './AppShell.module.css';

export function AppShell({ header, navigation, children, footer, label = 'Application' }) {
  return <div className={styles.shell} aria-label={label}><header>{header}</header><div className={styles.body}><aside>{navigation}</aside><div className={styles.content}>{children}</div></div>{footer && <footer>{footer}</footer>}</div>;
}
