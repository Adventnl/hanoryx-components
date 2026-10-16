import clsx from 'clsx';
import styles from './primitives.module.css';

/**
 * The page width: centred, `--maxw` (1360 px, gutters included) with a fluid
 * gutter of 20–80 px (`--gutter`). `size="text"` narrows it to a reading column
 * (`--maxw-text`, 760 px, plus the gutters).
 */
export default function Container({ as: Tag = 'div', size = 'default', className, children, ...rest }) {
  return <Tag className={clsx(styles.container, className)} data-size={size} {...rest}>{children}</Tag>;
}
