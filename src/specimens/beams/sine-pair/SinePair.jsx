import c from "../beams.module.css";
import { Sv } from "../shared";

/* 24 */ export const SinePair = () => <Sv label="Two sine beams">{[0, 1].map((k) => <path key={k} className={c.sine} style={{ stroke: k ? '#60a5fa' : '#ff4d4d', animationDelay: `${-k * 1.1}s` }} d="M-10 32q15-30 30 0t30 0t30 0t30 0" />)}</Sv>;
