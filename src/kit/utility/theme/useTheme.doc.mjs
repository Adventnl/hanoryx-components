export const docs = {
  "origin": "new",
  "summary": "The current theme name.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "The current theme name.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useTheme } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst theme = useTheme(); // reads the nearest Theme provider"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useLayer": {
      "origin": "new",
      "summary": "The nearest relative layer index.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "The nearest relative layer index.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useLayer } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst index = useLayer(); // reads the nearest Layer provider"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
