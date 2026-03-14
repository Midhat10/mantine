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

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('вызывает decrement при клике на кнопку минус', () => {
    render(<Counter {...defaultProps} />);

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

    expect(valueText).toHaveStyle({
      textAlign: 'center',
    });

    const styles = window.getComputedStyle(valueText);
    expect(styles.width).toMatch(/36px|rem|calc/);
  });
});
