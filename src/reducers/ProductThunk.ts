import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<Product[], undefined, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
      );
      if (!response.ok) {
        throw new Error('Эй, данные продукты не прогрузились');
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
