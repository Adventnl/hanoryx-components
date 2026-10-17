import c from "../beams.module.css";
import { Lit, Sv } from "../shared";

/* 03 */ export const ChipPads = () => (
  <Sv label="A trace ending in three pads that light up">
    <Lit d="M6 32H44" dur={2.4} len={16} />
    {[12, 32, 52].map((y, k) => <g key={y}><Lit d={`M44 32L60 ${y}H92`} dur={2.4} delay={0.4} len={16} /><circle cx="98" cy={y} r="4" className={c.pad} style={{ animationDelay: `${0.9 + k * 0.1}s` }} /></g>)}
  </Sv>
);
