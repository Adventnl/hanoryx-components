/* Documentation for HoverIndex. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "HoverIndex",
  "area": "fx",
  "summary": "A typographic index: big rows that a floating preview card follows the cursor across. On touch or keyboard every row shows its own detail line, so nothing hides behind hover.",
  "props": [
    {
      "name": "items",
      "type": "[{ id, title, kicker, detail, to, meta, preview }]",
      "required": true
    }
  ],
  "keyboard": [
    {
      "key": "Tab / Enter",
      "does": "Move between rows and follow the link."
    }
  ],
  "sizing": {
    "rules": [
      "Fills its parent. Rows are display-size type: give it at least 28rem."
    ]
  },
  "related": [
    "SiteDirectory"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<HoverIndex items={[{ id: 'a', title: 'Operations', kicker: 'SYS.01', detail: 'Scheduling and records.', to: '/systems/operations' }]} />"
    }
  ]
};
