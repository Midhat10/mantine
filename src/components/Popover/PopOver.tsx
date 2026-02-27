import { Button, Popover, TextInput } from '@mantine/core';
import GridSmall from '../Cards/GridSmall';

function PopOverExample({ children }) {
  return (
    <Popover offset={24} trapFocus position="bottom" withArrow shadow="md">
      {children}
      <Popover.Dropdown p={0}>
        <GridSmall />
      </Popover.Dropdown>
    </Popover>
  );
}

export default PopOverExample;
