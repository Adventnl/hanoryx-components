/* Documentation for RichText. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "RichText",
  "area": "fx",
  "summary": "Inline markup for copy that lives in plain data files: `**bold**`, `` `code` `` and `{{defined term}}`. A term with an entry in `terms` becomes a focusable word whose definition appears on hover or focus.",
  "props": [
    {
      "name": "text",
      "type": "string",
      "required": true
    },
    {
      "name": "terms",
      "type": "{ [term]: definition }"
    },
    {
      "name": "highlight",
      "type": "string[]",
      "description": "Lowercase words to wrap in `<mark>`."
    }
  ],
  "sizing": {
    "rules": [
      "Returns inline nodes; put it inside a `p` and size the paragraph."
    ]
  },
  "related": [
    "Markdown"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<p><RichText text=\"A **bold** claim and a {{term}}.\" terms={{ term: 'A word the page explains.' }} /></p>"
    }
  ]
};
