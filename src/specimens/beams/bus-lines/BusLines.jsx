import { Lit, Sv } from "../shared";

/* 02 */ export const BusLines = () => <Sv label="Four traces carrying pulses">{[14, 26, 38, 50].map((y, k) => <Lit key={y} d={`M6 ${y}H40L48 ${y - 6 + k * 2}H104`} dur={2.2 + k * 0.3} delay={k * 0.4} len={12} />)}</Sv>;
