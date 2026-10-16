import fs from 'node:fs';
import path from 'node:path';

const cache = new Map();
const visualBleed = {
  'figures/NumberLine': 'The end ticks and draggable point extend beyond the number-line track. Use the Specimen frame, which reserves a bed around the object.',
  'kinetic/ScatterWords': 'Scattered words deliberately translate beyond their button box. Use the Specimen frame and leave the measured visual overflow clear.',
  'tickers/LineMap': 'The train and stop labels extend beyond the endpoints of the line. Use the Specimen frame rather than placing the bare line against a viewport edge.',
  'editorial/Cutline': 'The vertical credit deliberately sits outside the image edge. The Specimen frame provides space for that credit.',
};

/** Document observable source facts rather than inventing a prop API for self-contained demos. */
export function specimenDocs(family, item, chapter, directory) {
  const file = path.join(directory, `${item.component}.jsx`);
  if (cache.has(file)) return cache.get(file);
  const source = fs.readFileSync(file, 'utf8');
  const hooks = [...new Set([...source.matchAll(/\b(use[A-Z]\w*)\(/g)].map((m) => m[1]))];
  const names = [...new Set([...source.matchAll(/aria-label=["']([^"']+)["']/g)].map((m) => m[1]))];
  const controls = [...new Set([...source.matchAll(/<(button|input|select|textarea)\b/g)].map((m) => m[1]))];
  const keyboard = [];
  const overflow = visualBleed[`${family.slug}/${item.component}`];
  const looping = hooks.some(hook => ['useLive', 'useTick', 'useCycle'].includes(hook));
  const standalone = { title: 'Standalone specimen', code: `<${item.component} />` };
  const framed = { title: 'Framed specimen with visibility gating', code: `import { Specimen } from 'hanoryx-components/stage';\nimport { ${item.component} } from 'hanoryx-components/specimens/${family.slug}';\n\n<Specimen no={${family.number}} i={0} name=${JSON.stringify(item.label)} mode=${JSON.stringify(item.mode)} slug=${JSON.stringify(family.slug)}>\n  <${item.component} />\n</Specimen>` };
  if (hooks.includes('useDrag')) keyboard.push({ key: 'Arrow keys / Page Up / Page Down', does: 'Adjust the slider; Home and End choose its limits. Focus the named slider first.' });
  if (controls.includes('button')) keyboard.push({ key: 'Tab, Enter / Space', does: 'Focus and activate the native buttons.' });
  if (controls.some((tag) => ['input', 'select', 'textarea'].includes(tag))) keyboard.push({ key: 'Tab', does: 'Focus the native form controls; their platform keyboard behaviour applies.' });
  if (/onKeyDown/.test(source) && !hooks.includes('useDrag')) keyboard.push({ key: 'Component-specific keys', does: 'This specimen defines an additional key handler; inspect the source before adapting its interaction.' });
  const info = {
    summary: `${item.label}: ${names.length ? names.slice(0, 3).join('; ') + '.' : family.line} ${item.mode === 'loop' ? 'Animated demonstration.' : `Interaction mode: ${item.mode}.`}`,
    description: `${family.blurb} This is a self-contained ${chapter?.title?.toLowerCase() ?? 'interface'} specimen, not a controlled application field.`,
    origin: 'hanoryx-web',
    examples: overflow || looping ? [framed, standalone] : [standalone, framed],
    keyboard,
    notes: [
      'This specimen accepts no public props. Its labels, data and initial state are part of the demonstration; use the interface kit when the host app must control values.',
      ...(names.length ? [`Accessible names in this source: ${names.join(', ')}.`] : []),
      ...(hooks.length ? [`Source hooks: ${hooks.join(', ')}. Shared interaction code is in src/stage/hooks.js.`] : []),
      'Import the family subpath to avoid loading other specimen families. Place it in a parent that accommodates its measured natural box.',
      ...(hooks.some(hook => ['useLive', 'useTick', 'useCycle'].includes(hook)) ? ['For continuous animation outside the showcase, place the object in Specimen from hanoryx-components/stage. That frame supplies the on-screen visibility gate.'] : []),
      ...(overflow ? [overflow] : []),
    ],
    sizing: { overflow, rules: ['Do not stretch, crop, or pad the specimen from outside. Centre its natural box inside a layout cell.', 'Measurements describe the standalone object. The family sheet adds a labelled specimen frame around it.', ...(overflow ? [overflow] : [])] },
    sourceFacts: { controls, hooks, accessibleNames: names },
    documented: true,
  };
  cache.set(file, info);
  return info;
}
