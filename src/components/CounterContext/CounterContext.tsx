import React, { createContext, useContext, useEffect, useState } from 'react';

const CounterContext = createContext('');

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const CounterProvider = ({ children, initialCounters }) => {
  const [counters, setCounters] = useState(initialCounters || []);
  const [list, setList] = useState([]); // Добавляем состояние list

  useEffect(() => {
    if (initialCounters.length > 0) {
      setCounters(initialCounters); // Устанавливаем начальные значения
    }
  }, [initialCounters]);

  // Пример функции для обновления list
  const updateList = (newItem) => {
    setList((prevList) => [...prevList, newItem]);
  };

  const increment = (index) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      newCounters[index] = (newCounters[index] || 1) + 1; // Увеличиваем значение
      return newCounters;
    });
  };

  const decrement = (index) => {
    setCounters((prev) => {
      const newCounters = [...prev];
      if (newCounters[index] > 1) {
        newCounters[index] -= 1; // Уменьшаем значение, если оно больше 1
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
