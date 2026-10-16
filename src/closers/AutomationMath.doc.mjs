/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Is it worth automating? Put in how long a job takes, how often it happens, what it costs to build and what it costs to keep running; the page says when it pays for itself, if it ever does. Your numbers; the arithmetic only.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"automationMath\",\n  \"anchor\": \"worth\",\n  \"scene\": \"signal-wave\",\n  \"tag\": \"End of automation\",\n  \"minHeight\": 700,\n  \"title\": \"Is it worth automating?\",\n  \"lede\": \"How long the job takes, how often it happens, what it costs to build and what it costs to keep alive. The page says when it pays for itself, if it ever does. Your numbers; only the arithmetic is ours.\",\n  \"onward\": [\n    {\n      \"label\": \"Cron explainer\",\n      \"to\": \"/resources/tools/cron\"\n    },\n    {\n      \"label\": \"Cron, queues and events\",\n      \"to\": \"/insights/triggers\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"automationMath\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
