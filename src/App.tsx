import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import AppShell from './components/Appshell/AppShell';
import { useTypedDispatch } from './hooks/redux';
import { fetchProducts } from './reducers/ProductThunk';
import theme from './theme';

export default function App() {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <MantineProvider theme={theme}>
      <AppShell />
    </MantineProvider>
  );
}
