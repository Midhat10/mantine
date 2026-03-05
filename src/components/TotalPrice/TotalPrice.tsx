import React from 'react';

// Определяем интерфейс для элемента списка
interface ListItem {
  price: number; // Предполагаем, что цена всегда число
}

// Определяем интерфейс для пропсов TotalPrice
interface TotalPriceProps {
  list: ListItem[]; // Массив элементов списка
  counters: number[]; // Массив счетчиков
}

const TotalPrice: React.FC<TotalPriceProps> = ({ list, counters }) => {
  const totalPrice = () => {
    // Используем длину массива list
    const prices = list.map((item, index) => {
      return (item.price || 0) * (counters[index] || 0); // Умножаем цену на количество
    });

    // Суммируем итоговые цены
    return prices.reduce((sum, current) => sum + current, 0);
  };

  return <>{totalPrice()}$</>;
};

export default TotalPrice;
