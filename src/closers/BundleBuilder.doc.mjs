/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Choose several of the downloadable documents and have them joined into one Markdown file with a contents list — built here, in the page, when you press the button. A pack for a new project, a new teammate, or a handover.",
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
      "type": "Array<{ label: string; ids: Array<string> }>",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"bundleBuilder\",\n  \"anchor\": \"bundle\",\n  \"scene\": \"hex-lattice\",\n  \"tag\": \"End of the downloads\",\n  \"minHeight\": 680,\n  \"title\": \"Join several into one.\",\n  \"lede\": \"Choose documents and have them joined into a single Markdown file with a contents list: a pack for a new project, a new teammate, or a handover.\",\n  \"presets\": [\n    {\n      \"label\": \"A new project\",\n      \"ids\": [\n        \"readme\",\n        \"decision\",\n        \"handover\",\n        \"readiness\"\n      ]\n    },\n    {\n      \"label\": \"An on-call pack\",\n      \"ids\": [\n        \"runbook\",\n        \"incident\",\n        \"access\"\n      ]\n    },\n    {\n      \"label\": \"Everything\",\n      \"ids\": [\n        \"runbook\",\n        \"readme\",\n        \"decision\",\n        \"handover\",\n        \"readiness\",\n        \"incident\",\n        \"deprecation\",\n        \"audit\",\n        \"access\",\n        \"tokens\",\n        \"glossary\",\n        \"pages\"\n      ]\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Tools\",\n      \"to\": \"/resources/tools\"\n    },\n    {\n      \"label\": \"Insights\",\n      \"to\": \"/insights\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"bundleBuilder\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
