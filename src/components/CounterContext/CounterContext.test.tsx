import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CounterProvider, useCounterContext } from './CounterContext';

describe('CounterProvider', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CounterProvider>{children}</CounterProvider>
  );

  const mockItem = { id: 'prod-1', name: 'Tomato-Veg', price: 10, image: 'tomato.jpg' };

  it('должен инициализироваться с пустым объектом счетчиков и пустым списком', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    expect(result.current.counters).toEqual({});
    expect(result.current.list).toEqual([]);
  });

  it('должен увеличивать значение по ID (increment)', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    act(() => {
      result.current.increment('prod-1');
    });

    expect(result.current.counters['prod-1']).toBe(2);

    act(() => {
      result.current.increment('prod-1');
    });
    expect(result.current.counters['prod-1']).toBe(3);
  });

  it('должен уменьшать значение по ID (decrement), но не ниже 1', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    act(() => {
      result.current.increment('prod-1'); // Станет 2
      result.current.decrement('prod-1'); // Станет 1
    });

    expect(result.current.counters['prod-1']).toBe(1);

    act(() => {
      result.current.decrement('prod-1');
    });

    expect(result.current.counters['prod-1']).toBe(1);
  });

  it('должен добавлять элементы в список с указанным количеством (updateList)', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    act(() => {
      result.current.updateList(mockItem, 5);
    });

    expect(result.current.list).toHaveLength(1);
    expect(result.current.list[0]).toEqual({ ...mockItem, quantity: 5 });
  });

  it('должен обновлять количество, если товар уже есть в списке', () => {
    const { result } = renderHook(() => useCounterContext(), { wrapper });

    act(() => {
      result.current.updateList(mockItem, 1);
      result.current.updateList(mockItem, 10);
    });

    expect(result.current.list).toHaveLength(1);
    expect(result.current.list[0].quantity).toBe(10);
  });

  it('выбрасывает ошибку, если используется вне CounterProvider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => renderHook(() => useCounterContext())).toThrow(
      'useCounterContext must be used within a CounterProvider'
    );

    consoleSpy.mockRestore();
  });
});
