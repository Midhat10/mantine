import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import CardSmall from './CardSmall';

// Мокаем контекст
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('CardSmall Component', () => {
  const mockItem = {
    id: '2',
    image: 'small-image.jpg',
    name: 'Adidas-Running',
    price: 90,
  };

  const mockContext = {
    counters: { 5: 10 }, // Допустим, индекс карточки 5, значение 10
    increment: vi.fn(),
    decrement: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('рендерит изображение с корректным alt-текстом', () => {
    render(<CardSmall item={mockItem} index={5} />);

    // Теперь, когда alt={item.name}, мы ищем картинку по реальному имени
    const img = screen.getByRole('img', { name: /adidas-running/i });

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'small-image.jpg');
  });

  it('отображает части имени товара отдельно', () => {
    render(<CardSmall item={mockItem} index={5} />);

    // Проверяем сплит по дефису
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('Running')).toBeInTheDocument();
  });

  it('корректно работает с состоянием счетчика при разных индексах', () => {
    // Проверяем, что берется значение именно по индексу 5
    render(<CardSmall item={mockItem} index={5} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('вызывает методы контекста с правильным индексом', () => {
    const testIndex = 5;
    render(<CardSmall item={mockItem} index={testIndex} />);

    const buttons = screen.getAllByRole('button');
    const incBtn = buttons[1]; // Обычно вторая клавиша в Counter — это плюс

    fireEvent.click(incBtn);

    // Проверяем, что в increment ушел именно наш индекс
    expect(mockContext.increment).toHaveBeenCalledWith(testIndex);
  });
});
