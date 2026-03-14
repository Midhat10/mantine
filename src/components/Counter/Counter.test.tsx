import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import Counter from './Counter';

describe('Counter Component', () => {
  const mockDecrement = vi.fn();
  const mockIncrement = vi.fn();
  const defaultProps = {
    value: 5,
    decrement: mockDecrement,
    increment: mockIncrement,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('отображает текущее значение счетчика', () => {
    render(<Counter {...defaultProps} />);

    // Теперь значение просто внутри компонента Text
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('вызывает decrement при клике на кнопку минус', () => {
    render(<Counter {...defaultProps} />);

    // Находим кнопку, которая содержит SVG с минусом (rect)
    const buttons = screen.getAllByRole('button');
    const decBtn = buttons[0];

    fireEvent.click(decBtn);

    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  it('вызывает increment при клике на кнопку плюс', () => {
    render(<Counter {...defaultProps} />);

    const buttons = screen.getAllByRole('button');
    const incBtn = buttons[1];

    fireEvent.click(incBtn);

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  it('имеет правильные стили для центрирования текста', () => {
    render(<Counter {...defaultProps} />);
    const valueText = screen.getByText('5');

    // Вариант 1: Проверяем через регулярное выражение (пропустит и px, и calc/rem)
    expect(valueText).toHaveStyle({
      textAlign: 'center',
    });

    // Вариант 2: Если важно проверить именно ширину, ищем подстроку
    const styles = window.getComputedStyle(valueText);
    expect(styles.width).toMatch(/36px|rem|calc/);
  });
});
