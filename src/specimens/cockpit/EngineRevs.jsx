import { G } from './shared';

export const EngineRevs = G({ title: 'RPM', unit: 'x100', min: 0, max: 30, major: 5, sweep: 240, bands: [[5, 25, 'green'], [25, 30, 'red']], init: 0.6 });
