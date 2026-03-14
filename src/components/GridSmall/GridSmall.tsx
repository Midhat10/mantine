import { Box, Group, Stack, Text } from '@mantine/core';
import Empty from '@/assets/svg/empty';
import CardSmall from '../CardSmall/CardSmall';
import { useCounterContext } from '../CounterContext/CounterContext';
import TotalPrice from '../TotalPrice/TotalPrice';

function GridSmall() {
  const { list } = useCounterContext();

  const textStyles = {
    color: 'light-dark(var(--mantine-color-customGray-9), var(--mantine-color-white))',
  };

  return (
    <Box maw={444} w="100%">
      {list && list.length > 0 ? (
        <Stack gap={0}>
          {/* Список товаров */}
          {list.map((item, index) => (
            <CardSmall
              key={item.id}
              item={item}
              // Проверяем, является ли текущий элемент последним в списке
              withDivider={index !== list.length - 1}
            />
          ))}

          {/* Итоговая стоимость (идет сразу после длинной черты последней карточки) */}
          <Group justify="space-between" p="0px 24px 24px" style={textStyles}>
            <Text fw={600} fz="18px">
              Total
            </Text>
            <Text fw={600} fz="18px">
              <TotalPrice />
            </Text>
          </Group>
        </Stack>
      ) : (
        <Stack align="center" justify="center" p="40px" gap="md">
          <Empty />
          <Text fw={500} c="dimmed">
            Your cart is empty!
          </Text>
        </Stack>
      )}
    </Box>
  );
}

export default GridSmall;
