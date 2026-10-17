/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Three triggers, one burst of work. Slide the size of the burst, the number of workers and the cron interval, and compare how long the average job waits and how big the backlog gets.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"triggerCompare\",\n  \"anchor\": \"try\",\n  \"railLabel\": \"Try it\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 780,\n  \"eyebrow\": \"Try it\",\n  \"title\": \"One burst of work, three triggers.\",\n  \"intro\": \"Resize the burst, the number of workers and the schedule. Compare how long the average job waits, how large the backlog grows, and what is turned away.\",\n  \"note\": \"A small, deterministic model: twenty-four ticks, a single burst, one tick per job. It shows shapes, not speeds, and is not a benchmark of any product.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"triggerCompare\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
