import c from './cursors.module.css';
import { Area } from './shared';

/* 17 */ export function GooeyBlob() {
  return (
    <Area label="Gooey blob" className={c.blob}>
      <svg width="0" height="0" aria-hidden="true" focusable="false"><defs><filter id="cursors-goo"><feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" /><feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" /></filter></defs></svg>
      <div><i /><i /></div>
    </Area>
  );
}
