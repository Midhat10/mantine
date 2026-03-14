import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import CardSmall from './CardSmall';

vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

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

describe('CardSmall Component', () => {
  const mockItem = {
    id: 'prod-100',
    image: 'small-image.jpg',
    name: 'Cucumber-Green',
    price: 90,
  };

  const mockContext = {
    counters: { 'prod-100': 15 },
    increment: vi.fn(),
    decrement: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('рендерит изображение с корректным alt-текстом', () => {
    render(<CardSmall item={mockItem} />);

    const img = screen.getByAltText('Cucumber-Green');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'small-image.jpg');
  });

  it('отображает части имени товара отдельно через split', () => {
    render(<CardSmall item={mockItem} />);

    expect(screen.getByText(/Cucumber/i)).toBeInTheDocument();
    expect(screen.getByText(/Green/i)).toBeInTheDocument();
  });

  it('корректно берет значение счетчика из объекта по ID', () => {
    render(<CardSmall item={mockItem} />);

    expect(screen.getByTestId('count-value')).toHaveTextContent('15');
  });

  it('вызывает методы контекста с ID товара вместо индекса', () => {
    render(<CardSmall item={mockItem} />);

    const plusBtn = screen.getByLabelText('plus');
    fireEvent.click(plusBtn);

    expect(mockContext.increment).toHaveBeenCalledWith('prod-100');
  });

  it('показывает 1 по умолчанию, если в counters нет записи для этого ID', () => {
    (useCounterContext as any).mockReturnValue({
      counters: {},
      increment: vi.fn(),
      decrement: vi.fn(),
    });

    render(<CardSmall item={mockItem} />);

    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
  });
});
