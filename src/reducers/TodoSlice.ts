import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './TodoThunk';

export type Todo = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type TodoState = {
  todoList: Todo[];
  status: string;
  error: string | null | undefined;
};

const initialState: TodoState = {
  todoList: [],
  status: '',
  error: '',
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.todoList = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export default TodoSlice.reducer;
