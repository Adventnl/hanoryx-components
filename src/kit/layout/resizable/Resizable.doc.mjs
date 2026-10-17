export const docs = {
  "origin": "new",
  "summary": "Two resizable panels with a pointer- and keyboard-operated separator.",
  "props": [
    {
      "name": "children",
      "type": "ReactNode",
      "description": "Content rendered in this part."
    },
    {
      "name": "orientation",
      "type": "'horizontal' | 'vertical'",
      "description": "Direction in which panels are arranged."
    },
    {
      "name": "value",
      "type": "see notes",
      "description": "Controlled value. Pair it with onChange; omit it to use defaultValue."
    },
    {
      "name": "defaultValue",
      "type": "see notes",
      "description": "Initial value for uncontrolled usage. Subsequent changes to defaultValue do not reset state."
    },
    {
      "name": "onChange",
      "type": "function",
      "description": "Reports the next value; native date/time fields instead report the native input change event."
    },
    {
      "name": "min",
      "type": "number | string",
      "description": "Lower bound: ISO date for date fields, percentage for split panels."
    },
    {
      "name": "max",
      "type": "number | string",
      "description": "Upper bound in the same units as min."
    },
    {
      "name": "label",
      "type": "string",
      "description": "Visible or accessible name. Keep it meaningful in the page context."
    }
  ],
  "notes": [
    "Use exactly two ResizablePanel children with one ResizeHandle between them. The second panel needs side=\"end\".",
    "value/defaultValue are percentages of the available container, constrained by min and max. Use onChange to persist a split.",
    "For vertical splits, the parent must reserve an overall height."
  ],
  "sizing": {
    "rules": [
      "The parent owns the overall width and height. Panels own padding and scroll overflow.",
      "Panel and handle measurements are contextual: they are rendered inside a complete Resizable."
    ]
  },
  "keyboard": [
    {
      "key": "Arrow Left / Right",
      "does": "Adjust a horizontal split by one percentage point; Shift adjusts ten."
    },
    {
      "key": "Arrow Up / Down",
      "does": "Adjust a vertical split."
    },
    {
      "key": "Home / End",
      "does": "Move to the minimum / maximum split."
    }
  ],
  "examples": [
    {
      "title": "Working composition",
      "code": "<Resizable defaultValue={40} min={20} max={80}>\n  <ResizablePanel label=\"Navigation\">Navigation</ResizablePanel>\n  <ResizeHandle />\n  <ResizablePanel label=\"Content\" side=\"end\">Content</ResizablePanel>\n</Resizable>"
    }
  ],
  "subcomponents": {
    "ResizablePanel": {
      "origin": "new",
      "summary": "One of the two named panels inside Resizable.",
      "props": [
        {
          "name": "children",
          "type": "ReactNode",
          "description": "Content rendered in this part."
        },
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        },
        {
          "name": "side"
        }
      ],
      "notes": [
        "Use exactly two ResizablePanel children with one ResizeHandle between them. The second panel needs side=\"end\".",
        "value/defaultValue are percentages of the available container, constrained by min and max. Use onChange to persist a split.",
        "For vertical splits, the parent must reserve an overall height."
      ],
      "sizing": {
        "rules": [
          "The parent owns the overall width and height. Panels own padding and scroll overflow.",
          "Panel and handle measurements are contextual: they are rendered inside a complete Resizable."
        ]
      },
      "keyboard": [
        {
          "key": "Arrow Left / Right",
          "does": "Adjust a horizontal split by one percentage point; Shift adjusts ten."
        },
        {
          "key": "Arrow Up / Down",
          "does": "Adjust a vertical split."
        },
        {
          "key": "Home / End",
          "does": "Move to the minimum / maximum split."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Resizable defaultValue={40} min={20} max={80}>\n  <ResizablePanel label=\"Navigation\">Navigation</ResizablePanel>\n  <ResizeHandle />\n  <ResizablePanel label=\"Content\" side=\"end\">Content</ResizablePanel>\n</Resizable>"
        }
      ]
    },
    "ResizeHandle": {
      "origin": "new",
      "summary": "The focusable separator for pointer and keyboard panel resizing.",
      "props": [
        {
          "name": "label",
          "type": "string",
          "description": "Visible or accessible name. Keep it meaningful in the page context."
        }
      ],
      "notes": [
        "Use exactly two ResizablePanel children with one ResizeHandle between them. The second panel needs side=\"end\".",
        "value/defaultValue are percentages of the available container, constrained by min and max. Use onChange to persist a split.",
        "For vertical splits, the parent must reserve an overall height."
      ],
      "sizing": {
        "rules": [
          "The parent owns the overall width and height. Panels own padding and scroll overflow.",
          "Panel and handle measurements are contextual: they are rendered inside a complete Resizable."
        ]
      },
      "keyboard": [
        {
          "key": "Arrow Left / Right",
          "does": "Adjust a horizontal split by one percentage point; Shift adjusts ten."
        },
        {
          "key": "Arrow Up / Down",
          "does": "Adjust a vertical split."
        },
        {
          "key": "Home / End",
          "does": "Move to the minimum / maximum split."
        }
      ],
      "examples": [
        {
          "title": "Working composition",
          "code": "<Resizable defaultValue={40} min={20} max={80}>\n  <ResizablePanel label=\"Navigation\">Navigation</ResizablePanel>\n  <ResizeHandle />\n  <ResizablePanel label=\"Content\" side=\"end\">Content</ResizablePanel>\n</Resizable>"
        }
      ]
    }
  }
};
