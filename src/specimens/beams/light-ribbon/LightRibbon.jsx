import c from "../beams.module.css";
import { Sv } from "../shared";

/* 27 */ export const LightRibbon = () => <Sv label="A ribbon of light"><defs><linearGradient id="bmrib" x1="0" x2="1"><stop offset="0" stopColor="#ff4d4d" stopOpacity="0" /><stop offset="0.5" stopColor="#ff9a4d" /><stop offset="1" stopColor="#ffe08a" stopOpacity="0" /></linearGradient></defs><path className={c.rib} d="M0 50C30 6 50 62 110 14" stroke="url(#bmrib)" /></Sv>;
