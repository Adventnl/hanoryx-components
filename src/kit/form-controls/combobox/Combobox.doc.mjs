/* Documentation for Combobox. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Combobox",
  "area": "kit",
  "family": "inputs",
  "summary": "An editable combobox: type to filter, move through the matches with the arrow keys, choose with Enter. Focus stays in the input; the highlighted option is named with aria-activedescendant.",
  "props": [
    {
      "name": "options",
      "type": "array",
      "default": "[]",
      "description": "Strings, or { value, label }."
    },
    {
      "name": "value",
      "description": "onChange receives the chosen value, not the typed text."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives the chosen value, not the typed text."
    },
    {
      "name": "onChange",
      "description": "onChange receives the chosen value, not the typed text."
    },
    {
      "name": "onSelect",
      "type": "function",
      "description": "Called with the chosen option."
    },
    {
      "name": "emptyText",
      "type": "string",
      "default": "\"Nothing matches.\"",
      "description": "Shown when the typed text matches nothing."
    }
  ],
  "keyboard": [
    {
      "key": "↓ / ↑",
      "does": "Open the list, then move through it."
    },
    {
      "key": "Home / End",
      "does": "First and last match."
    },
    {
      "key": "Enter",
      "does": "Choose the highlighted match."
    },
    {
      "key": "Esc",
      "does": "Close the list; pressed again, clear the field."
    },
    {
      "key": "Tab",
      "does": "Close the list and move on."
    }
  ],
  "notes": [
    "The ARIA 1.2 list-autocomplete pattern: role combobox on the input, listbox beside it, no focus movement.",
    "The part of each label that matched is marked.",
    "The list is only in the page while there are matches, so aria-controls never points at nothing."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Combobox label=\"Time zone\" options={zones} value={zone} onChange={setZone} />"
    }
  ]
};
