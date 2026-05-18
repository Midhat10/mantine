import { configureStore } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import Grid from './Grid';

const createMockStore = (
  productList: Product[],
  status: 'loading' | 'resolved' | 'rejected',
  error = ''
) => {
  return configureStore({
    reducer: {
      products: (state = { productList, status, error }) => state,
    },
  });
};

let mockProducts: Product[];

describe('render Grid', () => {
  beforeEach(() => {
    mockProducts = [
      { id: 2, name: 'Яблоко', price: 30, count: 1, image: '', category: '' },
      { id: 3, name: 'Груша', price: 25, count: 2, image: '', category: '' },
    ];
  });
  afterEach(() => {
    mockProducts = [];
  });

  it('render empty cards', () => {
    const store = createMockStore([], 'loading');
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Grid />
        </MantineProvider>
      </Provider>
    );

    const cols = screen.queryAllByTestId('mantine-Grid-col');
    expect(cols).toHaveLength(24);
  });

  it('render 2 cardBig  ', async () => {
    const store = createMockStore(mockProducts, 'resolved');
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Grid />
        </MantineProvider>
      </Provider>
    );

    expect(screen.getByText('Яблоко')).toBeInTheDocument();
    expect(screen.getByText('Груша')).toBeInTheDocument();

    waitFor(() => {
      expect(screen.queryByRole('presentation')).toBeNull();
    });
  });

  it('we get error', () => {
    const errorMessage = 'Error with connect of internet';
    const store = createMockStore([], 'rejected', errorMessage);
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Grid />
        </MantineProvider>
      </Provider>
    );

    expect(screen.getByText(new RegExp(errorMessage))).toBeInTheDocument();
    expect(screen.getByText(new RegExp('An error occured'))).toBeInTheDocument();
  });
});
