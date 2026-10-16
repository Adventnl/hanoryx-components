import c from './beams.module.css';
import { Sv } from './shared';

/* 06 */ export const FibreStrands = () => (
  <Sv label="Glowing fibre strands that sway">
    {[0, 1, 2, 3, 4].map((k) => <path key={k} className={c.strand} style={{ animationDelay: `${-k * 0.7}s`, stroke: `hsl(${190 + k * 22}, 90%, 65%)` }} d={`M0 ${14 + k * 9}C30 ${4 + k * 9} 60 ${30 + k * 6} 110 ${14 + k * 9}`} />)}
  </Sv>
);
