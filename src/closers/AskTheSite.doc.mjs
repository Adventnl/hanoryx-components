/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Ask the whole site a question. It searches every page's title and text with the same engine as ⌘K and lays the best answers out here, with the sentence that matched. If the answer is not on the site, it says so.",
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
      "name": "examples",
      "type": "Array<string>",
      "description": "Host-supplied examples; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"askTheSite\",\n  \"anchor\": \"ask\",\n  \"scene\": \"trigger-action-pulse\",\n  \"tag\": \"End of the questions\",\n  \"minHeight\": 560,\n  \"title\": \"Not here? Ask the whole site.\",\n  \"lede\": \"Every page’s title and text is searched, with the same engine as ⌘K, and the best answers are laid out below.\",\n  \"examples\": [\n    \"cookies\",\n    \"idempotency\",\n    \"hiring\",\n    \"contrast\",\n    \"keyboard\"\n  ],\n  \"onward\": [\n    {\n      \"label\": \"The site map\",\n      \"to\": \"/sitemap\"\n    },\n    {\n      \"label\": \"Glossary\",\n      \"to\": \"/resources/glossary\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"askTheSite\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
