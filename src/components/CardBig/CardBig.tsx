import React from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { AspectRatio, Button, Card, Group, Image, Skeleton, Stack, Text } from '@mantine/core';
import Counter from '../Counter/Counter';
import { useCounterContext } from '../CounterContext/CounterContext';

export interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
}

export interface CardBigProps {
  item: Item;
}

function CardBig({ item }: CardBigProps) {
  const { counters, increment, decrement, updateList } = useCounterContext();
  const count = counters[item.id] ?? 1;

  const [firstName, lastName] = item.name.split('-');

  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      w={{ base: '100%', md: 302 }}
      h={{ base: 'auto', md: 414 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',

        backgroundColor:
          'light-dark(var(--mantine-color-white), var(--mantine-color-customGray-8))',

        borderColor: 'light-dark(var(--mantine-color-gray-3), var(--mantine-color-customGray-7))',
      }}
    >
      <Card.Section p="md">
        <AspectRatio ratio={1 / 1} maw={240} mx="auto">
          <Image
            src={item.image}
            alt={item.name}
            fit="contain"
            fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </AspectRatio>
      </Card.Section>

      <Group justify="space-between" align="flex-start" mt="md" wrap="nowrap">
        <Stack gap={0} style={{ overflow: 'hidden', flex: 1 }}>
          <Text fw={600} fz="18px" lh="1.2" truncate="end">
            {firstName}
          </Text>
          {lastName && (
            <Text fw={600} fz="14px" c="dimmed" truncate="end">
              {lastName}
            </Text>
          )}
        </Stack>

        <Counter
          value={count}
          decrement={() => decrement(item.id)}
          increment={() => increment(item.id)}
        />
      </Group>

      <Group justify="space-between" align="center" mt="auto">
        <Text fw={700} fz="20px" style={{ whiteSpace: 'nowrap' }}>
          $ {item.price}
        </Text>
        <Button
          variant="light"
          color="green"
          onClick={() => updateList(item, count)}
          radius="md"
          w={{ base: 'auto', md: 170 }}
          h={44}
          rightSection={<IconShoppingCart size={18} stroke={1.5} />}
        >
          Add
        </Button>
      </Group>
    </Card>
  );
}

export default CardBig;
