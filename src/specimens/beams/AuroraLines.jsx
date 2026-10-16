import c from './beams.module.css';
import { Sv } from './shared';

/* 19 */ export const AuroraLines = () => <Sv label="Ribbons of aurora">{[0, 1, 2].map((k) => <path key={k} className={c.aurora} style={{ animationDelay: `${-k * 1.6}s`, stroke: ['#6ee7b7', '#60a5fa', '#c084fc'][k], strokeWidth: 9 - k * 2 }} d={`M-5 ${34 + k * 4}C25 ${6 + k * 8} 55 ${58 - k * 6} 115 ${26 + k * 6}`} />)}</Sv>;
