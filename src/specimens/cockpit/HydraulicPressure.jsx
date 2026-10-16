import { G } from './shared';

export const HydraulicPressure = G({ title: 'HYD', unit: 'x1000 PSI', min: 0, max: 4, major: 1, sweep: 200, bands: [[2.5, 3.5, 'green'], [3.5, 4, 'red']], init: 0.7, digits: 1 });
