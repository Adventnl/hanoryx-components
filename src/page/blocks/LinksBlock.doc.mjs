/* Documentation for LinksBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "LinksBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Where to go next: cards that each hold one link.",
  "keywords": [
    "links",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'links', … }",
      "required": true,
      "description": "The block's data: items[{ title, body, to, label }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'links'`), not on its own."
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
      "title": "A real links block",
      "code": "{\n  \"type\": \"links\",\n  \"anchor\": \"links\",\n  \"railLabel\": \"Links\",\n  \"scene\": \"network-constellation\",\n  \"eyebrow\": \"Block · links\",\n  \"title\": \"Where the blocks are at work.\",\n  \"items\": [\n    {\n      \"title\": \"The interface components\",\n      \"body\": \"The 61 components every one of these blocks is built from, each with a live example.\",\n      \"to\": \"/north/components\",\n      \"label\": \"Open the gallery\"\n    },\n    {\n      \"title\": \"Downloads\",\n      \"body\": \"Uses a faq block to answer what can and cannot be done with the templates.\",\n      \"to\": \"/resources/downloads\",\n      \"label\": \"Read the questions\"\n    },\n    {\n      \"title\": \"Security disclosure\",\n      \"body\": \"Uses a checklist block to go through before you send a report.\",\n      \"to\": \"/trust/disclosure\",\n      \"label\": \"Go through the list\"\n    },\n    {\n      \"title\": \"Contact\",\n      \"body\": \"Uses a faq block for the questions people have before they write.\",\n      \"to\": \"/contact\",\n      \"label\": \"See the questions\"\n    },\n    {\n      \"title\": \"Accessible by default\",\n      \"body\": \"Uses a checklist block for a few minutes of hand-checking any page.\",\n      \"to\": \"/north/accessibility\",\n      \"label\": \"Run the check\"\n    }\n  ]\n}"
    }
  ]
};
