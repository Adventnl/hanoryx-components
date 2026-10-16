

export const strip = (len) => Array.from({ length: len }, (_, i) => i % 10);

/* ---- little helpers ---- */
export const hms = (s) => [Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
