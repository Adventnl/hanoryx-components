import { Link } from '../../action/link/Link';
import styles from './Inline.module.css';

export function Code({ children }) { return <code className={styles.code}>{children}</code>; }
export function Kbd({ children }) { return <kbd className={styles.kbd}>{children}</kbd>; }
export function Citation({ children, to, href, label }) {
  return <cite className={styles.citation}>{to || href ? <Link to={to} href={href} aria-label={label}>{children}</Link> : children}</cite>;
}
export function Token({ children, onRemove, label }) {
  return <span className={styles.token}>{children}{onRemove && <button type="button" aria-label={`Remove ${label ?? children}`} onClick={onRemove}>×</button>}</span>;
}
/** Decorative by default. Supply label when the glyph conveys information. */
export function Icon({ icon: Glyph, label, size = '1em' }) {
  return <span className={styles.icon} role={label ? 'img' : undefined} aria-label={label} aria-hidden={!label || undefined} style={{ '--icon-size': size }}>{Glyph && <Glyph aria-hidden="true" />}</span>;
}
export function Thumbnail({ src, alt = '', ratio = '1 / 1', fallback = 'No image' }) {
  return <span className={styles.thumbnail} style={{ aspectRatio: ratio }}>{src ? <img src={src} alt={alt} loading="lazy" /> : <span role="img" aria-label={alt || fallback}>{fallback}</span>}</span>;
}
