/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Check a whole palette at once. Paste colours, and every text-on-background pairing is graded in a grid, so the ones that never work are visible before anyone designs with them.",
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
      "name": "start",
      "description": "Optional start. Refer to the source defaults and working composition."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"pairMatrix\",\n  \"anchor\": \"palette\",\n  \"scene\": \"signal-spectrum-field\",\n  \"tag\": \"End of the contrast checker\",\n  \"minHeight\": 640,\n  \"title\": \"Grade a whole palette.\",\n  \"lede\": \"Paste the colours you are working with. Every text-on-background pairing is graded in a grid, so the ones that never work are visible before anything is designed with them.\",\n  \"onward\": [\n    {\n      \"label\": \"Accessible by default\",\n      \"to\": \"/north/accessibility\"\n    },\n    {\n      \"label\": \"Type scale\",\n      \"to\": \"/resources/tools/type-scale\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"pairMatrix\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
