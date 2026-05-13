import { Card, Center, Loader, Grid as MGrid } from '@mantine/core';
import { useTypedSelector } from '@/hooks/redux';
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

function Grid() {
  const listEmpty = new Array(24).fill('');
  const { productList, error, status } = useTypedSelector((state) => state.products);
  return (
    <MGrid gutter="md" mt="lg">
      {status === 'loading' &&
        listEmpty.map((_, index) => (
          <MGrid.Col key={index} span={{ base: 12, xs: 6, sm: 4, md: 3 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h={380}>
              <Center w={276} h={276} bg="#dee2e6" bdrs={8}>
                <Loader type="bars" size="xs" />
              </Center>
            </Card>
          </MGrid.Col>
        ))}

      {status === 'resolved' &&
        productList.map((item) => (
          <MGrid.Col key={item.id} span={{ base: 12, xs: 6, sm: 4, md: 3 }}>
            <CardBig item={item} />
          </MGrid.Col>
        ))}
      {status === 'rejected' && <h2>An error occured{error}</h2>}
    </MGrid>
  );
}

export default Grid;
