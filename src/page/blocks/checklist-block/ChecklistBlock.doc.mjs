/* Documentation for ChecklistBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ChecklistBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A list to tick through, held in the page only.",
  "keywords": [
    "checklist",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'checklist', … }",
      "required": true,
      "description": "The block's data: items[{ label, hint }], done. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'checklist'`), not on its own."
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
      "title": "A real checklist block",
      "code": "{\n  \"type\": \"checklist\",\n  \"anchor\": \"checklist\",\n  \"railLabel\": \"Checklist\",\n  \"scene\": \"architectural-grid\",\n  \"eyebrow\": \"Block · checklist\",\n  \"title\": \"Before you add a block.\",\n  \"intro\": \"Tick as you go. Nothing is stored; the ticks are gone when you leave.\",\n  \"done\": \"Ready to add.\",\n  \"items\": [\n    {\n      \"label\": \"The type is one the loader knows\",\n      \"hint\": \"A misspelled type draws nothing, and nothing says so.\"\n    },\n    {\n      \"label\": \"The words are in the data, not the component\"\n    },\n    {\n      \"label\": \"A text block uses a calm scene\",\n      \"hint\": \"The scene-balance check rejects the busy ones.\"\n    },\n    {\n      \"label\": \"It works from the keyboard\"\n    },\n    {\n      \"label\": \"It reads well under reduced motion\"\n    },\n    {\n      \"label\": \"Any new non-prose key is on the search skip list\",\n      \"hint\": \"Otherwise the search will index it as if it were a sentence.\"\n    }\n  ]\n}"
    }
  ]
};
