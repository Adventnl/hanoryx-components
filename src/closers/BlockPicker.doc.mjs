/* Usage contract maintained beside the implementation. */
export const docs = {
  "origin": "hanoryx-web",
  "summary": "“Which block?” Say what you are trying to show and the page names the block that suits it, with the data that makes it, why it fits, and what people usually reach for instead.",
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
      "name": "intents",
      "type": "Array<{ id: string; label: string; sees: string; use: string; to: string; why: string; notThis: string; sample: string }>",
      "description": "Host-supplied intents; see the complete working data example below."
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
      "code": "import { PageBlock } from 'hanoryx-components/page';\n<PageBlock block={{\n  \"type\": \"closer\",\n  \"kind\": \"blockPicker\",\n  \"anchor\": \"picker\",\n  \"scene\": \"privacy-quiet-grid\",\n  \"tag\": \"End of the page blocks\",\n  \"minHeight\": 820,\n  \"title\": \"What are you trying to show?\",\n  \"lede\": \"Say what the page needs to do and the block that suits it comes up, with the data that makes it and the usual wrong choice.\",\n  \"intents\": [\n    {\n      \"id\": \"remark\",\n      \"label\": \"One thing that must not be missed\",\n      \"sees\": \"A note, a tip, a warning\",\n      \"use\": \"callout\",\n      \"to\": \"/north/blocks#callout\",\n      \"why\": \"It sets one remark apart from the text, worded by kind so that colour is never the only signal.\",\n      \"notThis\": \"A banner across the whole site for something that belongs to one page.\",\n      \"sample\": \"{\\n  type: 'callout',\\n  tone: 'warning',\\n  heading: 'An open item',\\n  body: ['This section is incomplete rather than guessed.'],\\n}\"\n    },\n    {\n      \"id\": \"records\",\n      \"label\": \"Records people will compare\",\n      \"sees\": \"Rows and columns\",\n      \"use\": \"table\",\n      \"to\": \"/north/blocks#catalogue\",\n      \"why\": \"A table is the honest shape for records. A screen reader can say which column a cell is in, and a sortable header lets people put the rows in their own order.\",\n      \"notThis\": \"A grid of cards, which hides the columns and with them the comparison.\",\n      \"sample\": \"{\\n  type: 'table',\\n  caption: 'Scheduled jobs',\\n  head: ['Job', 'Minutes'],\\n  rows: [['Nightly export', '12'], ['Archive old records', '48']],\\n  sortable: true,\\n}\"\n    },\n    {\n      \"id\": \"order\",\n      \"label\": \"Things in an order\",\n      \"sees\": \"A sequence\",\n      \"use\": \"timeline\",\n      \"to\": \"/north/blocks#timeline\",\n      \"why\": \"An ordered list, so the order is announced. Words such as First and Then do the job of dates, and they are never wrong.\",\n      \"notThis\": \"Dates the page cannot back up.\",\n      \"sample\": \"{\\n  type: 'timeline',\\n  items: [\\n    { when: 'First', title: 'Shape' },\\n    { when: 'Then', title: 'Build' },\\n    { when: 'Last', title: 'Retire' },\\n  ],\\n}\"\n    },\n    {\n      \"id\": \"questions\",\n      \"label\": \"Questions people ask\",\n      \"sees\": \"A question and its answer\",\n      \"use\": \"faq\",\n      \"to\": \"/north/blocks#faq\",\n      \"why\": \"Each answer is a disclosure, so a long page of questions stays easy to scan and a closed answer is out of the tab order and the reading order.\",\n      \"notThis\": \"A wall of text with the questions in bold.\",\n      \"sample\": \"{\\n  type: 'faq',\\n  openFirst: true,\\n  items: [{ q: 'Can I reuse this?', a: ['Ask first.'] }],\\n}\"\n    },\n    {\n      \"id\": \"choice\",\n      \"label\": \"Two ways of doing it\",\n      \"sees\": \"This, or that\",\n      \"use\": \"compare\",\n      \"to\": \"/north/blocks#compare\",\n      \"why\": \"Columns that say in words what each side is, so the comparison does not depend on colour.\",\n      \"notThis\": \"A table of ticks and crosses, which says less and reads worse aloud.\",\n      \"sample\": \"{\\n  type: 'compare',\\n  columns: [\\n    { label: 'Do', title: 'This', tone: 'yes', items: ['Link to the page'] },\\n    { label: 'Not', title: 'That', tone: 'no', items: ['Frame the page'] },\\n  ],\\n}\"\n    },\n    {\n      \"id\": \"code\",\n      \"label\": \"A piece of code or data\",\n      \"sees\": \"Text that must be copied exactly\",\n      \"use\": \"snippet\",\n      \"to\": \"/north/blocks#snippet\",\n      \"why\": \"It keeps every character, offers a copy button and can be scrolled from the keyboard. The colours are a nicety; copying gives exactly what you see.\",\n      \"notThis\": \"A screenshot of code, which cannot be copied, searched or read aloud.\",\n      \"sample\": \"{\\n  type: 'snippet',\\n  filename: 'tokens.css',\\n  language: 'css',\\n  code: ':root { --space-4: 1rem; }',\\n}\"\n    },\n    {\n      \"id\": \"views\",\n      \"label\": \"Several short views of one thing\",\n      \"sees\": \"Parallel versions\",\n      \"use\": \"tabs\",\n      \"to\": \"/north/blocks#tabs\",\n      \"why\": \"One panel at a time, with the arrow keys moving between the tabs and the panel shown at once.\",\n      \"notThis\": \"Tabs for things a reader must compare, which hide one half of the comparison.\",\n      \"sample\": \"{\\n  type: 'tabs',\\n  label: 'Ways to link',\\n  tabs: [{ id: 'html', label: 'HTML', body: ['Use an anchor.'] }],\\n}\"\n    },\n    {\n      \"id\": \"words\",\n      \"label\": \"The company’s own words\",\n      \"sees\": \"A statement and its source\",\n      \"use\": \"quote\",\n      \"to\": \"/north/blocks#quote\",\n      \"why\": \"A real blockquote with its source as the caption. It is for words someone said and agreed to have quoted.\",\n      \"notThis\": \"An invented testimonial.\",\n      \"sample\": \"{\\n  type: 'quote',\\n  quote: 'Nothing moves to decorate.',\\n  cite: 'Hanoryx Systems, Principle 03',\\n}\"\n    },\n    {\n      \"id\": \"steps\",\n      \"label\": \"A list to tick through\",\n      \"sees\": \"Progress\",\n      \"use\": \"checklist\",\n      \"to\": \"/north/blocks#checklist\",\n      \"why\": \"Real checkboxes, with a count that is announced politely. The ticks live in the page and nothing is stored.\",\n      \"notThis\": \"A numbered list, which shows an order but not how far you have got.\",\n      \"sample\": \"{\\n  type: 'checklist',\\n  done: 'Ready.',\\n  items: [{ label: 'The type is known' }, { label: 'The words are in the data' }],\\n}\"\n    },\n    {\n      \"id\": \"facts\",\n      \"label\": \"Facts about one thing\",\n      \"sees\": \"Labels and values\",\n      \"use\": \"facts\",\n      \"to\": \"/north/blocks#facts\",\n      \"why\": \"A real description list, so a screen reader pairs each term with its detail.\",\n      \"notThis\": \"Bold text and a colon, which looks the same and means nothing to software.\",\n      \"sample\": \"{\\n  type: 'facts',\\n  items: [{ term: 'anchor', detail: 'An address on the page.' }],\\n}\"\n    },\n    {\n      \"id\": \"onward\",\n      \"label\": \"Where to go next\",\n      \"sees\": \"Related pages\",\n      \"use\": \"links\",\n      \"to\": \"/north/blocks#links\",\n      \"why\": \"Cards that each hold one link, so the thing you press is a link with a name and not a whole card wrapped in an anchor.\",\n      \"notThis\": \"A row of bare addresses, or “click here”.\",\n      \"sample\": \"{\\n  type: 'links',\\n  items: [{ title: 'Components', body: 'The kit.', to: '/north/components', label: 'Open it' }],\\n}\"\n    },\n    {\n      \"id\": \"figures\",\n      \"label\": \"A few figures\",\n      \"sees\": \"Numbers and how they moved\",\n      \"use\": \"numbers\",\n      \"to\": \"/north/blocks#numbers\",\n      \"why\": \"Each figure is large and labelled, and how it moved is said in words as well as drawn. A note says where the figures come from.\",\n      \"notThis\": \"A figure with no baseline and no source.\",\n      \"sample\": \"{\\n  type: 'numbers',\\n  note: 'Sample data.',\\n  items: [{ label: 'Jobs on time', value: 96, unit: '%', change: 2, changeLabel: 'on last week' }],\\n}\"\n    }\n  ],\n  \"onward\": [\n    {\n      \"label\": \"The interface components\",\n      \"to\": \"/north/components\"\n    },\n    {\n      \"label\": \"How we check the work\",\n      \"to\": \"/north/quality\"\n    }\n  ]\n}} />"
    }
  ],
  "notes": [
    "Registered as closer block, kind=\"blockPicker\". Pass the complete data object through PageBlock or PageHero so its wrapper, lazy loading and scene context are preserved.",
    "Content is supplied by the host. Links use the router; no page data or backend service is fetched by this API."
  ],
  "sizing": {
    "rules": [
      "Page sections fill their parent and provide their own container and padding. Do not add external width, height or padding to the library component.",
      "Use the three-width measurements to select a suitable parent. Stateful examples may change height after interaction."
    ]
  }
};
