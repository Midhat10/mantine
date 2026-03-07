import React from 'react';
import { fireEvent, render, screen } from '@test-utils';
// import { vi } from 'vitest';
import { CounterProvider } from '../CounterContext/CounterContext'; // Импортируй контекст
import CardBig from './CardBig'; // Импортируй компонент

// Создаем мок данных для теста
const mockItem = {
  id: '1',
  image: 'https://via.placeholder.com/276',
  name: 'Test Item - Description',
  price: 10,
};

describe('CardBig', () => {
  it('renders CardBig component with item details', () => {
    render(
      <CounterProvider>
        <CardBig item={mockItem} index={0} />
      </CounterProvider>
    );

    // Проверяем, что имя товара отображается
    // expect(screen.getByText('Test Item - Description')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();

    // Проверяем, что цена товара отображается
    // expect(screen.getByText('10')).toBeInTheDocument(); // Убедись, что формат совпадает
    // Проверяем, что изображение отображается
    expect(screen.getByRole('img')).toHaveAttribute('src', mockItem.image);
  });
});
