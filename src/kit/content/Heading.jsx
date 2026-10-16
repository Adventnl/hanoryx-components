import clsx from 'clsx';
import styles from './primitives.module.css';

const DEFAULT_SIZE = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h4', 6: 'h4' };

/**
 * A heading in the serif voice. `level` is the HTML element (h1–h6, for the
 * outline); `size` is how it looks, from the type scale:
 * 'display' · 'hero' · 'h1' · 'h2' · 'h3' · 'h4'. They are separate on purpose:
 * the outline is about structure, the size is about the design.
 * Sizes are fluid tokens (`--fs-*`): never set a font size on it.
 */
export default function Heading({ level = 2, size, as, className, children, ...rest }) {
  const Tag = as ?? `h${Math.min(6, Math.max(1, level))}`;
  return <Tag className={clsx(styles.heading, className)} data-size={size ?? DEFAULT_SIZE[level]} {...rest}>{children}</Tag>;
}
