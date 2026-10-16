/* Documentation for SectionHeader. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "SectionHeader",
  "area": "ui",
  "summary": "Eyebrow + serif title + optional intro, with a staged reveal. The head of nearly every block.",
  "props": [
    {
      "name": "eyebrow"
    },
    {
      "name": "title"
    },
    {
      "name": "intro"
    },
    {
      "name": "code",
      "description": "Mono code beside the eyebrow."
    },
    {
      "name": "as",
      "description": "Heading element, `h2` by default."
    },
    {
      "name": "size",
      "description": "`display`, `hero`, `h1`, `h2` (default) or `h3` — the heading type size."
    },
    {
      "name": "align",
      "description": "`left` or `center`."
    },
    {
      "name": "reveal",
      "description": "Animate in on scroll."
    }
  ],
  "sizing": {
    "rules": [
      "Fills its parent; the intro caps itself at a reading measure."
    ]
  },
  "related": [
    "Heading",
    "Hero"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<SectionHeader eyebrow=\"Systems\" title=\"Where we build.\" intro=\"Seven areas.\" />"
    }
  ]
};
