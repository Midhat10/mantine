import { AppShell, Button, Flex, Text, Title } from '@mantine/core';

function AppShellExample() {
  return (
    <>
      <AppShell padding={{ base: 10, sm: 15, lg: 'xl' }} header={{ height: 60 }}>
        <AppShell.Header p="7.5px 20px">
          <Flex align="center" gap="md" p="0">
            <Text fw="600" fz="22px">
              Vegetable
            </Text>
            <Button autoContrast variant="filled" bg="green" fw="500" fz="20px" radius="xl">
              SHOP
            </Button>
          </Flex>
        </AppShell.Header>

        <AppShell.Main bg="#f3f5fa">
          <Title>Catalog</Title>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default AppShellExample;
