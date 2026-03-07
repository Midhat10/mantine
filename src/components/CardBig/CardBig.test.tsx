import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import CardBig from './CardBig';

// 1. Мокаем хук контекста
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('CardBig Component', () => {
  const mockItem = {
    id: '1',
    image: 'test-image.jpg',
    name: 'Nike Air-Max 270',
    price: 150,
  };

  const mockContext = {
    counters: { 0: 2 }, // Значение счетчика для индекса 0 равно 2
    increment: vi.fn(),
    decrement: vi.fn(),
    updateList: vi.fn(),
  };

  beforeEach(() => {
    // Сбрасываем моки перед каждым тестом
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('корректно отображает данные товара', () => {
    render(<CardBig item={mockItem} index={0} />);

    // Проверка разделенного имени (Nike Air и Max 270)
    expect(screen.getByText('Nike Air')).toBeInTheDocument();
    expect(screen.getByText('Max 270')).toBeInTheDocument();

    // Проверка цены
    expect(screen.getByText('$ 150')).toBeInTheDocument();

    // Ищем по роли 'img' и имени, которое берется из alt
    const image = screen.getByRole('img', { name: mockItem.name });
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('отображает правильное значение счетчика из контекста', () => {
    render(<CardBig item={mockItem} index={0} />);

    // Проверяем, что внутри Counter отображается "2" (из нашего mockContext)
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('вызывает increment и decrement из контекста с правильным индексом', () => {
    render(<CardBig item={mockItem} index={0} />);

    const buttons = screen.getAllByRole('button');
    const decBtn = buttons[0];
    const incBtn = buttons[1];

    fireEvent.click(incBtn);
    expect(mockContext.increment).toHaveBeenCalledWith(0);

    fireEvent.click(decBtn);
    expect(mockContext.decrement).toHaveBeenCalledWith(0);
  });

  it('вызывает updateList при нажатиее на клавишу "Add to cart"', () => {
    render(<CardBig item={mockItem} index={0} />);

    const addToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addToCartBtn);

    expect(mockContext.updateList).toHaveBeenCalledWith(mockItem);
  });
});
