import c from "../beams.module.css";
import { Sv } from "../shared";

/* 39 */ export const CausticNet = () => <Sv label="A web of light curves">{Array.from({ length: 9 }, (_, k) => <path key={k} className={c.caustic} style={{ animationDelay: `${-k * 0.5}s` }} d={`M0 ${k * 8}C40 ${64 - k * 8} 70 ${k * 8} 110 ${64 - k * 8}`} />)}</Sv>;
