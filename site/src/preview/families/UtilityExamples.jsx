import * as Kit from 'hanoryx-components/kit';

function Greeting() { const translate = Kit.useTranslator(); return <p>{translate('greeting', { name: 'Ari' })}</p>; }
export default function UtilityExamples() {
  return <Kit.InternationalizationProvider locale="en-NZ" messages={{ greeting: 'Hello {name}' }}><Kit.Theme value="dark"><Kit.Layer><Greeting /><Kit.SyntaxTheme><Kit.Code>Theme-scoped source</Kit.Code></Kit.SyntaxTheme><Kit.MediaTheme><Kit.Text>The app supplies alternate theme tokens.</Kit.Text></Kit.MediaTheme><Kit.LinkProvider><Kit.Link to="/a/kit">Browse components</Kit.Link></Kit.LinkProvider></Kit.Layer></Kit.Theme></Kit.InternationalizationProvider>;
}
export function VegaExample() { return <Kit.VegaChart spec={{}} label="App-supplied Vega visualization" />; }
