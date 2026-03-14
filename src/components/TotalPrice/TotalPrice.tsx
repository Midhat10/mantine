import { useCounterContext } from '../CounterContext/CounterContext';

const TotalPrice = () => {
  const { list, counters } = useCounterContext();

  const total = list.reduce((sum, item) => {
    const currentQty = counters[item.id] ?? 1;

    return sum + item.price * currentQty;
  }, 0);

  return <b>$ {total.toFixed(0)}</b>;
};

export default TotalPrice;
