/* Documentation for DropdownMenu. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "DropdownMenu",
  "area": "kit",
  "family": "navigation",
  "summary": "A button that opens a menu of actions — not a navigation; use links for that. The ARIA menu-button pattern, with typeahead.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "The button’s text and the menu’s name."
    },
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ label, onSelect, danger?, disabled? } or { separator: true }."
    },
    {
      "name": "align",
      "type": "\"start\" | \"end\"",
      "default": "\"start\"",
      "description": "Which edge of the button the menu lines up with."
    }
  ],
  "keyboard": [
    {
      "key": "↓ / Enter",
      "does": "Open the menu and move to the first item."
    },
    {
      "key": "↑",
      "does": "Open and move to the last item."
    },
    {
      "key": "↑ ↓ Home End",
      "does": "Move between items."
    },
    {
      "key": "A letter",
      "does": "Jump to the next item starting with it."
    },
    {
      "key": "Esc",
      "does": "Close and return to the button."
    },
    {
      "key": "Tab",
      "does": "Close and move on."
    }
  ],
  "notes": [
    "Focus moves into the menu when it opens and back to the button when it closes.",
    "Disabled items are skipped by the arrow keys."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<DropdownMenu label=\"Actions\" items={[{ label: 'Rename', onSelect: rename }, { separator: true }, { label: 'Delete…', onSelect: remove, danger: true }]} />"
    }
  ]
};
