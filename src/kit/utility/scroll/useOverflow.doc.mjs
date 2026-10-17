export const docs = {
  "origin": "new",
  "summary": "A root ref and horizontal, vertical, start and end overflow state observed across size/content changes.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "A root ref and horizontal, vertical, start and end overflow state observed across size/content changes.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useOverflow } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { ref, horizontal, vertical, start, end } = useOverflow();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useScrollOverflow": {
      "origin": "new",
      "summary": "The overflow observation hook under its scrolling family name.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "The overflow observation hook under its scrolling family name.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useScrollOverflow } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { ref, start, end } = useScrollOverflow();"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useScrollableArea": {
      "origin": "new",
      "summary": "Overflow observation plus scrollToStart and scrollToEnd actions.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "Overflow observation plus scrollToStart and scrollToEnd actions.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useScrollableArea } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst { ref, scrollToStart, scrollToEnd } = useScrollableArea();"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
