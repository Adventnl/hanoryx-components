import { G } from "../shared";

export const OilTemperature = G({ title: 'OIL TEMP', unit: '°C', min: 40, max: 140, major: 20, sweep: 200, bands: [[60, 110, 'green'], [110, 140, 'red']], init: 0.55 });
