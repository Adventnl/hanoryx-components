/* Documentation for Tree. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Tree",
  "area": "kit",
  "family": "data",
  "summary": "An expandable tree — files, categories, an outline — following the ARIA tree-view pattern: one tab stop, arrow keys through what is visible.",
  "props": [
    {
      "name": "nodes",
      "type": "array",
      "default": "[]",
      "description": "{ id, label, children? }, nested to any depth."
    },
    {
      "name": "defaultOpen",
      "type": "string[]",
      "default": "[]",
      "description": "Ids of branches that start open."
    },
    {
      "name": "onSelect",
      "type": "function",
      "description": "Called with the chosen node."
    }
  ],
  "keyboard": [
    {
      "key": "↓ / ↑",
      "does": "Next or previous visible item."
    },
    {
      "key": "→",
      "does": "Open a closed branch; on an open one, step into it."
    },
    {
      "key": "←",
      "does": "Close an open branch; on a closed one or a leaf, step out to the parent."
    },
    {
      "key": "Home / End",
      "does": "First and last visible item."
    },
    {
      "key": "Enter / Space",
      "does": "Choose (and open or close) the item."
    }
  ],
  "notes": [
    "aria-level, aria-setsize and aria-posinset are set, so a screen reader can say “3 of 5, level 2”."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Tree label=\"Project files\" defaultOpen={['src']} onSelect={(node) => open(node.id)} nodes={[{ id: 'src', label: 'src', children: [{ id: 'main', label: 'main.jsx' }] }]} />"
    }
  ]
};
