/* Documentation for StatsBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "StatsBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Large figures, only of things the site can stand behind.",
  "keywords": [
    "stats",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'stats', … }",
      "required": true,
      "description": "The block's data: items[{ value, suffix, label }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'stats'`), not on its own."
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
      "title": "A real stats block",
      "code": "{\n  \"type\": \"stats\",\n  \"anchor\": \"figures\",\n  \"railLabel\": \"At a glance\",\n  \"eyebrow\": \"At a glance\",\n  \"title\": \"What is on this site.\",\n  \"items\": [\n    {\n      \"value\": 2,\n      \"label\": \"Primary projects\",\n      \"note\": \"Musebase · YK Engine\"\n    },\n    {\n      \"value\": 4,\n      \"label\": \"Case studies\",\n      \"note\": \"2 primary · 2 supporting\"\n    },\n    {\n      \"value\": 7,\n      \"label\": \"System areas\",\n      \"note\": \"Where we build\"\n    },\n    {\n      \"value\": 6,\n      \"label\": \"Principles\",\n      \"note\": \"How we decide\"\n    }\n  ]\n}"
    }
  ]
};
