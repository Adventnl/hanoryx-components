/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "One menu opening under three motion policies. The site follows the device's reduced-motion setting, and also offers a calm display setting of its own.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"motionModes\",\n  \"anchor\": \"modes\",\n  \"scene\": \"flow-field\",\n  \"tag\": \"End of motion systems\",\n  \"minHeight\": 640,\n  \"title\": \"One menu, three policies.\",\n  \"lede\": \"The same menu opening in full, in calm and in still. The site follows the device’s reduced-motion setting, and also offers a calm display setting of its own, which stills the drawn backgrounds.\",\n  \"onward\": [\n    {\n      \"label\": \"Animation budgets\",\n      \"to\": \"/insights/animation-budgets\"\n    },\n    {\n      \"label\": \"Interface lab\",\n      \"to\": \"/north/interface-lab\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"motionModes\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
