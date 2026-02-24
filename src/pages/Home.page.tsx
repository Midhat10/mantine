import '@mantine/core';

// eslint-disable-next-line no-duplicate-imports
import { Flex } from '@mantine/core';
import AppShellExample from '@/components/Appshell/AppShell';
import Buttons from '@/components/Buttons/Buttons';
import Cards from '@/components/Cards/Cards';
import LightDarkButton from '@/components/LightDarkButton/LightDarkButton';

export function HomePage() {
  return (
    <>
      <AppShellExample />
      <Flex direction="column" align="center" gap="lg">
        {/* <Cards /> */}

        {/* <Buttons /> */}
      </Flex>
    </>
  );
}
