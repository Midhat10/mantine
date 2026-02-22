import '@mantine/core';

// eslint-disable-next-line no-duplicate-imports
import { Flex } from '@mantine/core';
import Buttons from '@/components/Buttons/Buttons';
import Cards from '@/components/Cards/Cards';
import LightDarkButton from '@/components/LightDarkButton/LightDarkButton';

export function HomePage() {
  return (
    <>
      <Flex direction="column" align="center" gap="lg">
        <Cards />
        <LightDarkButton />
        <Buttons />
      </Flex>

      {/* <Group justify="center" mt="xl">
        <Paper>
          <Text>This is a simple text tag</Text>
          <Text>This is a simpledsfsfd text tag</Text>
        </Paper>
        <Button>Hello World!</Button>
        <Loader type="dots" />
      </Group>
      {/* <Welcome /> 
      <ColorSchemeToggle /> */}
    </>
  );
}
