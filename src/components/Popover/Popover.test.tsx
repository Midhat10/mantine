import * as matchers from '@testing-library/jest-dom/matchers';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';
import store from '@/store/store';
import theme from '@/theme';
import Button from '../Button/Button';
import PopOver from './PopOver';

describe('render Popover', () => {
  it.only('it should show grid and close grid by click on button of popover', () => {
    render(
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <PopOver>
            <Button data-testid="toggle-button" />
          </PopOver>
        </MantineProvider>
      </Provider>
    );
    expect.extend(matchers);

    const button = screen.getByTestId('toggle-button');

    const grid = screen.getByTestId('target-grid');

    expect(grid).toBeInTheDocument();

    fireEvent.click(button);

    waitFor(() => {
      expect(screen.getByTestId('target-grid')).not.toBeInTheDocument();
    });

    fireEvent.click(button);

    waitFor(() => {
      expect(screen.getByTestId('target-grid')).toBeInTheDocument();
    });
  });
});
