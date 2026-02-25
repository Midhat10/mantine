import { Button, Card, Grid, Group, Image, Stack, Text } from '@mantine/core';
import Counter from '../Counter';

function GridSmall({ data }) {
  return (
    <div>
      <Grid justify="space-around">
        {data &&
          data.map((item1) => (
            <Grid.Col style={{ maxWidth: 444 }} p={0}>
              <Card shadow="sm" padding="24" radius="md" withBorder>
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
                </Group>
              </Card>
            </Grid.Col>
          ))}
      </Grid>
    </div>
  );
}

export default GridSmall;
