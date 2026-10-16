/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Five things worth trying on this site, each a real control: they open the actual search, the actual shortcuts panel, the actual blueprint mode, the actual calm setting, and a page chosen at random. A way to end by using it.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"trySite\",\n  \"anchor\": \"try\",\n  \"scene\": \"home-core\",\n  \"tag\": \"End of the home page\",\n  \"minHeight\": 520,\n  \"title\": \"Now try it.\",\n  \"lede\": \"Five things worth doing before you go, each a real control: the search, the shortcuts, blueprint mode, the calm setting, and a page chosen for you.\",\n  \"onward\": [\n    {\n      \"label\": \"Selected work\",\n      \"to\": \"/work\"\n    },\n    {\n      \"label\": \"Resource centre\",\n      \"to\": \"/resources\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"trySite\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
