/* Documentation for GlideTabs. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "GlideTabs",
  "area": "fx",
  "summary": "A segmented control / tab list whose selection ink glides between tabs. Full tablist keyboard model; pass `panels={false}` when it only changes a nearby demo (then it is announced as a radio group).",
  "props": [
    {
      "name": "tabs",
      "type": "[{ id, label }]",
      "required": true
    },
    {
      "name": "value",
      "required": true,
      "description": "The selected tab id (controlled)."
    },
    {
      "name": "onChange",
      "required": true
    },
    {
      "name": "label",
      "required": true,
      "description": "Accessible name."
    },
    {
      "name": "variant",
      "description": "`pill` or `line`."
    },
    {
      "name": "panels",
      "description": "Whether tab panels exist (`aria-controls`)."
    }
  ],
  "keyboard": [
    {
      "key": "← →",
      "does": "Move and select."
    },
    {
      "key": "Home / End",
      "does": "First / last tab."
    }
  ],
  "sizing": {
    "rules": [
      "Intrinsic: as wide as its labels. Centre it, or put it at the start of a `Cluster`."
    ]
  },
  "related": [
    "Tabs",
    "Segmented"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<GlideTabs label=\"Plan\" value={v} onChange={setV} tabs={[{ id: 'a', label: 'Monthly' }, { id: 'b', label: 'Yearly' }]} />"
    }
  ]
};
