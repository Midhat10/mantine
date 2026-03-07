import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import GridSmall from './GridSmall';

// 1. Мокаем контекст
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

// Мокаем TotalPrice, чтобы не зависеть от его внутренней логики расчетов
vi.mock('../TotalPrice/TotalPrice', () => ({
  default: ({ list, counters }: any) => <div data-testid="total-price-mock">Total Mock</div>,
}));

describe('GridSmall Component', () => {
  const mockItems = [
    { id: '1', name: 'Tomato-Veg', price: 10, image: 'tomato.jpg' },
    { id: '2', name: 'Apple-Fruit', price: 20, image: 'apple.jpg' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('отображает пустую корзину, если список товаров пуст', () => {
    (useCounterContext as any).mockReturnValue({
      list: [],
      counters: [],
    });

    render(<GridSmall />);

    expect(screen.getByText(/you cart is empty!/i)).toBeInTheDocument();
    // Проверяем, что компонент TotalPrice НЕ отображается
    expect(screen.queryByText('Total')).not.toBeInTheDocument();
  });

  it('рендерит список товаров и итоговую сумму, если корзина не пуста', () => {
    (useCounterContext as any).mockReturnValue({
      list: mockItems,
      counters: [1, 2],
    });

    render(<GridSmall />);

    // Проверяем, что отрисовались карточки (ищем названия из CardSmall)
    expect(screen.getByText('Tomato')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();

    // Проверяем наличие секции Total
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByTestId('total-price-mock')).toBeInTheDocument();
  });

  it('проверяет, что CardSmall получает правильные индексы', () => {
    (useCounterContext as any).mockReturnValue({
      list: mockItems,
      counters: [1, 1],
    });

    render(<GridSmall />);

    // В GridSmall элементы рендерятся через map,
    // мы можем проверить, что количество Grid.Col соответствует длине списка
    const gridCols = document.querySelectorAll('.mantine-Grid-col');
    expect(gridCols.length).toBe(mockItems.length);
  });
});
