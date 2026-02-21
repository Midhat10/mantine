import { background } from 'storybook/theming';

import '@mantine/core';

import Cards from '@/components/Cards/Cards';
import LightDarkButton from '@/components/LightDarkButton/LightDarkButton';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Cards />
      <LightDarkButton />
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
