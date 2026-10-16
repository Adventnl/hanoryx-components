import { G } from './shared';

export const FuelQuantity = G({ title: 'FUEL', unit: 'GAL', min: 0, max: 40, major: 10, sweep: 120, bands: [[0, 5, 'red']], init: 0.7 });
