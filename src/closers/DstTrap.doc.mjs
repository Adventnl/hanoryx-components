/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Daylight-saving time, as it bites a schedule. Choose a zone and a time of day; the page finds the day or days this year when the clocks change in that zone and says what happens to your time on each: skipped, repeated, or fine.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"dstTrap\",\n  \"anchor\": \"dst\",\n  \"scene\": \"trigger-action-pulse\",\n  \"tag\": \"End of the cron explainer\",\n  \"minHeight\": 600,\n  \"title\": \"The day the clock lies.\",\n  \"lede\": \"Choose a zone and a time of day. The page finds the days this year when the clocks change there, and says what happens to your time on each: skipped, repeated, or fine.\",\n  \"onward\": [\n    {\n      \"label\": \"Cron, queues and events\",\n      \"to\": \"/insights/triggers\"\n    },\n    {\n      \"label\": \"Readiness check\",\n      \"to\": \"/resources/tools/readiness\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"dstTrap\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
