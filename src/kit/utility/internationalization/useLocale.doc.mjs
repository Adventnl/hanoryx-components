export const docs = {
  "origin": "new",
  "summary": "The current internationalization locale.",
  "notes": [
    "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
  ],
  "returns": "The current internationalization locale.",
  "keyboard": [],
  "examples": [
    {
      "title": "Hook contract",
      "code": "import { useLocale } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst locale = useLocale();"
    }
  ],
  "sizing": {
    "rules": []
  },
  "subcomponents": {
    "useTranslator": {
      "origin": "new",
      "summary": "A dictionary translator with named placeholders and a key fallback.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "A dictionary translator with named placeholders and a key fallback.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useTranslator } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst translate = useTranslator();\nconst greeting = translate('greeting', { name: 'Ari' });"
        }
      ],
      "sizing": {
        "rules": []
      }
    },
    "useCollator": {
      "origin": "new",
      "summary": "A locale-aware Intl.Collator memoized for the supplied options.",
      "notes": [
        "Call this hook at the top level of a React component. Attach returned DOM bindings to the corresponding element. The host owns rendering and application actions."
      ],
      "returns": "A locale-aware Intl.Collator memoized for the supplied options.",
      "keyboard": [],
      "examples": [
        {
          "title": "Hook contract",
          "code": "import { useCollator } from 'hanoryx-components/kit';\n\n// Inside a React component:\nconst collator = useCollator();\nconst sorted = [...names].sort(collator.compare);"
        }
      ],
      "sizing": {
        "rules": []
      }
    }
  }
};
