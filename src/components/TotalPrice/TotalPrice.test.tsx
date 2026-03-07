import { render, screen } from '@test-utils';
import TotalPrice from './TotalPrice';

describe('TotalPrice Component', () => {
  it('корректно рассчитывает сумму для нескольких товаров', () => {
    const mockList = [
      { price: 10 }, // Индекс 0
      { price: 25 }, // Индекс 1
    ];
    const mockCounters = [2, 3]; // 2 * 10 + 3 * 25 = 20 + 75 = 95

    render(<TotalPrice list={mockList} counters={mockCounters} />);

    // Ищем текст "95$"
    expect(screen.getByText('95$')).toBeInTheDocument();
  });

  it('отображает 0$, если список товаров или счетчиков пуст', () => {
    const { rerender } = render(<TotalPrice list={[]} counters={[]} />);
    expect(screen.getByText('0$')).toBeInTheDocument();

    // Проверка случая, когда список есть, но счетчики не переданы (защита от undefined)
    rerender(<TotalPrice list={[{ price: 10 }]} counters={[]} />);
    expect(screen.getByText('0$')).toBeInTheDocument();
  });

  it('корректно обрабатывает отсутствие цены (price || 0)', () => {
    // Симулируем ситуацию, когда у товара нет цены
    const mockList = [{ price: undefined } as any];
    const mockCounters = [10];

    render(<TotalPrice list={mockList} counters={mockCounters} />);

    expect(screen.getByText('0$')).toBeInTheDocument();
  });

  it('правильно считает при нулевом количестве товара', () => {
    const mockList = [{ price: 100 }, { price: 50 }];
    const mockCounters = [1, 0]; // 100 * 1 + 50 * 0 = 100

    render(<TotalPrice list={mockList} counters={mockCounters} />);

    expect(screen.getByText('100$')).toBeInTheDocument();
  });
});
