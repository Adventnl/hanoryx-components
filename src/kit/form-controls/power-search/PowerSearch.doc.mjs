export const docs = {
  "origin": "new",
  "summary": "Search text plus structured select filters, submitted to the host as query and filters.",
  "notes": [
    "New library API. Content and callbacks are supplied by the host; no network request is made by this component."
  ],
  "keyboard": [
    {
      "key": "Tab / Shift+Tab",
      "does": "Move through native controls. Enter or Space activates buttons and disclosure triggers."
    }
  ],
  "examples": [
    {
      "title": "Family composition",
      "code": "import { useState } from 'react';\nimport * as Kit from 'hanoryx-components/kit';\n\nconst options = [{ value: 'design', label: 'Design', description: 'Interface and interaction' }, { value: 'build', label: 'Build', description: 'Implementation and delivery' }];\nexport default function FormExamples() {\n  const [result, setResult] = useState('');\n  return <Kit.Stack><Kit.ComplexSelector label=\"Project team\" options={options} /><Kit.MultiSelector label=\"Teams\" options={options} /><Kit.PowerSearch label=\"Search projects\" filters={[{ key: 'team', label: 'Team', options }]} onSearch={value => setResult(JSON.stringify(value))} /><Kit.CheckboxList label=\"Delivery\"><Kit.CheckboxListItem label=\"Include source\" defaultChecked /><Kit.CheckboxListItem label=\"Include assets\" hint=\"Only assets supplied by your app.\" /></Kit.CheckboxList><fieldset><legend>Priority</legend><Kit.RadioListItem name=\"priority\" value=\"normal\" label=\"Normal\" defaultChecked /><Kit.RadioListItem name=\"priority\" value=\"high\" label=\"High\" /></fieldset><Kit.FieldLabel htmlFor=\"family-input\">Project name</Kit.FieldLabel><Kit.InputGroup><Kit.InputGroupText id=\"family-prefix\">Project</Kit.InputGroupText><input id=\"family-input\" aria-describedby=\"family-prefix family-status\" /></Kit.InputGroup><Kit.FieldStatus id=\"family-status\">Ready to edit</Kit.FieldStatus><output aria-live=\"polite\">{result}</output></Kit.Stack>;\n}\n"
    }
  ],
  "sizing": {
    "rules": [
      "The parent owns outer dimensions. This component or its family owns its internal padding. Parts are demonstrated in their required family context."
    ],
    "scope": "Contextual family example"
  },
  "subcomponents": {}
};
