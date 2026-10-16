/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The whole history of the site as one chart: a row for each chapter, a bar as long as the number of notes in it, cut into what was added, changed and fixed. The shapes differ as well as the shades, so it reads without colour.",
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
      "name": "onward",
      "type": "Array<{ label: string; to: string }>",
      "description": "Host-supplied onward; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through closer block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"historyBar\",\n  \"anchor\": \"chart\",\n  \"scene\": \"timeline-pulse\",\n  \"tag\": \"End of the release notes\",\n  \"minHeight\": 560,\n  \"title\": \"The whole history in one chart.\",\n  \"lede\": \"A row for each chapter, a bar as long as the notes in it, cut into what was added, changed and fixed. Point at a row for the chapter; press it to read.\",\n  \"onward\": [\n    {\n      \"label\": \"Resource centre\",\n      \"to\": \"/resources\"\n    },\n    {\n      \"label\": \"Site engineering\",\n      \"to\": \"/engineering\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"historyBar\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
