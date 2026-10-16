/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Build a reading list from the pages of this site: tick what to read, or start from a preset; the list comes out as Markdown with the links and an honest estimate of the time, ready to send to someone.",
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
      "name": "presets",
      "type": "Array<{ label: string; keys: Array<string> }>",
      "description": "Host-supplied presets; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"readingList\",\n  \"anchor\": \"list\",\n  \"scene\": \"data-stream-ribbons\",\n  \"tag\": \"End of the resource centre\",\n  \"minHeight\": 700,\n  \"title\": \"Make a reading list.\",\n  \"lede\": \"Tick pages from anywhere on the site, or start from a preset. The list comes out as Markdown, with the links and an estimate of the time, ready to send to someone.\",\n  \"presets\": [\n    {\n      \"label\": \"A new teammate\",\n      \"keys\": [\n        \"company/how-we-work\",\n        \"company/principles\",\n        \"insights/handover\",\n        \"insights/runbooks\",\n        \"north/handbook\",\n        \"resources/glossary\"\n      ]\n    },\n    {\n      \"label\": \"Someone deciding\",\n      \"keys\": [\n        \"work\",\n        \"company/security\",\n        \"trust\",\n        \"company/faq\",\n        \"insights/handover\",\n        \"legal/privacy\"\n      ]\n    },\n    {\n      \"label\": \"A developer\",\n      \"keys\": [\n        \"north/stack\",\n        \"north/quality\",\n        \"insights/idempotency\",\n        \"insights/api-contracts\",\n        \"insights/triggers\",\n        \"resources/tools\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Glossary\",\n      \"to\": \"/resources/glossary\"\n    },\n    {\n      \"label\": \"Tools\",\n      \"to\": \"/resources/tools\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"readingList\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
