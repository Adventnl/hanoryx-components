import { mkShift } from './shared';

export const SideLadder = mkShift('Side ladder', ['tri', 'diamond', 'pent', 'hex', 'oct', 'dodec', 'circle'], { auto: true, ms: 1100 });
