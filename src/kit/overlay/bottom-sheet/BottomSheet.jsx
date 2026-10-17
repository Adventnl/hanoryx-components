import Dialog from '../dialog/Dialog';
import Tabs from '../../navigation/tabs/Tabs';

export function BottomSheet({ title = 'Sheet', ...props }) { return <Dialog {...props} title={title} side="bottom" />; }
export function BottomSheetSwitcher({ sheets = [], value, defaultValue, onChange, ...props }) {
  return <BottomSheet {...props}><Tabs label="Choose sheet" tabs={sheets} value={value} defaultValue={defaultValue} onChange={onChange} /></BottomSheet>;
}
