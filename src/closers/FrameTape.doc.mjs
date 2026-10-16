/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A strip-chart recorder for this page. Every frame the browser draws is one column on the tape — tall and red when it took long — and three counters tick from the same measurements. Purely live: nothing is kept or sent.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"frameTape\",\n  \"scene\": \"timeline-pulse\",\n  \"tag\": \"End of the status board\",\n  \"minHeight\": 440,\n  \"title\": \"The tape keeps running.\",\n  \"lede\": \"Every frame this page draws is a column below. Move, scroll, and watch what it costs.\",\n  \"onward\": [\n    {\n      \"label\": \"Site engineering\",\n      \"to\": \"/engineering\"\n    },\n    {\n      \"label\": \"Trust centre\",\n      \"to\": \"/trust\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"frameTape\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
