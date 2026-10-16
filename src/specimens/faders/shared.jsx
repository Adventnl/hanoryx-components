import { useDrag } from '../../stage/hooks';

/* a track you drag along (thumb position as --v), with an aria-label */
export function Track({ cls, label, init = 0.5, steps = 0, mode = 'x', children, onValue }) {
  const [v, bind] = useDrag({ mode, init, steps, onChange: onValue });
  return <div className={cls} {...bind} aria-label={label} style={{ ...bind.style, '--v': v }}>{children(v)}</div>;
}
