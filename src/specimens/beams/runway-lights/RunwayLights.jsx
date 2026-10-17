import c from "../beams.module.css";

/* 31 */ export const RunwayLights = () => <div className={c.sw} role="img" aria-label="Runway lights running toward you"><div className={c.run}>{Array.from({ length: 8 }, (_, k) => <i key={k} style={{ '--k': k }} />)}</div></div>;
