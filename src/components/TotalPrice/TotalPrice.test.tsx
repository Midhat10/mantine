import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import TotalPrice from './TotalPrice';

vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('TotalPrice Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('корректно рассчитывает сумму для нескольких товаров из контекста', () => {
    const mockList = [
      { id: 'p1', price: 10 },
      { id: 'p2', price: 25.4 },
    ];

    const mockCounters = { p1: 2, p2: 3 };

    (useCounterContext as any).mockReturnValue({
      list: mockList,
      counters: mockCounters,
    });

    render(<TotalPrice />);

    expect(
      screen.getByText((_, element) => {
        const hasText = (node: Element) => node.textContent === '$ 96';
        const nodeHasText = hasText(element!);
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });

  it('отображает $ 0 при пустом списке', () => {
    (useCounterContext as any).mockReturnValue({
      list: [],
      counters: {},
    });

    render(<TotalPrice />);
    expect(screen.getByText(/\$ 0/i)).toBeInTheDocument();
  });
});
