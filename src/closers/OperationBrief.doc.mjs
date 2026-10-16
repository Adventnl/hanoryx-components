/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Write the brief the first conversation needs, before the conversation. Six short answers become a one-page brief you can keep, share or bring. Nothing is sent anywhere: it stays in the page until you copy or download it.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"operationBrief\",\n  \"anchor\": \"brief\",\n  \"scene\": \"permission-orbit\",\n  \"tag\": \"End of systems\",\n  \"minHeight\": 780,\n  \"title\": \"Write the brief first.\",\n  \"lede\": \"Six short answers about an operation become a one-page brief you can keep, share or bring to a first conversation. It is the sheet the first conversation needs, written before the conversation. Nothing is sent anywhere.\",\n  \"onward\": [\n    {\n      \"label\": \"Capabilities\",\n      \"to\": \"/systems/capabilities\"\n    },\n    {\n      \"label\": \"System lifecycle\",\n      \"to\": \"/systems/lifecycle\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"operationBrief\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
