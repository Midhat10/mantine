import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import theme from './theme';
import variantColorResolver from './themeResolver';

export default function App() {
  // const toggleColorScheme = (value1?) => setValue(value1 || (value === 'dark' ? 'light' : 'dark'));

  // useHotkeys([['mod + J', () => toggleColorScheme('dark')]]);
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
