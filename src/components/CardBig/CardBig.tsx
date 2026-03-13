import React from 'react';
import { Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import Counter from '../Counter/Counter';
import { useCounterContext } from '../CounterContext/CounterContext';

export interface CardBigProps {
  item: {
    id: string;
    image: string;
    name: string;
    price: number;
  };
  // index больше не нужен для логики счетчика, если мы используем id
}

function CardBig({ item }: CardBigProps) {
  const { counters, increment, decrement, updateList } = useCounterContext();

  // Достаем значение по ID. Если в стейте еще нет этого товара — показываем 1.
  const count = counters[item.id] ?? 1;

  // Разделяем имя один раз для чистоты кода
  const [mainName, subName] = item.name.split('-');

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 350 }}>
      <Group wrap="nowrap" align="flex-start">
        <Image src={item.image} alt={item.name} mah={120} maw={120} fit="contain" />

        <Stack gap="xs" style={{ flex: 1 }}>
          <Stack gap={0}>
            <Text fw={600} fz="18px" lh="1.2">
              {mainName}
            </Text>
            {subName && (
              <Text fw={600} fz="14px" c="dimmed">
                {subName}
              </Text>
            )}
          </Stack>

          {/* Передаем count и вызываем функции по item.id */}
          <Counter
            value={count}
            decrement={() => decrement(item.id)}
            increment={() => increment(item.id)}
          />
        </Stack>
      </Group>

      <Group justify="space-between" align="center" mt="md">
        <Text fw={700} fz="20px">
          $ {item.price}
        </Text>
        <Button
          variant="filled"
          color="green"
          onClick={() => {
            // Передаем товар вместе с актуальным количеством
            updateList(item, count);
          }}
          radius="md"
          rightSection={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H4L6.68 14.39C6.77144 14.8504 7.02191 15.264 7.38755 15.5583C7.75318 15.8526 8.2107 16.009 8.68 16H15.4C15.8693 16.009 16.3268 15.8526 16.6924 15.5583C17.0581 15.264 17.3086 14.8504 17.4 14.39L18.7 7.5H5.23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Add to cart
        </Button>
      </Group>
    </Card>
  );
}

export default CardBig;
