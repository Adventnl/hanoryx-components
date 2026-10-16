/* Documentation for FaqBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "FaqBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Questions and answers, each a disclosure.",
  "keywords": [
    "faq",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'faq', … }",
      "required": true,
      "description": "The block's data: items[{ q, a[] }], openFirst. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'faq'`), not on its own."
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
      "title": "A real faq block",
      "code": "{\n  \"type\": \"faq\",\n  \"anchor\": \"faq\",\n  \"railLabel\": \"Questions\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"eyebrow\": \"Block · faq\",\n  \"title\": \"Questions about blocks.\",\n  \"openFirst\": true,\n  \"items\": [\n    {\n      \"q\": \"Can a block hold another block?\",\n      \"a\": [\n        \"No. Blocks sit one after another. A signature block can host a richer composition of its own, but blocks do not nest.\"\n      ]\n    },\n    {\n      \"q\": \"What ends a page?\",\n      \"a\": [\n        \"A closer. Every page except the contact page and the site map finishes with its own composition, and no two pages share one. None of them is a call to action.\"\n      ]\n    },\n    {\n      \"q\": \"What is a signature?\",\n      \"a\": [\n        \"A composition that belongs to one page: a find bar for a long document, a tool, a demonstration. It is loaded when the page needs it, and it holds its height while it loads so that nothing jumps.\"\n      ]\n    },\n    {\n      \"q\": \"How do I add a new kind of block?\",\n      \"a\": [\n        \"Write a component in the blocks folder, add one line to the block list so the loader knows its type, and add it to the catalogue on this page. If it brings keys that are not prose, add them to the search engine’s skip list.\"\n      ]\n    },\n    {\n      \"q\": \"Is the text in the component or in the data?\",\n      \"a\": [\n        \"In the data. A component decides how things look and move; the words belong to the page.\"\n      ]\n    }\n  ]\n}"
    }
  ]
};
