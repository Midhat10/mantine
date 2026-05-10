import { Flex, AppShell as MantineAppShell, Button as MButton, Text, Title } from '@mantine/core';
import Button from '../Button/Button';
import Grid from '../Grid/Grid';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import PopOver from '../Popover/PopOver';

function AppShell() {
  return (
    <>
      <MantineAppShell padding={{ base: 10, sm: 15, lg: 'xl' }} header={{ height: 60 }}>
        <MantineAppShell.Header p="7.5px 20px">
          <Flex align="center" gap="md" p="0">
            <Text fw="600" fz="22px">
              Vegetable
            </Text>
            <MButton autoContrast variant="filled" bg="green" fw="500" fz="20px" radius="xl">
              SHOP
            </MButton>
            <LightDarkButton />
            <PopOver>
              <Button />
            </PopOver>
          </Flex>
        </MantineAppShell.Header>

        <MantineAppShell.Main
          style={{
            transition: 'background-color 0.3s ease',
            backgroundColor:
              'light-dark(var(--mantine-color-customGray-1), var(--mantine-color-customGray-9))',
            minHeight: '100vh',
          }}
        >
          <Title
            order={1}
            style={{
              color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
            }}
          >
            Catalog
          </Title>
          <Grid />
        </MantineAppShell.Main>
      </MantineAppShell>
    </>
  );
}

export default AppShell;
