/* Documentation for Checkbox. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Checkbox",
  "area": "kit",
  "family": "inputs",
  "summary": "A checkbox with room for a hint. It is a real input — the square is drawn beside it — and it supports the indeterminate “some of them” state of a parent box.",
  "props": [
    {
      "name": "label",
      "type": "node",
      "description": "The text beside the box."
    },
    {
      "name": "hint",
      "type": "string",
      "description": "A smaller line under the label."
    },
    {
      "name": "checked",
      "description": "onChange receives (checked, event)."
    },
    {
      "name": "defaultChecked",
      "description": "onChange receives (checked, event)."
    },
    {
      "name": "onChange",
      "description": "onChange receives (checked, event)."
    },
    {
      "name": "indeterminate",
      "type": "boolean",
      "default": "false",
      "description": "The mixed state of a parent whose children differ."
    }
  ],
  "keyboard": [
    {
      "key": "Space",
      "does": "Toggles it."
    }
  ],
  "notes": [
    "Indeterminate is a display state only: it becomes checked or unchecked when pressed.",
    "The whole label is the click target."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Checkbox label=\"Send the weekly summary\" checked={on} onChange={setOn} />"
    }
  ]
};
