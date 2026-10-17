import { useCombobox } from '../combobox/useCombobox';
import { useControllable } from '../../internal/useControllable';
export function useMultiCombobox({ value, defaultValue = [], onChange, options = [] } = {}) {
  const [selected, setSelected] = useControllable({ value, defaultValue, onChange });
  const toggle = option => setSelected(selected.includes(option.value) ? selected.filter(value => value !== option.value) : [...selected, option.value]);
  const combo = useCombobox({ options, onChange: value => toggle({ value }) });
  return { ...combo, value: selected, getOptionProps: index => { const props = combo.getOptionProps(index); return { ...props, 'aria-selected': selected.includes(combo.matches[index]?.value) }; }, listProps: { ...combo.listProps, 'aria-multiselectable': true }, remove: value => setSelected(selected.filter(item => item !== value)) };
}
