import { usePointer } from '../../stage/pointerVars';
import c from './cursors.module.css';

export function Area({ label, className = '', children, auto = true, ...rest }) {
  const [ref, bind] = usePointer(auto);
  return <div ref={ref} className={`${c.area} ${className}`} role="application" aria-label={`${label}. Move the pointer here, or use the arrow keys.`} tabIndex={0} {...bind} {...rest}>{children}</div>;
}

export const dots = (n) => Array.from({ length: n }, (_, k) => <i key={k} style={{ '--k': k }} />);
