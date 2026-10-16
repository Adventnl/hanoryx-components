/* Documentation for ManifestoBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ManifestoBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A statement that lights word by word as you scroll, with a marquee.",
  "keywords": [
    "manifesto",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'manifesto', … }",
      "required": true,
      "description": "The block's data: lines[], marquee[]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'manifesto'`), not on its own."
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
      "title": "A real manifesto block",
      "code": "{\n  \"type\": \"manifesto\",\n  \"anchor\": \"habits\",\n  \"railLabel\": \"Four habits\",\n  \"scene\": \"vector-compass\",\n  \"eyebrow\": \"Four habits\",\n  \"lines\": [\n    \"Say it *plainly*.\",\n    \"Show it running.\",\n    \"Write down why.\",\n    \"Leave it easier to change.\"\n  ],\n  \"marquee\": [\n    \"FRAME\",\n    \"SHAPE\",\n    \"BUILD\",\n    \"HAND OVER\",\n    \"RUN\"\n  ]\n}"
    }
  ]
};
