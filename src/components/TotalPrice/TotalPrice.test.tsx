import { configureStore } from '@reduxjs/toolkit';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import TotalPrice from './TotalPrice';

type Product = {
  id: string;
  name: string;
  price: number;
  count: number;
};

const createMockStore = (initialProducts: Product[]) => {
  return configureStore({
    reducer: {
      products: (state = { productListSmall: initialProducts }) => state,
    },
  });
};
let mockProducts: Product[];
describe('totalprice', () => {
  beforeEach(() => {
    mockProducts = [
      { id: '1', name: 'Товар А', price: 10, count: 2 },
      { id: '2', name: 'Товар Б', price: 15, count: 3 },
    ];
  });

  afterEach(() => {
    mockProducts = [];
  });
  it('it should be correct reduce', () => {
    const store = createMockStore(mockProducts);

    render(
      <Provider store={store}>
        <TotalPrice />
      </Provider>
    );

    expect.extend(matchers);
    expect(screen.getByText(/65/i)).toBeInTheDocument();
  });
  it('it should be incorrect reduce', () => {
    const store = createMockStore(mockProducts);

    render(
      <Provider store={store}>
        <TotalPrice />
      </Provider>
    );

    expect(screen.queryByText(/60/i)).toBeNull();
  });
  it("should be correct reduce is zero when haven't products", () => {
    const store = createMockStore([]);
    render(
      <Provider store={store}>
        <TotalPrice />
      </Provider>
    );
    expect(screen.queryByText(/0/i)).toBeInTheDocument();
  });
});
