/** One family owns all its parts, including exports declared in companion modules. */
export function groupKit(entries) {
  const categories = new Map();
  for (const entry of entries) {
    if (!categories.has(entry.family)) categories.set(entry.family, new Map());
    const groups = categories.get(entry.family);
    const key = entry.group ?? entry.name;
    if (!groups.has(key)) groups.set(key, { key, title: key.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase()), entries: [] });
    groups.get(key).entries.push(entry);
  }
  for (const groups of categories.values()) for (const group of groups.values()) group.entries.sort((a, b) => a.name.localeCompare(b.name));
  return categories;
}
