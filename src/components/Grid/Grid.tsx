import { Card, Center, Loader, Grid as MGrid } from '@mantine/core';
import CardBig from '../CardBig/CardBig';

// Определяем интерфейс для пропсов GridExample
export interface GridProps {
  length: number;
  data: Array<{
    id: string;
    image: string;
    name: string;
    price: number;
  }> | null;
}

function Grid({ data }: GridProps) {
  const listEmpty = new Array(24).fill('');

  return (
    <MGrid gutter="lg" mt="lg" justify="space-between">
      {data === null &&
        listEmpty.map((_, index) => (
          <MGrid.Col key={index} span={{ base: 12, xs: 6, sm: 4, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={380}>
              <Center w={276} h={276} bg="#dee2e6" bdrs={8}>
                <Loader type="bars" size="xs" />
              </Center>
            </Card>
          </MGrid.Col>
        ))}

      {data &&
        data.map((launch) => (
          <MGrid.Col key={launch.mission_name} span={{ base: 12, xs: 6, sm: 4, md: 4 }}>
            <CardBig launch={launch} />
          </MGrid.Col>
        ))}
    </MGrid>
  );
}

export default Grid;
