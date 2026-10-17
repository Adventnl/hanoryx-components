/* Documentation for PageTemplate. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "PageTemplate",
  "area": "page",
  "family": "template",
  "summary": "Renders a whole page from a data object: a scene-backed hero, then each block in order, plus a scroll rail for blocks that declare `anchor` + `railLabel`. Sets the document title and wraps the page in a transition.",
  "props": [
    {
      "name": "data",
      "type": "{ key, title, accent, hero, blocks[] }",
      "required": true
    }
  ],
  "sizing": {
    "rules": [
      "A column of full-width sections; every block is `section.section > .container`."
    ]
  },
  "related": [
    "PageHero",
    "PageBlock",
    "TemplatePage"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<PageTemplate data={{ key: 'home', title: 'Home', hero: { title: 'Hello.' }, blocks: [] }} />"
    }
  ]
};
