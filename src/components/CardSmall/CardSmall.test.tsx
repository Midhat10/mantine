import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import CardSmall from './CardSmall';

describe('render CardSmall', () => {
  const mockItem: Product = {
    category: 'vegetables',
    id: 2,
    image:
      'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg',
    name: 'Cauliflower - 1 Kg',
    price: 60,
    count: 1,
  };
  it('', () => {
    const store = configureStore({
      reducer: (state = {}) => state,
    });
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <CardSmall item={mockItem} />
        </MantineProvider>
      </Provider>
    );

    expect(screen.getByText('Cauliflower')).toBeInTheDocument();
    expect(screen.getByText(/1 Kg/)).toBeInTheDocument();
    expect(screen.getByText('$ 60')).toBeInTheDocument();
    expect(screen.getByText(1)).toBeInTheDocument();

    const button1 = screen.getByRole('button', {
      name: 'increment',
    });

    const button2 = screen.getByRole('button', {
      name: 'decrement',
    });

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
});
