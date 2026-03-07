import { AppShell, Button, Flex, Text, Title } from '@mantine/core';
import { useFetch } from '@mantine/hooks';
import ButtonExample from '../Button/ButtonExample';
import { CounterProvider } from '../CounterContext/CounterContext';
import GridExample from '../Grid/Grid';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import PopOverExample from '../Popover/PopOver';

interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

function AppShellExample() {
  const { data } = useFetch<Item[]>(
    'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
  );
  const initialCounters = data ? data.map(() => 1) : [];
  return (
    <>
      <CounterProvider initialCounters={initialCounters}>
        <AppShell padding={{ base: 10, sm: 15, lg: 'xl' }} header={{ height: 60 }}>
          <AppShell.Header p="7.5px 20px">
            <Flex align="center" gap="md" p="0">
              <Text fw="600" fz="22px">
                Vegetable
              </Text>
              <Button autoContrast variant="filled" bg="green" fw="500" fz="20px" radius="xl">
                SHOP
              </Button>
              <LightDarkButton />
              <PopOverExample>
                <ButtonExample />
              </PopOverExample>
            </Flex>
          </AppShell.Header>

          <AppShell.Main bg="#f3f5fa">
            <Title>Catalog</Title>

            <GridExample data={data} length={0} />
          </AppShell.Main>
        </AppShell>
      </CounterProvider>
    </>
  );
}

export default AppShellExample;
