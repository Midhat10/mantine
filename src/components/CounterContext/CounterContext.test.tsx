import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CounterProvider, useCounterContext } from './CounterContext';

describe('CounterProvider', () => {
  // Обертка для тестов, чтобы хук работал внутри провайдера
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CounterProvider>{children}</CounterProvider>
  );

  it('должен инициализироваться с пустыми значениями', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    expect(result.current.counters).toEqual([]);
    expect(result.current.list).toEqual([]);
  });

  it('должен увеличивать значение счетчика (increment)', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    act(() => {
      result.current.increment(0); // Увеличиваем счетчик для индекса 0
    });

    // По твоей логике: (undefined || 1) + 1 = 2
    expect(result.current.counters[0]).toBe(2);

    act(() => {
      result.current.increment(0);
    });
    expect(result.current.counters[0]).toBe(3);
  });

  it('должен уменьшать значение счетчика (decrement), но не ниже 1', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    act(() => {
      result.current.increment(1); // Сначала создаем значение (станет 2)
      result.current.decrement(1); // Уменьшаем (станет 1)
    });

    expect(result.current.counters[1]).toBe(1);

    act(() => {
      result.current.decrement(1); // Пытаемся уменьшить ниже 1
    });

    // Согласно логике "if (newCounters[index] > 1)", значение останется 1
    expect(result.current.counters[1]).toBe(1);
  });

  it('должен добавлять элементы в список (updateList)', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });
    const mockItem = { id: '1', name: 'Nike', price: 100, image: 'img.jpg' };

    act(() => {
      result.current.updateList(mockItem);
    });

    expect(result.current.list).toHaveLength(1);
    expect(result.current.list[0]).toEqual(mockItem);
  });

  it('выбрасывает ошибку, если используется вне CounterProvider', () => {
    // Подавляем console.error для этого теста, так как ошибка ожидаема
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => renderHook(() => useCounterContext())).toThrow(
      'useCounterContext must be used within a CounterProvider'
    );

    consoleSpy.mockRestore();
  });
});
