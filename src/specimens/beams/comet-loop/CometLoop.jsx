import c from "../beams.module.css";
import { Sv } from "../shared";

/* 21 */ export const CometLoop = () => <Sv label="A comet with a tail on a loop"><ellipse cx="55" cy="32" rx="40" ry="20" className={c.base} /><ellipse cx="55" cy="32" rx="40" ry="20" pathLength="100" className={c.comet} /></Sv>;
