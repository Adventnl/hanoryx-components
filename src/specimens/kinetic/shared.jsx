

/* the letters of a word, each knowing its place in it */
export const chars = (text) => [...text].map((ch, i) => <span key={i} style={{ '--i': i }}>{ch === ' ' ? ' ' : ch}</span>);

/* 1 */ export const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@';
