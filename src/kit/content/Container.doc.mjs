/* Documentation for Container. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "Container",
  "area": "kit",
  "family": "content",
  "origin": "new",
  "summary": "The page width: centred, 1360 px max (gutters included), with a fluid 20–80 px gutter. size=\"text\" narrows it to a 760 px reading column. New in this library — the same as the global `.container` class.",
  "keywords": [
    "width",
    "gutter",
    "page",
    "max-width"
  ],
  "props": [
    {
      "name": "size",
      "type": "'default' | 'text'",
      "default": "'default'",
      "description": "`text` = `--maxw-text` (760 px) plus the gutters."
    },
    {
      "name": "as",
      "description": "Element to render."
    }
  ],
  "usage": {
    "bestPractices": [
      {
        "do": true,
        "text": "One Container per Section, directly inside it."
      },
      {
        "do": false,
        "text": "Nest Containers: the gutters double."
      }
    ]
  },
  "sizing": {
    "rules": [
      "Content width: 320 / 691 / 1152 / 1200 px at 360 / 768 / 1280 / 1920 viewports."
    ]
  },
  "related": [
    "Section",
    "Center"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<Container size=\"text\"><Prose>…</Prose></Container>"
    }
  ]
};
