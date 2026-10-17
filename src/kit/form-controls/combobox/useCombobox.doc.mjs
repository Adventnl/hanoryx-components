export const docs = {
  "origin": "new",
  "summary": "Headless combobox bindings, filtered options, active descendant and selection state.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "Headless combobox bindings, filtered options, active descendant and selection state.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useCombobox } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst combo = useCombobox({ options: ['Alpha', 'Beta'] });\n// Attach combo.inputProps, combo.listProps, and combo.getOptionProps(index).\n// Render combo.matches and read combo.value."
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {}
};
