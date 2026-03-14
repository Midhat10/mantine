import React from 'react';
import { AspectRatio, Box, Card, Group, Image, Stack, Text } from '@mantine/core';
import Counter from '../Counter/Counter';
import { useCounterContext } from '../CounterContext/CounterContext';

interface CardSmallProps {
  item: any;
  withDivider?: boolean;
}

function CardSmall({ item, withDivider = true }: CardSmallProps) {
  const { counters, increment, decrement } = useCounterContext();
  const count = counters[item.id] ?? 1;

  const [firstName, lastName] = item.name.split('-');

  return (
    <Card shadow="none" padding="md" radius="md" bg="transparent">
      <Group justify="space-between" align="center" wrap="nowrap">
        <Group gap="md" wrap="nowrap" style={{ flex: 1 }}>
          <Box w={64} h={64}>
            <AspectRatio ratio={1 / 1} w={64}>
              <Image
                src={item.image}
                alt={item.name}
                fit="contain"
                fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </AspectRatio>
          </Box>

          <Stack gap={4} style={{ overflow: 'hidden' }}>
            <Group gap={6} wrap="nowrap">
              <Text
                fw={600}
                fz="18px"
                truncate="end"
                style={{
                  color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
                  flexShrink: 1,
                }}
              >
                {firstName?.trim()}
              </Text>
              {lastName && (
                <Text
                  fw={400}
                  fz="14px"
                  style={{
                    color:
                      'light-dark(var(--mantine-color-customGray-6), var(--mantine-color-customGray-3))',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  - {lastName.trim()}
                </Text>
              )}
            </Group>
            <Text
              fw={600}
              fz="20px"
              style={{
                color: 'light-dark(var(--mantine-color-customGray-9), var(--mantine-color-white))',
              }}
            >
              $ {item.price}
            </Text>
          </Stack>
        </Group>

        <Counter
          value={count}
          decrement={() => decrement(item.id)}
          increment={() => increment(item.id)}
        />
      </Group>

      <div
        style={{
          marginLeft: withDivider ? 76 : 0,
          marginTop: withDivider ? 18 : 28,
          borderBottom:
            '1px solid light-dark(var(--mantine-color-customGray-3), var(--mantine-color-customGray-7))',
          transition: 'margin-left 0.2s ease',
        }}
      />
    </Card>
  );
}

export default CardSmall;
