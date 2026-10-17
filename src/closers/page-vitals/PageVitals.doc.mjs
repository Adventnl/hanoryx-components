/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The page you are on, weighed: its elements, its requests, its size, its first paint and the frame rate it is managing right now. Every number comes from the browser's own Performance API; nothing is sent anywhere.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"pageVitals\",\n  \"anchor\": \"vitals\",\n  \"scene\": \"command-terminal\",\n  \"tag\": \"End of site engineering\",\n  \"minHeight\": 560,\n  \"title\": \"The page you are on, weighed.\",\n  \"lede\": \"Its elements, its requests, its size, its first paint and the frame rate it is managing right now. Every number comes from the browser’s own Performance API; nothing is sent anywhere.\",\n  \"onward\": [\n    {\n      \"label\": \"The stack\",\n      \"to\": \"/north/stack\"\n    },\n    {\n      \"label\": \"Animation budgets\",\n      \"to\": \"/insights/animation-budgets\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"pageVitals\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
