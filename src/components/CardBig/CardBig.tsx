import { IconShoppingCart } from '@tabler/icons-react';
import { AspectRatio, Button, Card, Group, Image, Text } from '@mantine/core';
import { useTypedDispatch } from '@/hooks/redux';
import { addCard } from '@/reducers/ProductSlice';
import Counter from '../Counter/Counter';

export interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
  count: number;
}

export interface CardBigProps {
  item: Item;
}

function CardBig({ item }: CardBigProps) {
  const dispatch = useTypedDispatch();

  const [firstName, lastName] = item.name.split('-');

  const textStyles = {
    color: 'light-dark(var(--mantine-color-customGray-9), var(--mantine-color-customGray-1))',
  };

  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
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

      <Group justify="space-between" align="center" mt="md" wrap="nowrap" h={44}>
        {/* Левая часть: Имя и Вес в одну линию */}
        <Group gap={6} wrap="nowrap" style={{ overflow: 'hidden', flex: 1 }}>
          <Text
            fw={600}
            fz="18px"
            truncate="end"
            style={{
              color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
              flexShrink: 1,
            }}
          >
            {firstName}
          </Text>

          {lastName && (
            <Text
              fw={600}
              fz="14px"
              style={{
                color:
                  'light-dark(var(--mantine-color-customGray-6), var(--mantine-color-customGray-3))',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {lastName}
            </Text>
          )}
        </Group>

        <Counter item={item} regim={1} />
      </Group>

      <Group justify="space-between" align="center" mt="auto">
        <Text fw={700} fz="20px" style={{ ...textStyles, whiteSpace: 'nowrap' }}>
          $ {item.price}
        </Text>
        <Button
          variant="light"
          color="green"
          onClick={() => {
            dispatch(addCard({ item, id: item.id }));
          }}
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
