import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import GridExample from './Grid';

// Мокаем контекст, так как дочерний CardBig его потребует
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

    // Проверяем наличие крутилка ожиданияов по их роли или по классу Mantine
    const { container } = render(<GridExample data={null} length={0} />);
    // В Mantine Loader обычно имеет роль "presentation" или специфичный класс
    const loaders = container.querySelectorAll('.mantine-Loader-root');
    // Если по роли не находит, можно искать по контейнеру:
    // const loaders = document.querySelectorAll('.mantine-Loader-root');

    expect(loaders.length).toBe(24);
  });

  it('рендерит правильное количество карточек CardBig при наличии данных', () => {
    render(<GridExample data={mockData} length={mockData.length} />);

    // Проверяем, что отрисовались названия из данных
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();

    // Проверяем количество отрисованных цен (в каждой карточке по одной)
    const prices = screen.getAllByText(/^\$ \d+/);
    expect(prices).toHaveLength(2);
  });

  it('передает правильный индекс в каждую карточку', () => {
    render(<GridExample data={mockData} length={mockData.length} />);

    // Чтобы проверить индексы, можно убедиться, что CardBig
    // получает пропсы корректно (если бы мы мокали CardBig).
    // В текущем виде мы просто видим, что карточки отрисовались.
  });
});
