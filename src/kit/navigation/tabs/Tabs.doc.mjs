/* Documentation for Tabs. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Tabs",
  "area": "kit",
  "family": "navigation",
  "summary": "Tabs that change a panel of content, as the ARIA pattern asks: one tab stop for the list, arrow keys move between tabs and show the panel at once.",
  "props": [
    {
      "name": "tabs",
      "type": "array",
      "default": "[]",
      "description": "{ id, label, content }."
    },
    {
      "name": "value",
      "description": "The id of the selected tab."
    },
    {
      "name": "defaultValue",
      "description": "The id of the selected tab."
    },
    {
      "name": "onChange",
      "description": "The id of the selected tab."
    },
    {
      "name": "label",
      "type": "string",
      "description": "Names the tab list."
    }
  ],
  "keyboard": [
    {
      "key": "← →",
      "does": "Move to the previous or next tab, wrapping, and show its panel."
    },
    {
      "key": "Home / End",
      "does": "First and last tab."
    },
    {
      "key": "Tab",
      "does": "Leaves the list for the panel."
    }
  ],
  "notes": [
    "Only for choices that switch a panel. A selector that changes a nearby demo is a radio group (Segmented).",
    "The content of panels that are not shown is not rendered at all, and their panel element is hidden."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Tabs label=\"About the service\" tabs={[{ id: 'what', label: 'What it does', content: <p>…</p> }, { id: 'run', label: 'Running it', content: <p>…</p> }]} />"
    }
  ]
};
