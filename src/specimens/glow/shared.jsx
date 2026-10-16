

/* ---------- helpers ---------- */

/** the pointer as CSS: where the light is, and whether it is on */
export const light = (p, at = [50, 40]) => ({ '--lx': `${p ? p.x : at[0]}%`, '--ly': `${p ? p.y : at[1]}%`, '--on': p ? 1 : 0.45 });
