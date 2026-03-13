import { Card, Center, Grid, Loader } from '@mantine/core';
import CardBig from '../CardBig/CardBig';

// Определяем интерфейс для пропсов GridExample
export interface GridExampleProps {
  length: number;
  data: Array<{
    id: string;
    image: string;
    name: string;
    price: number;
  }> | null; // data может быть массивом объектов или null
}

function GridExample({ data }: GridExampleProps) {
  const listEmpty = new Array(24).fill(''); // Создаем массив из 24 пустых строк

  return (
    <Grid gutter="md" mt="lg">
      {data === null &&
        listEmpty.map(
          (
            _,
            index // Используем _ для обозначения неиспользуемого значения
          ) => (
            <Grid.Col key={index} span={{ base: 12, xs: 6, sm: 4, md: 3 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h={380}>
                <Center w={276} h={276} bg="#dee2e6" bdrs={8}>
                  <Loader type="bars" size="xs" />
                </Center>
              </Card>
            </Grid.Col>
          )
        )}

      {data &&
        data.map((item) => (
          <Grid.Col key={item.id} span={{ base: 12, xs: 6, sm: 4, md: 3 }}>
            <CardBig item={item} />
          </Grid.Col>
        ))}
    </Grid>
  );
}

export default GridExample;
