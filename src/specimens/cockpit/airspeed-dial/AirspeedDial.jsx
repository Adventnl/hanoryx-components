import { G } from "../shared";

export const AirspeedDial = G({ title: 'AIRSPEED', unit: 'KT', min: 0, max: 200, major: 20, bands: [[40, 110, 'green'], [110, 160, 'amber'], [160, 200, 'red']], labelEvery: 2 });
