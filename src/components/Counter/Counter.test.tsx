import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import { MantineProvider } from '@mantine/core';
import theme from '@/theme';
import Counter from './Counter';

const mockDispatch = vi.fn();

vi.mock('@/hooks/redux', () => {
  return {
    useTypedDispatch: () => mockDispatch,
  };
});

describe('render Counter', () => {
  const mockItem = {
    id: 1,
    name: 'Помидор',
    price: 3,
    count: 25,
    image: '',
    category: '',
  };

  const mockItem2 = {
    id: 2,
    name: 'Огурцы',
    price: 2,
    count: 50,
    image: '',
    category: '',
  };
  const mockRegim = 1;
  const mockRegim2 = 2;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('test the number in the Counter', () => {
    const store = configureStore({
      reducer: (state = {}) => state,
    });
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Counter item={mockItem} regim={mockRegim} />
        </MantineProvider>
      </Provider>
    );

    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('must fire button with aria-label decrement', () => {
    const store = configureStore({
      reducer: (state = {}) => state,
    });
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Counter item={mockItem} regim={mockRegim} />
        </MantineProvider>
      </Provider>
    );

    const button = screen.getByRole('button', {
      name: 'decrement',
    });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'products/decrement',
        payload: {
          id: 1,
          regim: 1,
        },
      })
    );
  });

  it('must fire button with aria-label increment', () => {
    const store = configureStore({
      reducer: (state = {}) => state,
    });
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Counter item={mockItem2} regim={mockRegim2} />
        </MantineProvider>
      </Provider>
    );

    const button = screen.getByRole('button', {
      name: 'increment',
    });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'products/increment',
        payload: {
          id: 2,
          regim: 2,
        },
      })
    );
  });
});
