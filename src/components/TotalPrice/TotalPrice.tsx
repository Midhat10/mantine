import { useTypedSelector } from '@/hooks/redux';

const TotalPrice = () => {
  const todosSmall = useTypedSelector((state) => state.products.productListSmall);

  const total = todosSmall.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);

  return (
    <span>
      <b>$ {total}</b>
    </span>
  );
};

export default TotalPrice;
