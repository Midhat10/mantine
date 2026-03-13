import React from 'react';
import { Card, Group, Image, Stack, Text } from '@mantine/core';
import { CardBigProps } from '../CardBig/CardBig';
import Counter from '../Counter/Counter';
import { useCounterContext } from '../CounterContext/CounterContext';

function CardSmall({ item }: CardBigProps) {
  const { counters, increment, decrement } = useCounterContext();

  // Достаем значение по ID. Если в стейте пусто — показываем 1
  const count = counters[item.id] ?? 1;

  // Подготавливаем имена
  const [firstName, lastName] = item.name.split('-');

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" align="center" wrap="nowrap">
        <Group gap="md">
          <Image src={item.image} alt={item.name} mah={64} maw={64} fit="contain" />

          <Stack gap={4}>
            <Group gap={8} wrap="nowrap">
              <Text fw={600} fz="18px">
                {firstName}
              </Text>
              {lastName && (
                <Text fw={600} fz="14px" c="dimmed">
                  {lastName}
                </Text>
              )}
            </Group>
            <Text fw={700} fz="20px">
              $ {item.price}
            </Text>
          </Stack>
        </Group>

        <Counter
          value={count} // Теперь используем переменную count
          decrement={() => decrement(item.id)} // Передаем id вместо index
          increment={() => increment(item.id)} // Передаем id вместо index
        />
      </Group>

      {/* Линию лучше вынести за пределы Group или стилизовать через Divider Mantine */}
      <div
        style={{
          marginLeft: 76,
          marginTop: 16,
          borderBottom: '1px solid var(--mantine-color-gray-3)',
          opacity: 0.5,
        }}
      />
    </Card>
  );
}

export default CardSmall;
