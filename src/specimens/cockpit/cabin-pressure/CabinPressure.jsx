import { G } from "../shared";

export const CabinPressure = G({ title: 'CABIN', unit: 'PSI', min: 0, max: 10, major: 2, sweep: 220, bands: [[8, 10, 'red']], init: 0.35, digits: 1 });
