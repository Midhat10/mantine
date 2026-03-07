import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import Counter from './Counter';

describe('Counter Component', () => {
  // Создаем моки для функций
  const mockDecrement = vi.fn();
  const mockIncrement = vi.fn();
  const defaultProps = {
    value: 5,
    decrement: mockDecrement,
    increment: mockIncrement,
  };

  it('отображает текущее значение счетчика', () => {
    render(<Counter {...defaultProps} />);

    // Проверяем, что значение 5 отрисовано в GroupSection
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('вызывает decrement при нажатиее на первую клавишу', () => {
    // В компоненте две клавиши. Можно найти их по роли или по порядку.
    render(<Counter {...defaultProps} />);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]); // Левая клавиша (минус)

    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  it('вызывает increment при нажатиее на вторую клавишу', () => {
    render(<Counter {...defaultProps} />);

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]); // Правая клавиша (плюс)

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  it('меняет прозрачность (opacity) SVG при наведении', () => {
    render(<Counter {...defaultProps} />);

    const buttons = screen.getAllByRole('button');
    const leftButton = buttons[0];

    // Находим rect внутри svg первой клавиши
    const rect = leftButton.querySelector('rect');

    // Начальное состояние (opacity=1)
    expect(rect).toHaveAttribute('opacity', '1');

    // Симулируем наведение
    fireEvent.mouseEnter(leftButton);

    // После наведения (opacity=0.3)
    // Примечание: useHover может требовать реальных DOM событий или мока хука
    expect(rect).toHaveAttribute('opacity', '0.3');
  });
});
