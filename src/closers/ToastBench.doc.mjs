/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "Fire the feedback components and watch what each one would announce.",
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
      "name": "presets",
      "type": "Array<{ id: string; label: string; tone: string; title: string; body: string }>",
      "description": "Host-supplied presets; see the complete working data example below."
    },
    {
      "name": "alerts",
      "type": "Array<{ id: string; label: string; tone: string; title: string; body: string }>",
      "description": "Host-supplied alerts; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"anchor\": \"bench\",\n  \"kind\": \"toastBench\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"tag\": \"End of the feedback components\",\n  \"minHeight\": 800,\n  \"title\": \"Fire one, and read what it says.\",\n  \"lede\": \"Toasts for what needs no answer, alerts for what needs looking at. Each time you fire one, the log writes down the words a screen reader would say and whether it would wait politely or interrupt.\",\n  \"presets\": [\n    {\n      \"id\": \"saved\",\n      \"label\": \"Saved\",\n      \"tone\": \"success\",\n      \"title\": \"Saved\",\n      \"body\": \"Your changes are kept.\"\n    },\n    {\n      \"id\": \"copied\",\n      \"label\": \"Copied\",\n      \"tone\": \"success\",\n      \"title\": \"Copied\",\n      \"body\": \"The address is on your clipboard.\"\n    },\n    {\n      \"id\": \"sync\",\n      \"label\": \"Syncing\",\n      \"tone\": \"info\",\n      \"title\": \"Syncing\",\n      \"body\": \"This can take a moment. You can keep working.\"\n    },\n    {\n      \"id\": \"fail\",\n      \"label\": \"Failed\",\n      \"tone\": \"danger\",\n      \"title\": \"Could not save\",\n      \"body\": \"Check your connection and try again.\"\n    }\n  ],\n  \"alerts\": [\n    {\n      \"id\": \"info\",\n      \"label\": \"Information\",\n      \"tone\": \"info\",\n      \"title\": \"Maintenance window\",\n      \"body\": \"The service is read-only from 02:00 to 02:30 UTC on Sunday.\"\n    },\n    {\n      \"id\": \"warn\",\n      \"label\": \"Warning\",\n      \"tone\": \"warning\",\n      \"title\": \"Token expires soon\",\n      \"body\": \"Replace it before Friday.\"\n    },\n    {\n      \"id\": \"err\",\n      \"label\": \"Error\",\n      \"tone\": \"danger\",\n      \"title\": \"Export failed\",\n      \"body\": \"Two rows had no order number.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Data display components\",\n      \"to\": \"/north/components/data\"\n    },\n    {\n      \"label\": \"Runbooks people actually use\",\n      \"to\": \"/insights/runbooks\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"toastBench\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
