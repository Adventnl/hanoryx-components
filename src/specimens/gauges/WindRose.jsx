import c from './gauges.module.css';
import { useHot } from './shared';

/* 35 */ const ROSE_A = [0.52, 0.4, 0.62, 0.34, 0.8, 0.44, 0.3, 0.56, 0.7, 0.38, 0.5, 0.28, 0.6, 0.46, 0.36, 0.58];

const ROSE_B = [0.92, 0.6, 0.42, 0.7, 0.36, 0.84, 0.56, 0.3, 0.48, 0.94, 0.64, 0.4, 0.74, 0.34, 0.8, 0.5];

export function WindRose() {
  const [hot, h] = useHot();
  const L = hot ? ROSE_B : ROSE_A;
  return (
    <button type="button" className={c.rose} aria-label="Wind rose, hover to change the wind" {...h}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className={c.rail} cx="50" cy="50" r="40" />
        <circle className={c.rail} cx="50" cy="50" r="24" />
        {L.map((l, i) => <path key={i} style={{ '--i': i, '--l': l }} d="M50 50 L46.4 14 L50 6 L53.6 14Z" />)}
        <text x="50" y="-1" textAnchor="middle">N</text>
        <text x="104" y="52" textAnchor="middle">E</text>
        <text x="50" y="106" textAnchor="middle">S</text>
        <text x="-4" y="52" textAnchor="middle">W</text>
      </svg>
    </button>
  );
}
