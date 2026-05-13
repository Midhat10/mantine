import { useTypedSelector } from '@/hooks/redux';

const TotalPrice = () => {
  const todosSmall = useTypedSelector((state) => state.products.productListSmall);

  const total = todosSmall.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);

  return <b>$ {total}</b>;
};

export default TotalPrice;
