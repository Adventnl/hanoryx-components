import c from './studio.module.css';
import { useLevels } from './shared';

/* 35 */ export function LoudnessBar() {
  const [l] = useLevels(1, 200);
  const v = 0.35 + l * 0.4;
  return <div className={c.lufs} role="img" aria-label={`Loudness ${(-30 + v * 22).toFixed(1)} LUFS`}><i style={{ width: `${v * 100}%` }} /><b /><span>{(-30 + v * 22).toFixed(1)} LUFS</span></div>;
}
