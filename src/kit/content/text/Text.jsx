import clsx from 'clsx';
import styles from "../../internal/styles/primitives.module.css";

/**
 * Text in one of the three voices (Inter for reading, JetBrains Mono for labels):
 *
 *   variant  'body' (16 px, loose) · 'lead' (the sentence under a title) · 'small' (14 px)
 *            'caption' (12 px) · 'label' (mono, uppercase, tracked)
 *   tone     'default' (65 % white) · 'strong' (100 %) · 'dim' (50 %) · 'red'
 *   measure  cap the line at 62ch
 *
 * Renders a `<p>` (a `<span>` for `label`); `as` overrides it.
 */
export default function Text({ variant = 'body', tone = 'default', measure = false, as, className, children, ...rest }) {
  const Tag = as ?? (variant === 'label' ? 'span' : 'p');
  return <Tag className={clsx(styles.text, className)} data-variant={variant} data-tone={tone} data-measure={measure || undefined} {...rest}>{children}</Tag>;
}
