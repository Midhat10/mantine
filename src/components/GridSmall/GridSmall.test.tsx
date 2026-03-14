import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import GridSmall from './GridSmall';

// 1. Мокаем контекст
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

// Мокаем CardSmall, чтобы проверить пропс withDivider
vi.mock('../CardSmall/CardSmall', () => ({
  default: ({ item, withDivider }: any) => (
    <div data-testid="card-small" data-divider={withDivider}>
      {item.name}
    </div>
  ),
}));

// Мокаем TotalPrice
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
    (useCounterContext as vi.Mock).mockReturnValue({
      list: [],
      counters: {}, // Теперь это объект
    });

    render(<GridSmall />);

    expect(screen.getByText(/your cart is empty!/i)).toBeInTheDocument();
    expect(screen.queryByText('Total')).not.toBeInTheDocument();
  });

  it('рендерит список товаров и итоговую сумму, если корзина не пуста', () => {
    (useCounterContext as vi.Mock).mockReturnValue({
      list: mockItems,
      counters: { 'prod-1': 1, 'prod-2': 1 },
    });

    render(<GridSmall />);

    // Проверяем отрисовку карточек
    const cards = screen.getAllByTestId('card-small');
    expect(cards).toHaveLength(2);
    expect(screen.getByText('Tomato-Veg')).toBeInTheDocument();

    // Проверяем секцию Total
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByTestId('total-price-mock')).toBeInTheDocument();
  });

  it('правильно передает withDivider: false только последней карточке', () => {
    (useCounterContext as vi.Mock).mockReturnValue({
      list: mockItems,
      counters: {},
    });

    render(<GridSmall />);

    const cards = screen.getAllByTestId('card-small');

    // Первая карточка: withDivider должен быть true (индекс 0 !== 1)
    expect(cards[0].getAttribute('data-divider')).toBe('true');

    // Последняя карточка: withDivider должен быть false (индекс 1 === 1)
    expect(cards[1].getAttribute('data-divider')).toBe('false');
  });
});
