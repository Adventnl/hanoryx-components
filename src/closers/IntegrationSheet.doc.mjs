/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The agreement that decides whether an integration survives its first bad day. Choose what is sent, when, what happens when it fails and who owns it; out comes a one-page contract to put in front of both teams.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"integrationSheet\",\n  \"anchor\": \"contract\",\n  \"scene\": \"dependency-graph\",\n  \"tag\": \"End of integration patterns\",\n  \"minHeight\": 780,\n  \"title\": \"Write the contract.\",\n  \"lede\": \"Choose what is sent, when, what happens when it fails and who owns it. Out comes a one-page contract to put in front of both teams. It is a starting point to adapt, not a legal document.\",\n  \"onward\": [\n    {\n      \"label\": \"APIs people can integrate against\",\n      \"to\": \"/insights/api-contracts\"\n    },\n    {\n      \"label\": \"Cron, queues and events\",\n      \"to\": \"/insights/triggers\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"integrationSheet\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
