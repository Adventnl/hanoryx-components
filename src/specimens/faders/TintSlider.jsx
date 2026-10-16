import c from './faders.module.css';
import { Track } from './shared';

/* 32 */ export function TintSlider() {
  return <Track cls={c.tint} label="Tint" init={0.3}>{() => <i />}</Track>;
}
