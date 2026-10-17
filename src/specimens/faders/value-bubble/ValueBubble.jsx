import c from "../faders.module.css";
import { Track } from "../shared";

/* 7 */ export function ValueBubble() {
  return <Track cls={c.bubble} label="Slider with value bubble" init={0.4}>{(v) => <><i /><b>{Math.round(v * 100)}</b></>}</Track>;
}
