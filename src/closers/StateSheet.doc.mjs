/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "The seven states every control owns, shown side by side for three controls, and a live row of the real thing underneath. Tab to it, press it, hover it: the states above are what you are feeling.",
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"stateSheet\",\n  \"anchor\": \"states\",\n  \"scene\": \"concentric-gate\",\n  \"tag\": \"End of the interface lab\",\n  \"minHeight\": 700,\n  \"title\": \"Every control owns seven states.\",\n  \"lede\": \"Resting, hover, focus, pressed, disabled, busy and error, side by side for a button, a field and a switch. Underneath is the real thing: hover it, Tab to it, press it.\",\n  \"onward\": [\n    {\n      \"label\": \"Accessible by default\",\n      \"to\": \"/north/accessibility\"\n    },\n    {\n      \"label\": \"Design tokens\",\n      \"to\": \"/north/design-tokens\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"stateSheet\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
