/* Documentation for HeroTitle. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "HeroTitle",
  "area": "page",
  "family": "template",
  "summary": "The hero headline: each word rises out of a clipped line (staggered), then the words react to the pointer.",
  "props": [
    {
      "name": "text",
      "required": true
    },
    {
      "name": "as"
    }
  ],
  "sizing": {
    "rules": [
      "Uses `--fs-hero`; wraps with the column. Do not set a font size."
    ]
  },
  "related": [
    "PageHero",
    "ProximityText"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<HeroTitle text=\"Interfaces before noise.\" />"
    }
  ]
};
