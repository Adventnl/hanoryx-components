import { usePointer } from '../../stage/pointerVars';
import c from './stamps.module.css';

/* 05 */ export function FoilPlate() {
  const [ref, bind] = usePointer();
  return <div ref={ref} {...bind} className={c.foil} tabIndex={0} role="img" aria-label="A foil plate that catches the light"><b>HX</b></div>;
}
