/* Documentation for TabsBlock. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "TabsBlock",
  "area": "page",
  "family": "blocks",
  "summary": "Several short views of one subject, one at a time.",
  "keywords": [
    "tabs",
    "block",
    "page"
  ],
  "props": [
    {
      "name": "block",
      "type": "{ type: 'tabs', … }",
      "required": true,
      "description": "The block's data: tabs[{ id, label, body[], list[] }]. Plus the shared keys `anchor`, `railLabel`, `scene`, `intensity`, `eyebrow`, `title`, `intro`."
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
        "text": "Use it as a block in a page's `blocks[]` (`type: 'tabs'`), not on its own."
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
      "title": "A real tabs block",
      "code": "{\n  \"type\": \"tabs\",\n  \"anchor\": \"tabs\",\n  \"railLabel\": \"Tabs\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"eyebrow\": \"Block · tabs\",\n  \"title\": \"What every block shares.\",\n  \"label\": \"What every block shares\",\n  \"tabs\": [\n    {\n      \"id\": \"scene\",\n      \"label\": \"Scene\",\n      \"body\": [\n        \"Every block can name a Canvas scene and how intense it should be. The scene is drawn behind the block and pauses off screen.\",\n        \"Blocks that carry a lot of text use the calmest scenes, and a measurement script keeps them calm.\"\n      ]\n    },\n    {\n      \"id\": \"anchor\",\n      \"label\": \"Anchor\",\n      \"body\": [\n        \"An anchor gives a block an address on its page, so a link can point at it. A rail label puts it on the side rail that follows the reader down the page.\"\n      ]\n    },\n    {\n      \"id\": \"motion\",\n      \"label\": \"Motion\",\n      \"body\": [\n        \"Each block reveals itself as it enters the screen. Under reduced motion it is simply there, and the animated backgrounds hold a single frame.\"\n      ]\n    }\n  ]\n}"
    }
  ]
};
