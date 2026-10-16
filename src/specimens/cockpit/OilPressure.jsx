import { G } from './shared';

export const OilPressure = G({ title: 'OIL PSI', unit: 'PSI', min: 0, max: 100, major: 20, sweep: 180, bands: [[0, 20, 'red'], [20, 60, 'green'], [60, 100, 'amber']] });
