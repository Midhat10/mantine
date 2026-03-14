import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { Popover } from '@mantine/core';
import { useCounterContext } from '../CounterContext/CounterContext';
import Button from './Button';

vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('Button Component', () => {
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
    render(
      <Popover>
        <Button />
      </Popover>
    );

    const badge = screen.getByText('2');
    expect(badge).toBeInTheDocument();

    expect(badge.closest('.mantine-Badge-root')).toBeInTheDocument();
  });

  it('отображает текст клавиши "Cart"', () => {
    render(
      <Popover>
        <Button />
      </Popover>
    );

    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  it('корректно отображает 0, если список пуст', () => {
    (useCounterContext as any).mockReturnValue({ list: [] });

    render(
      <Popover>
        <Button />
      </Popover>
    );

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('содержит SVG значоку в правой части', () => {
    const { container } = render(
      <Popover>
        <Button />
      </Popover>
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '18');
  });
});
