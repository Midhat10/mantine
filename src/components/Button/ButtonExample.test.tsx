import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { Popover } from '@mantine/core';
import { useCounterContext } from '../CounterContext/CounterContext';
import ButtonExample from './ButtonExample';

// Мокаем контекст
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('ButtonExample Component', () => {
  const mockContext = {
    list: [
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('отображает корректное количество элементов в Badge', () => {
    // Оборачиваем в Popover, так как Target не может существовать без родителя
    render(
      <Popover>
        <ButtonExample />
      </Popover>
    );

    // Ищем число 2 (длина массива list)
    const badge = screen.getByText('2');
    expect(badge).toBeInTheDocument();

    // Проверяем, что это именно Badge (в Mantine это обычно div или span с классом)
    expect(badge.closest('.mantine-Badge-root')).toBeInTheDocument();
  });

  it('отображает текст клавиши "Cart"', () => {
    render(
      <Popover>
        <ButtonExample />
      </Popover>
    );

    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  it('корректно отображает 0, если список пуст', () => {
    (useCounterContext as any).mockReturnValue({ list: [] });

    render(
      <Popover>
        <ButtonExample />
      </Popover>
    );

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('содержит SVG значоку в правой части', () => {
    const { container } = render(
      <Popover>
        <ButtonExample />
      </Popover>
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '18');
  });
});
