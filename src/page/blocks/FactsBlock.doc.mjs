/* Documentation for FactsBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "FactsBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A fact sheet: labels and their values.",
  "keywords": [
    "facts",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'facts', … }",
      "required": true,
      "description": "The block's data: items[{ term, detail }], stacked. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
    },
    {
      "name": "accent",
      "description": "The page accent colour (`#ff3333`)."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Use it as a block in a page's `blocks[]` (`type: 'facts'`), not on its own."
      },
      {
        "do": false,
        "text": "Nest one block inside another."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Page-width section: `section.section > .container`. Never set a width or padding; the block brings its own."
    ]
  },
  "related": [
    "PageTemplate",
    "PageBlock"
  ],
  "examples": [
    {
      "title": "A real facts block",
      "code": "{\n  \"type\": \"facts\",\n  \"anchor\": \"facts\",\n  \"railLabel\": \"Facts\",\n  \"scene\": \"topographic-lines\",\n  \"eyebrow\": \"Block · facts\",\n  \"title\": \"The keys every block reads.\",\n  \"items\": [\n    {\n      \"term\": \"type\",\n      \"detail\": \"Which block to draw.\"\n    },\n    {\n      \"term\": \"anchor\",\n      \"detail\": \"An address on the page, so a link can point at the block.\"\n    },\n    {\n      \"term\": \"railLabel\",\n      \"detail\": \"The name the side rail shows for this block.\"\n    },\n    {\n      \"term\": \"scene\",\n      \"detail\": \"The Canvas scene drawn behind it.\"\n    },\n    {\n      \"term\": \"intensity\",\n      \"detail\": \"How strongly the scene is drawn: low, medium or hero.\"\n    },\n    {\n      \"term\": \"eyebrow, title, intro\",\n      \"detail\": \"The small label, the heading and the lead sentence at the head of the block.\"\n    }\n  ]\n}"
    }
  ]
};
