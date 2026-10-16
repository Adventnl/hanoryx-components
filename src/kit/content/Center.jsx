import clsx from 'clsx';
import styles from './primitives.module.css';

/**
 * A capped column, centred in its parent — for a form, a card or a short passage.
 * `max` is any CSS length (a rem value reads best: `36rem` = 576 px). Fills the
 * parent on a phone, stops at `max` on a desktop. `align="center"` centres the text too.
 */
export default function Center({ as: Tag = 'div', max = '36rem', align, className, children, style, ...rest }) {
  return <Tag className={clsx(styles.center, className)} data-text={align} style={{ '--max': max, ...style }} {...rest}>{children}</Tag>;
}
