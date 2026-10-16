/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "An honest ledger of where each document stands. The ticks arrive one by one as the ledger scrolls in; the column nobody has ticked yet says so.",
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
      "name": "columns",
      "type": "Array<string>",
      "description": "Host-supplied columns; see the complete working data example below."
    },
    {
      "name": "rows",
      "type": "Array<{ label: string; to: string; marks: Array<boolean> }>",
      "description": "Host-supplied rows; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"statusLedger\",\n  \"scene\": \"architectural-grid\",\n  \"tag\": \"End of the legal centre\",\n  \"minHeight\": 520,\n  \"title\": \"Where each document stands.\",\n  \"lede\": \"Written, and checked against how the site works. Not yet read by a lawyer.\",\n  \"columns\": [\n    \"Plain language\",\n    \"Checked against the site\",\n    \"Reviewed by a lawyer\",\n    \"Registered details added\"\n  ],\n  \"rows\": [\n    {\n      \"label\": \"Privacy\",\n      \"to\": \"/legal/privacy\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        false\n      ]\n    },\n    {\n      \"label\": \"Terms\",\n      \"to\": \"/legal/terms\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        false\n      ]\n    },\n    {\n      \"label\": \"Cookies & storage\",\n      \"to\": \"/legal/cookies\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Acceptable use\",\n      \"to\": \"/legal/acceptable-use\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Data retention\",\n      \"to\": \"/legal/retention\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Copyright & marks\",\n      \"to\": \"/legal/copyright\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Disclaimers\",\n      \"to\": \"/legal/disclaimer\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Linking\",\n      \"to\": \"/legal/linking\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Accessibility\",\n      \"to\": \"/legal/accessibility\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    },\n    {\n      \"label\": \"Complaints\",\n      \"to\": \"/legal/complaints\",\n      \"marks\": [\n        true,\n        true,\n        false,\n        true\n      ]\n    }\n  ],\n  \"note\": \"The terms and the privacy notice have one open item each: they cannot name the governing law or a registered address until the company’s details are published.\",\n  \"onward\": [\n    {\n      \"label\": \"Site map\",\n      \"to\": \"/sitemap\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"statusLedger\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
