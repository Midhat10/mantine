import React from 'react';
import { Button, Card, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';
import Empty from '@/assets/svg/empty';
import Counter from '../Counter';

function GridSmall({ data }) {
  return (
    <div>
      <Grid justify="space-around" maw={444}>
        {data &&
          data.map((item1) => (
            <Grid.Col style={{ maxWidth: 444 }} p={0}>
              <Card shadow="sm" padding="24" radius="md">
                <Group justify="space-between" gap={0}>
                  <Group gap={12}>
                    <Image src={item1.image} mah={64} maw={64} alt="Norway" />
                    <Stack align="flex-start" justify="center" gap="xs">
                      <Group gap={12}>
                        <Text fw={600} fz="18px" lh="155%">
                          {item1.name.split('-')[0]}
                        </Text>
                        <Text fw={600} fz="14px" lh="143%" opacity="40%">
                          {item1.name.split('-')[1]}
                        </Text>
                      </Group>
                      <Text fw={600} fz="20px" lh="120%">
                        $ {item1.price}
                      </Text>
                    </Stack>
                  </Group>
                  <Counter />
                  <hr
                    style={{ marginLeft: 76, width: 396, height: 0, minWidth: 276, opacity: 0.2 }}
                  />
                </Group>
              </Card>
            </Grid.Col>
          ))}

        {data.length > 0 && (
          <Group justify="space-between" w="100%" p="24px 24px">
            <Text fw={600} fz="18px" lh="155%">
              Total
            </Text>
            <Text fw={600} fz="18px" lh="155%">
              {data &&
                data.reduce((sum, current) => {
                  sum = sum + +current.price;
                  return sum;
                }, 0)}
              $
            </Text>
          </Group>
        )}

        {data.length === 0 && (
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
