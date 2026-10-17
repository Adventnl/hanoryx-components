import { G } from "../shared";

export const ExhaustTemperature = G({ title: 'EGT', unit: '°C', min: 400, max: 900, major: 100, sweep: 220, bands: [[500, 800, 'green'], [800, 900, 'red']], init: 0.45 });
