import { G } from "../shared";

export const GLoadMeter = G({ title: 'G', unit: 'G', min: -2, max: 6, major: 1, sweep: 240, bands: [[-2, -1, 'red'], [-1, 4, 'green'], [4, 6, 'amber']], init: 0.4, digits: 1 });
