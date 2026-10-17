/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Change four tokens and watch a small interface follow. The values are set on the preview alone, as custom properties — which is exactly how a real design system restyles everything at once.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"tokenPlayground\",\n  \"anchor\": \"playground\",\n  \"scene\": \"interface-lab-shape\",\n  \"tag\": \"End of design tokens\",\n  \"minHeight\": 780,\n  \"title\": \"Change a decision. Watch it spread.\",\n  \"lede\": \"Five tokens on a small interface: an accent colour, a corner radius, a space unit, a transition time and a base text size. Change one and everything that uses it follows. The values are set on the preview alone.\",\n  \"onward\": [\n    {\n      \"label\": \"Brand\",\n      \"to\": \"/company/brand\"\n    },\n    {\n      \"label\": \"Type scale\",\n      \"to\": \"/resources/tools/type-scale\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"tokenPlayground\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
