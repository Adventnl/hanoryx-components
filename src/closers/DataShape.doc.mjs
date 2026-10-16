/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "“Show this data.” Pick the shape your data has and the page shows the component that suits it, drawn with sample data, with the reason — and the common wrong choice and why it fails.",
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
      "name": "shapes",
      "type": "Array<{ id: string; label: string; sees: string; use: string; to: string; why: string; notThis: string }>",
      "description": "Host-supplied shapes; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"anchor\": \"shape\",\n  \"kind\": \"dataShape\",\n  \"scene\": \"architectural-grid\",\n  \"tag\": \"End of the data display components\",\n  \"minHeight\": 780,\n  \"title\": \"What shape is your data?\",\n  \"lede\": \"Choose the shape the information has and the page shows the component that suits it, drawn with sample data, with the reason — and the usual wrong choice and why it fails.\",\n  \"shapes\": [\n    {\n      \"id\": \"trend\",\n      \"label\": \"A trend over time\",\n      \"sees\": \"One measure, many moments\",\n      \"use\": \"Sparkline\",\n      \"to\": \"/north/components/data#sparkline\",\n      \"why\": \"A single line shows direction at a glance and takes almost no room, so it fits in a row, a card or a sentence. Give it a text description so the shape is never the only way in.\",\n      \"notThis\": \"A full chart with axes, gridlines and a legend, when all anyone needs is better or worse.\"\n    },\n    {\n      \"id\": \"compare\",\n      \"label\": \"A few values to compare\",\n      \"sees\": \"Four or five things, one measure\",\n      \"use\": \"BarList\",\n      \"to\": \"/north/components/data#barList\",\n      \"why\": \"Length is the easiest thing for the eye to compare, and a list keeps the label and the figure beside the bar, so the numbers stay real text.\",\n      \"notThis\": \"A pie or donut. Angles and areas are hard to compare, and the labels end up far from the slices.\"\n    },\n    {\n      \"id\": \"records\",\n      \"label\": \"Records with several fields\",\n      \"sees\": \"Rows and columns\",\n      \"use\": \"DataTable\",\n      \"to\": \"/north/components/data#dataTable\",\n      \"why\": \"When people need to find, sort and compare rows, a table is the honest shape. Headers are real headers, so a screen reader can say which column a cell is in.\",\n      \"notThis\": \"A grid of cards. Cards hide the columns, and with them the ability to compare.\"\n    },\n    {\n      \"id\": \"facts\",\n      \"label\": \"Facts about one thing\",\n      \"sees\": \"Labels and values\",\n      \"use\": \"DescriptionList\",\n      \"to\": \"/north/components/data#descriptionList\",\n      \"why\": \"A term and its detail, paired in the markup and not only side by side on the screen.\",\n      \"notThis\": \"Bold text and a colon in a paragraph. It looks the same and means nothing to software.\"\n    },\n    {\n      \"id\": \"steps\",\n      \"label\": \"Things in an order\",\n      \"sees\": \"A sequence\",\n      \"use\": \"Timeline\",\n      \"to\": \"/north/components/data#timeline\",\n      \"why\": \"An ordered list, so the order is announced. The line and the markers only repeat what the list already says.\",\n      \"notThis\": \"Dates you do not have. If the order is known and the dates are not, say phases — this site does.\"\n    },\n    {\n      \"id\": \"nested\",\n      \"label\": \"Things inside things\",\n      \"sees\": \"A hierarchy\",\n      \"use\": \"Tree\",\n      \"to\": \"/north/components/data#tree\",\n      \"why\": \"One tab stop, arrow keys to walk it, and the level and position announced for every item.\",\n      \"notThis\": \"Nested lists of links where every item is a tab stop: forty Tabs to get past a folder.\"\n    },\n    {\n      \"id\": \"one\",\n      \"label\": \"One important number\",\n      \"sees\": \"A single figure\",\n      \"use\": \"Stat\",\n      \"to\": \"/north/components/data#stat\",\n      \"why\": \"Large, labelled and, if you have it, compared with something — in words.\",\n      \"notThis\": \"A gauge, when a number would do.\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"Overlay components\",\n      \"to\": \"/north/components/overlays\"\n    },\n    {\n      \"label\": \"Audit trails that answer questions\",\n      \"to\": \"/insights/audit-trails\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"dataShape\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
