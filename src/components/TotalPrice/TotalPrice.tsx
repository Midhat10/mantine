import React from 'react';
import { useCounterContext } from '../CounterContext/CounterContext';

const TotalPrice = () => {
  // Берем и список товаров в корзине, и объект счетчиков
  const { list, counters } = useCounterContext();

  const total = list.reduce((sum, item) => {
    // Берем актуальное число из counters по id.
    // Если в counters еще нет записи (товар только что добавили), считаем за 1.
    const currentQty = counters[item.id] ?? 1;

    return sum + item.price * currentQty;
  }, 0);

  // toFixed(2) нужен, чтобы цена $19.99 + $10.01 не превратилась в $30.000000000004
  return <b>{total.toFixed(2)}$</b>;
};

export default TotalPrice;
