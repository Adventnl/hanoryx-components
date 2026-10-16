/* Documentation for ModulesBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ModulesBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Columns that lens, or a ledger of rows that decode.",
  "keywords": [
    "modules",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'modules', … }",
      "required": true,
      "description": "The block's data: groups[{ label, items[] }] or rows[{ k, v }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'modules'`), not on its own."
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
      "title": "A real modules block",
      "code": "{\n  \"type\": \"modules\",\n  \"anchor\": \"limits\",\n  \"railLabel\": \"What is withheld\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"eyebrow\": \"What this page does not show\",\n  \"title\": \"Described, not displayed.\",\n  \"intro\": \"A supporting study is told at the level of the idea.\",\n  \"rows\": [\n    {\n      \"k\": \"NAME\",\n      \"v\": \"Withheld by design.\"\n    },\n    {\n      \"k\": \"SCREENSHOTS\",\n      \"v\": \"Not shown. The storyboard above is abstract.\"\n    },\n    {\n      \"k\": \"FIGURES\",\n      \"v\": \"None claimed.\"\n    }\n  ]\n}"
    }
  ]
};
