/* Documentation for Switch. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Switch",
  "area": "kit",
  "family": "inputs",
  "summary": "An on/off switch for a setting that takes effect at once. A button with role switch, so Space and Enter flip it and a screen reader says “on” or “off”.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "The setting’s name; also the accessible name."
    },
    {
      "name": "checked",
      "description": "onChange receives the new state."
    },
    {
      "name": "defaultChecked",
      "description": "onChange receives the new state."
    },
    {
      "name": "onChange",
      "description": "onChange receives the new state."
    },
    {
      "name": "showState",
      "type": "boolean",
      "default": "true",
      "description": "Write “On” or “Off” beside it."
    }
  ],
  "keyboard": [
    {
      "key": "Space / Enter",
      "does": "Flip the switch."
    }
  ],
  "notes": [
    "Use a checkbox for something that waits for a Save button; use a switch for something that happens as you flip it.",
    "On and off are told apart by position and by a word, not only by colour."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Switch label=\"Email me when a deploy fails\" checked={on} onChange={setOn} />"
    }
  ]
};
