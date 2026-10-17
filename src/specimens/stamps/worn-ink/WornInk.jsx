import { useId } from 'react';
import { useDrag } from "../../../stage/hooks";
import c from "../stamps.module.css";

/* 36 */ export function WornInk() {
  const id = `w${useId().replace(/\W/g, '')}`;
  const [v, bind] = useDrag({ mode: 'x', init: 0.45 });
  return (
    <div className={c.wornWrap}>
      <svg width="0" height="0" aria-hidden="true"><filter id={id}><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="n" /><feColorMatrix in="n" type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -${(4 + v * 6).toFixed(2)} ${(2.4 + v * 4.4).toFixed(2)}`} result="m" /><feComposite in="SourceGraphic" in2="m" operator="in" /></filter></svg>
      <b className={c.void} style={{ filter: `url(#${id})` }}>VOID</b>
      <div className={c.rail} {...bind} aria-label="Ink wear"><i style={{ width: `${v * 100}%` }} /></div>
    </div>
  );
}
