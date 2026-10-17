/* Documentation for DragRail. Hand-edited; scripts/generate-manifest.mjs merges it with what it reads from the source. */
export const docs = {
  "name": "DragRail",
  "area": "fx",
  "summary": "A horizontal rail of cards. Touch scrolls natively with snap; with a mouse you can grab and fling it. The rail is a named, keyboard-scrollable region.",
  "props": [
    {
      "name": "children",
      "required": true,
      "description": "The cards. Give each a fixed width (≈ 16–22rem)."
    },
    {
      "name": "label",
      "description": "Accessible name of the scrollable region."
    }
  ],
  "keyboard": [
    {
      "key": "← →",
      "does": "Scroll the rail when it has focus."
    }
  ],
  "sizing": {
    "rules": [
      "The rail fills its parent; its **children** carry the width. Use cards 16–22rem wide."
    ]
  },
  "related": [
    "CardsBlock"
  ],
  "examples": [
    {
      "title": "Basic",
      "code": "<DragRail label=\"Case studies\">{items.map((i) => <Card key={i.id} title={i.title} />)}</DragRail>"
    }
  ]
};
