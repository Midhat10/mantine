import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import CardBig from './CardBig';

// 1. Мокаем хук контекста
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

// Мокаем Counter для упрощения поиска кнопок и значения
vi.mock('../Counter/Counter', () => ({
  default: ({ value, increment, decrement }: any) => (
    <div>
      <button type="button" onClick={decrement} aria-label="minus">
        -
      </button>
      <span data-testid="count-value">{value}</span>
      <button type="button" onClick={increment} aria-label="plus">
        +
      </button>
    </div>
  ),
}));

describe('CardBig Component', () => {
  const mockItem = {
    id: 'prod-123',
    image: 'test-image.jpg',
    name: 'Nike Air-Max 270',
    price: 150,
  };

  const mockContext = {
    // В объекте counters теперь ID в качестве ключа
    counters: { 'prod-123': 5 },
    increment: vi.fn(),
    decrement: vi.fn(),
    updateList: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('корректно отображает данные товара', () => {
    render(<CardBig item={mockItem} />);

    // Используем регулярные выражения для поиска частей имени (split по дефису)
    expect(screen.getByText(/Nike Air/i)).toBeInTheDocument();
    expect(screen.getByText(/Max 270/i)).toBeInTheDocument();

    // Проверка цены (с учетом символа доллара)
    expect(screen.getByText(/\$ 150/i)).toBeInTheDocument();

    // Проверка изображения по alt-тексту
    const image = screen.getByAltText('Nike Air-Max 270');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('отображает правильное значение счетчика из контекста по ID', () => {
    render(<CardBig item={mockItem} />);

    // Проверяем, что отображается "5", которое мы задали в mockContext
    expect(screen.getByTestId('count-value')).toHaveTextContent('5');
  });

  it('вызывает методы контекста с ID товара вместо индекса', () => {
    render(<CardBig item={mockItem} />);

    const plusBtn = screen.getByLabelText('plus');
    const minusBtn = screen.getByLabelText('minus');

    fireEvent.click(plusBtn);
    expect(mockContext.increment).toHaveBeenCalledWith('prod-123');

    fireEvent.click(minusBtn);
    expect(mockContext.decrement).toHaveBeenCalledWith('prod-123');
  });

  it('вызывает updateList с двумя аргументами (item и текущее количество)', () => {
    render(<CardBig item={mockItem} />);

    const addToCartBtn = screen.getByRole('button', { name: /add/i });
    fireEvent.click(addToCartBtn);

    // Проверяем, что передано и описание товара, и число 5 из счетчика
    expect(mockContext.updateList).toHaveBeenCalledWith(mockItem, 5);
  });
});
