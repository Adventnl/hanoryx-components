/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "DataSlab is an extracted page composition.",
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
      "name": "sizes",
      "type": "Array<{ id: string; label: string; value: number }>",
      "description": "Host-supplied sizes; see the complete working data example below."
    },
    {
      "name": "caption",
      "type": "string",
      "description": "Host-supplied caption; see the complete working data example below."
    },
    {
      "name": "questions",
      "description": "Optional questions. Refer to the source defaults and working composition."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"dataSlab\",\n  \"anchor\": \"slab\",\n  \"railLabel\": \"The slab\",\n  \"scene\": \"data-stream-ribbons\",\n  \"minHeight\": 760,\n  \"eyebrow\": \"Scale, felt\",\n  \"title\": \"Ten million rows, one window.\",\n  \"intro\": \"Scrub, filter and jump through a synthetic data set of up to ten million rows. The interface only ever holds a handful of rows at a time.\",\n  \"caption\": \"Synthetic rows generated in your browser from their index. Not production data, and no speed or size of the real system is claimed.\",\n  \"sizes\": [\n    {\n      \"id\": \"k\",\n      \"label\": \"1,000\",\n      \"value\": 1000\n    },\n    {\n      \"id\": \"m\",\n      \"label\": \"1 million\",\n      \"value\": 1000000\n    },\n    {\n      \"id\": \"t\",\n      \"label\": \"10 million\",\n      \"value\": 10000000\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"dataSlab\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
