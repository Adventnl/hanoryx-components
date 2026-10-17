export const docs = {
  "origin": "new",
  "summary": "The headless combobox hook under its typeahead family name.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "The headless combobox hook under its typeahead family name.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useTypeahead } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst combo = useTypeahead({ options: ['Alpha', 'Beta'] });\n// Attach combo.inputProps, combo.listProps, and combo.getOptionProps(index).\n// Render combo.matches and read combo.value."
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
