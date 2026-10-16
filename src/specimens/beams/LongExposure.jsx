import c from './beams.module.css';
import { Sv } from './shared';

/* 33 */ export const LongExposure = () => <Sv label="Long-exposure light trails">{[0, 1, 2, 3].map((k) => <path key={k} className={c.trail} style={{ animationDelay: `${-k * 0.9}s`, stroke: k % 2 ? '#ff4d4d' : '#ffe08a' }} d={`M-6 ${52 - k * 8}C30 ${50 - k * 14} 60 ${26 - k * 3} 116 ${6 + k * 6}`} />)}</Sv>;
