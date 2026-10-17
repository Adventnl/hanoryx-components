/* Documentation for Segmented. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Segmented",
  "area": "kit",
  "family": "inputs",
  "summary": "A short row of exclusive choices drawn as one control, with an ink that glides to the chosen one. Radio buttons underneath.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "Names the group for assistive technology."
    },
    {
      "name": "options",
      "type": "array",
      "default": "[]",
      "description": "Strings, or { value, label }."
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
    }
  ],
  "keyboard": [
    {
      "key": "← →",
      "does": "Choose the previous or next segment."
    },
    {
      "key": "Tab",
      "does": "Enter and leave the control."
    }
  ],
  "notes": [
    "For choices that switch a panel of content, use Tabs. Segmented is for settings, not for pages.",
    "Keep to two to five short options."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Segmented label=\"Range\" options={['Day', 'Week', 'Month']} value={view} onChange={setView} />"
    }
  ]
};
