import { usePointer } from '../../stage/pointerVars';
import c from './lenses.module.css';

export function Area({ label, className = '', children, auto = true, ...rest }) {
  const [ref, bind] = usePointer(auto);
  return <div ref={ref} className={`${c.area} ${className}`} role="application" aria-label={`${label}. Move the pointer here, or use the arrow keys.`} tabIndex={0} {...bind} {...rest}>{children}</div>;
}

export const COPY = 'Small type rewards a closer look, and a lens is how you give it one.';

export const Scene = ({ className = '' }) => <div className={`${c.scene} ${className}`} aria-hidden="true"><i /><b /><u /></div>;
