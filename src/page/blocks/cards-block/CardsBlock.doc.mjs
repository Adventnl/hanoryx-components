/* Documentation for CardsBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CardsBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A grid, rail or bento of cards, each with a glyph that redraws, linking to a page.",
  "keywords": [
    "cards",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'cards', … }",
      "required": true,
      "description": "The block's data: items[{ code, title, body, to, tags, status }], variant. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'cards'`), not on its own."
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
      "title": "A real cards block",
      "code": "{\n  \"type\": \"cards\",\n  \"variant\": \"grid\",\n  \"anchor\": \"surfaces\",\n  \"railLabel\": \"Control surfaces\",\n  \"scene\": \"musebase-coordination\",\n  \"eyebrow\": \"Surfaces\",\n  \"title\": \"Control surfaces.\",\n  \"items\": [\n    {\n      \"code\": \"CS.01\",\n      \"title\": \"Scheduling matrix\",\n      \"body\": \"A dense view of time, resource and dependency in one grid.\",\n      \"glyph\": \"calendar\"\n    },\n    {\n      \"code\": \"CS.02\",\n      \"title\": \"Communication layer\",\n      \"body\": \"Role-scoped messaging tied to operational state.\",\n      \"glyph\": \"people\"\n    },\n    {\n      \"code\": \"CS.03\",\n      \"title\": \"Records & permissions\",\n      \"body\": \"A queryable record under role-based access.\",\n      \"glyph\": \"key\"\n    }\n  ]\n}"
    }
  ]
};
