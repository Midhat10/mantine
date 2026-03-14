import { Popover as MPopover } from '@mantine/core';
import GridSmall from '../GridSmall/GridSmall';

// Определяем интерфейс для пропсов PopOverExample
interface PopOverProps {
  children: React.ReactNode; // Тип для children
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
