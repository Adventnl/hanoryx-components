/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Write the notice before you break anything. Say what is going, what replaces it and how long people have; out come the announcement and the two response headers (Deprecation and Sunset) that let tools notice on their own.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"deprecationNotice\",\n  \"anchor\": \"notice\",\n  \"scene\": \"data-interface-wave\",\n  \"tag\": \"End of API contracts\",\n  \"minHeight\": 640,\n  \"title\": \"Write the notice before you break anything.\",\n  \"lede\": \"Say what is going, what replaces it and how long people have. Out come the announcement and the two response headers that let tools notice by themselves.\",\n  \"onward\": [\n    {\n      \"label\": \"Cron, queues and events\",\n      \"to\": \"/insights/triggers\"\n    },\n    {\n      \"label\": \"Designing for handover\",\n      \"to\": \"/insights/handover\"\n    },\n    {\n      \"label\": \"All insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"deprecationNotice\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
