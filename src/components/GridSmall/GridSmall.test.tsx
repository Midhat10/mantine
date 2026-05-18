import { configureStore } from '@reduxjs/toolkit';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import GridSmall from './GridSmall';

const createMock = (initialProducts: any[]) => {
  return configureStore({
    reducer: {
      products: (state = { productListSmall: initialProducts }) => state,
    },
  });
};

let mockProducts: Product[];

describe('render GridSmall', () => {
  beforeEach(() => {
    mockProducts = [
      { id: 2, name: 'Яблоко', price: 30, count: 1, image: '', category: '' },
      { id: 3, name: 'Груша', price: 25, count: 2, image: '', category: '' },
    ];
  });
  afterEach(() => {
    mockProducts = [];
  });

  it('it must render list of products, when basket have some the one  ', async () => {
    const store = createMock(mockProducts);
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <GridSmall />
        </MantineProvider>
      </Provider>
    );

    expect.extend(matchers);

    const grid = await screen.findByTestId('target-grid');

    expect(grid).toBeInTheDocument();

    expect(screen.getByText('Total')).toBeInTheDocument();

    expect(screen.getByText('$ 80')).toBeInTheDocument();

    expect(screen.queryByText('Your cart is empty!')).toBeNull();
  });

  it('it must render empty list,without products', async () => {
    const store = createMock([]);
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <GridSmall />
        </MantineProvider>
      </Provider>
    );
    expect.extend(matchers);

    const grid = await screen.findByTestId('target-grid');

    expect(grid).toBeInTheDocument();

    expect(screen.getByText('Your cart is empty!')).toBeInTheDocument();

    expect(screen.queryByText('Total')).toBeNull();
    expect(screen.queryByText('$ 0')).toBeNull();
  });
});
