import { useState } from 'react';
import * as Kit from 'hanoryx-components/kit';

export default function ContainerExamples() {
  const [selected, setSelected] = useState(false);
  const [opened, setOpened] = useState(false);
  return <Kit.Stack><Kit.ClickableCard title="Project details" onClick={() => setOpened(!opened)}>Open project information</Kit.ClickableCard>{opened && <p>The project has three active tasks.</p>}<Kit.SelectableCard title="Include project" checked={selected} onChange={setSelected}>Include this project in the export.</Kit.SelectableCard><Kit.Carousel label="Project stages"><Kit.Card title="Discover">Understand the problem.</Kit.Card><Kit.Card title="Build">Make the solution.</Kit.Card><Kit.Card title="Review">Check the outcome.</Kit.Card></Kit.Carousel><Kit.CollapsibleGroup><Kit.Collapsible title="Delivery details">Ships from your application.</Kit.Collapsible></Kit.CollapsibleGroup></Kit.Stack>;
}
