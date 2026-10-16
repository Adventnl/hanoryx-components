/* Documentation for Chip. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Chip",
  "area": "kit",
  "family": "data",
  "summary": "A compact pill that can be plain information, a toggle (give it onClick; selected says whether it is on) and/or removable (give it onRemove).",
  "props": [
    {
      "name": "selected",
      "type": "boolean",
      "description": "Whether a toggle chip is on."
    },
    {
      "name": "onClick",
      "type": "function",
      "description": "Makes it a toggle button with aria-pressed."
    },
    {
      "name": "onRemove",
      "type": "function",
      "description": "Adds a separate close button named “Remove …”."
    }
  ],
  "keyboard": [
    {
      "key": "Space / Enter",
      "does": "Toggle, or press the remove button."
    }
  ],
  "notes": [
    "A filter set is a group of toggle chips; name the group with role=\"group\" and an aria-label."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Chip selected={on} onClick={toggle}>Operations</Chip>\n<Chip onRemove={drop}>security</Chip>"
    }
  ]
};
