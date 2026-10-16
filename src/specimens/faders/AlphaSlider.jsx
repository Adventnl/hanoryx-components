import c from './faders.module.css';
import { Track } from './shared';

/* 31 */ export function AlphaSlider() {
  return <Track cls={c.alpha} label="Opacity" init={0.65}>{(v) => <><u /><i /><span>{Math.round(v * 100)}%</span></>}</Track>;
}
