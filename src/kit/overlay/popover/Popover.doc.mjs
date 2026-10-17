/* Documentation for Popover. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Popover",
  "area": "kit",
  "family": "overlays",
  "summary": "A panel that opens under a button and holds anything — text, a small form, a few links. It is not modal: focus stays where it is and Tab moves on into the panel.",
  "props": [
    {
      "name": "label",
      "type": "string",
      "description": "The button’s text."
    },
    {
      "name": "title",
      "type": "string",
      "description": "A small heading inside the panel; also names it."
    },
    {
      "name": "align",
      "description": "Where the panel sits."
    },
    {
      "name": "placement",
      "description": "Where the panel sits."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "Open or close."
    },
    {
      "key": "Esc",
      "does": "Close and return to the button."
    },
    {
      "key": "Tab",
      "does": "Into the panel, which follows the button in the page."
    }
  ],
  "notes": [
    "A press outside closes it.",
    "If it must be answered before anything else, it is a dialog, not a popover."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Popover label=\"Share\" title=\"Share this view\">…</Popover>"
    }
  ]
};
