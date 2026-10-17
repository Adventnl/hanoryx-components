import clsx from 'clsx';
import styles from "../../internal/styles/primitives.module.css";

/**
 * A page block's outer shell: the vertical rhythm between blocks.
 *
 *   size   'md' (default) --section-pad, 80–176 px top and bottom
 *          'sm'           --section-pad-sm, 48–96 px (related blocks that read as one)
 *          'none'         no padding (the block pads itself)
 *
 * Put a `Container` inside. Never add padding or margin of your own.
 */
export default function Section({ as: Tag = 'section', size = 'md', className, children, ...rest }) {
  return <Tag className={clsx(styles.section, className)} data-size={size} {...rest}>{children}</Tag>;
}
