import * as Kit from 'hanoryx-components/kit';

export default function LayoutExamples() {
  return <Kit.AppShell header={<Kit.Heading level={3}>Project workspace</Kit.Heading>} navigation={<Kit.SideNav groups={[{ label: 'Projects', items: [{ label: 'Browse kit', to: '/a/kit' }] }]} />} footer="Workspace footer"><Kit.Layout><Kit.LayoutHeader>Project overview</Kit.LayoutHeader><Kit.LayoutPanel label="Project context">Team and settings</Kit.LayoutPanel><Kit.LayoutContent><Kit.ScrollableArea label="Activity" maxHeight="12rem"><Kit.List>{Array.from({ length: 12 }, (_, i) => <Kit.ListItem key={i}>Activity {i + 1}</Kit.ListItem>)}</Kit.List></Kit.ScrollableArea></Kit.LayoutContent><Kit.LayoutFooter>All changes saved</Kit.LayoutFooter></Kit.Layout></Kit.AppShell>;
}
