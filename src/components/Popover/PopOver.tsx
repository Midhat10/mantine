import { Button, Popover, TextInput } from '@mantine/core';
import GridSmall from '../Cards/GridSmall';

function PopOverExample({ children, list }) {
  console.log(list, 'list');
  return (
    <Popover offset={24} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown p={0}>
        <GridSmall data={list} />
        {!list && <div>empty</div>}
      </Popover.Dropdown>
    </Popover>
  );
}

export default PopOverExample;
