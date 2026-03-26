import { Center, Loader, Card as MCard, Grid as MGrid } from '@mantine/core';
import Card from '../Card/Card';

// Определяем интерфейс для пропсов GridExample
export interface GridProps {
  length: number;
  data: Array<{
    links?: { mission_patch_small: string };
    rocket?: { rocket_name: string };
    mission_name: string;
  }> | null;
}

function Grid({ data }: GridProps) {
  const listEmpty = new Array(24).fill('');

  return (
    <MGrid gutter="lg" mt="lg" justify="space-between">
      {data === null &&
        listEmpty.map((_, index) => (
          <MGrid.Col key={index} span={{ base: 12, xs: 6, sm: 4, md: 4 }}>
            <MCard shadow="sm" padding="lg" radius="md" withBorder h={380}>
              <Center w={276} h={276} bg="#dee2e6" bdrs={8}>
                <Loader type="bars" size="xs" />
              </Center>
            </MCard>
          </MGrid.Col>
        ))}

      {data &&
        data.map((launch) => (
          <MGrid.Col key={launch.mission_name} span={{ base: 12, xs: 6, sm: 4, md: 4 }}>
            <Card launch={launch} />
          </MGrid.Col>
        ))}
    </MGrid>
  );
}

export default Grid;
