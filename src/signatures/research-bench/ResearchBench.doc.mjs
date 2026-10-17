/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "A small bench of three working studies from this very site. They are live: the numbers in the first are read from this page on this device, the second answers your system's motion setting, the third is a real keyboard row.",
  "props": [
    {
      "name": "eyebrow",
      "type": "string",
      "description": "Host-supplied eyebrow; see the complete working data example below."
    },
    {
      "name": "title",
      "type": "string",
      "description": "Host-supplied title; see the complete working data example below."
    },
    {
      "name": "intro",
      "type": "string",
      "description": "Host-supplied intro; see the complete working data example below."
    },
    {
      "name": "experiments",
      "type": "Array<{ id: string; label: string; title: string; body: string }>",
      "description": "Host-supplied experiments; see the complete working data example below."
    },
    {
      "name": "note",
      "type": "string",
      "description": "Host-supplied note; see the complete working data example below."
    }
  ],
  "examples": [
    {
      "title": "Compose through signature block",
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"signature\",\n  \"kind\": \"researchBench\",\n  \"anchor\": \"bench\",\n  \"railLabel\": \"The bench\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"minHeight\": 560,\n  \"eyebrow\": \"The bench\",\n  \"title\": \"Three studies, running on this page.\",\n  \"intro\": \"These are live. The first reads numbers from your device, the second answers your motion setting, the third is a real keyboard row.\",\n  \"experiments\": [\n    {\n      \"id\": \"budget\",\n      \"label\": \"Scene budget\",\n      \"title\": \"How many backgrounds can run at once?\",\n      \"body\": \"Every section can have its own animated background, but only the few most visible ones actually run. These numbers are read live from this page, on this device.\"\n    },\n    {\n      \"id\": \"still\",\n      \"label\": \"A still state\",\n      \"title\": \"What should motion say when it stops?\",\n      \"body\": \"When motion is reduced, the information an animation carried has to survive in a still form. Switch it off and compare.\"\n    },\n    {\n      \"id\": \"focus\",\n      \"label\": \"Focus you can follow\",\n      \"title\": \"Where am I, if I cannot point?\",\n      \"body\": \"Keyboard focus should be visible and should travel with some grace. Try it on the row.\"\n    }\n  ],\n  \"note\": \"Studies of the site itself — not separate products.\"\n}} />"
    }
  ],
  "notes": [
    "Registered as signature block, kind=\"researchBench\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
