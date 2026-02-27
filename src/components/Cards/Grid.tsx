import { Button, Card, Center, Grid, Group, Image, Loader, Text } from '@mantine/core';
import CardBig from '../CardBig';
import Counter from '../Counter';

function GridExample({ data, error }) {
  console.log(data);
  const listEmpty = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  return (
    <div>
      <Grid justify="space-around" mt="lg">
        {data === null &&
          listEmpty.map((item1) => (
            <>
              <div>{item1}</div>
              <Grid.Col style={{ maxWidth: 350 }} span={{ base: 12, sm: 3, xs: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h={380}>
                  <Center w={276} h={276} bg="#dee2e6" bdrs={8}>
                    <Loader type="bars" size="xs" />
                  </Center>
                </Card>
              </Grid.Col>
            </>
          ))}

        {data &&
          data.map((item, index) => (
            <Grid.Col key={item.id} style={{ maxWidth: 350 }} span={{ base: 12, sm: 3, xs: 3 }}>
              <CardBig item={item} index={index} />
            </Grid.Col>
          ))}
      </Grid>
    </div>
  );
}

export default GridExample;
