import { Button, Group, Text } from '@mantine/core';

interface CounterProps {
  value: number;
  decrement: () => void;
  increment: () => void;
}

function Counter({ value, decrement, increment }: CounterProps) {
  // Базовые стили для кнопок "+" и "-"
  const btnStyles = {
    // В светлой теме — светло-серый, в темной — чуть светлее карточки
    backgroundColor: 'light-dark(var(--mantine-color-gray-2), var(--mantine-color-customGray-7))',
    color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
    border: 'none',
  };

  return (
    <Group gap={0} wrap="nowrap" align="center">
      {/* Кнопка минус */}
      <Button
        onClick={decrement}
        variant="default"
        w={30}
        h={30}
        p={0}
        radius="md"
        style={btnStyles}
      >
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org">
          <rect width="10" height="2" fill="currentColor" />
        </svg>
      </Button>

      {/* Цифра по центру */}
      <Text
        w={36} // Задаем фиксированную ширину, чтобы кнопки не «гуляли» при смене 9 на 10
        ta="center" // Выравнивание текста строго по центру блока
        fw={600}
        fz="16px"
        style={{
          color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
          userSelect: 'none', // Чтобы цифра не выделялась синим при быстрых кликах
        }}
      >
        {value}
      </Text>

      {/* Кнопка плюс */}
      <Button
        onClick={increment}
        variant="default"
        w={30}
        h={30}
        p={0}
        radius="md"
        style={btnStyles}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org">
          <path d="M6 0H4V4H0V6H4V10H6V6H10V4H6V0Z" fill="currentColor" />
        </svg>
      </Button>
    </Group>
  );
}

export default Counter;
