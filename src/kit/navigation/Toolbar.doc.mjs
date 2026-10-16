/* Documentation for Toolbar. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Toolbar",
  "area": "kit",
  "family": "navigation",
  "summary": "A row of tool buttons that is one tab stop; the arrow keys move between the tools. A tool can be a toggle, with aria-pressed.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Names the toolbar."
    },
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ id, label, icon?, toggle?, pressed?, onClick? } or { separator: true }."
    }
  ],
  "keyboard": [
    {
      "key": "← →",
      "does": "Move between tools, wrapping."
    },
    {
      "key": "Home / End",
      "does": "First and last tool."
    },
    {
      "key": "Enter / Space",
      "does": "Press the tool."
    },
    {
      "key": "Tab",
      "does": "Leave the toolbar."
    }
  ],
  "notes": [
    "Icon-only tools get their name from the label, which is also their tooltip.",
    "Roving tabindex: only the tool you last used is in the tab order."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Toolbar label=\"Text formatting\" items={[{ id: 'b', label: 'Bold', icon: Bold, toggle: true }, { id: 'i', label: 'Italic', icon: Italic, toggle: true }]} />"
    }
  ]
};
