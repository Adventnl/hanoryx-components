/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The disclaimers in genuinely tiny type, with a lens that follows the pointer and reads the line under it at a size you can read.",
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
      "name": "lines",
      "type": "Array<string>",
      "description": "Host-supplied lines; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"finePrint\",\n  \"scene\": \"redaction-matrix\",\n  \"tag\": \"End of disclaimers\",\n  \"minHeight\": 520,\n  \"title\": \"The fine print, made readable.\",\n  \"lede\": \"Move over it. Or switch the lens on, and read it at a size you can.\",\n  \"lines\": [\n    \"The site is provided as it is and as it is available, and may change, move or be withdrawn without notice.\",\n    \"Descriptions of work are descriptions, not offers, quotations or guarantees of any result.\",\n    \"Illustrations, demonstrations and sample records are not real systems, real data or real measurements.\",\n    \"Articles and tools are general information. They are not advice, and they do not know your circumstances.\",\n    \"Figures measured on your own device describe that device at that moment, and nothing else.\",\n    \"Links to other sites are not endorsements. Those sites, and the font service, are not under the company’s control.\",\n    \"Nothing here limits any responsibility that the law does not allow to be limited.\"\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Terms of use\",\n      \"to\": \"/legal/terms\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"finePrint\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
