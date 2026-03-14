import { Button, Group, Text } from '@mantine/core';

interface CounterProps {
  value: number;
  decrement: () => void;
  increment: () => void;
}

function Counter({ value, decrement, increment }: CounterProps) {
  const btnStyles = {
    backgroundColor: 'light-dark(var(--mantine-color-gray-2), var(--mantine-color-customGray-7))',
    color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
    border: 'none',
  };

  return (
    <Group gap={0} wrap="nowrap" align="center">
      <Button
        onClick={decrement}
        variant="default"
        w={30}
        h={30}
        p={0}
        radius="md"
        style={btnStyles}
        aria-label="decrement" // Для тестов и доступности
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
        {value}
      </Text>

      <Button
        onClick={increment}
        variant="default"
        w={30}
        h={30}
        p={0}
        radius="md"
        style={btnStyles}
        aria-label="increment" // Для тестов и доступности
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org">
          <path d="M6 0H4V4H0V6H4V10H6V6H10V4H6V0Z" fill="currentColor" />
        </svg>
      </Button>
    </Group>
  );
}

export default Counter;
