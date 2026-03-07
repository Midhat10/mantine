import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ListItem {
  id: string; // или number, в зависимости от типа id
  image: string;
  name: string;
  price: number;
}

export interface CounterContextType {
  counters: number[];
  increment: (index: number) => void;
  decrement: (index: number) => void;
  list: ListItem[]; // или GridExampleProps, если это необходимо
  updateList: (newItem: ListItem) => void;
}

// Создаем контекст с типом
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Хук для использования контекста
export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }
  return context;
};

// Определяем интерфейс для пропсов CounterProvider
interface CounterProviderProps {
  children: ReactNode;
  initialCounters?: number[];
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ children, initialCounters }) => {
  const [counters, setCounters] = useState<number[]>(initialCounters || []);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (initialCounters && initialCounters.length > 0) {
      setCounters(initialCounters);
    }
  }, [initialCounters]);

  const updateList = (newItem: ListItem) => {
    setList((prevList) => [...prevList, newItem]);
  };

  const increment = (index: number) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index] = (newCounters[index] || 1) + 1;
      return newCounters;
    });
  };

  const decrement = (index: number) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      if (newCounters[index] > 1) {
        newCounters[index] -= 1;
      }
      return newCounters;
    });
  };

  return (
    <CounterContext.Provider value={{ counters, increment, decrement, list, updateList }}>
      {children}
    </CounterContext.Provider>
  );
};
