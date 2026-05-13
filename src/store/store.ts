import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../reducers/ProductSlice';

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
