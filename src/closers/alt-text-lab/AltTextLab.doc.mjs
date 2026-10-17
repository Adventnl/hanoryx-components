/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Write the alt text for four pictures, each a different problem: a chart, an ornament, an icon in a button, an illustration. Press Check for a short review against common rules, then see one way each could be written.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"altTextLab\",\n  \"anchor\": \"alt\",\n  \"scene\": \"redaction-matrix\",\n  \"tag\": \"End of accessibility\",\n  \"minHeight\": 760,\n  \"title\": \"Write the alt text.\",\n  \"lede\": \"Four pictures, four different problems: a chart, an ornament, an icon inside a button and an illustration. Describe each as you would to someone who cannot see it, then check against a few common rules.\",\n  \"onward\": [\n    {\n      \"label\": \"Accessibility statement\",\n      \"to\": \"/legal/accessibility\"\n    },\n    {\n      \"label\": \"Contrast checker\",\n      \"to\": \"/resources/tools/contrast\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"altTextLab\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
