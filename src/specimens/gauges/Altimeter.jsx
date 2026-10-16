import c from './gauges.module.css';
import { Ticks } from './shared';

/* 23 */ const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function Altimeter() {
  return (
    <div className={c.alti} role="img" aria-label="Altimeter with three turning hands">
      <svg viewBox="0 0 100 100">
        <circle className={c.face} cx="50" cy="50" r="47" />
        <Ticks n={50} from={0} to={360} r={44} len={3} major={5} majorLen={6} labels={DIGITS} labelR={32} closed />
        <g className={c.spin} style={{ animationDuration: '120s' }}><path className={c.short} d="M50 26 L47.4 50 H52.6Z" /></g>
        <g className={c.spin} style={{ animationDuration: '12s' }}><path d="M50 10 L48.6 50 H51.4Z" /></g>
        <g className={c.spin} style={{ animationDuration: '2.4s' }}><path className={c.thin} d="M50 6 V58" /></g>
        <circle className={c.hub} cx="50" cy="50" r="4" />
      </svg>
    </div>
  );
}
