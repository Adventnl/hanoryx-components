/* Every recipe module, by slug, plus its source text for the docs page. */
const mods = import.meta.glob('./*.jsx', { eager: true });
const raws = import.meta.glob('./*.jsx', { eager: true, query: '?raw', import: 'default' });

export const recipes = Object.fromEntries(Object.entries(mods).map(([file, mod]) => [file.replace(/^\.\/|\.jsx$/g, ''), mod]));
export const recipeSource = Object.fromEntries(Object.entries(raws).map(([file, src]) => [file.replace(/^\.\/|\.jsx$/g, ''), src]));
