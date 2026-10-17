/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "One printable page that holds what the five tools turn on: the thresholds, the ratios, the field ranges, the groups, the headings. Print it, or copy it as plain text.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"cheatSheet\",\n  \"anchor\": \"sheet\",\n  \"scene\": \"tooling-console\",\n  \"tag\": \"End of the tools\",\n  \"minHeight\": 640,\n  \"title\": \"All five, on one page.\",\n  \"lede\": \"The thresholds, the ratios, the field ranges, the groups and the headings the tools turn on, laid out as a sheet. Print it, or copy it as plain text.\",\n  \"onward\": [\n    {\n      \"label\": \"Downloads\",\n      \"to\": \"/resources/downloads\"\n    },\n    {\n      \"label\": \"Glossary\",\n      \"to\": \"/resources/glossary\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"cheatSheet\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
