import { G } from "../shared";

export const BusVoltage = G({ title: 'VOLTS', unit: 'V', min: 10, max: 16, major: 1, sweep: 200, bands: [[10, 12, 'red'], [12, 15, 'green'], [15, 16, 'amber']], init: 0.65, digits: 1 });
