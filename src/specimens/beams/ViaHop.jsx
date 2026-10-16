import c from './beams.module.css';
import { Lit, Sv } from './shared';

/* 05 */ export const ViaHop = () => (
  <Sv label="A trace hopping between layers through vias">
    <Lit d="M6 18H40" len={16} /><circle cx="44" cy="18" r="3.4" className={c.via} />
    <Lit d="M44 18V46H70" delay={0.5} len={16} /><circle cx="74" cy="46" r="3.4" className={c.via} />
    <Lit d="M74 46V18H104" delay={1.1} len={16} />
  </Sv>
);
