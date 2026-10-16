/* Documentation for PageBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "PageBlock",
  "area": "page",
  "family": "template",
  "summary": "The block dispatcher: draws one block from `{ type, … }`. Built-in types render directly; the data-first kinds are lazy chunks.",
  "props": [
    {
      "name": "block",
      "type": "{ type, … }",
      "required": true
    },
    {
      "name": "accent"
    }
  ],
  "related": [
    "PageTemplate"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<PageBlock accent=\"#ff3333\" block={{ type: 'callout', tone: 'note', heading: 'Note', body: ['Text.'] }} />"
    }
  ]
};
