import { useDrag } from '../../stage/hooks';
import c from './tickers.module.css';

const STATIONS = [89.1, 94.7, 98.3, 101.9, 106.5];

export function RadioDial() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.46 });
  const mhz = 87.5 + v * 20.5;
  const locked = STATIONS.some((s) => Math.abs(s - mhz) < 0.3);
  return (
    <div className={c.fig}>
      <div {...bind} className={c.dial} aria-label="Tune the dial" aria-valuetext={`${mhz.toFixed(1)} megahertz`} style={{ ...bind.style, '--mhz': mhz.toFixed(2) }}>
        <span className={c.scale}>{Array.from({ length: 22 }, (_, i) => <i key={i}><b>{88 + i}</b></i>)}</span>
        <u className={c.needle} />
      </div>
      <p className={c.readout} data-lock={locked}>{mhz.toFixed(1)} <small>MHz</small> <em>{locked ? 'LOCKED' : 'SEARCH'}</em></p>
    </div>
  );
}
