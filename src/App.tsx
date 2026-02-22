import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
// import { useHotkeys} from '@mantine/hooks';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  // const toggleColorScheme = (value1?) => setValue(value1 || (value === 'dark' ? 'light' : 'dark'));

  // useHotkeys([['mod + J', () => toggleColorScheme('dark')]]);
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router />
    </MantineProvider>
  );
}
