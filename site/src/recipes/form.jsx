/* RECIPE · Form — a column of fields.
   Fields fill their parent, so the form's width IS the design: one Card capped
   at 36rem. Labels sit above, hint and error below. Never a row of fixed inputs.
   Sizes: form 36rem (576px) max · field fills · action row hugs content. */
import { useState } from 'react';
import { Button, Card, Checkbox, Cluster, NumberField, RadioGroup, SelectField, Stack, Switch, TextArea, TextField } from 'hanoryx-components';

export const meta = {
  title: 'Form',
  summary: 'A settings form: text, select, number, radio, switch, checkbox, text area and an action row.',
  uses: ['Card', 'Stack', 'TextField', 'SelectField', 'NumberField', 'RadioGroup', 'Switch', 'Checkbox', 'TextArea', 'Button', 'Cluster'],
  notes: [
    'The form is one `Stack gap={5}` inside one `Card`. The Card is capped with `max-width: 36rem` on its **parent**, not on the Card.',
    'Two fields on one row → a nested `Grid min="14rem"`. On a phone they stack by themselves.',
    'Errors: pass `error` to the field; it replaces the hint and is announced. Do not add your own message element.',
    'One primary `Button` per form. The cancel action is `variant="line"` or `"ghost"`.',
  ],
};

export default function Form() {
  const [err, setErr] = useState('');
  return (
    <section className="section" style={{ paddingBlock: 'var(--section-pad-sm)' }}>
      <div className="container">
        <div style={{ maxWidth: '36rem', marginInline: 'auto' }}>
          <Card eyebrow="Account" title="Notification settings">
            <form onSubmit={(e) => { e.preventDefault(); setErr('Choose an environment first.'); }}>
              <Stack gap={5}>
                <TextField label="Display name" hint="Shown to your team." defaultValue="Alex Example" />
                <SelectField label="Environment" options={['Development', 'Staging', 'Production']} error={err} />
                <NumberField label="Seats" min={1} max={12} defaultValue={4} />
                <RadioGroup legend="Support level" defaultValue="self" options={[{ value: 'self', label: 'Self-serve' }, { value: 'team', label: 'Team', hint: 'A named contact.' }]} />
                <Switch label="Email me when a deploy fails" defaultChecked />
                <Checkbox label="Send the weekly summary" />
                <TextArea label="Notes" maxLength={140} hint="Two sentences is plenty." />
                <Cluster gap={3} justify="flex-end">
                  <Button type="button" variant="line" magnetic={false}>Cancel</Button>
                  <Button type="submit" magnetic={false}>Save changes</Button>
                </Cluster>
              </Stack>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
