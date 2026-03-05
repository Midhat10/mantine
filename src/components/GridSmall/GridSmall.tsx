import { Grid, Group, Stack, Text } from '@mantine/core';
import Empty from '@/assets/svg/empty';
import CardSmall from '../CardSmall/CardSmall';
import { CounterContextType, useCounterContext } from '../CounterContext/CounterContext';
import TotalPrice from '../TotalPrice/TotalPrice';

// Импортируем тип

function GridSmall() {
  const { list, counters } = useCounterContext() as CounterContextType; // Привязываем тип к контексту

  return (
    <div>
      <Grid justify="space-around" maw={444}>
        {list && list.length > 0 ? (
          list.map((item, index) => (
            <Grid.Col key={item.id} style={{ maxWidth: 444 }} p={0}>
              <CardSmall item={item} index={index} />
            </Grid.Col>
          ))
        ) : (
          <Stack justify="space-between" p="24px 82px">
            <Empty />
            <Text>You cart is empty!</Text>
          </Stack>
        )}

        {list.length > 0 && (
          <Group justify="space-between" w="100%" p="24px 24px">
            <Text fw={600} fz="18px" lh="155%">
              Total
            </Text>
            <Text fw={600} fz="18px" lh="155%">
              <TotalPrice list={list} counters={counters} />
            </Text>
          </Group>
        )}
      </Grid>
    </div>
  );
}

export default GridSmall;
