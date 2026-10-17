export const docs = {
  "origin": "new",
  "summary": "Ref and keydown bindings that move through visible, enabled list items.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Ref and keydown bindings that move through visible, enabled list items.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useListFocus } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst listProps = useListFocus(); // children use data-focus-item"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useGridFocus": {
      "origin": "new",
      "summary": "List focus with two-dimensional movement using the supplied column count.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "List focus with two-dimensional movement using the supplied column count.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useGridFocus } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst gridProps = useGridFocus({ columns: 2 }); // children use data-focus-item"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useTreeFocus": {
      "origin": "new",
      "summary": "Vertical tree navigation plus expansion, collapse and parent/child focus movement.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Vertical tree navigation plus expansion, collapse and parent/child focus movement.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useTreeFocus } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst treeProps = useTreeFocus({ onExpand: expandKey, onCollapse: collapseKey });"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
