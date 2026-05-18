import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import AppShell from './AppShell';

const productListSmall: Product[] = [
  {
    category: 'vegetables',
    id: 1,
    image:
      'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg',
    name: 'Brocolli - 1 Kg',
    price: 100,
    count: 1,
  },
  {
    category: 'vegetables',
    id: 2,
    image:
      'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg',
    name: 'Pomidor - 1 Kg',
    price: 80,
    count: 1,
  },
  {
    category: 'vegetables',
    id: 3,
    image:
      'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg',
    name: 'Kapusta - 1 Kg',
    price: 60,
    count: 1,
  },
];
const createStore = (initialListSmall: Product[] = []) =>
  configureStore({
    reducer: {
      products: (state = { productListSmall: initialListSmall }) => state,
    },
  });

describe('render AppShell', () => {
  it('should be show titles with their names', () => {
    const store = createStore(productListSmall);
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <AppShell />
        </MantineProvider>
      </Provider>
    );

    expect(screen.getByText('Vegetable')).toBeInTheDocument();
    expect(screen.getByText('SHOP')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
