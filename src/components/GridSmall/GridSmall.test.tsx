import { render, screen } from '@test-utils';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest'; // Добавляем vi сюда
import { useCounterContext } from '../CounterContext/CounterContext';
import GridSmall from './GridSmall';

vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

vi.mock('../CardSmall/CardSmall', () => ({
  default: ({ item, withDivider }: any) => (
    <div data-testid="card-small" data-divider={withDivider}>
      {item.name}
    </div>
  ),
}));

vi.mock('../TotalPrice/TotalPrice', () => ({
  default: () => <span data-testid="total-price-mock">99.99</span>,
}));

describe('GridSmall Component', () => {
  const mockItems = [
    { id: 'prod-1', name: 'Tomato-Veg', price: 10, image: 'tomato.jpg' },
    { id: 'prod-2', name: 'Apple-Fruit', price: 20, image: 'apple.jpg' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('отображает пустую корзину, если список товаров пуст', () => {
    (useCounterContext as Mock).mockReturnValue({
      list: [],
      counters: {},
    });

    render(<GridSmall />);

    expect(screen.getByText(/your cart is empty!/i)).toBeInTheDocument();
    expect(screen.queryByText('Total')).not.toBeInTheDocument();
  });

  it('рендерит список товаров и итоговую сумму, если корзина не пуста', () => {
    (useCounterContext as Mock).mockReturnValue({
      list: mockItems,
      counters: { 'prod-1': 1, 'prod-2': 1 },
    });

    render(<GridSmall />);

    const cards = screen.getAllByTestId('card-small');
    expect(cards).toHaveLength(2);
    expect(screen.getByText('Tomato-Veg')).toBeInTheDocument();

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByTestId('total-price-mock')).toBeInTheDocument();
  });

  it('правильно передает withDivider: false только последней карточке', () => {
    (useCounterContext as Mock).mockReturnValue({
      list: mockItems,
      counters: {},
    });

    render(<GridSmall />);

    const cards = screen.getAllByTestId('card-small');

    expect(cards[0].getAttribute('data-divider')).toBe('true');

    expect(cards[1].getAttribute('data-divider')).toBe('false');
  });
});
