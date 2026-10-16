/* Documentation for NumbersBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "NumbersBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A row of figures with how they moved, and a line if there is a series.",
  "keywords": [
    "numbers",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'numbers', … }",
      "required": true,
      "description": "The block's data: items[{ label, value, unit, change, series[] }], note. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'numbers'`), not on its own."
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
      "title": "A real numbers block",
      "code": "{\n  \"type\": \"numbers\",\n  \"anchor\": \"numbers\",\n  \"railLabel\": \"Numbers\",\n  \"scene\": \"status-pulse-grid\",\n  \"eyebrow\": \"Block · numbers\",\n  \"title\": \"The block system, counted.\",\n  \"items\": [\n    {\n      \"label\": \"Pages\",\n      \"value\": 86\n    },\n    {\n      \"label\": \"Kinds of block\",\n      \"value\": 20\n    },\n    {\n      \"label\": \"Interface components\",\n      \"value\": 61\n    },\n    {\n      \"label\": \"Legal documents\",\n      \"value\": 10\n    }\n  ],\n  \"note\": \"Counts of what is on the site, worked out from its own data when the page is built. They are not measurements of anything.\"\n}"
    }
  ]
};
