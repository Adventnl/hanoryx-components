import { G } from "../shared";

export const ManifoldPressure = G({ title: 'MAP', unit: 'IN HG', min: 10, max: 35, major: 5, sweep: 250, bands: [[15, 28, 'green'], [28, 35, 'red']], init: 0.5 });
