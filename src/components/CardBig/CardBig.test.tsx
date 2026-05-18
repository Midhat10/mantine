import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import CardBig from './CardBig';

describe('render CardBig', () => {
  const mockItem: Product = {
    category: 'vegetables',
    id: 1,
    image:
      'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg',
    name: 'Brocolli - 1 Kg',
    price: 120,
    count: 1,
  };
  it('it should render this card with name, price, count and buttons', () => {
    const store = configureStore({
      reducer: (state = {}) => state,
    });
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <CardBig item={mockItem} />
        </MantineProvider>
      </Provider>
    );

    expect(screen.getByText('Brocolli')).toBeInTheDocument();
    expect(screen.getByText('1 Kg')).toBeInTheDocument();
    expect(screen.getByText('$ 120')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
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
