import React from 'react';
import { AspectRatio, Box, Card, Group, Image, Stack, Text } from '@mantine/core';
import { CardBigProps } from '../CardBig/CardBig';
import Counter from '../Counter/Counter';
import { useCounterContext } from '../CounterContext/CounterContext';

function CardSmall({ item }: CardBigProps) {
  const { counters, increment, decrement } = useCounterContext();

  // Достаем значение по ID. Если в стейте пусто — показываем 1
  const count = counters[item.id] ?? 1;

  // Подготавливаем имена
  const [firstName, lastName] = item.name.split('-');

  const textStyles = {
    color: 'light-dark(var(--mantine-color-customGray-9), var(--mantine-color-customGray-1))',
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" align="center" wrap="nowrap">
        <Group gap="md" wrap="nowrap" style={{ flex: 1 }}>
          {/* Резервируем строго 64x64 пикселя */}
          <Box w={64} h={64}>
            <AspectRatio ratio={1 / 1} w={64}>
              <Image
                src={item.image}
                alt={item.name}
                fit="contain"
                // Прозрачная заглушка, чтобы место не пустовало до загрузки
                fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </AspectRatio>
          </Box>

          <Stack gap={4}>
            <Group gap={8} wrap="nowrap">
              <Text
                fw={600}
                fz="18px"
                truncate="end"
                style={{
                  color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
                  flexShrink: 1, // Название может сжиматься, если не влезает
                }}
              >
                {firstName}
              </Text>
              {lastName && (
                <Text
                  fw={600} // Вес делаем обычным шрифтом, не жирным
                  fz="14px"
                  style={{
                    color:
                      'light-dark(var(--mantine-color-customGray-6), var(--mantine-color-customGray-3))',
                    whiteSpace: 'nowrap', // Вес никогда не переносится
                    flexShrink: 0, // Вес всегда виден полностью
                  }}
                >
                  {lastName}
                </Text>
              )}
            </Group>
            <Text fw={600} fz="20px" style={textStyles}>
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
          borderBottom: `1px solid ${'light-dark(var(--mantine-color-customGray-3), var(--mantine-color-customGray-6))'}`,
          opacity: 0.5,
        }}
      />
    </Card>
  );
}

export default CardSmall;
