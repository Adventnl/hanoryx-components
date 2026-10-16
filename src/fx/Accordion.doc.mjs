/* Documentation for Accordion. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Accordion",
  "area": "fx",
  "summary": "A disclosure list with real height animation: index, title and a mono code per row; the code scrambles on hover or focus, the plus turns, the body opens with eased height.",
  "keywords": [
    "faq",
    "collapse",
    "expand",
    "disclosure"
  ],
  "props": [
    {
      "name": "items",
      "type": "[{ id, title, meta, body }]",
      "required": true,
      "description": "`body` is a string or any node."
    },
    {
      "name": "single",
      "description": "Only one row open at a time."
    },
    {
      "name": "defaultOpen",
      "description": "The `id` of the row that starts open."
    },
    {
      "name": "numbered",
      "description": "Show `01`, `02`… before each title."
    }
  ],
  "keyboard": [
    {
      "key": "Enter / Space",
      "does": "Open or close the focused row."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Use it for 3–8 related rows of short text."
      },
      {
        "do": false,
        "text": "Hide content a reader needs to compare — use a table."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Fills its parent. Put it in a column no narrower than 20rem."
    ]
  },
  "related": [
    "Disclosure",
    "FaqBlock"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Accordion defaultOpen=\"one\" items={[{ id: 'one', title: 'Scope', meta: 'S-01', body: 'Say what the system will do.' }]} />"
    }
  ]
};
