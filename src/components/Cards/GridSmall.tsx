import { Card, Grid, Group, Image, Stack, Text } from '@mantine/core';
import Empty from '@/assets/svg/empty';
import CardSmall from '../CardSmall';
import { useCounterContext } from '../CounterContext';
import TotalPrice from '../TotalPrice';

function GridSmall() {
  const { list, counters } = useCounterContext();
  console.log(counters);
  return (
    <div>
      <Grid justify="space-around" maw={444}>
        {list &&
          list.map((item, index) => (
            <Grid.Col style={{ maxWidth: 444 }} p={0}>
              <CardSmall item={item} index={index} />
            </Grid.Col>
          ))}

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

        {list.length === 0 && (
          <Stack justify="space-between" p="24px 82px">
            <Empty />
            <Text>You cart is empty!</Text>
          </Stack>
        )}
      </Grid>
    </div>
  );
}

export default GridSmall;
