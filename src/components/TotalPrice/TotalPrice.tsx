const TotalPrice = ({ list, counters }) => {
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
