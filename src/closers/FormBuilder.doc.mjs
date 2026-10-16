/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Choose the fields a form needs and the page builds it from the kit's own components, checks it when you send it (focus goes to the first problem, and a summary is announced), and writes the JSX out so you can take it with you.",
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
      "name": "fields",
      "type": "Array<{ id: string; label: string; kind: string; required: boolean; start: boolean }>",
      "description": "Host-supplied fields; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"anchor\": \"build\",\n  \"kind\": \"formBuilder\",\n  \"scene\": \"signal-wave\",\n  \"tag\": \"End of the input components\",\n  \"minHeight\": 900,\n  \"title\": \"Build a form, check it, take the code.\",\n  \"lede\": \"Tick the fields a form needs and the page builds it from the kit’s own components. Send it empty to see how the errors read and where focus goes; the JSX underneath is yours to copy.\",\n  \"fields\": [\n    {\n      \"id\": \"name\",\n      \"label\": \"Full name\",\n      \"kind\": \"text\",\n      \"required\": true,\n      \"start\": true\n    },\n    {\n      \"id\": \"email\",\n      \"label\": \"Email address\",\n      \"kind\": \"email\",\n      \"required\": true,\n      \"start\": true,\n      \"hint\": \"We reply from this address.\"\n    },\n    {\n      \"id\": \"password\",\n      \"label\": \"Password\",\n      \"kind\": \"password\",\n      \"required\": true,\n      \"hint\": \"At least 12 characters is a good start.\"\n    },\n    {\n      \"id\": \"seats\",\n      \"label\": \"Seats\",\n      \"kind\": \"number\",\n      \"min\": 1,\n      \"max\": 12,\n      \"hint\": \"Between 1 and 12.\"\n    },\n    {\n      \"id\": \"plan\",\n      \"label\": \"Plan\",\n      \"kind\": \"select\",\n      \"required\": true,\n      \"start\": true,\n      \"options\": [\n        \"Starter\",\n        \"Team\",\n        \"Studio\"\n      ]\n    },\n    {\n      \"id\": \"contact\",\n      \"label\": \"Contact by\",\n      \"kind\": \"radio\",\n      \"required\": true,\n      \"options\": [\n        \"Email\",\n        \"Phone\",\n        \"Post\"\n      ]\n    },\n    {\n      \"id\": \"notes\",\n      \"label\": \"Anything else\",\n      \"kind\": \"textarea\",\n      \"max\": 200,\n      \"hint\": \"Optional.\"\n    },\n    {\n      \"id\": \"agree\",\n      \"label\": \"I have read the terms\",\n      \"kind\": \"checkbox\",\n      \"required\": true,\n      \"start\": true\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Navigation components\",\n      \"to\": \"/north/components/navigation\"\n    },\n    {\n      \"label\": \"Roles, permissions and scopes\",\n      \"to\": \"/insights/permissions\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"formBuilder\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
