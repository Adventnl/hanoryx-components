/* Documentation for OnThisPage. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "OnThisPage",
  "area": "kit",
  "family": "navigation",
  "summary": "An “on this page” list that follows the reader: the entry for the section nearest the top is marked, and pressing one scrolls there and moves focus to it.",
  "props": [
    {
      "name": "items",
      "type": "array",
      "default": "[]",
      "description": "{ id, label } where id is an element on the page."
    },
    {
      "name": "label",
      "type": "string",
      "default": "\"On this page\"",
      "description": "The nav landmark’s name."
    }
  ],
  "keyboard": [
    {
      "key": "Enter",
      "does": "Scroll to the section and focus it."
    }
  ],
  "notes": [
    "Marked with aria-current=\"location\".",
    "Scrolling is instant for people who prefer reduced motion.",
    "Focus moves to the section so the next Tab continues from it, rather than from the link."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<OnThisPage items={[{ id: 'intro', label: 'Introduction' }, { id: 'steps', label: 'Steps' }]} />"
    }
  ]
};
