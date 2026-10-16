/* Documentation for SplitBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SplitBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A heading and prose on one side, a short list of labelled points on the other.",
  "keywords": [
    "split",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'split', … }",
      "required": true,
      "description": "The block's data: eyebrow, title, body[], points[{ k, v }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'split'`), not on its own."
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
      "title": "A real split block",
      "code": "{\n  \"type\": \"split\",\n  \"anchor\": \"helps\",\n  \"railLabel\": \"What helps\",\n  \"scene\": \"topographic-lines\",\n  \"eyebrow\": \"What helps\",\n  \"code\": \"CMP.HELP\",\n  \"title\": \"A few lines are enough.\",\n  \"body\": [\n    \"The most useful message says who the system is for, what it has to hold, and where the current approach hurts. It does not need to be formal or complete.\",\n    \"If you are not sure which type fits, pick the closest. The conversation can find its own shape.\"\n  ],\n  \"asideLabel\": \"USEFUL TO SAY\",\n  \"asideCode\": \"CMP.NOTES\",\n  \"points\": [\n    {\n      \"k\": \"PEOPLE\",\n      \"v\": \"Who will use it\"\n    },\n    {\n      \"k\": \"RECORDS\",\n      \"v\": \"What it has to hold\"\n    },\n    {\n      \"k\": \"PAIN\",\n      \"v\": \"Where it hurts today\"\n    },\n    {\n      \"k\": \"TIMING\",\n      \"v\": \"When it matters\"\n    }\n  ]\n}"
    }
  ]
};
