/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Why coordination gets harder faster than the team grows. Everyone telling everyone needs a channel for every pair of people: the count grows with the square of the headcount. One shared picture needs one per person. The arithmetic, drawn.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"channelCount\",\n  \"anchor\": \"channels\",\n  \"scene\": \"musebase-coordination\",\n  \"tag\": \"End of Musebase\",\n  \"minHeight\": 640,\n  \"title\": \"Why one shared picture.\",\n  \"lede\": \"Everyone telling everyone needs a channel for every pair of people, and that count grows with the square of the headcount. One shared picture needs one per person. The arithmetic, drawn.\",\n  \"onward\": [\n    {\n      \"label\": \"Operational management\",\n      \"to\": \"/systems/operational-management\"\n    },\n    {\n      \"label\": \"All work\",\n      \"to\": \"/work\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"channelCount\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
