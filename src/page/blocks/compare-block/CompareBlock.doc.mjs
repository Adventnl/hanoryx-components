/* Documentation for CompareBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "CompareBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Two or three ways of looking at a choice, side by side.",
  "keywords": [
    "compare",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'compare', … }",
      "required": true,
      "description": "The block's data: columns[{ label, title, tone, items[] }], verdict. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'compare'`), not on its own."
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
      "title": "A real compare block",
      "code": "{\n  \"type\": \"compare\",\n  \"anchor\": \"compare\",\n  \"railLabel\": \"Compare\",\n  \"scene\": \"architectural-grid\",\n  \"eyebrow\": \"Block · compare\",\n  \"title\": \"A generic block, or a signature?\",\n  \"columns\": [\n    {\n      \"label\": \"Generic block\",\n      \"title\": \"Start here\",\n      \"tone\": \"yes\",\n      \"items\": [\n        \"The content is text, records or links\",\n        \"A standard layout does the job\",\n        \"The kit already has the component\",\n        \"Someone else could use the same block tomorrow\"\n      ]\n    },\n    {\n      \"label\": \"Signature\",\n      \"title\": \"When the page is the interaction\",\n      \"items\": [\n        \"The point of the page is something you do\",\n        \"The data has a shape no other page shares\",\n        \"The layout is part of the idea\",\n        \"It would not make sense anywhere else\"\n      ]\n    }\n  ],\n  \"verdict\": \"Start with a generic block. Reach for a signature when the page’s point is something a reader does and not something a reader reads.\"\n}"
    }
  ]
};
