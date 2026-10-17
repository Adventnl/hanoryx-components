import c from "../beams.module.css";
import { Sv } from "../shared";

/* 37 */ export const FibreBundle = () => <Sv label="A bundle of fibres converging">{Array.from({ length: 11 }, (_, k) => <path key={k} className={c.strand} style={{ animationDelay: `${-k * 0.3}s`, stroke: `hsl(${200 + k * 12}, 90%, 66%)`, animationDuration: '3.6s' }} d={`M0 ${6 + k * 5}C40 ${6 + k * 5} 50 32 110 32`} />)}</Sv>;
