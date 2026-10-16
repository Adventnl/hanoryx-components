/* Documentation for TimelineBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TimelineBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Things in the order they happen, down a line.",
  "keywords": [
    "timeline",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'timeline', … }",
      "required": true,
      "description": "The block's data: items[{ when, title, body, done }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'timeline'`), not on its own."
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
      "title": "A real timeline block",
      "code": "{\n  \"type\": \"timeline\",\n  \"anchor\": \"timeline\",\n  \"railLabel\": \"Timeline\",\n  \"scene\": \"timeline-pulse\",\n  \"eyebrow\": \"Block · timeline\",\n  \"title\": \"How a block gets onto a page.\",\n  \"intro\": \"In order, with no dates, because the order is what matters.\",\n  \"items\": [\n    {\n      \"when\": \"First\",\n      \"title\": \"Write the data\",\n      \"body\": \"Add an object to the page’s list of blocks in its data file. Everything the reader will see is in it.\",\n      \"done\": true\n    },\n    {\n      \"when\": \"Then\",\n      \"title\": \"Give it a type\",\n      \"body\": \"The type names the block. The page loader looks the type up and draws it.\",\n      \"done\": true\n    },\n    {\n      \"when\": \"Then\",\n      \"title\": \"Choose a scene\",\n      \"body\": \"A Canvas scene is drawn behind the block. Blocks that carry text use the calmest scenes.\",\n      \"done\": true\n    },\n    {\n      \"when\": \"Last\",\n      \"title\": \"Check it\",\n      \"body\": \"Run the page-ending, smoke, contrast and accessibility checks. A block is not finished until they pass.\"\n    }\n  ]\n}"
    }
  ]
};
