import React from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import Counter from '../Counter/Counter';
import { useCounterContext } from '../CounterContext/CounterContext';

// 1. Описываем интерфейс данных товара
export interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
}

// 2. Типизируем пропсы компонента
export interface CardBigProps {
  item: Item;
}

function CardBig({ item }: CardBigProps) {
  // Достаем методы из контекста (они уже типизированы в CounterContext)
  const { counters, increment, decrement, updateList } = useCounterContext();

  // Получаем текущее число из объекта counters по string ID
  const count: number = counters[item.id] ?? 1;

  // Безопасно разбиваем имя
  const nameParts = item.name.split('-');
  const firstName = nameParts[0]?.trim();
  const lastName = nameParts[1]?.trim();

  return (
    <Card
      shadow="sm"
      padding="md" // Фиксирует 16px со всех сторон
      radius="md"
      withBorder
      w={{ base: '100%', md: 302 }}
      h={{ base: 'auto', md: 414 }}
      // Убеждаемся, что карточка правильно распределяет пространство
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Card.Section p="md" style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          src={item.image}
          alt={item.name}
          // 270px + 16px + 16px = 302px (идеально в размер карточки)
          w={{ base: '100%', xs: 270 }}
          h={{ base: 200, xs: 270 }}
          fit="contain"
        />
      </Card.Section>

      {/* Контент: Названия и Счетчик */}
      <Group justify="space-between" align="flex-start" mt="md" wrap="nowrap">
        <Stack gap={0} style={{ overflow: 'hidden' }}>
          <Text fw={600} fz="18px" lh="1.2" truncate="end">
            {item.name.split('-')[0]}
          </Text>
          <Text fw={600} fz="14px" c="dimmed" truncate="end">
            {item.name.split('-')[1]}
          </Text>
        </Stack>

        <Counter
          value={count}
          decrement={() => decrement(item.id)}
          increment={() => increment(item.id)}
        />
      </Group>

      {/* Футер: Цена и Кнопка */}
      {/* mt="auto" толкает группу вниз, а padding="md" у Card создаст нужные 16px снизу */}
      <Group justify="space-between" align="center" mt="auto" wrap="nowrap">
        <Text fw={700} fz="22px" style={{ whiteSpace: 'nowrap' }}>
          $ {item.price}
        </Text>

        <Button
          variant="light"
          color="green"
          onClick={() => updateList(item, count)}
          radius="md"
          // Адаптивные размеры кнопки:
          // На десктопе (md+) строго 204x44
          // На мобильных (base) подстраивается под текст
          w={{ base: 'auto', md: 204 }}
          h={{ base: 36, md: 44 }}
          rightSection={<IconShoppingCart size={18} />}
          styles={{
            root: { padding: '0 10px' }, // Чтобы иконка и текст не прилипали к краям
            label: { fontSize: '16px', fontWeight: 600 },
          }}
        >
          Add to cart
        </Button>
      </Group>
    </Card>
  );
}

export default CardBig;
