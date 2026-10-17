import { useState } from 'react';
export function useImperativeDialog() { const [dialog, setDialog] = useState(null); return { open: dialog !== null, props: dialog ?? {}, show: props => setDialog(props ?? {}), close: () => setDialog(null), dialogProps: { ...dialog, open: dialog !== null, onClose: () => setDialog(null) } }; }
export function useImperativeAlertDialog() { return useImperativeDialog(); }
