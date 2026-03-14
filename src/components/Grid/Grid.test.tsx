import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import GridExample from './Grid';

vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('GridExample Component', () => {
  const mockData = [
    { id: '1', name: 'Apple-Fruit', price: 2, image: 'apple.jpg' },
    { id: '2', name: 'Banana-Fruit', price: 1, image: 'banana.jpg' },
  ];

  const mockContext = {
    counters: {},
    increment: vi.fn(),
    decrement: vi.fn(),
    updateList: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('отображает 24 циклов загрузки, когда данные загружаются (data === null)', () => {
    render(<GridExample data={null} length={0} />);

    const { container } = render(<GridExample data={null} length={0} />);

    const loaders = container.querySelectorAll('.mantine-Loader-root');

    expect(loaders.length).toBe(24);
  });

  it('рендерит правильное количество карточек CardBig при наличии данных', () => {
    render(<GridExample data={mockData} length={mockData.length} />);

    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();

    const prices = screen.getAllByText(/^\$ \d+/);
    expect(prices).toHaveLength(2);
  });
});
