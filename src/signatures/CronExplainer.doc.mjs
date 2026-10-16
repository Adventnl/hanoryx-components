/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Paste a schedule, read it in plain English, and see the next times it will run — in your own time zone or in UTC. It explains; it runs nothing.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"cronExplainer\",\n  \"anchor\": \"tool\",\n  \"railLabel\": \"The explainer\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 800,\n  \"eyebrow\": \"The explainer\",\n  \"title\": \"Minute, hour, day, month, weekday.\",\n  \"intro\": \"Try the examples, or write your own. Names work for months and weekdays, and so do @daily, @weekly and their relatives.\",\n  \"note\": \"This reads standard five-field cron. Some systems add a seconds field, a year, or special characters of their own; check the documentation of the one you use. Run times are worked out from your browser’s time zone data.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"cronExplainer\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
