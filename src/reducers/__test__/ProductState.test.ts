import { describe } from 'vitest';
import { productResponse } from '@/mocks/response';
import { addCard, decrement, fetchProductsByHand, increment } from '@/reducers/ProductSlice';
import reducer, { initialState } from '../ProductSlice';

const mockItem = {
  id: 5,
  name: 'Carrot - 1 Kg',
  price: 56,
  image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg',
  category: 'vegetables',
  count: 2,
};

const mockItem2 = {
  id: 7,
  name: 'Beans - 1 Kg',
  price: 82,
  image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg',
  category: 'vegetables',
  count: 3,
};

const mockItem3 = {
  id: 3,
  name: 'Cucumber - 1 Kg',
  price: 48,
  image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg',
  category: 'vegetables',
  count: 1,
};

describe('ProductSlice', () => {
  it('check initialState', () => {
    const state = reducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });
  it('check fetchProductsByHand', () => {
    const fetchProductByHandState = reducer(initialState, fetchProductsByHand(productResponse));
    expect(initialState.productList).toHaveLength(0);
    expect(initialState.productListSmall).toHaveLength(0);
    expect(fetchProductByHandState.productList).toHaveLength(30);
    expect(fetchProductByHandState.productListSmall).toHaveLength(0);
  });
  it('check addCard При добавление одного и того продукта два раза должен быть один продукт и про добавлении другого, дожно количество продуктов увеличиваться на 1', () => {
    const fetchProductByHandState = reducer(initialState, fetchProductsByHand(productResponse));
    let addCardState = reducer(fetchProductByHandState, addCard(mockItem));
    expect(fetchProductByHandState.productListSmall).toHaveLength(0);
    expect(addCardState.productListSmall).toHaveLength(1);
    expect(addCardState.productListSmall[0].count).toBe(2);
    addCardState = reducer(addCardState, addCard(mockItem));
    expect(addCardState.productListSmall).toHaveLength(1);
    expect(addCardState.productListSmall[0].count).toBe(4);
    addCardState = reducer(addCardState, addCard(mockItem2));
    expect(addCardState.productListSmall).toHaveLength(2);
    expect(addCardState.productListSmall[1].count).toBe(3);
  });
});

describe('check increment', () => {
  const fetchProductByHandState = reducer(initialState, fetchProductsByHand(productResponse));
  let addCardState = reducer(fetchProductByHandState, addCard(mockItem));
  addCardState = reducer(addCardState, addCard(mockItem));
  addCardState = reducer(addCardState, addCard(mockItem2));
  it('должен увеличивать количество счётчика в основном листе', () => {
    let incrementState = reducer(addCardState, increment({ regim: 1, id: 1 }));
    expect(incrementState.productList[0].count).toBe(2);
    incrementState = reducer(incrementState, increment({ regim: 1, id: 1 }));
    expect(incrementState.productList[0].count).toBe(3);
  });
  it('должен увеличивать количество счётчика в малом листе', () => {
    expect(fetchProductByHandState.productListSmall).toHaveLength(0);
    const addCardState = reducer(fetchProductByHandState, addCard(mockItem3));
    let incrementState = reducer(addCardState, increment({ regim: 2, id: 1 }));

    expect(incrementState.productListSmall[0].count).toBe(1);
    incrementState = reducer(incrementState, increment({ regim: 2, id: 3 }));
    expect(incrementState.productListSmall[0].count).toBe(2);
  });
  it('должен уменьшать количество счётчика в основном листе, но не ниже 1', () => {
    const incrementState = reducer(fetchProductByHandState, increment({ regim: 1, id: 1 }));
    expect(incrementState.productList[0].count).toBe(2);
    let decrementState = reducer(incrementState, decrement({ regim: 1, id: 1 }));
    expect(decrementState.productList[0].count).toBe(1);
    decrementState = reducer(decrementState, decrement({ regim: 1, id: 1 }));
    expect(decrementState.productList[0].count).toBe(1);
  });
  it('должен уменьшать количество счётчика в побочном листе, при ниже 1 -удалять', () => {
    const addCardState = reducer(fetchProductByHandState, addCard(mockItem3));
    expect(addCardState.productListSmall).toHaveLength(1);
    const incrementState = reducer(addCardState, increment({ regim: 2, id: 3 }));
    expect(incrementState.productListSmall[0].count).toBe(2);
    let decrementState = reducer(incrementState, decrement({ regim: 2, id: 3 }));
    expect(decrementState.productListSmall[0].count).toBe(1);
    decrementState = reducer(decrementState, decrement({ regim: 2, id: 3 }));
    expect(decrementState.productListSmall).toHaveLength(0);
  });
});
