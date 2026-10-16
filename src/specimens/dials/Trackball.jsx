import c from './dials.module.css';
import { useStick } from './shared';

/* 27 */ export function Trackball() {
  const [p, bind] = useStick();
  return <div className={c.ball} {...bind} aria-label="Trackball" style={{ ...bind.style, '--x': p.x, '--y': p.y }}><i /></div>;
}
