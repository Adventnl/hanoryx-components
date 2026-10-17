/* Documentation for QuoteBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "QuoteBlock",
  "area": "page",
  "family": "blocks",
  "summary": "A pull quote with its source.",
  "keywords": [
    "quote",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'quote', … }",
      "required": true,
      "description": "The block's data: quote, cite, context. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'quote'`), not on its own."
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
      "title": "A real quote block",
      "code": "{\n  \"type\": \"quote\",\n  \"anchor\": \"quote\",\n  \"railLabel\": \"Quote\",\n  \"scene\": \"wave-interference\",\n  \"eyebrow\": \"Block · quote\",\n  \"quote\": \"Movement carries meaning — state, direction, hierarchy. Nothing moves to decorate.\",\n  \"cite\": \"Hanoryx Systems · Principle 03, Motion with purpose\",\n  \"context\": \"A quote block is for words someone really said and agreed to have quoted. This site uses it for its own principles, never for testimonials.\"\n}"
    }
  ]
};
