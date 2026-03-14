import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ListItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity?: number;
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
  const [counters, setCounters] = useState<Record<string, number>>({});
  const [list, setList] = useState<ListItem[]>([]);

  const updateList = (newItem: ListItem, quantity: number) => {
    setList((prevList) => {
      const isExist = prevList.find((i) => i.id === newItem.id);

      if (isExist) {
        return prevList.map((i) => (i.id === newItem.id ? { ...i, quantity } : i));
      }

      return [...prevList, { ...newItem, quantity }];
    });
  };

  const increment = (id: string) => {
    setCounters((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 1) + 1,
    }));
  };

  const decrement = (id: string) => {
    setCounters((prev) => {
      const current = prev[id] ?? 1;
      if (current <= 1) {
        return prev;
      }
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
