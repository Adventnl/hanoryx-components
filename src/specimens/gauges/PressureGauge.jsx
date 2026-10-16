import c from './gauges.module.css';
import { Ticks, arc, useHot } from './shared';

/* 15 */ const BAR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export function PressureGauge() {
  const [hot, h] = useHot();
  return (
    <button type="button" className={c.press} style={{ '--v': hot ? 0.88 : 0.42 }} aria-label="Pressure gauge, hover to raise the pressure" {...h}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className={c.face} cx="50" cy="50" r="47" />
        <path className={c.hot} d={arc(50, 50, 40, 70, 135)} />
        <Ticks n={20} from={-135} to={135} r={45} len={3} major={2} majorLen={6} labels={BAR} labelR={31} />
        <text className={c.unit} x="50" y="72" textAnchor="middle">BAR</text>
        <g className={c.nd}><g className={c.jit}><path d="M50 13 L48.4 50 H51.6Z" /><path className={c.tail} d="M50 50 L48.6 63 H51.4Z" /></g></g>
        <circle className={c.hub} cx="50" cy="50" r="4.5" />
      </svg>
    </button>
  );
}
