/* Documentation for ScrollRail. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "ScrollRail",
  "area": "fx",
  "summary": "A quiet progress rail for long pages: one tick per section; the current one stretches and lights; hover or focus names it; click glides there.",
  "props": [
    {
      "name": "sections",
      "type": "[{ id, label }]",
      "required": true,
      "description": "Section ids that exist on the page."
    }
  ],
  "keyboard": [
    {
      "key": "Tab / Enter",
      "does": "Focus a tick and glide to its section."
    }
  ],
  "sizing": {
    "rules": [
      "Fixed to the right edge of the viewport; hidden on phones. Takes no layout space."
    ]
  },
  "related": [
    "PageTemplate",
    "OnThisPage"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<ScrollRail sections={[{ id: 'intro', label: 'Intro' }, { id: 'steps', label: 'Steps' }]} />"
    }
  ]
};
