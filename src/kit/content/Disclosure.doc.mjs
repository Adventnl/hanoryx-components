/* Documentation for Disclosure. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Disclosure",
  "area": "kit",
  "family": "content",
  "summary": "One section that opens and closes — a question and its answer, a “more detail”. The closed body is out of the tab order and the reading order, not only out of sight.",
  "props": [
    {
      "name": "title",
      "type": "string",
      "description": "The heading’s text; the button inside it opens and closes."
    },
    {
      "name": "open",
      "description": "Controlled or not."
    },
    {
      "name": "defaultOpen",
      "description": "Controlled or not."
    },
    {
      "name": "onChange",
      "description": "Controlled or not."
    },
    {
      "name": "as",
      "type": "string",
      "default": "\"h3\"",
      "description": "The heading element."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "Open or close."
    }
  ],
  "notes": [
    "Several in a row make an accordion. The fx Accordion adds numbering and a scrambling code."
  ],
  "examples": [
    {
      "title": "Basic usage",
      "code": "<Disclosure title=\"What does idempotent mean?\" defaultOpen>Doing it twice has the same effect as once.</Disclosure>"
    }
  ]
};
