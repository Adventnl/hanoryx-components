/* Documentation for Section. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Section",
  "area": "kit",
  "family": "content",
  "origin": "new",
  "summary": "A page block's outer shell: the vertical rhythm between blocks (80–176 px, or 48–96 px with size=\"sm\"). New in this library — the same as the global `.section` class.",
  "keywords": [
    "block",
    "rhythm",
    "padding",
    "page"
  ],
  "props": [
    {
      "name": "size",
      "type": "'md' | 'sm' | 'none'",
      "default": "'md'",
      "description": "`md` = `--section-pad`, `sm` = `--section-pad-sm`, `none` = the block pads itself."
    },
    {
      "name": "as",
      "description": "Element to render (`section` by default)."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "Put a `Container` inside; one idea per Section."
      },
      {
        "do": false,
        "text": "Add your own padding or margin to a Section."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Fills the viewport width; vertical padding only (80 / 84 / 141 / 176 px at 360 / 768 / 1280 / 1920)."
    ]
  },
  "related": [
    "Container",
    "Stack"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Section><Container><Heading>Where we build</Heading></Container></Section>"
    }
  ]
};
