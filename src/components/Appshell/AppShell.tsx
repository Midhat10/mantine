import { AppShell, Burger, Center, Flex, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ChipsExample from '../ChipsExample';
import LightDarkButton from '../LightDarkButton/LightDarkButton';
import TableExample from '../tableExample';

function AppShellExample() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      //   padding="md"
      padding={{ base: 10, sm: 15, lg: 'xl' }}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Flex align="center" gap="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <div>Application Header</div>
          <LightDarkButton />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar>
        <AppShell.Section style={{ textAlign: 'center' }}>
          <Text>Hello this is title</Text>
        </AppShell.Section>

        <AppShell.Section grow mt="lg" style={{ textAlign: 'center' }}>
          <Text>example 1</Text>
          <Text>example 2</Text>
          <Text>example 3</Text>
          <Text>example 4</Text>
        </AppShell.Section>

        <AppShell.Section>
          <Text>Footer</Text>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        {/* <TableExample /> */}
        <ChipsExample />
      </AppShell.Main>
    </AppShell>
  );
}

export default AppShellExample;
