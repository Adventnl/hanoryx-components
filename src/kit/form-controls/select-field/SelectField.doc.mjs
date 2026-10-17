/* Documentation for SelectField. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SelectField",
  "area": "kit",
  "family": "inputs",
  "summary": "A native select, styled. Native on purpose: the platform’s own keyboard handling, its picker on a phone and its screen-reader behaviour come for free.",
  "props": [
    {
      "name": "options",
      "type": "array",
      "default": "[]",
      "description": "Strings, or { value, label, disabled }."
    },
    {
      "name": "value",
      "description": "onChange receives the chosen value."
    },
    {
      "name": "defaultValue",
      "description": "onChange receives the chosen value."
    },
    {
      "name": "onChange",
      "description": "onChange receives the chosen value."
    },
    {
      "name": "placeholder",
      "type": "string",
      "description": "A disabled first option shown until something is chosen."
    }
  ],
  "keyboard": [
    {
      "key": "↑ / ↓",
      "does": "Change the option (the platform’s own behaviour)."
    },
    {
      "key": "Space / Enter",
      "does": "Open the list."
    },
    {
      "key": "Type a letter",
      "does": "Jump to an option that starts with it."
    }
  ],
  "notes": [
    "Use a Combobox when the list is long enough that people will want to type."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<SelectField label=\"Environment\" options={['Development', 'Staging', 'Production']} />"
    }
  ]
};
