/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The classic race: two people press Buy on the last item at once. Step through three ways of handling it and see which ones sell the item twice.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"lastItem\",\n  \"anchor\": \"race\",\n  \"scene\": \"transaction-wave\",\n  \"tag\": \"End of commerce infrastructure\",\n  \"minHeight\": 700,\n  \"title\": \"Two people, one item left.\",\n  \"lede\": \"The classic race: both press Buy at the same moment. Step through three ways of handling it and see which of them sell the item twice.\",\n  \"onward\": [\n    {\n      \"label\": \"Idempotency in order systems\",\n      \"to\": \"/insights/idempotency\"\n    },\n    {\n      \"label\": \"Customer product\",\n      \"to\": \"/work/customer-product\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"lastItem\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
