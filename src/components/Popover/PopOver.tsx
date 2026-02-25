import { Button, Popover, TextInput } from '@mantine/core';
import GridSmall from '../Cards/GridSmall';

function PopOverExample({ children, list }) {
  console.log(list, 'list');
  return (
    <Popover offset={24} width={444} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown>
        <GridSmall data={list} />
      </Popover.Dropdown>
    </Popover>
  );
}

export default PopOverExample;
