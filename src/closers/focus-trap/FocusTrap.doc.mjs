/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "“Try to escape the dialog.” Open it and press Tab, Shift+Tab and Escape: a log beside it writes down where focus goes — in, round and round inside, and back to the button that opened it. The dialog is the kit’s own.",
  "props": [
    {
      "name": "tag",
      "type": "string",
      "description": "Host-supplied tag; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "lede",
      "type": "string",
      "description": "Host-supplied lede; see the complete working data example below."
    },
    {
      "name": "rules",
      "type": "Array<string>",
      "description": "Host-supplied rules; see the complete working data example below."
    },
    {
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"anchor\": \"trap\",\n  \"kind\": \"focusTrap\",\n  \"scene\": \"polar-status\",\n  \"tag\": \"End of the overlay components\",\n  \"minHeight\": 760,\n  \"title\": \"Try to escape the dialog.\",\n  \"lede\": \"Open it and press Tab, Shift+Tab and Escape. A log beside it writes down where focus goes: in, round and round inside, and back to the button that opened it.\",\n  \"rules\": [\n    \"Focus moves in when it opens, to the first control or the one marked for it.\",\n    \"Tab and Shift+Tab cycle inside; focus never reaches the page behind.\",\n    \"Escape, the close button and a press on the dark area all dismiss it.\",\n    \"Focus returns to what opened it, and the page behind stops scrolling meanwhile.\"\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Content and layout components\",\n      \"to\": \"/north/components/content\"\n    },\n    {\n      \"label\": \"Accessible by default\",\n      \"to\": \"/north/accessibility\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"focusTrap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
