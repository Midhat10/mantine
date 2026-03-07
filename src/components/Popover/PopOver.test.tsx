import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useCounterContext } from '../CounterContext/CounterContext';
import PopOverExample from './PopOver';

// 1. Мокаем контекст для GridSmall, который находится внутри поповера
vi.mock('../CounterContext/CounterContext', () => ({
  useCounterContext: vi.fn(),
}));

describe('PopOverExample Component', () => {
  const mockContext = {
    list: [],
    counters: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useCounterContext as any).mockReturnValue(mockContext);
  });

  it('рендерит дочерний элемент (триггер)', () => {
    render(
      <PopOverExample>
        <button type="button">Open Cart</button>
      </PopOverExample>
    );

    expect(screen.getByRole('button', { name: /open cart/i })).toBeInTheDocument();
  });
});
