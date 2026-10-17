export const docs = {
  "origin": "new",
  "summary": "Combobox bindings with independent selected values and a remove action.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Combobox bindings with independent selected values and a remove action.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useMultiCombobox } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst combo = useMultiCombobox({ options: ['Alpha', 'Beta'] });\n// Attach combo.inputProps, combo.listProps, and combo.getOptionProps(index).\n// Render combo.matches and read combo.value."
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
