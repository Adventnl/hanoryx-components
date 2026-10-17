import { useState } from 'react';
import * as Kit from 'hanoryx-components/kit';

const options = [{ value: 'design', label: 'Design', description: 'Interface and interaction' }, { value: 'build', label: 'Build', description: 'Implementation and delivery' }];
export default function FormExamples() {
  const [result, setResult] = useState('');
  return <Kit.Stack><Kit.ComplexSelector label="Project team" options={options} /><Kit.MultiSelector label="Teams" options={options} /><Kit.PowerSearch label="Search projects" filters={[{ key: 'team', label: 'Team', options }]} onSearch={value => setResult(JSON.stringify(value))} /><Kit.CheckboxList label="Delivery"><Kit.CheckboxListItem label="Include source" defaultChecked /><Kit.CheckboxListItem label="Include assets" hint="Only assets supplied by your app." /></Kit.CheckboxList><fieldset><legend>Priority</legend><Kit.RadioListItem name="priority" value="normal" label="Normal" defaultChecked /><Kit.RadioListItem name="priority" value="high" label="High" /></fieldset><Kit.FieldLabel htmlFor="family-input">Project name</Kit.FieldLabel><Kit.InputGroup><Kit.InputGroupText id="family-prefix">Project</Kit.InputGroupText><input id="family-input" aria-describedby="family-prefix family-status" /></Kit.InputGroup><Kit.FieldStatus id="family-status">Ready to edit</Kit.FieldStatus><output aria-live="polite">{result}</output></Kit.Stack>;
}
