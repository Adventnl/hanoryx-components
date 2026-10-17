/* Documentation for Center. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Center",
  "area": "kit",
  "family": "content",
  "origin": "new",
  "summary": "A capped column, centred in its parent — for a form, a card or a short passage. Fills the parent on a phone, stops at `max` on a desktop. New in this library.",
  "keywords": [
    "center",
    "column",
    "form",
    "width"
  ],
  "props": [
    {
      "name": "max",
      "type": "CSS length",
      "default": "'36rem'",
      "description": "The widest it gets. rem reads best: 36rem = 576 px."
    },
    {
      "name": "align",
      "type": "'center'",
      "description": "Also centre the text."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Use it instead of `margin: auto` and a fixed width."
      }
    ]
  },
  "sizing": {
    "rules": [
      "capped: width = min(parent, max)."
    ]
  },
  "related": [
    "Container",
    "Stack"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Center max=\"36rem\"><Card title=\"Sign in\">…</Card></Center>"
    }
  ]
};
