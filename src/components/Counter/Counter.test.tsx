import React from 'react';
import { fireEvent, render, screen } from '@test-utils';
// import { vi } from 'vitest';
import { CounterProvider } from '../CounterContext/CounterContext'; // Импортируй контекст
import Counter from './Counter';

describe('CardBig', () => {
  it('renders CardBig component with item details', () => {
    render(<Counter />);

    // Проверяем, что имя товара отображается
    // expect(screen.getByText('Test Item - Description')).toBeInTheDocument();
    screen.debug();
  });
});
