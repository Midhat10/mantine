import { Popover } from '@mantine/core';
import GridSmall from '../GridSmall/GridSmall';

// Определяем интерфейс для пропсов PopOverExample
interface PopOverExampleProps {
  children: React.ReactNode; // Тип для children
}

function PopOverExample({ children }: PopOverExampleProps) {
  return (
    <Popover offset={24} trapFocus position="bottom" withArrow shadow="md">
      {children}
      <Popover.Dropdown p={0} bdrs={16}>
        <GridSmall />
      </Popover.Dropdown>
    </Popover>
  );
}

export default PopOverExample;
