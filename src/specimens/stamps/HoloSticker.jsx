import { usePointer } from '../../stage/pointerVars';
import { Ico } from '../../stage/icons';
import c from './stamps.module.css';

/* 11 */ export function HoloSticker() {
  const [ref, bind] = usePointer();
  return <div ref={ref} {...bind} className={c.holo} tabIndex={0} role="img" aria-label="A holographic sticker"><Ico n="star" /></div>;
}
