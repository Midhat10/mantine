import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ListItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity?: number; // Поле для хранения выбранного количества
}

export interface CounterContextType {
  counters: Record<string, number>;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  list: ListItem[];
  // ОБНОВИТЕ ЭТУ СТРОКУ: добавляем второй параметр
  updateList: (newItem: ListItem, quantity: number) => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }
  return context;
};

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  // Состояние счетчиков как объект
  const [counters, setCounters] = useState<Record<string, number>>({});
  const [list, setList] = useState<ListItem[]>([]);

  // Логика добавления в список (корзину)
  const updateList = (newItem: ListItem, quantity: number) => {
    setList((prevList) => {
      // Проверяем, есть ли уже такой товар в корзине
      const isExist = prevList.find((i) => i.id === newItem.id);

      if (isExist) {
        // Если есть — обновляем у него количество
        return prevList.map((i) => (i.id === newItem.id ? { ...i, quantity } : i));
      }
      // Если нет — добавляем новый с указанным количеством
      return [...prevList, { ...newItem, quantity }];
    });
  };

  const increment = (id: string) => {
    setCounters((prev) => ({
      ...prev,
      // Если в стейте еще нет id, берем 1 (база) и делаем +1
      [id]: (prev[id] ?? 1) + 1,
    }));
  };

  const decrement = (id: string) => {
    setCounters((prev) => {
      const current = prev[id] ?? 1;
      if (current <= 1) {
        return prev;
      } // Не даем опуститься ниже 1
      return {
        ...prev,
        [id]: current - 1,
      };
    });
  };

  return (
    <CounterContext.Provider value={{ counters, increment, decrement, list, updateList }}>
      {children}
    </CounterContext.Provider>
  );
};
