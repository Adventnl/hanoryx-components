/* Documentation for Spinner. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Spinner",
  "area": "kit",
  "family": "feedback",
  "summary": "A small “working on it” ring. It is a status message first — the label is announced — and a picture second. It stops turning for visitors who ask for less motion.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "default": "\"Loading\"",
      "description": "The words announced (and shown)."
    },
    {
      "name": "size",
      "type": "string",
      "default": "\"1.6rem\"",
      "description": "The ring’s size, as a CSS length."
    },
    {
      "name": "hideLabel",
      "type": "boolean",
      "default": "false",
      "description": "Keep the label for screen readers only."
    }
  ],
  "keyboard": [
    {
      "key": "—",
      "does": "Not interactive."
    }
  ],
  "notes": [
    "If the wait is long enough to need a spinner, it is long enough to say what it is waiting for."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Spinner label=\"Saving\" />\n<Spinner label=\"Working\" hideLabel />"
    }
  ]
};
