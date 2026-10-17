/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Set how much each area of the work draws you, and a radar fills in. The area you lean towards most is named. Nothing is stored or sent — it is a mirror, not a form.",
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
      "name": "axes",
      "type": "Array<{ id: string; label: string; short: string; blurb: string; to: string }>",
      "description": "Host-supplied axes; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"fitRadar\",\n  \"scene\": \"glyph-field\",\n  \"tag\": \"End of careers\",\n  \"minHeight\": 620,\n  \"title\": \"Where would you lean?\",\n  \"lede\": \"Set how much each area of the work draws you. Nothing is stored or sent; it is a mirror, not a form.\",\n  \"axes\": [\n    {\n      \"id\": \"interfaces\",\n      \"label\": \"Interfaces\",\n      \"short\": \"UI\",\n      \"blurb\": \"Screens that resolve intent in a single read, with motion that explains state.\",\n      \"to\": \"/north/interface-lab\"\n    },\n    {\n      \"id\": \"systems\",\n      \"label\": \"Systems\",\n      \"short\": \"SYS\",\n      \"blurb\": \"Operational platforms, boundaries and the shape of a whole system.\",\n      \"to\": \"/systems\"\n    },\n    {\n      \"id\": \"data\",\n      \"label\": \"Data at scale\",\n      \"short\": \"DATA\",\n      \"blurb\": \"Records in their millions, and the views that make them usable.\",\n      \"to\": \"/work/internal-crm\"\n    },\n    {\n      \"id\": \"engines\",\n      \"label\": \"Engines\",\n      \"short\": \"ENG\",\n      \"blurb\": \"Real-time tools: editors, players and the pipeline between them.\",\n      \"to\": \"/work/yk-engine\"\n    },\n    {\n      \"id\": \"automation\",\n      \"label\": \"Automation\",\n      \"short\": \"AUTO\",\n      \"blurb\": \"Work that runs without being asked, and tells you when it can’t.\",\n      \"to\": \"/systems/automation\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"The hiring process\",\n      \"to\": \"/company/hiring\"\n    },\n    {\n      \"label\": \"How we work\",\n      \"to\": \"/company/how-we-work\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"fitRadar\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
