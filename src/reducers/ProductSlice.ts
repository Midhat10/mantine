import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './ProductThunk';

type ProductState = {
  productList: Product[];
  productListSmall: Product[];
  status: string;
  error: string | null | undefined;
};

export const initialState: ProductState = {
  productList: [],
  productListSmall: [],
  status: '',
  error: '',
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment(state, action) {
      if (action.payload.regim === 1) {
        const product = state.productList.find((product) => product.id === action.payload.id)!;
        if (product) {
          product.count = (product.count ?? 0) + 1;
        }
      } else if (action.payload.regim === 2) {
        const product = state.productListSmall.find((product) => product.id === action.payload.id);
        if (product) {
          product.count = (product.count ?? 0) + 1;
        }
      }
    },
    decrement(state, action) {
      if (action.payload.regim === 1) {
        const product = state.productList.find((product) => product.id === action.payload.id)!;
        if (product.count > 1) {
          product.count--;
        }
      } else if (action.payload.regim === 2) {
        const product = state.productListSmall.find((product) => product.id === action.payload.id)!;
        if (product.count >= 1) {
          product.count--;
        }
        if (product.count === 0) {
          state.productListSmall = state.productListSmall.filter(
            (product) => product.id !== action.payload.id
          );
        }
      }
    },
    addCard(state, action) {
      const productSmall = state.productListSmall.find(
        (product) => product.id === action.payload.id
      );
      if (productSmall) {
        productSmall.count += action.payload.count;
      } else {
        state.productListSmall.push(action.payload);
      }
      const product = state.productList.find((product) => product.id === action.payload.id)!;
      product.count = 1;
    },
    fetchProductsByHand(state, action) {
      state.productList = action.payload.map((product: Product) => ({ ...product, count: 1 }));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.productList = action.payload.map((product) => ({ ...product, count: 1 }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export const { increment, decrement, addCard, fetchProductsByHand } = ProductSlice.actions;
export default ProductSlice.reducer;
