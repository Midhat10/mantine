import { useState } from 'react';
import { AppShell, Button, Flex, Text, Title } from '@mantine/core';
import { useFetch } from '@mantine/hooks';
import Button2 from '../Button/Button2';
import GridExample from '../Cards/Grid';
import { CounterProvider } from '../CounterContext';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import PopOverExample from '../Popover/PopOver';

interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

function AppShellExample() {
  const { data, error } = useFetch<Item[]>(
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
                <Button2 />
              </PopOverExample>
            </Flex>
          </AppShell.Header>

          <AppShell.Main bg="#f3f5fa">
            <Title>Catalog</Title>

            <GridExample data={data} error={error} />
          </AppShell.Main>
        </AppShell>
      </CounterProvider>
    </>
  );
}

export default AppShellExample;
