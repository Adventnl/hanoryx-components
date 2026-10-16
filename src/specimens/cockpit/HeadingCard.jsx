import { useDrag } from '../../stage/hooks';
import { polar } from '../../stage/chartKit';
import c from './cockpit.module.css';

/* 18 */ export function HeadingCard() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.25, range: 360 });
  const hdg = (Math.round(v * 360) + 180) % 360;
  return (
    <div className={c.compass} {...bind} aria-label="Heading card, drag to turn" aria-valuetext={`${hdg} degrees`} style={{ ...bind.style, '--r': `${(v - 0.5) * -360}deg` }}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><g className={c.cardG}>{Array.from({ length: 36 }, (_, k) => { const [x1, y1] = polar(50, 50, 46, k * 10); const [x2, y2] = polar(50, 50, k % 3 === 0 ? 39 : 42, k * 10); return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} className={c.tickBig} />; })}{['N', 'E', 'S', 'W'].map((t, k) => { const [x, y] = polar(50, 50, 31, k * 90); return <text key={t} x={x} y={y} textAnchor="middle" dominantBaseline="central" className={c.num} transform={`rotate(${k * 90} ${x} ${y})`}>{t}</text>; })}</g><path d="M50 6l4 8h-8z" className={c.bug} /></svg>
      <b>{String(hdg).padStart(3, '0')}°</b>
    </div>
  );
}
