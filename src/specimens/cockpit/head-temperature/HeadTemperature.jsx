import { G } from "../shared";

export const HeadTemperature = G({ title: 'CHT', unit: '°C', min: 100, max: 260, major: 40, sweep: 200, bands: [[120, 220, 'green'], [220, 260, 'red']], init: 0.5 });
