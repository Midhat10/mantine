import React from 'react';
import { Card, Group, Image, Stack, Text } from '@mantine/core';
import Counter from './Counter';
import { useCounterContext } from './CounterContext';

function CardSmall({ item, index }) {
  const { counters, increment, decrement } = useCounterContext();
  return (
    <Card shadow="sm" padding="24" radius="md">
      <Group justify="space-between" gap={0}>
        <Group gap={12}>
          <Image src={item.image} mah={64} maw={64} alt="Norway" />
          <Stack align="flex-start" justify="center" gap="xs">
            <Group gap={12}>
              <Text fw={600} fz="18px" lh="155%">
                {item.name.split('-')[0]}
              </Text>
              <Text fw={600} fz="14px" lh="143%" opacity="40%">
                {item.name.split('-')[1]}
              </Text>
            </Group>
            <Text fw={600} fz="20px" lh="120%">
              $ {item.price}
            </Text>
          </Stack>
        </Group>
        <Counter
          value={counters[index] || 1}
          decrement={() => decrement(index)}
          increment={() => increment(index)}
        />
        <hr style={{ marginLeft: 76, width: 396, height: 0, minWidth: 276, opacity: 0.2 }} />
      </Group>
    </Card>
  );
}

export default CardSmall;
