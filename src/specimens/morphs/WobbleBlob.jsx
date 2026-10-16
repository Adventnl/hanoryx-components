import { mkShift } from './shared';

export const WobbleBlob = mkShift('Wobble blob', ['blob1', 'blob2', 'blob3', 'blob4'], { auto: true, ms: 1700 });
