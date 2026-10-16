/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Fluid type without media queries: a font size that grows smoothly between two viewport widths and stops at both ends. Set the four numbers; the one line of CSS comes out, and a slider stands in for the browser window.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"clampMaker\",\n  \"anchor\": \"fluid\",\n  \"scene\": \"wave-interference\",\n  \"tag\": \"End of the type scale\",\n  \"minHeight\": 640,\n  \"title\": \"Make one size fluid.\",\n  \"lede\": \"Give a smallest and a largest size, and the window widths between which it grows. One line of CSS comes out, with no media query. Drag the slider to stand in for the browser window.\",\n  \"onward\": [\n    {\n      \"label\": \"Design tokens\",\n      \"to\": \"/north/design-tokens\"\n    },\n    {\n      \"label\": \"Contrast checker\",\n      \"to\": \"/resources/tools/contrast\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"clampMaker\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
