import { G } from './shared';

export const ChargeAmmeter = G({ title: 'AMPS', unit: 'A', min: -40, max: 40, major: 20, sweep: 140, bands: [[-40, 0, 'red'], [0, 40, 'green']], init: 0.6 });
