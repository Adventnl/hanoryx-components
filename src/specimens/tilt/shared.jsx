

/* ---------- helpers ---------- */

/** -1..1 either side of the middle, or 0 when nothing is pointing */
export const lean = (p) => ({ x: p ? (p.x - 50) / 50 : 0, y: p ? (p.y - 50) / 50 : 0 });
