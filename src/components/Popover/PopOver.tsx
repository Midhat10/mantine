import { Popover as MPopover } from '@mantine/core';
import GridSmall from '../GridSmall/GridSmall';

interface PopOverProps {
  children: React.ReactNode;
}

function PopOver({ children }: PopOverProps) {
  return (
    <MPopover offset={24} trapFocus position="bottom" withArrow shadow="md">
      {children}
      <MPopover.Dropdown p={0} bdrs={16}>
        <GridSmall />
      </MPopover.Dropdown>
    </MPopover>
  );
}

export default PopOver;
