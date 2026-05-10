import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { useTypedDispatch } from './hooks/redux';
import { fetchTodos } from './reducers/TodoThunk';
import { Router } from './Router';
import theme from './theme';

export default function App() {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
