/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The notices page's ending: the whole list as a plain NOTICE file you can read here, copy, or download. Built on the spot from the same data as the table.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"noticeFile\",\n  \"scene\": \"hex-lattice\",\n  \"tag\": \"End of the notices\",\n  \"minHeight\": 520,\n  \"title\": \"The whole list, as a file.\",\n  \"lede\": \"Built on the spot from the same data as the table above. Read it here, copy it, or take it with you.\",\n  \"onward\": [\n    {\n      \"label\": \"Copyright & marks\",\n      \"to\": \"/legal/copyright\"\n    },\n    {\n      \"label\": \"Trust centre\",\n      \"to\": \"/trust\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"noticeFile\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
