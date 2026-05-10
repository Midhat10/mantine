import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from './TodoSlice';

export const fetchTodos = createAsyncThunk<Todo[], undefined, { rejectValue: string }>(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
      );
      if (!response.ok) {
        throw new Error('Эй, тудушки с данными не прогрузились');
      }
      const data = await response.json();
      console.log(data, 'data');
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
