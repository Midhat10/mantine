import { Button, Group, Text } from '@mantine/core';
import { useTypedDispatch } from '@/hooks/redux';
import { decrement, increment } from '@/reducers/ProductSlice';

export interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
  count: number;
}

function Counter({ item, regim }: { item: Item; regim: number }) {
  const dispatch = useTypedDispatch();
  const btnStyles = {
    backgroundColor: 'light-dark(var(--mantine-color-gray-2), var(--mantine-color-customGray-7))',
    color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
    border: 'none',
  };

  return (
    <Group gap={0} wrap="nowrap" align="center">
      <Button
        onClick={() => dispatch(decrement({ id: item.id, regim }))}
        variant="default"
        w={30}
        h={30}
        p={0}
        radius="md"
        style={btnStyles}
        aria-label="decrement"
      >
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org">
          <rect width="10" height="2" fill="currentColor" />
        </svg>
      </Button>

      <Text
        w={36}
        ta="center"
        fw={600}
        fz="16px"
        style={{
          color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
          userSelect: 'none',
        }}
      >
        {item.count}
      </Text>

      <Button
        onClick={() => dispatch(increment({ id: item.id, regim }))}
        variant="default"
        w={30}
        h={30}
        p={0}
        radius="md"
        style={btnStyles}
        aria-label="increment"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org">
          <path d="M6 0H4V4H0V6H4V10H6V6H10V4H6V0Z" fill="currentColor" />
        </svg>
      </Button>
    </Group>
  );
}

export default Counter;
